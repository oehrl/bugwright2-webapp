import { BufferGeometry, DoubleSide, Euler, Float32BufferAttribute, Mesh, MeshBasicMaterial, MeshPhongMaterial, Scene } from "three";
import { RosbridgeConnection } from "./Rosbridge";

namespace geometry_msgs {
  export interface Point {
    x: number;
    y: number;
    z: number;
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

const composeScene = (scene: Scene) => {
  const connection = new RosbridgeConnection("ws://localhost:9090", () => {
    connection.callService<{ topics: string[], types: string[]}>("/rosapi/topics", values => {
      for (let i = 0; i < values.topics.length; ++i) {
        // console.log(`Found topic ${topic_mgs.values.topics[i]} of type ${topic_mgs.values.types[i]}`);
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
        }
      }
    });
    // connection.subscribe<{data: string}>("/chatter", msg => console.log(msg.msg.data));
  });
}

export default composeScene;
