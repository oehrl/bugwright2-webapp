import { useTheme } from "@suid/material";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Modal from "@suid/material/Modal";
import TextField from "@suid/material/TextField";
import { Component, createEffect, createSignal } from "solid-js";

export interface RobotDialogProps {
  url?: string;
  setURL: (url: string|null) => void;
}

const RobotDialog: Component<RobotDialogProps> = (props) => {
  const [value, setValue] = createSignal("ws://localhost:9090");
  const theme = useTheme();
  let textField: any;

  console.log(props.url);
  createEffect(() => console.log(props.url));

  return (
    <Modal
      open={!!props.url}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: theme.palette.background.paper,
          border: "2px solid #000",
          boxShadow: "24px",
          p: 4,
        }}
      >
        <TextField
          inputRef={textField}
          fullWidth
          variant="standard"
          placeholder="ROSBridge IP and port"
          value={value()}
          onChange={(_, value) => setValue(value)}
        />
        <Button
          onClick={() => props.setURL(value())}
        >
          Connect
        </Button>
        <Button
          onClick={() => props.setURL(null)}
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default RobotDialog;
