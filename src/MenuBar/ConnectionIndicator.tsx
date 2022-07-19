import IconButton from "@suid/material/IconButton";
import CircleIcon from "@suid/icons-material/Circle";
import ConnectIcon from "@suid/icons-material/Power";
import DisconnectIcon from "@suid/icons-material/PowerOff";
import { Connection, ConnectionsContext } from "../Connections";
import { Component, createSignal, Match, Show, Switch, useContext } from "solid-js";
import { ConnectionStatus } from "../Rosbridge/Connection";

export interface ConnectionIndicatorProps  {
  connection: Connection;
}

function getConnectionStatusColor(status?: ConnectionStatus) {
  switch (status) {
    case "Not Connected": return "error";
    case "Connecting": return "warning";
    case "Connected": return "success";
    default: return "error";
  }
}

const ConnectionIndicator: Component<ConnectionIndicatorProps> = (props) => {
  const connectionsContext = useContext(ConnectionsContext);
  const [isHovering, setIsHovering] = createSignal(false);

  return (
    <IconButton
      size="small"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => 
        props.connection.status === "Connected"
          ? connectionsContext?.disconnect(props.connection.rosbridgeConnection.url)
          : connectionsContext?.connect(props.connection.rosbridgeConnection.url)
      }
      title={ props.connection.status === "Connected" ? "Disconnect" : "Connect" }
    >
      <Switch>
        <Match when={!isHovering()}>
          <CircleIcon
            color={getConnectionStatusColor(props.connection.status)}
          />
        </Match>
        <Match when={isHovering()}>
          <Show
            when={props.connection.status === "Connected"}
            fallback={<ConnectIcon color="success" />}
          >
            <DisconnectIcon color="error" />
          </Show>
        </Match>
      </Switch>
    </IconButton>
  );
}

export default ConnectionIndicator;
