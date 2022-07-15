import { std_msgs } from "./std_msgs";

export namespace sensor_msgs {
  export type ImageEncodings =
    "rgb8"|
    "rgba8"|
    "rgb16"|
    "rgba16"|
    "bgr8"|
    "bgra8"|
    "bgr16"|
    "bgra16"|
    "mono8"|
    "mono16"|

    // OpenCV CvMat types
    "8UC1"|
    "8UC2"|
    "8UC3"|
    "8UC4"|
    "8SC1"|
    "8SC2"|
    "8SC3"|
    "8SC4"|
    "16UC1"|
    "16UC2"|
    "16UC3"|
    "16UC4"|
    "16SC1"|
    "16SC2"|
    "16SC3"|
    "16SC4"|
    "32SC1"|
    "32SC2"|
    "32SC3"|
    "32SC4"|
    "32FC1"|
    "32FC2"|
    "32FC3"|
    "32FC4"|
    "64FC1"|
    "64FC2"|
    "64FC3"|
    "64FC4"|

    // Bayer encodings
    "bayer_rggb8"|
    "bayer_bggr8"|
    "bayer_gbrg8"|
    "bayer_grbg8"|
    "bayer_rggb16"|
    "bayer_bggr16"|
    "bayer_gbrg16"|
    "bayer_grbg16";

  export interface Image {
    header: std_msgs.Header;
    width: number;
    height: number;
    encoding: ImageEncodings;
    is_bigendian: number;
    step: number;
    data: string;
  }

  export interface CompressedImage {
    header: std_msgs.Header;
    format: "jpeg" | "png";
    data: string;
  }
}

