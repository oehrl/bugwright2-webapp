import { ROSTimeStamp } from ".";

export namespace std_msgs {
  export interface Header {
    seq: number;
    stamp: ROSTimeStamp;
    frame_id: string;
  }
}

