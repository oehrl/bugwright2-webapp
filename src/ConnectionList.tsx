import IconButton from "@suid/material/IconButton";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import Paper from "@suid/material/Paper";
import { Component, createEffect, createSignal, For, JSX, onCleanup, onMount } from "solid-js";
import { ROSBridgeConnection } from "./ROSBridge";
import DeleteIcon from "@suid/icons-material/Delete";

export interface ConnectionListProps  {
  connections: ROSBridgeConnection[];
  setConnections: (connections: ROSBridgeConnection[]) => void;
  style?: JSX.CSSProperties | string;
}

const ConnectionList: Component<ConnectionListProps> = (props) => {
  return (
    <Paper style={props.style}>
      <List>
        <For each={props.connections}>
          {
            (connection, index) =>
              <ListItem id={connection.url}>
                <ListItemButton>{connection.url}</ListItemButton>
                <IconButton
                  size="small"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => {
                    props.setConnections(props.connections.filter((_, arrIndex) => index() !== arrIndex));
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
          }
        </For>
      </List>
    </Paper>
  );
};

export default ConnectionList;
