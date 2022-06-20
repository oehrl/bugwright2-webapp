import IconButton from "@suid/material/IconButton";
import { Component, JSX } from "solid-js";
import CloseIcon from "@suid/icons-material/Close";
import Button from "@suid/material/Button";
import Skeleton from "@suid/material/Skeleton";
import Box from "@suid/system/Box";

export interface AreaOfInterestData {
  id: number;
  severity: number;
  nextInspection: number;
  notes: string;
  audioNotes: any[];
}

export interface AreaOfInterestProps {
  style?: JSX.CSSProperties | string;
  data: AreaOfInterestData[];
  selectedIndex: number | null;
  onSelectionChanged: (data: number | null) => void;
}

const AreaOfInterest: Component<AreaOfInterestProps> = (props) => {
  props.style;
  if (props.selectedIndex === null) {
    return <div />;
  }

  return (
    <div style={props.style}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: "100%" }}>
        <h4 style={{ "margin": 0, "flex-grow": 1 }}>
          {`#${props.data[props.selectedIndex].id}`}
        </h4>
        <IconButton onClick={() => props.onSelectionChanged(null)}>
          <CloseIcon />
        </IconButton>
      </Box>
        <Skeleton variant="rectangular" width={180} height={180} />
      <div>Severity: {props.data[props.selectedIndex].severity}/10</div>
      <div>NextInspection: {props.data[props.selectedIndex].nextInspection}</div>
      <div>Notes: {props.data[props.selectedIndex].notes}</div>
      <div>AudioNotes: {props.data[props.selectedIndex].audioNotes.length}</div>
      <Button>
        More Info
      </Button>
    </div>
  );
};

export default AreaOfInterest;
