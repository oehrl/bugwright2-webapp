import { useTheme } from "@suid/material";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Divider from "@suid/material/Divider";
import Grow from "@suid/material/Grow";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemText from "@suid/material/ListItemText";
import Modal from "@suid/material/Modal";
import ToggleButton from "@suid/material/ToggleButton";
import { Component, createSignal, For, Show } from "solid-js";
import { useTopics } from "./Connections";

export interface ConnectionInfoProps {
  close: () => void;
  url?: string;
}

const ConnectionInfo: Component<ConnectionInfoProps> = (props) => {
  const theme = useTheme();

  const [showTopics, setShowTopics] = createSignal(false);

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
          width: 600,
          height: "50%",
          bgcolor: theme.palette.background.paper,
          border: "2px solid #000",
          boxShadow: "24px",
          overflow: "auto",
          p: 4,
        }}
      >
        <h1>{props.url}</h1>
        <ToggleButton
          selected={showTopics()}
          onChange={() => setShowTopics(!showTopics())}
          value="Topics"
        >
          Topics
        </ToggleButton>
        <Show when={showTopics()}>
          <Grow in={showTopics()}>
            <List>
              <For each={useTopics(props.url)}>
              {
                topic => (
                  <ListItem>
                    <ListItemText>
                    {
                      `${topic.id}: ${topic.type}`
                    }
                    </ListItemText>
                  </ListItem>
                )
              }
              </For>
            </List>
          </Grow>
        </Show>
        <Divider />
        <Button
          onClick={() => props.close()}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ConnectionInfo;
