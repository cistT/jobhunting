import React from "react";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import IconButton from "../IconButton";

import { ButtonProps } from "../type/index";

const CalenderButton = (props: ButtonProps) => (
  <IconButton {...props} icon={<CalendarMonthIcon />} label="予定" />
);
export default CalenderButton;