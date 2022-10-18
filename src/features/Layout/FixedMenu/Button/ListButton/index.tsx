import React from "react";

import ListIcon from "@mui/icons-material/List";

import IconButton from "../../../../../components/atoms/Button/IconButton";

import { ButtonProps } from "../../../../../components/atoms/Button/type/index";

const ListButton = (props: ButtonProps) => (
  <IconButton {...props} icon={<ListIcon />} label="一覧" />
);
export default ListButton;
