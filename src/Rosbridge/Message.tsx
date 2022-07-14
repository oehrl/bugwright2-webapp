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
