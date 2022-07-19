import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import Paper from "@suid/material/Paper";
import Skeleton from "@suid/material/Skeleton";
import { Component, createEffect, createSignal, For, JSX, onCleanup, onMount } from "solid-js";
import { sensor_msgs } from "./ros/sensor_msgs";
import { ROSBridgeConnection } from "./ROSBridge";
import ROSImage from "./ROSImage";

export interface ImageListProps  {
  style?: JSX.CSSProperties | string;
  connection: ROSBridgeConnection | null;
  onSelectionChanged: (topic: string | null) => void;
}

const ImageList: Component<ImageListProps> = (props) => {
  const [imageTopics, setImageTopics] = createSignal<string[]>([]);

  console.log(`Call Service: ${props.connection}`);
  createEffect(() => {
    props.connection?.callService<{ topics: string[], types: string[]}>("/rosapi/topics", values => {
      const topics = [];
      for (let i = 0; i < values.topics.length; ++i) {
        if (values.types[i] === "sensor_msgs/CompressedImage") {
          topics.push(values.topics[i]);
        }
      }
    setImageTopics(topics);
    });
  });
   

  return (
    <Paper style={props.style}>
      <List>
        <For each={imageTopics()}>
          {
            imageTopic =>
              <ListItem id={imageTopic}>
                <ListItemButton
                  onClick={() => props.onSelectionChanged(imageTopic)}
                  style={{ display: "flex", "flex-direction": "column"}}
                >
                  {imageTopic}
                  <ROSImage
                    topic={imageTopic}
                    connection={props.connection}
                    width={100}
                    height={100}
                  />
                </ListItemButton>
              </ListItem>
          }
        </For>
      </List>
    </Paper>
  );
};

export default ImageList;
