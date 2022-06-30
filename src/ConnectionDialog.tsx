import { useTheme } from "@suid/material";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Modal from "@suid/material/Modal";
import TextField from "@suid/material/TextField";
import { Component, createSignal } from "solid-js";
import { ROSBridgeConnection } from "./ROSBridge";

export interface ConnectionDialogProps {
  open: boolean;
  url?: string;
  setURL: (url: string|null) => void;
}

const ConnectionDialog: Component<ConnectionDialogProps> = (props) => {
  const [value, setValue] = createSignal("ws://localhost:9090");
  const [isConnecting, setIsConnecting] = createSignal(false);
  const theme = useTheme();
  let textField: any;

  return (
    <Modal
      open={props.open}
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
          disabled={isConnecting()}
        />
        <Button
          onClick={() => props.setURL(value())}
          disabled={isConnecting()}
        >
          Connect
        </Button>
        <Button
          onClick={() => props.setURL(null)}
          disabled={isConnecting()}
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default ConnectionDialog;
