import IconButton from "@suid/material/IconButton";
import ReloadIcon from "@suid/icons-material/Cached";
import Link from "@suid/material/Link";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import TextField from "@suid/material/TextField";
import { Component, For } from "solid-js";
import Dialog from ".";
import { Connection, useUpdateTopics } from "../Connections";
import Table from "@suid/material/Table";
import TableRow from "@suid/material/TableRow";
import TableCell from "@suid/material/TableCell";
import { CreateHumanReadableString } from "../UnitConversion";

export interface ConnectionDialogProps {
  connection: Connection;
  close: () => void;
}

const ConnectionDialog: Component<ConnectionDialogProps> = (props) => {
  const getMessageTypeURL = (type: string, rosversion?: string) => {
    const [pkg, message] = type.split("/");
    return `http://docs.ros.org/en/${rosversion || "melodic"}/api/${pkg}/html/msg/${message}.html`;
  };
  const updateTopics = useUpdateTopics(props.connection.rosbridgeConnection.url);

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
      <h3>Network Data</h3>
      <Table>
        <TableRow>
          <TableCell>Bytes Sent</TableCell>
          <TableCell>{CreateHumanReadableString(props.connection.bytesSent, "byte")}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bytes Received</TableCell>
          <TableCell>{CreateHumanReadableString(props.connection.bytesReceived, "byte")}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Upload Bitrate</TableCell>
          <TableCell>{CreateHumanReadableString(props.connection.uploadBitrate, "bit/s")}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Download Bitrate</TableCell>
          <TableCell>{CreateHumanReadableString(props.connection.downloadBitrate, "bit/s")}</TableCell>
        </TableRow>
      </Table>
      <h3>
        Topics
        <IconButton onClick={updateTopics}>
          <ReloadIcon />
        </IconButton>
      </h3>
      <List>
        <For each={props.connection.topics}>
        {
        topic => 
          <ListItem sx={{ whiteSpace: "nowrap" }}>
          {
            topic.id
          }
            :&emsp;
            <Link
              href={getMessageTypeURL(topic.type)}
              target="_blank"
            >
            {
              topic.type
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
