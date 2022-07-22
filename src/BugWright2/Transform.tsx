import { createSignal } from "solid-js";
import { Quaternion, Vector3 } from "three";
import { useTopicMessage, useTopicType } from "../Connections";
import { geometry_msgs } from "../ROS/geometry_msgs";

export interface Transform {
  position?: Vector3;
  rotation?: Quaternion;
}

export function useTransform() {
  const message = useTopicMessage();
  const getTopicType = useTopicType();
  const [transform, setTransform] = createSignal<Transform>({});

  return (url: string, topic: string) => {
    const transformMessage = message(url, topic);
    if (transformMessage) {
      const topicType = getTopicType(url, topic);
      switch (topicType) {
      case "geometry_msgs/PointStamped":
        const pointStamped = transformMessage as geometry_msgs.PointStamped;
        setTransform({
          position: new Vector3(pointStamped.point.x, pointStamped.point.y, pointStamped.point.z),
          rotation: new Quaternion(),
        });
        break;

      default:
        console.error(`Invalid topic type: ${topicType}`);
      }
      return transform();
    } else {
      return undefined;
    }
  };
}
