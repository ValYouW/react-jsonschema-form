import React from "react";

import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Remove from "@material-ui/icons/Remove";
import { IconButtonProps as MuiIconButtonProps } from "@material-ui/core/IconButton";

const mappings: any = {
  remove: <Remove fontSize="small" />,
  plus: <Add fontSize="small" />,
  "arrow-up": <ArrowUpward fontSize="small" />,
  "arrow-down": <ArrowDownward fontSize="small" />,
};

type IconButtonProps = MuiIconButtonProps & {
  icon: string;
};

const IconButton = (props: IconButtonProps) => {
  const { icon, className, ...otherProps } = props;
  return (
    <Button {...otherProps} size="small">
      {mappings[icon]}
    </Button>
  );
};

export default IconButton;
