import Event, { EventSubscription } from "../Event";
import { Message } from "./Message";

export type ConnectionStatus = "Connecting" | "Connected" | "Not Connected";

export default class RosbridgeConnection {
  socket: WebSocket;
  topicCallbacks: {[topic: string]: Event<[any]>} = {};
  serviceCallbacks: {[topic: string]: ((data: any) => void)[]} = {};
  onStatusChange = new Event<[ConnectionStatus]>();

  get url() { return this.socket.url; }

  constructor(url: string) {
    console.info(`Opening rosbridge connection to ${url}`);

    this.socket = new WebSocket(url);
    this.socket.onopen = () => {
      console.info(`ROSBridge connection to ${url} is open`);
      this.onStatusChange.invoke("Connected");
    }
    this.socket.onclose = () => {
      this.onStatusChange.invoke("Not Connected");
      console.info(`ROSBridge connection to ${url} has been closed`);
    }
    this.socket.onerror = error => {
      this.onStatusChange.invoke("Not Connected");
      console.error(`Websocket error: ${error}`);
    }
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data) as Message;
      switch (data.op) {
        case "publish":
          if (data.topic in this.topicCallbacks) {
            this.topicCallbacks[data.topic].invoke(data.msg);
            if (this.topicCallbacks[data.topic].subscriptionCount === 0) {
              this.sendMessage({
                op: "unsubscribe",
                topic: data.topic,
              });
            }
          } else {
            this.sendMessage({
              op: "unsubscribe",
              topic: data.topic,
            });
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

  close() {
    this.socket.close();
  }

  sendMessage(message: Message) {
    this.socket.send(JSON.stringify(message));
  }

  subscribe<T = any>(topic: string, callback: (msg: T) => void) {
    if (!(topic in this.topicCallbacks) || this.topicCallbacks[topic].subscriptionCount === 0) {
      this.sendMessage({
        op: "subscribe",
        topic,
      });
      this.topicCallbacks[topic] = new Event<[any]>();
    } 
    return this.topicCallbacks[topic].subscribe(callback);
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

  // updateTopics(updateCallback?: (topics: ROSTopic[]) => void) {
  //   this.callService<{ topics: string[], types: string[]}>("/rosapi/topics", values => {
  //     this.topics.splice(0, this.topics.length);
  //     for (let i = 0; i < values.topics.length; ++i) {
  //       this.topics.push({
  //         id: values.topics[i],
  //         type: values.types[i],
  //       });
  //     }
  //     if (updateCallback) {
  //       updateCallback(this.topics);
  //     }
  //     this.onTopicsChange.invoke(this.topics);
  //   });
  // }

  // getTopicsOfType(type: string) {
  //   const topics: ROSTopic[] = [];
  //   for (const topic of this.topics) {
  //     if (topic.type === type) {
  //       topics.push({ ...topic });
  //     }
  //   }
  //   return topics;
  // }
}
