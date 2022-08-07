import React from "react";

import HomeIcon from "@mui/icons-material/Home";

import IconButton from "../IconButton";

import { ButtonProps } from "../type/index";

const HomeButton = (props: ButtonProps) => {
  return <IconButton {...props} icon={<HomeIcon />} label="ホーム" />;
};

export default HomeButton;
