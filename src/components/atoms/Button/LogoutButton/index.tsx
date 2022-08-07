import React from "react";

import LogoutIcon from "@mui/icons-material/Logout";

import IconButton from "../IconButton";

import { ButtonProps } from "../type/index";

const LogoutButton = (props: ButtonProps) => (
  <IconButton {...props} icon={<LogoutIcon />} label="ログアウト" />
);

export default LogoutButton;
