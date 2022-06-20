import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import Paper from "@suid/material/Paper";
import Skeleton from "@suid/material/Skeleton";
import { Component, For, JSX, onCleanup, onMount } from "solid-js";
import AreaOfInterest, { AreaOfInterestData } from "./AreaOfInterest";

export interface AreaOfInterestListProps  {
  style?: JSX.CSSProperties | string;
  data: AreaOfInterestData[];
  selectedIndex: number | null;
  onSelectionChanged: (data: number | null) => void;
}

const AreaOfInterestList: Component<AreaOfInterestListProps> = (props) => {
  return (
    <Paper style={props.style}>
      <List>
        <For each={props.data}>
          {
            (data, index) =>
              <ListItem id={`${data.id}`}>
                <ListItemButton
                  onClick={() => props.onSelectionChanged(index())}
                  style={{ display: "flex", "flex-direction": "column"}}
                >
                  {`#${data.id}`}
                  <Skeleton variant="rectangular" width={100} height={100} />
                </ListItemButton>
              </ListItem>
          }
        </For>
      </List>
    </Paper>
  );
};

export default AreaOfInterestList;
