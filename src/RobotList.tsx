import IconButton from "@suid/material/IconButton";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import { Component, For, JSX, Show } from "solid-js";
import DeleteIcon from "@suid/icons-material/Delete";
import { useRobotList, useRobots } from "./Robot";
import RobotDialog from "./Dialogs/RobotDialog";
import Divider from "@suid/material/Divider";

export interface RobotListProps  {
  style?: JSX.CSSProperties | string;
  close: () => void;
}

const RobotList: Component<RobotListProps> = (props) => {
  return (
    <List>
      <RobotDialog
        
      />
      <For each={useRobots()}>
        {
          (robot, index) =>
            <ListItem id={`${index}`}>
              <ListItemButton
              >
                {`${robot.connection}: ${robot.prefix}`}
              </ListItemButton>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => useRobotList()?.remove(index())}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
        }
      </For>
      <Show when={useRobots().length > 0}>
        <Divider />
      </Show>
      <ListItemButton
      >
        Add Robot
      </ListItemButton>
    </List>
  );
};

export default RobotList;
