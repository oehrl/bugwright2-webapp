import { Camera } from "three";

declare module 'first-person-controls' {
  export default class FirstPersonControls {
    constructor(camera: Camera);

    update(delta: number): void;
  }
}

