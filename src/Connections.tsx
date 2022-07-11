import { createContext, createEffect, createSignal, onCleanup, PropsWithChildren, useContext } from "solid-js";
import Event from "./Event";
import { ConnectionStatus, ROSBridgeConnection } from "./ROSBridgeConnection";

export interface ROSTopic {
  id: string;
  type: string;
}

export class ROSBridgeConnectionList {
  public connections: ROSBridgeConnection[] = [];
  public connectionsChanged = new Event<[ROSBridgeConnection[]]>();

  add(url: string, name?: string) {
    if (this.get(url)) {
      return null;
    }

    this.connections.push(new ROSBridgeConnection(url, () => {
    }));
    console.log(`Invoking connections changed!`);
    this.connectionsChanged.invoke(this.connections);
  }

  remove(url: string) {
    const index = this.getIndex(url);
    if (typeof index !== "undefined") {
      this.connections.splice(index, 1);
      this.connectionsChanged.invoke(this.connections);
    }
  }

  get(url: string) {
    for (const connection of this.connections) {
      if (connection.url === url) {
        return connection;
      }
    }
    
    return null;
  }

  private getIndex(url: string) {
    let index = 0;
    for (const connection of this.connections) {
      if (connection.url === url) {
        return index;
      }
      ++index;
    }
    return undefined;
  }
}

const ConnectionsContext = createContext<ROSBridgeConnectionList>(new ROSBridgeConnectionList());

export default function ROSBridgeConnectionsProvider(props: PropsWithChildren) {
  const [connectionList, setConnectionList] = createSignal(new ROSBridgeConnectionList());

  return (
    <ConnectionsContext.Provider value={connectionList()}>
      {props.children}
    </ConnectionsContext.Provider>
  );
}

export function useConnectionList() {
  return useContext(ConnectionsContext);
}

export function useConnections() {
  const connectionList = useContext(ConnectionsContext);
  const [connections, setConnections] = createSignal([...connectionList.connections]);

  let subscription = connectionList.connectionsChanged.subscribe(
    newConnections => {
      setConnections([...newConnections])
    }
  );

  onCleanup(() => subscription.unsubscribe());

  return connections();
}

export function useConnection(url?: string) {
  const connections = useConnections();

  if (!url) {
    return null;
  }

  for (const connection of connections) {
    if (connection.url === url) {
      return connection;
    }
  }
  return null;
}

export function useConnectionStatus(url?: string) {
  const connection = useConnection(url);
  const [status, setStatus] = createSignal<ConnectionStatus>(connection?.status || "Not Connected");

  let statusChangeSubscription = connection?.onStatusChange.subscribe(setStatus);
  createEffect(() => {
    console.log(`useConnectionStatus: createEffect ${url}`);
    statusChangeSubscription?.unsubscribe();
    statusChangeSubscription = connection?.onStatusChange.subscribe(setStatus);
  });
  onCleanup(() => statusChangeSubscription?.unsubscribe());

  return status();
}

export function useTopics(url?: string) {
  const connection = useConnection(url);
  const [topics, setTopics] = createSignal(connection?.topics || []);

  let statusChangeSubscription = connection?.onTopicsChange.subscribe(setTopics);
  createEffect(() => {
    statusChangeSubscription?.unsubscribe();
    statusChangeSubscription = connection?.onTopicsChange.subscribe(setTopics);
  });
  onCleanup(() => statusChangeSubscription?.unsubscribe());

  return topics();
}

export function useTopicType(url?: string, topicName?: string) {
  for (const topic of useTopics(url)) {
    if (topic.id === topicName) {
      return topic.type;
    }
  }
}

export function useTopicsWithTypes(url: string, types: string[]) {
  const topics = useTopics(url);
  return topics.filter(topic => types.indexOf(topic.type) !== -1);
}

export function useTopicsWithType(url: string, type: string) {
  const topics = useTopics(url);
  return topics.filter(topic => topic.type === type);
}

export function createTopicSubstription<T = any>(url: string|undefined, topicId: string|undefined) {
  const connection = useConnection(url);
  const [message, setMessage] = createSignal<T | undefined>(undefined);

  let topicSubscription = topicId ? connection?.subscribe(topicId, setMessage) : undefined;
  createEffect(() => {
    if (topicSubscription) {
      connection?.unsubscribe(topicSubscription);
    }
    if (topicId) {
      topicSubscription = connection?.subscribe(topicId, setMessage);
    }
  });
  onCleanup(() => topicSubscription ? connection?.unsubscribe(topicSubscription) : undefined);

  return message;
}
