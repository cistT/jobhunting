import React from "react";

import { css } from "@emotion/react";

import { TextField, Typography } from "@mui/material";

export type LabelFieldProps = {
  label: string;
  ref?: React.RefObject<HTMLInputElement>;
  className?: string;
};

const LabelField = (props: LabelFieldProps) => {
  const { label, ref, className = "" } = props;

  return (
    <div css={styles.container} className={className}>
      <Typography variant="h3" component="h3" css={styles.explanation}>
        {label}
      </Typography>
      <TextField label={label} css={styles.field} ref={ref} />
    </div>
  );
};

export default LabelField;

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
