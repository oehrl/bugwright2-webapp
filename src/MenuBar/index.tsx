import AppBar from "@suid/material/AppBar";
import Toolbar from "@suid/material/Toolbar";
import RobotsMenu from "./RobotsMenu";
import { Component } from "solid-js";
import ConnectionsMenu from "./ConnectionsMenu";
import ShipMenu from "./ShipMenu";

export interface MenuBarProps {
}

const MenuBar: Component<MenuBarProps> = (_props: MenuBarProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <ConnectionsMenu />
        <RobotsMenu />
        <ShipMenu />
      </Toolbar>

    </AppBar>
  );
}

export default MenuBar;
