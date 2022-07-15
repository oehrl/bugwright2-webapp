import { Component, createEffect, onCleanup, onMount } from "solid-js";
import { Mesh, MeshBasicMaterial, Scene, SphereGeometry, Vector3 } from "three";
import { createTopicSubstription, useConnectionsContext } from "../Connections";
import { Robot } from "../Robot";
import { geometry_msgs } from "../ROS/geometry_msgs";
import { useTransform } from "./Transform";

export interface RobotMeshProps {
  scene: Scene;
  robot: Robot;
}

const RobotMesh: Component<RobotMeshProps> = (props) => {
  const transform = useTransform(props.robot.connection, props.robot.poseTopic);

  const sphereGeometry = new SphereGeometry(0.1);
  const sphereMaterial = new MeshBasicMaterial({ color: 0xffff0000 });
  const sphere = new Mesh(sphereGeometry, sphereMaterial);

  createEffect(() => {
    const robotTransform = transform();
    sphere.position.copy(robotTransform.position || new Vector3());
  });
  onMount(() => props.scene.add(sphere));
  onCleanup(() => props.scene.remove(sphere));
  
  return <></>;
}

export default RobotMesh;
