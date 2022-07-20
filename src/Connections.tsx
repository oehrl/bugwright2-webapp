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
  topics: ROSTopic[];
}

export function topicsWithTypes(connection: Connection, types: string[]) {
  return connection.topics.filter(topic => types.indexOf(topic.type) !== -1);
}

export function topicsWithType(connection: Connection, type: string) {
  return connection.topics.filter(topic => topic.type === type);
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

async function getTopics(connection: RosbridgeConnection) {
  const response = await connection.callService<Topics>("/rosapi/topics");
  const topics: ROSTopic[] = [];
  for (let i = 0; i < response.topics.length; ++i) {
    topics.push({
      id: response.topics[i],
      type: response.types[i],
    });
  }
  return topics;
}

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
          topics: [],
        });
        rosbridgeConnection.onStatusChange.subscribe(
          async status => {
            if (!(rosbridgeConnection.url in connections)) {
              return;
            }
            setConnections(rosbridgeConnection.url, "status", status);
            if (status === "Connected") {
              setConnections(rosbridgeConnection.url, "topics", await getTopics(rosbridgeConnection));
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

export function useUpdateTopics(url: string) {
  const context = useConnectionsContext();
  return async () => {
    if (!context || !(url in context?.connections)) {
      console.error(`Cannot update topics of ${url}: connection not present`);
      return;
    }
    context.setConnections(url, "topics",
      await getTopics(context.connections[url].rosbridgeConnection));
  }
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

  const topicSubscription = connection.rosbridgeConnection.subscribe(topic, setMessage);
  onCleanup(() => topicSubscription.unsubscribe());

  return message;
}
