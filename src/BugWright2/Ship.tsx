import { Show } from 'solid-js';
import { Scene } from 'three';
import { useShipMesh } from "../Config";
import { useConnectionsContext } from '../Connections';
import { ROSMesh } from "../ROSMesh";

export interface ShipProps {
  scene: Scene;
}

export function Ship(props: ShipProps) {
  const [shipMesh] = useShipMesh();
  const connectionsContext = useConnectionsContext();

  return (
    <Show when={shipMesh?.connection}>
    {
    connectionURL =>
      <Show when={connectionsContext?.connections[connectionURL]}>
      {
      connection =>
        <Show when={shipMesh?.topic}>
        {
        topic =>
          <ROSMesh
            scene={props.scene}
            connection={connection}
            topic={topic}
          />
        }
        </Show>
      }
      </Show>
    }
    </Show>
  );
}
