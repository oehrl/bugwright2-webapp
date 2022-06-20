import { Component, JSX, onCleanup, onMount } from "solid-js";
import { Clock, OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import FirstPersonControls from "./FirstPersonControls";

export interface Viewport3DProps {
  scene: Scene;
  style?: JSX.CSSProperties | string;
  cameraType?: "orthographic" | "perspective";
}

const Viewport3D: Component<Viewport3DProps> = (props: Viewport3DProps) => {

  let canvas: any;
  onMount(() => {
    const camera =
      props.cameraType === "orthographic" ?
        new OrthographicCamera(-10, 10, 10, -10, 0.1, 1000) :
        new PerspectiveCamera(75, 1.0, 0.1, 1000.0);
    camera.position.z = 20;

    const renderer = new WebGLRenderer({ canvas, antialias: true });
    const controls = new FirstPersonControls(camera, canvas);
    controls.movementSpeed *= 5;
    if (props.cameraType === "orthographic") {
      controls.lookSpeed = 0;
    }
    const clock = new Clock(true);

    let frame = requestAnimationFrame(render);

    function render() {
      frame = requestAnimationFrame(render);
      controls.update(clock.getDelta());

      const width = Math.round(canvas.clientWidth);
      const height = Math.round(canvas.clientHeight);
      if (width !== canvas.width || height !== canvas.height) {
        console.log(`Resize viewport to ${width}x${height}`);
        canvas.width = width;
        canvas.height = height;
        renderer.setViewport(0, 0, width, height);
        if ("aspect" in camera) {
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        } else {
          const cameraWidth = camera.right - camera.left;
          const cameraHeight = cameraWidth * (height / width);
          camera.top = cameraHeight / 2;
          camera.bottom = -cameraHeight / 2;
          camera.updateProjectionMatrix();
        }
      }


      renderer.render(props.scene, camera);
    }

    onCleanup(() => {
      cancelAnimationFrame(frame);
    });
  });

  return (
    <canvas ref={canvas} style={props.style}>
    </canvas>
  );
};

export default Viewport3D;