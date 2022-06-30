import AppBar from "@suid/material/AppBar";
import IconButton from "@suid/material/IconButton";
import Toolbar from "@suid/material/Toolbar";
import { Component, createSignal, Show } from "solid-js";
import RobotIcon from "@suid/icons-material/SmartToy";
import List from "@suid/material/List";
import Popover from "@suid/material/Popover";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import Divider from "@suid/material/Divider";
import ConnectionDialog from "./ConnectionDialog";
import { ROSBridgeConnection } from "./ROSBridge";

export interface MenuBarProps {
  connections: ROSBridgeConnection[];
  setConnections: (connections: ROSBridgeConnection[]) => void;
}

const MenuBar: Component<MenuBarProps> = (props: MenuBarProps) => {
  const [connectionsButtonElement, setConnectionsButtonElement] = createSignal<HTMLButtonElement | null>(null);
  const [newConnectionURL, setNewConnectionURL] = createSignal<string | null>(null);
  
  const handleClick = (
    event: MouseEvent & { currentTarget: HTMLButtonElement }
  ) => {
    setConnectionsButtonElement(event.currentTarget);
  };

  const handleClose = () => {
    setConnectionsButtonElement(null);
  };

  const open = () => Boolean(connectionsButtonElement());
  const id = () => (open() ? "simple-popover" : undefined);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <RobotIcon />
        </IconButton>
        <Popover
          id={id()}
          open={open()}
          anchorEl={connectionsButtonElement()}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <List>
            <ListItemButton
              onClick={() => {
                setNewConnectionURL("ws://localhost:3000");
                setConnectionsButtonElement(null);
              }}
            >
              Add Connection
            </ListItemButton>
          </List>
        </Popover>
      </Toolbar>

      <ConnectionDialog
        open={Boolean(newConnectionURL())}
        url={newConnectionURL() as string}
        setURL={url => {
          if (url) {
            props.setConnections([...props.connections, new ROSBridgeConnection(url)]);
          }
          setNewConnectionURL(null);
        }}
      />
    </AppBar>
  );
}

export default MenuBar;
