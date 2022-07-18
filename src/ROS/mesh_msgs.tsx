import { geometry_msgs } from "./geometry_msgs";
import { std_msgs } from "./std_msgs";

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
    header: std_msgs.Header;
    uuid: string;
    mesh_geometry: MeshGeometry;
  }
}
