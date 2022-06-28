import { std_msgs } from "./std_msgs";

export namespace geometry_msgs {
  export interface Point {
    x: number;
    y: number;
    z: number;
  }

  export interface PointStamped {
    header: std_msgs.Header;
    point: Point;
  }

  export interface Vector3 {
    x: number;
    y: number;
    z: number;
  }

  export interface Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;
  }

  export interface Transform {
    translation: Vector3;
    rotation: Quaternion;
  }

  export interface TransformStamped {
    header: std_msgs.Header;
    child_frame_id: string;
    transform: Transform;
  }

  export interface Pose {
    position: Point;
    orientation: Quaternion;
  }

  export interface PoseStamped {
    header: std_msgs.Header;
    pose: Pose;
  }
}
