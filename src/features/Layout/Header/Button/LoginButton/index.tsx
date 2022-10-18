import React from "react";

import LoginIcon from "@mui/icons-material/Login";

import IconButton from "../../../../../components/atoms/Button/IconButton";

import { ButtonProps } from "../../../../../components/atoms/Button/type/index";

const LoginButton = (props: ButtonProps) => (
  <IconButton {...props} icon={<LoginIcon />} label="ログイン" />
);
export default LoginButton;
