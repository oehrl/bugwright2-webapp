import { geometry_msgs } from "./geometry_msgs";

export namespace mesh_msgs {
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

