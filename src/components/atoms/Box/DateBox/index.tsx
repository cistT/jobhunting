import React from "react";

import { css } from "@emotion/react";

import { Typography } from "@mui/material";

const extractDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return { year, month, day };
};

export type DateBoxProps = {
  date: Date;
  className?: string;
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
    height: 100%;
    width: 100%;
    font-size: 26px;
    text-align: center;
  `,
};
