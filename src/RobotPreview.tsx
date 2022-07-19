import Box from "@suid/material/Box";
import IconButton from "@suid/material/IconButton";
import { Component, createSignal, For, Show } from "solid-js";
import { Robot, useRobots } from "./Robot";
import ArrowLeftIcon from "@suid/icons-material/ArrowLeft";
import ArrowRightIcon from "@suid/icons-material/ArrowRight";
import ROSImage from "./ROSImage";
import { connection, topicsWithTypes, useConnectionsContext } from "./Connections";

export interface RobotPreviewProps {
  robot: Robot;
}

const RobotPreview: Component<RobotPreviewProps> = (props) => {
  const connectionsContext = useConnectionsContext();
  const [imageIndex, setImageIndex] = createSignal(0);
  const robotConnection = () => props.robot.connection ? connectionsContext?.connections[props.robot.connection] : undefined;
  const imageTopics = () => {
    const connection = robotConnection();
    if (connection) {
      return topicsWithTypes(connection, ["sensor_msgs/Image", "sensor_msgs/CompressedImage"]);
    } else {
      return [];
    }
  }

   const nextImage = () => {
     setImageIndex((imageIndex() + 1) % imageTopics().length);
   }
   const previousImage = () => {
     setImageIndex(imageIndex() > 0 ? imageIndex() - 1 : imageTopics().length - 1);
   }
  
  // return (
  //   <Box
  //     sx={{
  //       width: "100%",
  //     }}
  //   >
  //     <h3>{ props.robot.name }
  //     </h3>
  //   </Box>
  // );

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <h3>{ props.robot.name }</h3>
      <Show when={robotConnection()} fallback="Not connected">
      {
      connection =>
        <Show when={imageIndex() < imageTopics().length} fallback="No video feed available">
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <IconButton onClick={previousImage}>
              <ArrowLeftIcon />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                position: "relative",
              }}
            >
              <ROSImage
                connection={connection}
                topic={imageTopics()[imageIndex()]}
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
                { imageTopics()[imageIndex()] }
              </Box>
            </Box>
            <IconButton onClick={nextImage}>
              <ArrowRightIcon />
            </IconButton>
          </Box>
        </Show>
      }
      </Show>
    </Box>
  );
}

export default RobotPreview;
