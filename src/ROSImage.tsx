import { useTheme } from "@suid/material";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Modal from "@suid/material/Modal";
import TextField from "@suid/material/TextField";
import { Component, createEffect, createSignal } from "solid-js";
import { sensor_msgs } from "./ros/sensor_msgs";
import { RosbridgeConnection } from "./Rosbridge";

export interface ROSImageProps {
  topic: string;
  width: number;
  height: number;
  connection: RosbridgeConnection | null;
}

const ROSImage: Component<ROSImageProps> = (props) => {
  // const [value, setValue] = createSignal("ws://192.168.1.213:9090");
  // const [isConnecting, setIsConnecting] = createSignal(false);
  // const theme = useTheme();
  // let textField: any;
  var imageReference: any;

  createEffect(() => {
    props.connection?.subscribe<sensor_msgs.CompressedImage>(props.topic, image => {
      imageReference.src = `data:image/jpeg;base64, ${image.data}`;
    });
  });

  return (
    <img
      ref={imageReference}
      width={props.width}
      height={props.height}
    />
  );
};

export default ROSImage;
