import React from "react";

import { css } from "@emotion/react";

import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import ButtonProps from "../type/index";

const LogoutButton = (props: ButtonProps) => {
  const { onClick, className = "" } = props;

  return (
    <Button className={className} css={styles.button} onClick={onClick}>
      <div>
        <LogoutIcon />
        <div>ログアウト</div>
      </div>
    </Button>
  );
};

export default LogoutButton;

const styles = {
  button: css`
    text-align: center;
  `,
};
