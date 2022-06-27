import { std_msgs } from "./std_msgs";

export namespace sensor_msgs {
  export interface Image {
    header: std_msgs.Header;
    width: number;
    height: number;
    encoding: string;
    is_bigendian: number;
    step: number;
    data: number[];
  }

  export interface CompressedImage {
    header: std_msgs.Header;
    format: string;
    data: string;
  }
}

