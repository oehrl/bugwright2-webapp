import IconButton from "@suid/material/IconButton";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import { Component, createSignal, For, Show, useContext } from "solid-js";
import DeleteIcon from "@suid/icons-material/Delete";
import Divider from "@suid/material/Divider";
import PopoverListButton from "./PopoverListButton";
import { ConnectionsContext } from "../Connections";
import ConnectionIndicator from "./ConnectionIndicator";
import NewConnectionDialog from "../Dialogs/NewConnectionDialog";
import ConnectionDialog from "../Dialogs/ConnectionDialog";

const ConnectionsMenu: Component = () => {
  const connectionsContext = useContext(ConnectionsContext);
  const [isCreatingNewConnection, createNewConnection] = createSignal(false);
  const [selectedConnection, selectConnection] = createSignal<string>();

  return (
    <>
      <Show when={isCreatingNewConnection()}>
        <NewConnectionDialog
          close={() => createNewConnection(false)}
          save={url => {
            createNewConnection(false);
            selectConnection(connectionsContext?.connect(url))
          }}
        />
      </Show>
      <Show when={selectedConnection()}>
      {
      selection =>
        <Show when={connectionsContext?.connections[selection]}>
        {
        connection =>
          <ConnectionDialog
            connection={connection}
            close={() => selectConnection()}
          />
        }
        </Show>
      }
      </Show>
      <PopoverListButton>
        <For each={Object.keys(connectionsContext?.connections || {})}>
          {
            url =>
              <Show when={connectionsContext?.connections[url]}>
              {
                connection => 
                  <ListItem id={connection.rosbridgeConnection.url}>
                    <ConnectionIndicator connection={connection} />
                    <ListItemButton
                      onClick={() => selectConnection(url)}
                    >
                    {
                      connection.rosbridgeConnection.url
                    }
                    </ListItemButton>
                    <IconButton
                      size="small"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                      onClick={() => connectionsContext?.remove(url)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
              }
              </Show>
          }
        </For>
        <Show when={Object.keys(connectionsContext?.connections || {}).length > 0}>
          <Divider />
        </Show>
        <ListItemButton
          onClick={() => createNewConnection(true)}
        >
          Add Connection
        </ListItemButton>
      </PopoverListButton>
    </>
  );
};

export default ConnectionsMenu;
