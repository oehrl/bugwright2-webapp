import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import { Component, createSignal, For, Show, useContext } from "solid-js";
import PopoverListButton from "./PopoverListButton";
import RobotIcon from "@suid/icons-material/SmartToy";
import RobotDialog from "../Dialogs/RobotDialog";
import { useRobotList, useRobots } from "../Robot";
import Divider from "@suid/material/Divider";
import IconButton from "@suid/material/IconButton";
import DeleteIcon from "@suid/icons-material/Delete";

export interface RobotsMenuProps {
}

const RobotsMenu: Component<RobotsMenuProps> = (props) => {
  const robotList = useRobotList();
  const [robotDetails, setRobotDetails] = createSignal<number|undefined>();

  return (
    <>
      <RobotDialog
        index={robotDetails()}
        close={() => setRobotDetails(undefined)}
      />
      <PopoverListButton
        title="Manage Robots"
        renderIcon={() => <RobotIcon />}
      >
        <For each={useRobots()}>
        {
          (robot, index) =>
            <ListItem>
              <ListItemButton
                onClick={() => setRobotDetails(index)}
              >
              {
                robot.name
              }
              </ListItemButton>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => robotList.remove(index())}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
        }
        </For>
        <Show when={useRobots().length > 0}>
          <Divider />
        </Show>
        <ListItem>
          <ListItemButton
            onClick={() => {
              robotList.add({ name: "New Robot" });
              setRobotDetails(useRobots().length);
            }}
          >
            Add Robot
          </ListItemButton>
        </ListItem>
      </PopoverListButton>
    </>
  );
};

export default RobotsMenu;
