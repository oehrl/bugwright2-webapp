import Button from "@suid/material/Button";
import FormControl from "@suid/material/FormControl";
import TextField from "@suid/material/TextField";
import { Component, createEffect, createSignal, For, Show } from "solid-js";
import Dialog from ".";
import { useConnections } from "../Connections";
import { useRobot, useRobotList } from "../Robot";

export interface RobotDialogProps {
  index?: number;
  close: () => void;
}

const RobotDialog: Component<RobotDialogProps> = (props) => {
  const robotList = useRobotList();
  const robot = () => typeof props.index === "number" ? useRobot(props.index) : undefined;

  const [name, setName] = createSignal(robot()?.name);
  const [connection, setConnection] = createSignal(robot()?.connection);
  // const [prefix, setPrefix] = createSignal(robot()?.prefix);

  createEffect(() => {
    const robotDetails = robot();
    setName(robotDetails?.name);
    setConnection(robotDetails?.connection);
    // setPrefix(robotDetails?.prefix);
  });

  return (
    <Dialog
      open={typeof props.index !== "undefined"}
      title="Robot Details"
      close={props.close}
    >
      <FormControl>
        <TextField
          label="Name"
          variant="standard"
          value={name() || ""}
          onChange={(_, name) => setName(name)}
        />
        <select
          onChange={element => setConnection(element.currentTarget.value)}
        >
          <option></option>
          <For each={useConnections()}>
          {
            availableConnection => 
              <option
                selected={availableConnection.url === connection()}
              >
              {
                availableConnection.url
              }
              </option>
          }
          </For>
        </select>
        <Button
          variant="text"
          onClick={() => {
            robotList.update(props.index as number, {
              name: name(),
              connection: connection(),
            });
            props.close();
          }}
        >
          Save
        </Button>
      </FormControl>
    </Dialog>
  );
};

export default RobotDialog;
