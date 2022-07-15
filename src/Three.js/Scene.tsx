import { createContext, createSignal, ParentProps, useContext } from "solid-js";
import { AmbientLight, DirectionalLight, Mesh, MeshPhongMaterial, PlaneGeometry, Scene } from 'three';

export const defaultScene = new Scene();
export const SceneContext = createContext<() => Scene>(() => defaultScene);

export function SceneProvider(props: ParentProps) {
  const [scene] = createSignal(new Scene());

  const planeGeometry = new PlaneGeometry(100, 100, 100, 100);
  planeGeometry.computeVertexNormals();
  const planeMaterial = new MeshPhongMaterial({
    color: 0x0000f2,
    wireframe: true
  });

  const plane = new Mesh(planeGeometry, planeMaterial);
  // plane.translateOnAxis(new Vector3(1, 0, 1), 5);
  // plane.translateY(-10);
  plane.rotateX(Math.PI * 0.5);
  scene().add(plane);

  const light = new DirectionalLight(0xffffff, 0.8);
  light.position.set(0.1, 1, 2.0);
  scene().add(light);

  const ambientLight = new AmbientLight(0xffffff, 0.3);
  scene().add(ambientLight);

  return (
    <SceneContext.Provider value={scene}>
      {props.children}
    </SceneContext.Provider>
  );
}

export function useScene() {
  return useContext(SceneContext);
}
