import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import { Component, For, Show } from "solid-js";
import PopoverListButton from "./PopoverListButton";
import ShipIcon from "@suid/icons-material/DirectionsBoat";
import CheckIcon from "@suid/icons-material/Check";
import { useConnectionURLs, useTopicsWithType } from "../Connections";
import { useShipMesh } from "../Config";
import ListItemIcon from "@suid/material/ListItemIcon";

interface ConnectionEntriesProps {
  connectionURL: string;
}

const ConnectionEntries: Component<ConnectionEntriesProps> = (props) => {
  const [shipMesh, setShipMesh] = useShipMesh();
  const topicsWithType = useTopicsWithType();
  const meshTopics = (url: string) => topicsWithType(url, [
    "mesh_msgs/MeshGeometryStamped"
  ]);

  return (
    <For each={meshTopics(props.connectionURL)}>
    {
    topic =>
      <ListItem>
        <ListItemButton
          onClick={() => {
            console.log(shipMesh);
            setShipMesh({
              connection: props.connectionURL,
              topic: topic.id,
            });
            console.log(shipMesh);
          }}
        >
          <Show
            when={
              shipMesh?.connection === props.connectionURL &&
              shipMesh?.topic === topic.id
            }
          >
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
          </Show>
        {
          `${props.connectionURL}${topic.id}`
        }
        </ListItemButton>
      </ListItem>
    }
    </For>
  );
};

export interface ShipMenuProps {
}

const ShipMenu: Component<ShipMenuProps> = (props) => {
  const connectionURLs = useConnectionURLs();

  return (
    <PopoverListButton
      title="Manage Ship"
      renderIcon={() => <ShipIcon />}
    >
      <For each={connectionURLs()}>
      {
      url => <ConnectionEntries connectionURL={url} />
      }
      </For>
    </PopoverListButton>
  );
};

export default ShipMenu;
