import React from "react";

import { css } from "@emotion/react";

import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

const MenuButton = () => (
  <Button css={styles.button}>
    <MenuIcon />
  </Button>
);

export default MenuButton;

const styles = {
  button: css`
    height: 60px;
    width: 60px;
    color: white;
  `,
};
