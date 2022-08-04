import React from "react";

import { css } from "@emotion/react";

import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

import ButtonProps from "../type/index";

const LoginButton = (props: ButtonProps) => {
  const { onClick } = props;

  return (
    <Button css={styles.button} onClick={onClick}>
      <div>
        <LoginIcon />
        <div>ログイン</div>
      </div>
    </Button>
  );
};

export default LoginButton;

const styles = {
  button: css`
    text-align: center;
    color: white;
  `,
};
