import React from "react";

import AddIcon from "@mui/icons-material/Add";

import IconButton from "../IconButton";

import { ButtonProps } from "../type/index";

const LoginButton = (props: ButtonProps) => (
  <IconButton {...props} icon={<AddIcon />} label="追加" />
);
export default LoginButton;
