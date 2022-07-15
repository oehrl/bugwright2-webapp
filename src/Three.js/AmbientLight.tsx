import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { AmbientLight as ThreeJSAmbientLight, ColorRepresentation, Scene } from 'three';

export interface AmbientLightProps {
  scene: Scene;
  color?: ColorRepresentation;
  intensity?: number;
}

export function AmbientLight(props: AmbientLightProps) {
  const ambientLight = new ThreeJSAmbientLight();

  createEffect(() => {
    ambientLight.color.set(props.color || 0xffffff);
    ambientLight.intensity = props.intensity || 1.0;
  });
  onMount(() => props.scene.add(ambientLight));
  onCleanup(() => props.scene.remove(ambientLight));

  return <></>;
}
