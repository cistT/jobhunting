import React from "react";

import { css } from "@emotion/react";

import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

import ButtonProps from "../type/index";

const MenuButton = (props: ButtonProps) => {
  return (
    <Button css={styles.button} {...props}>
      <MenuIcon />
    </Button>
  );
};

export default MenuButton;

const styles = {
  button: css`
    height: 60px;
    width: 60px;
  `,
};
