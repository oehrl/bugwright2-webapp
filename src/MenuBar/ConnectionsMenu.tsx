import IconButton from "@suid/material/IconButton";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import { Component, createSignal, For, Show, useContext } from "solid-js";
import DeleteIcon from "@suid/icons-material/Delete";
import Divider from "@suid/material/Divider";
import PopoverListButton from "./PopoverListButton";
import { ConnectionsContext } from "../Connections";
import ConnectionDialog from "../Dialogs/ConnectionDialog";
import ConnectionIndicator from "./ConnectionIndicator";

const ConnectionsMenu: Component = () => {
  const connectionsContext = useContext(ConnectionsContext);
  const [selectedConnection, selectConnection] = createSignal<string>();

  return (
    <>
      <ConnectionDialog
        url={selectedConnection()}
        close={() => selectConnection()}
        save={url => connectionsContext?.connect(url)}
      />
      <PopoverListButton>
        <For each={Object.keys(connectionsContext?.connections || {})}>
          {
            url =>
              <Show when={connectionsContext?.connections[url]}>
              {
                connection => 
                  <ListItem id={connection.socket.url}>
                    <ConnectionIndicator connection={connection} />
                    <ListItemButton
                      onClick={() => selectConnection(url)}
                    >
                    {
                      connection.socket.url
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
          onClick={() => selectConnection("")}
        >
          Add Connection
        </ListItemButton>
      </PopoverListButton>
    </>
  );
};

export default ConnectionsMenu;
