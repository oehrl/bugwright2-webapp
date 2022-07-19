import { geometry_msgs } from "./geometry_msgs";
import { std_msgs } from "./std_msgs";

export namespace nav_msgs {

  export interface Path {
    header: std_msgs.Header;
    poses: geometry_msgs.PoseStamped[];
  }

}

