import AppBar from "@suid/material/AppBar";
import Toolbar from "@suid/material/Toolbar";
import RobotsMenu from "./RobotsMenu";
import { Component } from "solid-js";
import ConnectionsMenu from "./ConnectionsMenu";

export interface MenuBarProps {
}

const MenuBar: Component<MenuBarProps> = (_props: MenuBarProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <ConnectionsMenu />
        <RobotsMenu />
      </Toolbar>

    </AppBar>
  );
}

export default MenuBar;
