import Event, { EventSubscription } from "../Event";
import { Message } from "./Message";

export type ConnectionStatus = "Connecting" | "Connected" | "Not Connected";

interface PromiseCallbacks {
  resolve: (data: any) => void;
  reject: (reason?: any) => void;
}

export default class RosbridgeConnection {
  socket: WebSocket;
  topicCallbacks: {[topic: string]: Event<[any]>} = {};
  servicePromises: {[service: string]: PromiseCallbacks[]} = {};
  onStatusChange = new Event<[ConnectionStatus]>();
  bytesSent = 0;
  bytesReceived = 0;

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
      this.bytesReceived += event.data.length;
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
          if (data.service in this.servicePromises && this.servicePromises[data.service].length > 0) {
            const promiseCallbacks = this.servicePromises[data.service][0];
            promiseCallbacks.resolve(data.values);
            this.servicePromises[data.service].splice(0, 1);
          } else {
            console.error(`Received service response for service not called.`);
          }
          break;

        default:
          console.log(data);
      }
    }
  }

  close() {
    this.socket.close();
  }

  sendMessage(message: Message) {
    const serializeMessage = JSON.stringify(message);
    this.socket.send(serializeMessage);
    this.bytesSent += serializeMessage.length;
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

  callService<T = any, ArgumentType = any>(service: string, args?: ArgumentType) {
    return new Promise<T>((resolve, reject) => {
      if (service in this.servicePromises) {
        this.servicePromises[service].push({ resolve, reject });
      } else {
        this.servicePromises[service] = [{ resolve, reject }];
      }
      this.sendMessage({
        op: "call_service",
        service,
        args: args as any,
      });
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
