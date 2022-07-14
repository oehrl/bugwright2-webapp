import Button from "@suid/material/Button";
import FormControl from "@suid/material/FormControl";
import TextField from "@suid/material/TextField";
import { Component, createSignal, useContext } from "solid-js";
import Dialog from ".";
import { ConnectionsContext } from "../Connections";

export interface ConnectionDialogProps {
  url?: string;
  close: () => void;
  save: (url: string) => void;
}

const ConnectionDialog: Component<ConnectionDialogProps> = (props) => {
  const connectionsContext = useContext(ConnectionsContext);
  const connection = () => 
    typeof(props.url) === "string" && props.url !== "" ?
      connectionsContext?.connections[props.url] : undefined;

  const [url, setURL] = createSignal(
    connection()?.socket?.url || "ws://localhost:9090"
  );

  return (
    <Dialog
      open={typeof props.url !== "undefined"}
      title="Connection Details"
      close={props.close}
    >
      <FormControl>
        <TextField
          label="URL"
          variant="standard"
          value={url()}
          onChange={(_, url) => setURL(url)}
          InputProps={{
            readOnly: !!connection()?.socket
          }}
        />
        <Button
          variant="text"
          onClick={() => props.save(url())}
        >
          Save
        </Button>
      </FormControl>
    </Dialog>
  );
};

export default ConnectionDialog;
