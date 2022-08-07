import React from "react";

import { css } from "@emotion/react";

import { Button } from "@mui/material";

import { IconButtonProps } from "../type/index";

const IconButton = (props: IconButtonProps) => {
  const { onClick, icon, text = "", className = "" } = props;

  return (
    <Button css={[styles.button]} className={className} onClick={onClick}>
      <div>
        {icon}
        <div>{text}</div>
      </div>
    </Button>
  );
};

export default IconButton;

const styles = {
  button: css`
    text-align: center;
  `,
};
