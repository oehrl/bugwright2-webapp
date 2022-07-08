import IconButton from "@suid/material/IconButton";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import { Component, createSignal, For, JSX, Show } from "solid-js";
import { ConnectionStatus } from "./ROSBridgeConnection";
import DeleteIcon from "@suid/icons-material/Delete";
import CircleIcon from "@suid/icons-material/Circle";
import { useConnectionMenu, useConnections, useConnectionStatus } from "./Connections";
import ConnectionInfo from "./ConnectionInfo";
import ConnectionDialog from "./ConnectionDialog";
import Divider from "@suid/material/Divider";
import PopoverListButton from "./PopoverListButton";

export interface ConnectionMenuProps  {
}

function getConnectionStatusColor(status: ConnectionStatus) {
  console.log(status);
  switch (status) {
    case "Not Connected": return "error";
    case "Connecting": return "warning";
    case "Connected": return "success";
  }
}

const ConnectionMenu: Component<ConnectionMenuProps> = (props) => {
  const connectionList = useConnectionMenu();
  const [connectionInfo, setConnectionInfo] = createSignal<string|undefined>();
  const [newConnectionURL, setNewConnectionURL] = createSignal<string | undefined>(undefined);

  return (
    <>
      <ConnectionInfo url={connectionInfo()} close={() => setConnectionInfo(undefined)} />
      <ConnectionDialog
        url={newConnectionURL()}
        setURL={url => {
          if (url) {
            connectionList.add(url);
          }
          setNewConnectionURL(undefined);
        }}
      />
      <PopoverListButton>
        <For each={useConnections()}>
          {
            connection =>
              <ListItem id={connection.url}>
                <CircleIcon
                  color={getConnectionStatusColor(useConnectionStatus(connection.url))}
                />
                <ListItemButton
                  onClick={() => setConnectionInfo(connection.url)}
                >
                  {connection.url}
                </ListItemButton>
                <IconButton
                  size="small"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => connectionList.remove(connection.url) }
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
          }
        </For>
        <Show when={useConnections().length > 0}>
          <Divider />
        </Show>
        <ListItemButton
          onClick={() => {
            setNewConnectionURL("ws://localhost:3000");
            // props.close();
          }}
        >
          Add Connection
        </ListItemButton>
      </PopoverListButton>
    </>
  );
};

export default ConnectionMenu;
