import { createContext, createEffect, createSignal, onCleanup, PropsWithChildren, useContext } from "solid-js";
import { createStore, SetStoreFunction, Store } from 'solid-js/store';
import Event from "./Event";
import { ConnectionStatus, ROSBridgeConnection } from "./ROSBridgeConnection";

export interface ROSTopic {
  id: string;
  type: string;
}

export interface Connection {
  socket: WebSocket;
  status: ConnectionStatus;
}

export interface ConnectionsContextValue {
  connections: Store<Connections>,
  setConnections: SetStoreFunction<Connections>
  connect(url: string): void;
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
        const socket = new WebSocket(url);
        setConnections(socket.url, {
          socket,
          status: "Connecting",
        });
        socket.onopen = () => {
          setConnections(socket.url, "status", "Connected");
        };
        socket.onerror = () => {
        }
        socket.onclose = () => {
          setConnections(socket.url, "status", "Not Connected");
        };
      },
      disconnect: url => {
        const connection = connections[url];
        if (connection) {
          connection.socket.close();
        }
      },
      remove: url => {
        const connection = connections[url];
        if (connection) {
          connection.socket.close();
          setConnections(url, undefined as unknown as Connection);
        }
      }
    }}>
      {props.children}
    </ConnectionsContext.Provider>
  );
}

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

// export function createTopicSubstription<T = any>(url: string|undefined, topicId: string|undefined) {
//   const connection = useConnection(url);
//   const [message, setMessage] = createSignal<T | undefined>(undefined);

//   let topicSubscription = topicId ? connection()?.subscribe(topicId, setMessage) : undefined;
//   createEffect(() => {
//     if (topicSubscription) {
//       connection()?.unsubscribe(topicSubscription);
//     }
//     if (topicId) {
//       topicSubscription = connection()?.subscribe(topicId, setMessage);
//     }
//   });
//   onCleanup(() => topicSubscription ? connection()?.unsubscribe(topicSubscription) : undefined);

//   return message;
// }
