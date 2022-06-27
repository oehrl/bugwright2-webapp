import { BufferGeometry, DoubleSide, Euler, Float32BufferAttribute, Mesh, MeshBasicMaterial, MeshPhongMaterial, Scene } from "three";
import { RosbridgeConnection } from "./Rosbridge";

export interface ROSTimeStamp {
  secs: number;
  nsecs: number;
}

namespace std_msgs {
  export interface Header {
    seq: number;
    stamp: ROSTimeStamp;
    frame_id: number;
  }
}

namespace geometry_msgs {
  export interface Point {
    x: number;
    y: number;
    z: number;
  }

  export interface PointStamped {
    header: std_msgs.Header;
    point: Point;
  }

  export interface Vector3 {
    x: number;
    y: number;
    z: number;
  }

  export interface Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;
  }

  export interface Transform {
    translation: Vector3;
    rotation: Quaternion;
  }

  export interface TransformStamped {
    header: std_msgs.Header;
    child_frame_id: string;
    transform: Transform;
  }
}

namespace tf2_msgs {
  export interface TFMessage {
    transforms: geometry_msgs.TransformStamped[];
  }
}

namespace sensor_msgs {
  interface Image {
    header: std_msgs.Header;
    width: number;
    height: number;
    encoding: string;
    is_bigendian: number;
    step: number;
    data: number[];
  }
}

namespace mesh_msgs {

  export interface MeshTriangleIndices {
    vertex_indices: [number, number, number];
  }

  export interface MeshGeometry {
    vertices: geometry_msgs.Point[];
    vertex_normals: geometry_msgs.Point[];
    faces: MeshTriangleIndices[];
  }

  export interface MeshGeometryStamped {
    uuid: string;
    mesh_geometry: MeshGeometry;
  }

}

const composeScene = (scene: Scene, connection: RosbridgeConnection) => {
  // connection.callService<boolean, geometry_msgs.PointStamped>(
  //   "/",
  //   value => console.log(value),
  //   {
  //     header: {
  //       seq: 0,
  //       frame_id: 0,
  //       stamp: {
  //         secs: 0,
  //         nsecs: 0,
  //       },
  //     },
  //     point: { x: 0, y: 0, z: 0}
  //   }
  // );

  connection.callService("/rosapi/services", value => console.log(value));

  connection.callService<{ topics: string[], types: string[]}>("/rosapi/topics", values => {
    for (let i = 0; i < values.topics.length; ++i) {
      // console.log(`Found topic ${values.topics[i]} of type ${values.types[i]}`);
      if (values.types[i] === "mesh_msgs/MeshGeometryStamped") {
        console.log(`Found mesh: ${values.topics[i]}`);
        connection.subscribe<mesh_msgs.MeshGeometryStamped>(values.topics[i], mesh => {
          console.log("Recevied mesh");
          console.log(mesh);

          const geometry = new BufferGeometry();
          const vertices = new Float32Array(mesh.mesh_geometry.vertices.length * 3);
          const normals: number[] = [];
          const indices = new Array(mesh.mesh_geometry.faces.length * 3);

          mesh.mesh_geometry.vertices.forEach((vertex, index) => {
            vertices[index * 3 + 0] = vertex.x;
            vertices[index * 3 + 1] = vertex.y;
            vertices[index * 3 + 2] = vertex.z;
          });
          
          // for (const vertex of mesh.mesh_geometry.vertices) {
          //   vertices.push(vertex.x, vertex.y, vertex.z);
          // }
          for (const normal of mesh.mesh_geometry.vertex_normals) {
            normals.push(normal.x, normal.y, normal.z);
          }
          mesh.mesh_geometry.faces.forEach((face, index) => {
            indices[index * 3 + 0] = face.vertex_indices[0];
            indices[index * 3 + 1] = face.vertex_indices[1];
            indices[index * 3 + 2] = face.vertex_indices[2];
          });

          geometry.setIndex(indices);
          geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
          // geometry.setAttribute('normal', new Float32BufferAttribute(normals, 3));
          geometry.computeVertexNormals();

          const material = new MeshPhongMaterial({
            side: DoubleSide,
            color: 0xffffffff,
          });

          console.log(vertices);
          console.log(normals);
          console.log(indices);

          const model = new Mesh(geometry, material)
          model.setRotationFromEuler(new Euler(-Math.PI / 2, 0, 0));
          scene.add(model);
        });
      } else if (values.types[i] === "tf2_msgs/TFMessage") {
        console.log(`Subscribe to tfMessage`);
        connection.subscribe<tf2_msgs.TFMessage>(values.topics[i], tfMessage => {
          // console.log(`Received tf message: ${JSON.stringify(tfMessage)}`);
        });
      }
    }
  });
}

export default composeScene;
