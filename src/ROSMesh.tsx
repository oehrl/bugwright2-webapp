import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { BufferGeometry, DoubleSide, Euler, Float32BufferAttribute, Mesh, MeshPhongMaterial, Scene } from 'three';
import { connection, Connection, createTopicSubstription } from "./Connections";
import { mesh_msgs } from "./ROS/mesh_msgs";

export interface ROSMeshProps {
  scene: Scene;
  connection: Connection;
  topic: string;
}

export function ROSMesh(props: ROSMeshProps) {
  let model: Mesh;
  const meshTopicSubscription = props.connection.rosbridgeConnection.subscribe(props.topic, (mesh: mesh_msgs.MeshGeometryStamped) => {
    console.log("Recevied mesh");
    console.log(mesh);

    const geometry = new BufferGeometry();
    const vertices = new Float32Array(mesh.mesh_geometry.vertices.length * 3);
    const normals: number[] = [];
    const indices = new Array(mesh.mesh_geometry.faces.length * 3);

    mesh.mesh_geometry.vertices.forEach((vertex, index) => {
      vertices[index * 3 + 0] = vertex.y;
      vertices[index * 3 + 1] = vertex.z;
      vertices[index * 3 + 2] = vertex.x;
    });
    
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

    if (model) {
      props.scene.remove(model);
    }

    model = new Mesh(geometry, material)
    // model.setRotationFromEuler(new Euler(-Math.PI / 2, 0, 0));
    props.scene.add(model);
  });

  onCleanup(() => {
    props.scene.remove(model);
    meshTopicSubscription.unsubscribe();
  });

  return <></>;
}
