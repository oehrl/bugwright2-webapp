import Box from "@suid/material/Box";
import IconButton from "@suid/material/IconButton";
import { Component, createSignal, For } from "solid-js";
import { useRobots } from "./Robot";
import ArrowLeftIcon from "@suid/icons-material/ArrowLeft";
import ArrowRightIcon from "@suid/icons-material/ArrowRight";
import { useTopicsWithTypes } from "./Connections";
import RobotPreview from "./RobotPreview";

export interface RobotOverviewProps {
}

const RobotOverview: Component<RobotOverviewProps> = (props) => {
  return (
    <Box>
      <For each={useRobots()}>
      {
      robot => <RobotPreview robot={robot} />
      }
      </For>
    </Box>
  );
}

export default RobotOverview;
