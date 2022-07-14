import { createContext, createEffect, createSignal, onCleanup, PropsWithChildren, useContext } from "solid-js";
import { createStore, SetStoreFunction, Store } from 'solid-js/store';
import { Topics } from "./ROS/rosapi";
import RosbridgeConnection, { ConnectionStatus } from "./Rosbridge/Connection";

export interface ROSTopic {
  id: string;
  type: string;
}

export interface Connection {
  rosbridgeConnection: RosbridgeConnection;
  status: ConnectionStatus;
  topics: {[topic: string]: string};
}

export function topicsWithTypes(connection: Connection, types: string[]) {
  return Object.keys(connection.topics).filter(topic => types.indexOf(connection.topics[topic]) !== -1);
}

export function topicsWithType(connection: Connection, type: string) {
  return Object.keys(connection.topics).filter(topic => connection.topics[topic] === type);
}

export interface ConnectionsContextValue {
  connections: Store<Connections>,
  setConnections: SetStoreFunction<Connections>
  connect(url: string): string;
  disconnect(url: string): void;
  remove(url: string): void;
}

export type Connections = { [key: string]: Connection }

export const ConnectionsContext = createContext<ConnectionsContextValue>();

export default function ROSBridgeConnectionsProvider(props: PropsWithChildren) {
  const [connections, setConnections] = createStore<Connections>({});

  return (
    <ConnectionsContext.Provider value={{
      connections,
      setConnections,
      connect: url => {
        const rosbridgeConnection = new RosbridgeConnection(url);
        if (rosbridgeConnection.url in connections) {
          connections[rosbridgeConnection.url].rosbridgeConnection.close();
        }
        setConnections(rosbridgeConnection.url, {
          rosbridgeConnection,
          status: "Connecting",
          topics: {},
        });
        rosbridgeConnection.onStatusChange.subscribe(
          status => {
            if (!(rosbridgeConnection.url in connections)) {
              return;
            }
            setConnections(rosbridgeConnection.url, "status", status);
            if (status === "Connected") {
              rosbridgeConnection.callService<Topics>("/rosapi/topics", response => {
                const topics: {[topic: string]: string} = {};
                for (let i = 0; i < response.topics.length; ++i) {
                  topics[response.topics[i]] = response.types[i];
                }
                setConnections(rosbridgeConnection.url, "topics", topics);
              });
            }
          }
        );
        return rosbridgeConnection.url;
      },
      disconnect: url => {
        const connection = connections[url];
        if (connection) {
          connection.rosbridgeConnection.close();
        }
      },
      remove: url => {
        const connection = connections[url];
        if (connection) {
          connection.rosbridgeConnection.close();
          setConnections(url, undefined as unknown as Connection);
        }
      }
    }}>
      {props.children}
    </ConnectionsContext.Provider>
  );
}

export function useConnectionsContext() {
  return useContext(ConnectionsContext);
}

export function connection(connections: ConnectionsContextValue, url?: string) {
}

// export function useConnections() {
//   const context = useConnectionsContext();
//   return context?.connections || {};
// }


// export function useConnectionStatus(url?: string) {
//   const connection = useConnection(url);
//   // const [status, setStatus] = createSignal<ConnectionStatus>(connection?.status || "Not Connected");

//   // let statusChangeSubscription = connection?.onStatusChange.subscribe(setStatus);
//   // createEffect(() => {
//   //   console.log(`useConnectionStatus: createEffect ${url}`);
//   //   statusChangeSubscription?.unsubscribe();
//   //   statusChangeSubscription = connection?.onStatusChange.subscribe(setStatus);
//   // });
//   // onCleanup(() => statusChangeSubscription?.unsubscribe());

//   return () => connection?.status;
// }

// export function useTopics(url?: string) {
//   const connection = useConnection(url);
//   // const [topics, setTopics] = createSignal(connection?.topics || []);

//   // let statusChangeSubscription = connection?.onTopicsChange.subscribe(setTopics);
//   // createEffect(() => {
//   //   statusChangeSubscription?.unsubscribe();
//   //   statusChangeSubscription = connection?.onTopicsChange.subscribe(setTopics);
//   // });
//   // onCleanup(() => statusChangeSubscription?.unsubscribe());

//   return () => connection()?.topics;
// }

// export function useTopicType(url?: string, topicName?: string) {
//   const topics = useTopics(url);
//   return () => {
//     for (const topic of topics() || []) {
//       if (topic.id === topicName) {
//         return topic.type;
//       }
//     }
//   }
// }

// export function useTopicsWithTypes(url: string|undefined, types: string[]) {
//   const topics = useTopics(url);
//   return () => topics()?.filter(topic => types.indexOf(topic.type) !== -1);
// }

// export function useTopicsWithType(url: string|undefined, type: string) {
//   const topics = useTopics(url);
//   return () => topics()?.filter(topic => topic.type === type);
// }

export function createTopicSubstription<T = any>(connection: Connection, topic: string) {
  const [message, setMessage] = createSignal<T | undefined>(undefined);

  let topicSubscription = connection.rosbridgeConnection.subscribe(topic, setMessage);
  createEffect(() => {
    connection.rosbridgeConnection.unsubscribe(topicSubscription);
    topicSubscription = connection.rosbridgeConnection.subscribe(topic, setMessage);
  });
  onCleanup(() => connection.rosbridgeConnection.unsubscribe(topicSubscription));

  return message;
}
