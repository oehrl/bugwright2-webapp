import { createEffect } from "solid-js";
import { CubeTextureLoader, Scene } from 'three';

export interface SkyboxProps {
  scene: Scene;
  baseURL: string;
}

export function Skybox(props: SkyboxProps) {
  // let texture 
  createEffect(() => {
    const loader = new CubeTextureLoader();
    const texture = loader.load([
      `${props.baseURL}/east.jpeg`,
      `${props.baseURL}/west.jpeg`,
      `${props.baseURL}/up.jpeg`,
      `${props.baseURL}/down.jpeg`,
      `${props.baseURL}/north.jpeg`,
      `${props.baseURL}/south.jpeg`,
    ]);
    props.scene.background = texture;
  });

  return <></>;
}
