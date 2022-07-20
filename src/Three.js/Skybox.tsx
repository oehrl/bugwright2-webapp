import { createEffect } from "solid-js";
import { CubeTextureLoader, Scene } from 'three';

export interface SkyboxProps {
  scene: Scene;
  east: string;
  west: string;
  up: string;
  down: string;
  north: string;
  south: string;
}

export function Skybox(props: SkyboxProps) {
  // let texture 
  createEffect(() => {
    const loader = new CubeTextureLoader();
    const texture = loader.load([
      props.east, props.west,
      props.up, props.down,
      props.north, props.south,
    ]);
    props.scene.background = texture;
  });

  return <></>;
}
