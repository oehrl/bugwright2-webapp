import { Component, createEffect, createSignal, JSX, Match, Show, Switch } from "solid-js";
import { useTopicMessage, useTopicType } from "./Connections";
import { sensor_msgs } from "./ROS/sensor_msgs";

export interface RawROSImageProps {
  connection: string;
  topic: string;
  style?: JSX.CSSProperties;
}

const RawROSImage: Component<RawROSImageProps> = (props) => {
  const [context, setContext] = createSignal<CanvasRenderingContext2D|null>(null);
  const image = useTopicMessage<sensor_msgs.Image>();

  let imageData: ImageData;

  createEffect(() => {
    const rawImage = image(props.connection, props.topic);
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
    <Show when={image(props.connection, props.topic)}>
    {
    image=>
      <canvas
        ref={canvas => setContext(canvas.getContext("2d"))}
        style={props.style}
        width={image.width}
        height={image.height}
      />
    }
    </Show>
  );
};

export interface CompressedROSImageProps {
  connection: string;
  topic: string;
  style?: JSX.CSSProperties;
}

const CompressedROSImage: Component<CompressedROSImageProps> = (props) => {
  const image = useTopicMessage<sensor_msgs.CompressedImage>();

  return (
    <Show when={image(props.connection, props.topic)} fallback="Loading...">
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
  connection: string;
  topic: string;
  style?: JSX.CSSProperties;
}

const ROSImage: Component<ROSImageProps> = (props) => {
  const topicType = useTopicType();

  return (
    <Show when={topicType(props.connection, props.topic)}>
    {
    type =>
      <Switch>
        <Match when={type === "sensor_msgs/CompressedImage"}>
          <CompressedROSImage
            style={props.style}
            connection={props.connection}
            topic={props.topic}
          />
        </Match>
        <Match when={type === "sensor_msgs/Image"}>
          <RawROSImage
            style={props.style}
            connection={props.connection}
            topic={props.topic}
          />
        </Match>
      </Switch>
    }
    </Show>
  );
};

export default ROSImage;
