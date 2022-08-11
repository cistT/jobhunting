import React from "react";

import { css } from "@emotion/react";

import { Typography } from "@mui/material";

import DateBoxProps from "./type/index";

const extractDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return { year, month, day };
};

const DateBox = (props: DateBoxProps) => {
  const { date, className } = props;
  const { year, month, day } = extractDate(date);
  return (
    <Typography
      variant="h3"
      component="h3"
      css={styles.date}
      className={className}>
      {year} / {month} / {day}
    </Typography>
  );
};

export default DateBox;

const styles = {
  date: css`
    height: 36px;
    width: 200px;
    font-size: 26px;
    text-align: center;
  `,
};
