import Box from "@suid/material/Box";
import IconButton from "@suid/material/IconButton";
import { Component, createSignal, For } from "solid-js";
import { Robot, useRobots } from "./Robot";
import ArrowLeftIcon from "@suid/icons-material/ArrowLeft";
import ArrowRightIcon from "@suid/icons-material/ArrowRight";
import ROSImage from "./ROSImage";

export interface RobotPreviewProps {
  robot: Robot;
}

const RobotPreview: Component<RobotPreviewProps> = (props) => {
  // const [imageTopics, setImageTopics] = createSignal();
  const [imageIndex, setImageIndex] = createSignal(0);
  // const imageTopics = useTopicsWithTypes(props.robot.connection, ["sensor_msgs/Image", "sensor_msgs/CompressedImage"]);

  // const nextImage = () => {
  //   console.log(`Current index: ${imageIndex()}`);
  //   console.log(`Image topic count: ${imageTopics().length}`);
  //   setImageIndex((imageIndex() + 1) % imageTopics().length);
  //   console.log(`Current index: ${imageIndex()}`);
  // }
  // const previousImage = () => {
  //   console.log(`Current index: ${imageIndex()}`);
  //   setImageIndex(imageIndex() > 0 ? imageIndex() - 1 : imageTopics().length - 1);
  //   console.log(`Current index: ${imageIndex()}`);
  // }
  //
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <h3>{ props.robot.name }
      </h3>
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <h3>{ props.robot.name }
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
            flexGrow: 1,
            position: "relative",
          }}
        >
        {
          imageIndex() < imageTopics().length ?
            <>
              <ROSImage
                connection={props.robot.connection}
                topic={imageTopics()[imageIndex()].id}
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
                { imageTopics()[imageIndex()].id }
              </Box>
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
  );
}

export default RobotPreview;
