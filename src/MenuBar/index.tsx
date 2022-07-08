import AppBar from "@suid/material/AppBar";
import IconButton from "@suid/material/IconButton";
import Toolbar from "@suid/material/Toolbar";
import { Component, createSignal, For, Show } from "solid-js";
import RobotIcon from "@suid/icons-material/SmartToy";
import PowerIcon from "@suid/icons-material/Power";
import List from "@suid/material/List";
import Popover from "@suid/material/Popover";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import Divider from "@suid/material/Divider";
import ConnectionDialog from "../ConnectionDialog";
import { ConnectionStatus, ROSBridgeConnection } from "../ROSBridgeConnection";
import { useConnectionList, useConnections, useConnectionStatus } from "../Connections";
import ConnectionList from "../ConnectionList";
import PopoverListButton from "./PopoverListButton";
import RobotsMenu from "./RobotsMenu";

export interface MenuBarProps {
}

function getConnectionStatusColor(status: ConnectionStatus) {
  console.log(status);
  switch (status) {
    case "Not Connected": return "error";
    case "Connecting": return "warning";
    case "Connected": return "success";
  }
}

const MenuBar: Component<MenuBarProps> = (props: MenuBarProps) => {
  const [connectionsButtonElement, setConnectionsButtonElement] = createSignal<HTMLButtonElement | null>(null);
  
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
          title="Manage ROSBridge connections"
        >
          <PowerIcon />
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
          <ConnectionList close={() => setConnectionsButtonElement(null)} />
        </Popover>

        <RobotsMenu />

      </Toolbar>

    </AppBar>
  );
}

export default MenuBar;
