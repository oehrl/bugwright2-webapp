import Button from "@suid/material/Button";
import Box from "@suid/system/Box";
import { Component, createSignal, JSX, onCleanup, onMount } from "solid-js";
import { Clock, OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from "three";
// import { mission_manager } from "./bugwright2/mission_manager";
import FirstPersonControls from "./FirstPersonControls";

export interface ViewportProps {
  scene: Scene;
  style?: JSX.CSSProperties;
  cameraType?: "orthographic" | "perspective";
  // connection: ROSBridgeConnection | null;
}

const Viewport: Component<ViewportProps> = (props: ViewportProps) => {
  const [vrSupport, setVRSupport] = createSignal(false);
  const [framerate, setFramerate] = createSignal<number>();

  const xr = navigator.xr;
  xr?.isSessionSupported("immersive-vr").then(support => setVRSupport(support));


  let canvas: any;
  onMount(() => {
    const camera =
      props.cameraType === "orthographic" ?
        new OrthographicCamera(-10, 10, 10, -10, 0.1, 1000) :
        new PerspectiveCamera(75, 1.0, 0.1, 1000.0);
    camera.position.z = 20;
    camera.position.y = 2;

    const renderer = new WebGLRenderer({ canvas, antialias: true });
    renderer.setClearColor(0x222222);
    const controls = new FirstPersonControls(camera, canvas);
    controls.movementSpeed *= 5;
    if (props.cameraType === "orthographic") {
      controls.lookSpeed = 0;
    }
    const clock = new Clock(true);

    let frames = 0;
    const framerateClock = new Clock(true);
    framerateClock.start();
    let framerateInterval = setInterval(() => {
      setFramerate(Math.round(frames / framerateClock.getDelta()));
      frames = 0;
    }, 1000);
    let frame = requestAnimationFrame(render);


    const onKeyPress = (event: KeyboardEvent) => {
      // if (event.code === "KeyP") {
      //   props.connection?.callService<mission_manager.GoToPoint>(
      //     "mission_manager/go_to_point",
      //     value => {
      //       console.log(value);
      //     },
      //     [{ x: camera.position.x, y: camera.position.y, z: camera.position.z }]
      //   );
      // }
    };
    canvas.addEventListener('keypress', onKeyPress, false);

    function render() {
      frame = requestAnimationFrame(render);
      const deltaTime = clock.getDelta();
      controls.update(deltaTime);

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
      ++frames;
    }

    onCleanup(() => {
      cancelAnimationFrame(frame);
      canvas.removeEventListener('keypress', onKeyPress, false);
    });
  });

  const switchToVR = async () => {
    const session = await xr?.requestSession("immersive-vr", {
    });
    console.log(session);
    const renderFrame = () => {
      console.log("Rendering");
      session?.requestAnimationFrame(renderFrame);
    }
    session?.requestAnimationFrame(renderFrame);
  };

  return (
    <div style={{...props.style, position: "relative"}}>
      <canvas ref={canvas} style={{ height: "100%", width: "100%" }}>
      </canvas>
      <Box
        sx={{
          margin: "0.5em",
          position: "absolute",
          top: 0,
          right: 0,
          background: "black",
          opacity: 0.7,
        }}
      >
      {
        framerate()
      }
      </Box>
      <Button
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
        disabled={!vrSupport()}
        onClick={switchToVR}
        title={
          vrSupport() ? "Switch to VR mode" : "VR mode not available"
        }
      >
        VR
      </Button>
    </div>
  );
};

export default Viewport;
