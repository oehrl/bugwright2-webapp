import Button from "@suid/material/Button";
import FormControl from "@suid/material/FormControl";
import TextField from "@suid/material/TextField";
import { Component, createSignal, useContext } from "solid-js";
import Dialog from ".";

export interface NewConnectionDialogProps {
  close: () => void;
  save: (url: string) => void;
}

const NewConnectionDialog: Component<NewConnectionDialogProps> = (props) => {
  const [url, setURL] = createSignal("wss://localhost:9090");

  return (
    <Dialog
      open={true}
      title="Connection Details"
      close={props.close}
    >
      <FormControl>
        <TextField
          label="URL"
          variant="standard"
          value={url()}
          onChange={(_, url) => setURL(url)}
        />
        <Button
          variant="text"
          onClick={() => props.save(url())}
        >
          Connect
        </Button>
      </FormControl>
    </Dialog>
  );
};

export default NewConnectionDialog;
