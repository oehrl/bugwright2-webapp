import { createEffect, createSignal } from "solid-js";
import { Quaternion, Vector3 } from "three";
import { createTopicSubstription, useConnectionsContext } from "../Connections";
import { EventSubscription } from "../Event";
import { geometry_msgs } from "../ROS/geometry_msgs";

export interface Transform {
  position?: Vector3;
  rotation?: Quaternion;
}

export function useTransform(connectionURL?: string, topic?: string) {
  const connectionsContext = useConnectionsContext();
  const [transform, setTransform] = createSignal<Transform>({});
  const connection = () => connectionURL ? connectionsContext?.connections[connectionURL] : undefined;

  let subscription: EventSubscription|undefined;

  createEffect(() => {
    subscription?.unsubscribe();
    subscription = undefined;

    if (!topic) {
      setTransform({});
      return;
    }

    const conn = connection();
    if (!conn) {
      setTransform({});
      return;
    }

    if (conn.topics[topic] === "geometry_msgs/PointStamped") {
      subscription = conn.rosbridgeConnection.subscribe<geometry_msgs.PointStamped>(topic, message => {
        setTransform({
          position: new Vector3(message.point.x, message.point.y, message.point.z),
        });
      });
    } else {
      console.log(`Invalid transform topic: ${conn.topics[topic]}`);
    }
  });

  return transform;
}
