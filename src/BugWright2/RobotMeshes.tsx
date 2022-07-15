import { Component, For } from "solid-js";
import { Scene } from "three";
import { useRobots } from "../Robot";
import RobotMesh from "./RobotMesh";

export interface RobotMeshesProps {
  scene: Scene;
}

const RobotMeshes: Component<RobotMeshesProps> = (props) => {
  return (
    <For each={useRobots()}>
    {
    robot =>
      <RobotMesh scene={props.scene} robot={robot} />
    }
    </For>
  );
}

export default RobotMeshes;
