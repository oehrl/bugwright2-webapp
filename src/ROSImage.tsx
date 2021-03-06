import { Component, createEffect, createSignal, JSX, Show } from "solid-js";
import { Connection, createTopicSubstription } from "./Connections";
import { sensor_msgs } from "./ROS/sensor_msgs";

export interface RawROSImageProps {
  connection: Connection;
  topic: string;
  style?: JSX.CSSProperties;
}

const RawROSImage: Component<RawROSImageProps> = (props) => {
  const [context, setContext] = createSignal<CanvasRenderingContext2D|null>(null);
  const image =
    createTopicSubstription<sensor_msgs.Image>(props.connection, props.topic)

  let imageData: ImageData;

  createEffect(() => {
    const rawImage = image();
    const renderingContext = context();
    if (rawImage && renderingContext) {
      if (!imageData || (imageData.width !== rawImage.width || imageData.height !== rawImage.height)) {
        imageData = renderingContext.createImageData(rawImage.width, rawImage.height);
      }
      const rawData = atob(rawImage.data);
      switch (rawImage.encoding) {
      case "rgb8":
        for (let y = 0; y < rawImage.height; ++y) {
          for (let x = 0; x < rawImage.width; ++x) {
            const destinationBaseIndex = (y * rawImage.width + x) * 4;
            const sourceBaseIndex = y * rawImage.step + x * 3;

            for (let i = 0; i < 3; ++i) {
              imageData.data[destinationBaseIndex + i] = rawData.charCodeAt(sourceBaseIndex + i);
            }
            imageData.data[destinationBaseIndex + 3] = 255;
          }
        }
        break;

      default:
        console.error(`Unsupported encoding: ${rawImage.encoding}`);
      }
      renderingContext.putImageData(imageData, 0, 0);
    }
  });

  return (
    <canvas
      ref={canvas => setContext(canvas.getContext("2d"))}
      style={props.style}
      width={image()?.width}
      height={image()?.height}
    />
  );
};

export interface CompressedROSImageProps {
  connection: Connection;
  topic: string;
  style?: JSX.CSSProperties;
}

const CompressedROSImage: Component<CompressedROSImageProps> = (props) => {
  const compressedImage =
    createTopicSubstription<sensor_msgs.CompressedImage>(props.connection, props.topic)

  return (
    <Show when={compressedImage()} fallback="Loading...">
    {
    compressedImage =>
      <img
        style={props.style}
        src={`data:image/${compressedImage.format};base64, ${compressedImage.data}`}
      />
    }
    </Show>
  );
};

export interface ROSImageProps {
  connection: Connection;
  topic: string;
  style?: JSX.CSSProperties;
}

const ROSImage: Component<ROSImageProps> = (props) => {
  const topicType = () => props.connection.topics[props.topic];

  return (
    <>
      <Show when={topicType() === "sensor_msgs/CompressedImage"}>
        <CompressedROSImage
          style={props.style}
          connection={props.connection}
          topic={props.topic}
        />
      </Show>
      <Show when={topicType() === "sensor_msgs/Image"}>
        <RawROSImage
          style={props.style}
          connection={props.connection}
          topic={props.topic}
        />
      </Show>
    </>
  );
};

export default ROSImage;
