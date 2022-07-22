import { createEffect, onCleanup, onMount } from "solid-js";
import { Mesh as ThreeJSMesh, Scene, Material, BufferGeometry, Vector3 } from 'three';

export interface MeshProps {
  scene: Scene;
  material: Material;
  geometry: BufferGeometry;
  position?: Vector3;
}

export function Mesh(props: MeshProps) {
  const mesh = new ThreeJSMesh(props.geometry, props.material);

  createEffect(() => {
    if (props.position) {
      mesh.position.copy(props.position);
    }
  });
  onMount(() => props.scene.add(mesh));
  onCleanup(() => props.scene.remove(mesh));

  return <></>;
}

export default Mesh;
