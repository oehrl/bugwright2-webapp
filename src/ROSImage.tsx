import { Component, createEffect, JSX, Show } from "solid-js";
import { createTopicSubstription, useTopicType } from "./Connections";
import { sensor_msgs } from "./ros/sensor_msgs";

export interface RawROSImageProps {
  message?: sensor_msgs.Image;
  style?: JSX.CSSProperties;
}

const RawROSImage: Component<RawROSImageProps> = (props) => {
};

export interface CompressedROSImageProps {
  connection?: string;
  topic?: string;
  style?: JSX.CSSProperties;
}

const CompressedROSImage: Component<CompressedROSImageProps> = (props) => {
  var imageReference: any;
  const compressedImage = createTopicSubstription<sensor_msgs.CompressedImage>(props.connection, props.topic)
  // createEffect(() => {
  //   imageReference.src = `data:image/jpeg;base64, ${props.message?.data}`;
  // });

  return (
    <img
      ref={imageReference}
      style={props.style}
      src={`data:image/jpeg;base64, ${compressedImage()?.data}`}
    />
  );
};

export interface ROSImageProps {
  connection?: string;
  topic: string;
  style?: JSX.CSSProperties;
}

const ROSImage: Component<ROSImageProps> = (props) => {
  // const [value, setValue] = createSignal("ws://192.168.1.213:9090");
  // const [isConnecting, setIsConnecting] = createSignal(false);
  // const theme = useTheme();
  // let textField: any;
  var canvasReference: any;

  return (
    <>
      <Show when={useTopicType(props.connection, props.topic) === "sensor_msgs/CompressedImage"}>
        <CompressedROSImage
          style={props.style}
          connection={props.connection}
          topic={props.topic}
        />
      </Show>
      <Show when={useTopicType(props.connection, props.topic) === "sensor_msgs/Image"}>
        <canvas
          ref={canvasReference}
          style={props.style}
        />
      </Show>
    </>
  );
};

export default ROSImage;
