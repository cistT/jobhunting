import React from "react";

import { css } from "@emotion/react";

import { Typography } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";
import Calendar from "components/atoms/Calendar/Calendar";

export type LabelCalendarFieldProps = {
  label: string;
  register: UseFormRegisterReturn;
  defaultValue?: Date;
  className?: string;
};

const LabelCalendarField = (props: LabelCalendarFieldProps) => {
  const { label, register, defaultValue, className = "" } = props;

  return (
    <div css={styles.container} className={className}>
      <Typography variant="h3" component="h3" css={styles.explanation}>
        {label}
      </Typography>
      <Calendar register={register} defaultValue={defaultValue} />
    </div>
  );
};

export default LabelCalendarField;

const styles = {
  container: css`
    display: grid;
    grid-template-rows: 30px 50px;
    gap: 10px;
  `,
  explanation: css`
    font-size: 20px;
  `,
  field: css`
    width: 100%;
  `,
};
