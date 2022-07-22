import { Component, createEffect, onCleanup, onMount, Show } from "solid-js";
import { MeshBasicMaterial, Scene, SphereGeometry, Vector3 } from "three";
import { Robot } from "../Robot";
import { useTransform } from "./Transform";
import { Mesh } from "../Three.js/Mesh";

export interface RobotMeshProps {
  scene: Scene;
  robot: Robot;
}

const RobotMesh: Component<RobotMeshProps> = (props) => {
  const transform = useTransform();

  return (
    <Show when={props.robot.connection}>
    {
    connection =>
      <Show when={props.robot.poseTopic}>
      {
      poseTopic =>
        <Show when={transform(connection, poseTopic)}>
        {
        transform =>
          <Mesh
            scene={props.scene}
            geometry={new SphereGeometry(0.1)}
            material={new MeshBasicMaterial({ color: 0xffff0000 })}
            position={transform.position}
          />
        }
        </Show>
      }
      </Show>
    }
    </Show>
  );
}

export default RobotMesh;
