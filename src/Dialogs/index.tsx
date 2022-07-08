import { useTheme } from "@suid/material";
import Box from "@suid/material/Box";
import CloseIcon from "@suid/icons-material/Close";
import IconButton from "@suid/material/IconButton";
import Modal from "@suid/material/Modal";
import { Component, PropsWithChildren } from "solid-js";

export interface DialogProps extends PropsWithChildren {
  open: boolean;
  close?: () => void;
  title?: string;
  width?: number;
  height?: number;
}

const Dialog: Component<DialogProps> = (props) => {
  const theme = useTheme();
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
          width: props.width || 400,
          height: props.height || 400,
          bgcolor: theme.palette.background.paper,
          border: "2px solid #000",
          boxShadow: "24px",
          p: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
          display: "flex",
          flexDirection: "row",
          }}
        >
          <Box
            sx={{
              flexGrow: 1
            }}
          >
            <h1>
            {
              props.title
            }
            </h1>
          </Box>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              title="Close"
              onClick={props.close}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            overflow: "auto"
          }}
        >
        { props.children }
        </Box>
      </Box>
    </Modal>
  );
};

export default Dialog;
