import Box from "@suid/material/Box";
import IconButton from "@suid/material/IconButton";
import { Component, createSignal, For } from "solid-js";
import { Robot, useRobots } from "./Robot";
import ArrowLeftIcon from "@suid/icons-material/ArrowLeft";
import ArrowRightIcon from "@suid/icons-material/ArrowRight";
import { useConnection, useTopicsWithTypes } from "./Connections";
import ROSImage from "./ROSImage";

export interface RobotPreviewProps {
  robot: Robot;
}

const RobotPreview: Component<RobotPreviewProps> = (props) => {
  // const [imageTopics, setImageTopics] = createSignal();
  const [imageIndex, setImageIndex] = createSignal(0);
  const imageTopics = () => {
    return props.robot.connection ?
      useTopicsWithTypes(props.robot.connection, ["sensor_msgs/Image", "sensor_msgs/CompressedImage"]) :
      [];
  };
  const nextImage = () => {
    setImageIndex((imageIndex() + 1) % imageTopics().length);
  }
  const previousImage = () => {
    setImageIndex(imageIndex() > 0 ? imageIndex() - 1 : imageTopics().length - 1);
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: 0,
        paddingTop: "100%",
        position: "relative"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <h3>
        {
          props.robot.name
        }
        </h3>
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
              flexGrow: 1
            }}
          >
          {
            imageIndex() < imageTopics().length ?
              <>
                { imageTopics()[imageIndex()].id }
                <ROSImage
                  connection={props.robot.connection}
                  topic={imageTopics()[imageIndex()].id}
                  style={{
                    "max-width": "100%",
                    "max-height": "100%",
                  }}
                />
              </> :
              <Box>
                No video feed available
              </Box>
          }
          </Box>
          <IconButton onClick={nextImage}>
            <ArrowRightIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default RobotPreview;
