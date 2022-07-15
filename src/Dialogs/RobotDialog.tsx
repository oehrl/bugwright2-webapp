import Button from "@suid/material/Button";
import FormControl from "@suid/material/FormControl";
import TextField from "@suid/material/TextField";
import { Component, createEffect, createSignal, For, Show, useContext } from "solid-js";
import Dialog from ".";
import { ConnectionsContext, topicsWithTypes } from "../Connections";
import { useRobot, useRobotList } from "../Robot";

export interface RobotDialogProps {
  index?: number;
  close: () => void;
}

const RobotDialog: Component<RobotDialogProps> = (props) => {
  const connectionsContext = useContext(ConnectionsContext);

  const robotList = useRobotList();
  const robot = () => typeof props.index === "number" ? useRobot(props.index) : undefined;

  const [name, setName] = createSignal(robot()?.name);
  const [connection, setConnection] = createSignal(robot()?.connection);
  // const [prefix, setPrefix] = createSignal(robot()?.prefix);
  const [poseTopic, setPoseTopic] = createSignal(robot()?.poseTopic);
  // const connections = useConnections();

  createEffect(() => {
    const robotDetails = robot();
    setName(robotDetails?.name);
    setConnection(robotDetails?.connection);
    // setPrefix(robotDetails?.prefix);
    setPoseTopic(robotDetails?.poseTopic);
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
          <For each={Object.values(connectionsContext?.connections || {})}>
          {
            availableConnection => 
              <option
                selected={availableConnection.rosbridgeConnection.url === connection()}
              >
              {
                availableConnection.rosbridgeConnection.url
              }
              </option>
          }
          </For>
        </select>
        <select
          onChange={element => setPoseTopic(element.currentTarget.value)}
        >
          <option></option>
          <Show when={connectionsContext?.connections[connection() || ""]}>
          {
          connection =>
            <For
              each={topicsWithTypes(
                connection,
                ["geometry_msgs/PointStamped", "geometry_msgs/PoseStamped"])
              }
            >
            {
            topic => 
              <option
                selected={topic === poseTopic()}
              >
              {
                topic
              }
              </option>
            }
            </For>
          }
          </Show>
        </select>
        <Button
          variant="text"
          onClick={() => {
            robotList.update(props.index as number, {
              name: name(),
              connection: connection(),
              poseTopic: poseTopic(),
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
