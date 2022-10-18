import React from "react";

import AddIcon from "@mui/icons-material/Add";

import IconButton from "../../../../../components/atoms/Button/IconButton";

import { ButtonProps } from "../../../../../components/atoms/Button/type/index";

const AddButton = (props: ButtonProps) => (
  <IconButton {...props} icon={<AddIcon />} label="登録" />
);
export default AddButton;
