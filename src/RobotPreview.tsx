import Box from "@suid/material/Box";
import IconButton from "@suid/material/IconButton";
import { Component, createSignal, For, Show } from "solid-js";
import { Robot, useRobots } from "./Robot";
import ArrowLeftIcon from "@suid/icons-material/ArrowLeft";
import ArrowRightIcon from "@suid/icons-material/ArrowRight";
import ROSImage from "./ROSImage";
import { useConnectionStatus, useTopicsWithType } from "./Connections";

export interface RobotPreviewProps {
  robot: Robot;
}

const RobotPreview: Component<RobotPreviewProps> = (props) => {
  const [imageIndex, setImageIndex] = createSignal(0);
  const connectionURL = () => props.robot.connection;
  const connectionStatus = useConnectionStatus();
  const topicsWithType = useTopicsWithType();
  const imageTopics = (url: string) => topicsWithType(url, [
    "sensor_msgs/Image",
    "sensor_msgs/CompressedImage"
  ]);

  const nextImage = (url: string) => {
    setImageIndex((imageIndex() + 1) % imageTopics(url).length);
  }
  const previousImage = (url: string) => {
   setImageIndex(imageIndex() > 0 ? imageIndex() - 1 : imageTopics(url).length - 1);
  }

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <h3>{ props.robot.name }</h3>
      <Show when={connectionURL()} fallback="No connection specified">
      {
      connectionURL =>
        <Show when={connectionStatus(connectionURL) === "Connected"} fallback="Not connected">
          <Show when={imageIndex() < imageTopics(connectionURL).length} fallback="No video feed available">
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <IconButton onClick={() => previousImage(connectionURL)}>
                <ArrowLeftIcon />
              </IconButton>
              <Box
                sx={{
                  flexGrow: 1,
                  position: "relative",
                }}
              >
                <ROSImage
                  connection={connectionURL}
                  topic={imageTopics(connectionURL)[imageIndex()].id}
                  style={{
                    "max-width": "100%",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: "black",
                    opacity: 0.8,
                  }}
                >
                  { imageTopics(connectionURL)[imageIndex()].id }
                </Box>
              </Box>
              <IconButton onClick={() => nextImage(connectionURL)}>
                <ArrowRightIcon />
              </IconButton>
            </Box>
          </Show>
        </Show>
      }
      </Show>
    </Box>
  );
}

export default RobotPreview;
