import { useTheme } from "@suid/material";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Modal from "@suid/material/Modal";
import TextField from "@suid/material/TextField";
import { Component, createSignal } from "solid-js";
import { RosbridgeConnection } from "./Rosbridge";

export interface ConnectionDialogProps {
  connection: RosbridgeConnection|null;
  setConnection: (connection: RosbridgeConnection) => void;
}

const ConnectionDialog: Component<ConnectionDialogProps> = (props) => {
  const [value, setValue] = createSignal("ws://192.168.1.213:9090");
  const [isConnecting, setIsConnecting] = createSignal(false);
  const theme = useTheme();
  let textField: any;

  return (
    <Modal
      open={props.connection === null}
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
          onChange={setValue}
          disabled={isConnecting()}
        />
        <Button
          onClick={() => {
            new RosbridgeConnection(
              value(),
              connection => {
                props.setConnection(connection);
                setIsConnecting(false);
              },
              () => {
                setIsConnecting(false);
              }
            );
            setIsConnecting(true);
          }}
          disabled={isConnecting()}
        >
          Connect
        </Button>
      </Box>
    </Modal>
  );
};

export default ConnectionDialog;
