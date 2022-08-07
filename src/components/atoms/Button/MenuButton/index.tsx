import React from "react";

import MenuIcon from "@mui/icons-material/Menu";

import IconButton from "../IconButton";

import { ButtonProps } from "../type/index";

const MenuButton = (props: ButtonProps) => (
  <IconButton {...props} icon={<MenuIcon />} />
);

export default MenuButton;
