import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import { Component, createSignal, For, Show, useContext } from "solid-js";
import PopoverListButton from "./PopoverListButton";
import ShipIcon from "@suid/icons-material/DirectionsBoat";
import CheckIcon from "@suid/icons-material/Check";
import { topicsWithTypes, useConnectionsContext } from "../Connections";
import { useShipMesh } from "../Config";
import ListItemIcon from "@suid/material/ListItemIcon";

export interface ShipMenuProps {
}

const ShipMenu: Component<ShipMenuProps> = (props) => {
  const connectionsContext = useConnectionsContext();
  const [shipMesh, setShipMesh] = useShipMesh();
  const meshTopics = ["mesh_msgs/MeshGeometryStamped"];

  return (
    <PopoverListButton
      title="Manage Ship"
      renderIcon={() => <ShipIcon />}
    >
      <Show when={connectionsContext?.connections}>
      {
      connections =>
        <For each={Object.values(connections)}>
        {
        connection =>
          <For each={topicsWithTypes(connection, meshTopics)}>
          {
          topic =>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  console.log(shipMesh);
                  setShipMesh({
                    connection: connection.rosbridgeConnection.url,
                    topic
                  });
                  console.log(shipMesh);
                }}
              >
                <Show
                  when={
                    shipMesh?.connection === connection.rosbridgeConnection.url &&
                    shipMesh?.topic === topic
                  }
                >
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                </Show>
              {
                `${connection.rosbridgeConnection.url}${topic}`
              }
              </ListItemButton>
            </ListItem>
          }
          </For>
        }
        </For>
      }
      </Show>
    </PopoverListButton>
  );
};

export default ShipMenu;
