import React from "react";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import IconButton from "../../../../../components/atoms/Button/IconButton";

import { ButtonProps } from "../../../../../components/atoms/Button/type/index";

const CalenderButton = (props: ButtonProps) => (
  <IconButton {...props} icon={<CalendarMonthIcon />} label="予定" />
);
export default CalenderButton;
