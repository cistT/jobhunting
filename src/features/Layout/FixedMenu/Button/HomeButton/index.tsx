import React from "react";

import HomeIcon from "@mui/icons-material/Home";

import IconButton from "../../../../../components/atoms/Button/IconButton";

import { ButtonProps } from "../../../../../components/atoms/Button/type/index";

const HomeButton = (props: ButtonProps) => (
  <IconButton {...props} icon={<HomeIcon />} label="ホーム" />
);

export default HomeButton;
