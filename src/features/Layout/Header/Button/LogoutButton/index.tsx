import React from "react";

import LogoutIcon from "@mui/icons-material/Logout";

import IconButton from "../../../../../components/atoms/Button/IconButton";

import { ButtonProps } from "../../../../../components/atoms/Button/type/index";

const LogoutButton = (props: ButtonProps) => (
  <IconButton {...props} icon={<LogoutIcon />} label="ログアウト" />
);

export default LogoutButton;
