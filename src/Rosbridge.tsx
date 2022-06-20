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

export class RosbridgeConnection {
  socket: WebSocket;
  topicCallbacks: {[topic: string]: ((data: any) => void)[]} = {};
  serviceCallbacks: {[topic: string]: ((data: any) => void)[]} = {};

  constructor(url: string | URL, onConnected?: () => void, onError?: () => void) {
    console.info(`Opening rosbridge connection to ${url}`);
    this.socket = new WebSocket(url);
    this.socket.onopen = () => {
      console.info(`Rosbridge connection to ${url} is open`);
      if (onConnected) {
        onConnected();
      }
    }
    this.socket.onclose = () => {
      console.info(`Rosbridge connection to ${url} has been closed`);
    }
    this.socket.onerror = error => {
      console.error(`Websocket error: ${error}`);
      if (onError) {
        onError();
      }
    }
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data) as Message;
      switch (data.op) {
        case "publish":
          if (data.topic in this.topicCallbacks) {
            for (const callback of this.topicCallbacks[data.topic]) {
              callback(data.msg);
            }
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
    if (topic in this.topicCallbacks) {
      this.topicCallbacks[topic].push(callback);
    } else {
      this.sendMessage({
        op: "subscribe",
        topic,
      });
      this.topicCallbacks[topic] = [callback];
    }
  }

  callService<T = any>(service: string, callback: (values: T) => void) {
    if (service in this.serviceCallbacks) {
      this.serviceCallbacks[service].push(callback);
    } else {
      this.serviceCallbacks[service] = [callback];
    }
    this.sendMessage({
      op: "call_service",
      service,
    });
  }
}
