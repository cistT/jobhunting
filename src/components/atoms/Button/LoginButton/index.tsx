import React from "react";

import LoginIcon from "@mui/icons-material/Login";

import IconButton from "../IconButton";

import { ButtonProps } from "../type/index";

const LoginButton = (props: ButtonProps) => (
  <IconButton {...props} icon={<LoginIcon />} label="ログイン" />
);
export default LoginButton;
