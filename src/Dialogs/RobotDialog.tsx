import Button from "@suid/material/Button";
import FormControl from "@suid/material/FormControl";
import TextField from "@suid/material/TextField";
import { Component, createEffect, createSignal, For, Show } from "solid-js";
import Dialog from ".";
import { useConnectionURLs, useTopicsWithType } from "../Connections";
import { useRobot, useRobotList } from "../Robot";

interface TopicSelectorPropsAllowEmpty {
  connectionURL: string;
  type: string|string[];
  allowEmpty: true;
  value?: string;
  onChange: (topic?: string) => void;
}

interface TopicSelectorPropsDontAllowEmpty {
  connectionURL: string;
  type: string|string[];
  allowEmpty?: false;
  value: string;
  onChange: (topic: string) => void;
}

type TopicSelectorProps = TopicSelectorPropsAllowEmpty | TopicSelectorPropsDontAllowEmpty;

const TopicSelector: Component<TopicSelectorProps> = (props) => {
  const topicsWithType = useTopicsWithType();

  return (
    <select
      onChange={element => props.onChange(element.currentTarget.value)}
    >
      <Show when={props.allowEmpty}>
        <option></option>
      </Show>
      <For each={topicsWithType(props.connectionURL, props.type)}>
      {
      topic => 
        <option
          selected={topic.id === props.value}
        >
        {
          topic.id
        }
        </option>
      }
      </For>
    </select>
  );
}

export interface RobotDialogProps {
  index?: number;
  close: () => void;
}

const RobotDialog: Component<RobotDialogProps> = (props) => {
  const robotList = useRobotList();
  const robot = () => typeof props.index === "number" ? useRobot(props.index) : undefined;

  const [name, setName] = createSignal(robot()?.name);
  const [connection, setConnection] = createSignal(robot()?.connection);
  const [poseTopic, setPoseTopic] = createSignal(robot()?.poseTopic);
  const connectionURLs = useConnectionURLs();

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
          <For each={connectionURLs()}>
          {
            availableConnection => 
              <option
                selected={availableConnection === connection()}
              >
              {
                availableConnection
              }
              </option>
          }
          </For>
        </select>
        <Show when={connection()}>
        {
        connection =>
          <TopicSelector
            connectionURL={connection}
            type={["geometry_msgs/PointStamped", "geometry_msgs/PoseStamped"]}
            allowEmpty={true}
            onChange={value => setPoseTopic(value)}
            value={poseTopic()}
          />
        }
        </Show>
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
