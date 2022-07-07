export default class Event<Parameters extends any[]> {
  private callbacks: Array<((...args: Parameters) => any) | undefined> = [];

  get subscriptionCount() {
    return this.callbacks.filter(callback => callback !== undefined).length;
  }

  subscribe(cb: (...args: Parameters) => any) {
    const freeIndex = this.callbacks.findIndex(value => !value);
    if (freeIndex !== -1) {
      this.callbacks[freeIndex] = cb;
      return new EventSubscription(this, freeIndex);
    } else {
      this.callbacks.push(cb);
      return new EventSubscription(this, this.callbacks.length - 1);
    }
  }

  unsubscribe(index: number) {
    if (this.callbacks.length <= index || !this.callbacks[index])  {
      throw new Error("Invalid index passed to unsubscribe()");
    }
    this.callbacks[index] = undefined;
  }

  invoke(...args: Parameters) {
    for (const cb of this.callbacks) {
      if (cb) {
        cb(...args);
      }
    }
  }
}

export class EventSubscription {
  private event: any;
  private deregistrationIndex?: number;

  constructor(event: any, deregistrationIndex: number) {
    this.event = event;
    this.deregistrationIndex = deregistrationIndex;
  }

  unsubscribe() {
    if (this.deregistrationIndex === undefined) {
      throw new Error("Already unregistered");
    }
    this.event.unsubscribe(this.deregistrationIndex);
    this.deregistrationIndex = undefined;
  }
}
