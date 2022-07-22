import { createContext, createEffect, createSignal, onCleanup, PropsWithChildren, useContext } from "solid-js";
import { createStore, SetStoreFunction, Store } from 'solid-js/store';
import { EventSubscription } from "./Event";
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
  bytesSent: number;
  bytesReceived: number;
  openTimestamp: number;
  downloadBitrate: number;
  uploadBitrate: number;
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
          bytesSent: 0,
          bytesReceived: 0,
          downloadBitrate: 0,
          uploadBitrate: 0,
        });
        rosbridgeConnection.onStatusChange.subscribe(
          async status => {
            let timer: number|undefined;
            if (!(rosbridgeConnection.url in connections)) {
              return;
            }
            setConnections(rosbridgeConnection.url, "status", status);

            if (status === "Connected") {
              setConnections(rosbridgeConnection.url, "openTimestamp", Date.now());
              setConnections(rosbridgeConnection.url, "topics", await getTopics(rosbridgeConnection));

              let previousBytesSent = 0;
              let previousBytesReceived = 0;
              timer = setInterval(() => {
                setConnections(rosbridgeConnection.url, "bytesSent", rosbridgeConnection.bytesSent); 
                setConnections(rosbridgeConnection.url, "bytesReceived", rosbridgeConnection.bytesReceived);

                const downloadBitrate = ((rosbridgeConnection.bytesReceived - previousBytesReceived) * 8) / 1000;
                setConnections(rosbridgeConnection.url, "downloadBitrate", downloadBitrate);

                const uploadBitrate = ((rosbridgeConnection.bytesSent - previousBytesSent) * 8) / 1000;
                setConnections(rosbridgeConnection.url, "uploadBitrate", uploadBitrate);

                previousBytesSent = rosbridgeConnection.bytesSent;
                previousBytesReceived = rosbridgeConnection.bytesReceived;
              }, 1000);
            } else if (status === "Not Connected") {
              if (typeof timer === "number") {
                clearInterval(timer);
              }
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

export function useConnectionURLs() {
  const context = useConnectionsContext();
  return () => context ? Object.keys(context.connections) : [];
}

export function useConnection() {
  const context = useConnectionsContext();
  return (url: string) => context?.connections[url];
}

export function useConnectionStatus() {
  const connection = useConnection();
  return (url: string) => connection(url)?.status;
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

export function useTopics() {
  const connection = useConnection();
  return (url: string) => connection(url)?.topics || [];
}

export function useTopicType() {
  const topics = useTopics();

  return (url: string, topic: string) => {
    for (const t of topics(url)) {
      if (t.id === topic) {
        return t.type;
      }
    }
    return undefined;
  }
}

export function useTopicsWithType() {
  const topics = useTopics();
  return (url: string, type: string|string[]) => {
    return topics(url).filter(topic =>
      typeof type === "string"
        ? topic.type === type
        : type.indexOf(topic.type) !== -1);
  }
}

export function useTopicSubscription<T = any>() {
  return (url: string, topic: string) => {
    createEffect(() => console.log(`${url}: ${topic}`));
  };
}

export function useTopicMessage<T = any>() {
  const connection = useConnection();
  const [message, setMessage] = createSignal<T | undefined>(undefined);
  let topicSubscription: EventSubscription | undefined;
  let currentURL: string | undefined;
  let currentTopic: string | undefined;

  onCleanup(() => topicSubscription?.unsubscribe());

  return (url: string, topic: string) => {
    const conn = connection(url);
    if (url !== currentURL || topic !== currentTopic) {
      topicSubscription?.unsubscribe();
      conn?.rosbridgeConnection.subscribe(topic, setMessage);
      currentURL = url;
      currentTopic = topic;
    }
    return message();
  };
}

export function createTopicSubstription<T = any>(url: string, topic: string) {
  const connection = useConnection();
  const [message, setMessage] = createSignal<T | undefined>(undefined);

  let topicSubscription: EventSubscription | undefined;
  createEffect(() => {
    topicSubscription?.unsubscribe();
    topicSubscription = connection(url)?.rosbridgeConnection.subscribe(topic, setMessage);
  });
  onCleanup(() => topicSubscription?.unsubscribe());

  return message;
}
