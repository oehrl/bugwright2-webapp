import IconButton from "@suid/material/IconButton";
import { Component, createSignal, JSXElement, PropsWithChildren } from "solid-js";
import PowerIcon from "@suid/icons-material/Power";
import List from "@suid/material/List";
import Popover from "@suid/material/Popover";

export interface PopoverListButtonProps extends PropsWithChildren {
  title?: string;
  renderIcon?: () => JSXElement;
}

const PopoverListButton: Component<PopoverListButtonProps> = (props: PopoverListButtonProps) => {
  const [connectionsButtonElement, setConnectionsButtonElement] = createSignal<HTMLButtonElement | null>(null);
  
  const handleClick = (
    event: MouseEvent & { currentTarget: HTMLButtonElement }
  ) => {
    setConnectionsButtonElement(event.currentTarget);
  };

  const handleClose = () => {
    setConnectionsButtonElement(null);
  };

  const open = () => Boolean(connectionsButtonElement());
  const id = () => (open() ? "simple-popover" : undefined);

  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={handleClick}
      title={props.title}
    >
      {
        props.renderIcon ? props.renderIcon() : <PowerIcon />
      }
      <Popover
        id={id()}
        open={open()}
        anchorEl={connectionsButtonElement()}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List>
        {
          props.children
        }
        </List>
      </Popover>
    </IconButton>
  );
}

export default PopoverListButton;
