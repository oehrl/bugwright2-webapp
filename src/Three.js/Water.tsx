import { createEffect, onCleanup } from "solid-js";
import { TextureLoader, PlaneGeometry, RepeatWrapping, Scene, Vector3 } from 'three';
import { Water as ThreeJSWater } from "three/examples/jsm/objects/Water";

export interface WaterProps {
  scene: Scene;
  waterNormalsTexture?: string;
  width?: number;
  height?: number;
}

export function Water(props: WaterProps) {
  let water: ThreeJSWater;

  const updateInterval = setInterval(() => {
    water.material.uniforms[ 'time' ].value += 1.0 / 60.0 / 10;
  }, 1/60*1000);

  createEffect(() => {
    if (water) {
      props.scene.remove(water);
    }

    const waterGeometry = new PlaneGeometry(props.width || 100, props.height || 100, 1, 1);
    waterGeometry.computeVertexNormals();

    water = new ThreeJSWater(
      waterGeometry ,
      {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: props.waterNormalsTexture ? new TextureLoader().load(props.waterNormalsTexture, texture => {
          texture.wrapS = texture.wrapT = RepeatWrapping;
        }) : undefined,
        sunDirection: new Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 3.7,
        fog: props.scene.fog !== undefined
      }
    );
    props.scene.add(water);
    water.rotation.x = -Math.PI * 0.5;
  });
  onCleanup(() => {
    props.scene.remove(water);
    clearInterval(updateInterval);
  });

  return <></>;
}
