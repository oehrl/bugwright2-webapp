import Link from "@suid/material/Link";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import TextField from "@suid/material/TextField";
import { Component, For } from "solid-js";
import Dialog from ".";
import { Connection } from "../Connections";

export interface ConnectionDialogProps {
  connection: Connection;
  close: () => void;
}

const ConnectionDialog: Component<ConnectionDialogProps> = (props) => {
  const getMessageTypeURL = (type: string, rosversion?: string) => {
    const [pkg, message] = type.split("/");
    return `http://docs.ros.org/en/${rosversion || "melodic"}/api/${pkg}/html/msg/${message}.html`;
  };

  return (
    <Dialog
      open={true}
      title="Connection Details"
      close={props.close}
      width={800}
    >
      <TextField
        label="URL"
        variant="standard"
        value={props.connection.rosbridgeConnection.url}
        InputProps={{
          readOnly: true
        }}
      />
      <h3>Topics</h3>
      <List>
        <For each={Object.keys(props.connection.topics)}>
        {
        topic => 
          <ListItem sx={{ whiteSpace: "nowrap" }}>
          {
            topic
          }
            :&emsp;
            <Link
              href={getMessageTypeURL(props.connection.topics[topic])}
              target="_blank"
            >
            {
              props.connection.topics[topic]
            }
            </Link>
          </ListItem>
        }
        </For>
      </List>
    </Dialog>
  );
};

export default ConnectionDialog;
