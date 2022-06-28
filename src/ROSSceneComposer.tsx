import { BufferGeometry, DoubleSide, Euler, Float32BufferAttribute, Mesh, MeshBasicMaterial, MeshPhongMaterial, Scene, SphereGeometry } from "three";
import { geometry_msgs } from "./ros/geometry_msgs";
import { mesh_msgs } from "./ros/mesh_msgs";
import { tf2_msgs } from "./ros/tf2_msgs";
import { RosbridgeConnection } from "./Rosbridge";


const composeScene = (scene: Scene, connection: RosbridgeConnection) => {
  connection.callService<boolean, [geometry_msgs.PointStamped]>(
    "/service_test_node/set_point",
    value => console.log(value),
    [{
      header: {
        seq: 0,
        frame_id: "0",
        stamp: {
          secs: 0,
          nsecs: 0,
        },
      },
      point: { x: 69, y: 420, z: 1337 }
    }]
  );

  // connection.callService("/rosapi/services", value => console.log(value));

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
      } else if (values.types[i] === "geometry_msgs/PoseStamped") {
        console.log(`geometry_msgs/PoseStamped: ${values.topics[i]}`);
        const sphereGeometry = new SphereGeometry(0.1);
        const sphereMaterial = new MeshBasicMaterial({ color: 0xffff0000 });
        const sphere = new Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);
        connection.subscribe<geometry_msgs.PoseStamped>(values.topics[i], poseStamped => {
          sphere.position.set(
            poseStamped.pose.position.x,
            poseStamped.pose.position.z,
            -poseStamped.pose.position.y
          );
        });
      }
    }
  });
}

export default composeScene;
