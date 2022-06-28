import { Matrix3, Matrix4, Quaternion } from "three";
import { tf2_msgs } from "./tf2_msgs";

interface Frame {
  frameId: string;
  parentFrameId?: string;
  transform: Matrix4;
}

export class TransformTree {
  frames: Frame[] = [];

  update(tfMessage: tf2_msgs.TFMessage) {
    for (const transform of tfMessage.transforms) {
      const rotation = new Matrix4().makeRotationFromQuaternion(new Quaternion(
        transform.transform.rotation.x,
        transform.transform.rotation.y,
        transform.transform.rotation.z,
        transform.transform.rotation.w,
      ));
      const translation = new Matrix4().makeTranslation(
        transform.transform.translation.x,
        transform.transform.translation.y,
        transform.transform.translation.z,
      );
      this.getOrInsertFrame(transform.child_frame_id, transform.header.frame_id)
          ?.transform.multiplyMatrices(translation, rotation);
    }
  }

  getFrame(id: string) {
    for (const frame of this.frames) {
      if (frame.frameId === id) {
        return frame;
      }
    }
    return null;
  }

  getOrInsertFrame(id: string, parentFrameId?: string) {
    for (const frame of this.frames) {
      if (frame.frameId === id) {
        if (parentFrameId) {
          frame.parentFrameId = parentFrameId;
        }
        return frame;
      }
    }
    if (parentFrameId) {
      this.getOrInsertFrame(parentFrameId);
    }
    this.frames.push({
      frameId: id,
      parentFrameId: parentFrameId,
      transform: new Matrix4().identity(),
    });
    // this.frames.
  }
}

export default TransformTree;
