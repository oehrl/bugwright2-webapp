import Event, { EventSubscription } from "./Event"

export interface SetStatusLevelMessage {
  op: "set_level";
  id?: string;
  level: "error" | "warning" | "info";
}

export interface AuthenticationMessage {
  op: "auth";
  mac: string;
  client: string;
  dest: string;
  rand: string;
  t: number;
  level: string;
  end: number;
}

export interface AdvertiseMessage {
  op: "advertise";
  id?: string;
  topic: string;
  type: string;
}

export interface UnadvertiseMessage {
  op: "unadvertise";
  id?: string;
  topic: string;
}

export interface PublishMessage<T = any> {
  op: "publish";
  id?: string;
  topic: string;
  msg: T;
}

export interface SubscribeMessage {
  op: "subscribe";
  id?: string;
  topic: string;
  type?: string;
  throttle_rate?: number;
  queue_length?: number;
  fragment_size?: number;
  compression?: string;
}

export interface UnsubscribeMessage {
  op: "unsubscribe";
  id?: string;
  topic: string;
}

export interface CallServiceMessage {
  op: "call_service";
  id?: string;
  service: string;
  args?: any[];
  fragment_size?: number;
  compression?: number;
}

export interface ServiceResponseMessage<T = any[]> {
  op: "service_response";
  id?: string;
  service: string;
  values?: T;
}

export type Message =
  SetStatusLevelMessage |
  AuthenticationMessage |
  AdvertiseMessage |
  UnadvertiseMessage |
  PublishMessage |
  SubscribeMessage |
  UnsubscribeMessage |
  CallServiceMessage |
  ServiceResponseMessage;

export type MessageCallback = (message: Message) => void;

export type ConnectionStatus = "Connecting" | "Connected" | "Not Connected";

export interface ROSTopic {
  id: string;
  type: string;
}

export class ROSBridgeConnection {
  socket: WebSocket;
  topicCallbacks: {[topic: string]: Event<[any]>} = {};
  serviceCallbacks: {[topic: string]: ((data: any) => void)[]} = {};

  topics: ROSTopic[] = [];
  onTopicsChange = new Event<[ROSTopic[]]>();

  status: ConnectionStatus = "Connecting";
  onStatusChange = new Event<[ConnectionStatus]>();

  constructor(
    readonly url: string,
    public onChange: (connection: ROSBridgeConnection) => void,
    onConnected?: (connection: ROSBridgeConnection) => void,
    onError?: (connection: ROSBridgeConnection) => void) {
    console.info(`Opening rosbridge connection to ${url}`);
    this.socket = new WebSocket(url);
    this.socket.onopen = () => {
      console.info(`ROSBridge connection to ${url} is open`);
      this.status = "Connected";
      this.onChange(this);
      this.updateTopics(() => {
        if (onConnected) {
          onConnected(this);
        }
      });
      this.onStatusChange.invoke(this.status);
    }
    this.socket.onclose = () => {
      this.status = "Not Connected";
      this.onChange(this);
      this.onStatusChange.invoke(this.status);
      console.info(`ROSBridge connection to ${url} has been closed`);
    }
    this.socket.onerror = error => {
      this.status = "Not Connected";
      this.onChange(this);
      this.onStatusChange.invoke(this.status);
      console.error(`Websocket error: ${error}`);
      if (onError) {
        onError(this);
      }
    }
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data) as Message;
      switch (data.op) {
        case "publish":
          if (data.topic in this.topicCallbacks) {
            this.topicCallbacks[data.topic].invoke(data.msg);
          } else {
            console.error(`Received publish message for topic not subscribed to.`);
          }
          break;

        case "service_response":
          if (data.service in this.serviceCallbacks) {
            for (const callback of this.serviceCallbacks[data.service]) {
              callback(data.values);
            }
          } else {
            console.error(`Received service response for service not called.`);
          }
          break;
      }
    }
  }

  sendMessage(message: Message) {
    this.socket.send(JSON.stringify(message));
  }

  subscribe<T = any>(topic: string, callback: (msg: T) => void) {
    if (!(topic in this.topicCallbacks)) {
      this.sendMessage({
        op: "subscribe",
        topic,
      });
      this.topicCallbacks[topic] = new Event<[any]>();
    } 
    return this.topicCallbacks[topic].subscribe(callback);
  }

  unsubscribe(subscription: EventSubscription) {
    subscription.unsubscribe();
    for (const topic of Object.keys(this.topicCallbacks)) {
      if (this.topicCallbacks[topic].subscriptionCount === 0) {
        this.sendMessage({
          op: "unsubscribe",
          topic
        });
        delete this.topicCallbacks[topic];
      }
    }
  }

  callService<T = any, ArgumentType = any>(service: string, callback: (values: T) => void, args?: ArgumentType) {
    if (service in this.serviceCallbacks) {
      this.serviceCallbacks[service].push(callback);
    } else {
      this.serviceCallbacks[service] = [callback];
    }
    this.sendMessage({
      op: "call_service",
      service,
      args: args as any,
    });
  }

  updateTopics(updateCallback?: (topics: ROSTopic[]) => void) {
    this.callService<{ topics: string[], types: string[]}>("/rosapi/topics", values => {
      this.topics.splice(0, this.topics.length);
      for (let i = 0; i < values.topics.length; ++i) {
        this.topics.push({
          id: values.topics[i],
          type: values.types[i],
        });
      }
      if (updateCallback) {
        updateCallback(this.topics);
      }
      this.onTopicsChange.invoke(this.topics);
    });
  }

  getTopicsOfType(type: string) {
    const topics: ROSTopic[] = [];
    for (const topic of this.topics) {
      if (topic.type === type) {
        topics.push({ ...topic });
      }
    }
    return topics;
  }
}
