import React from "react";

import { css } from "@emotion/react";

import { Typography } from "@mui/material";

export type QuestionHeadlineProps = {
  headline: string;
  className?: string;
};

const QuestionHeadline = (props: QuestionHeadlineProps) => {
  const { headline, className = "" } = props;

  return (
    <Typography
      variant="h3"
      component="h3"
      css={styles.headline}
      className={className}>
      {headline}
    </Typography>
  );
};

export default QuestionHeadline;

const styles = {
  headline: css`
    text-align: center;
    font-size: 30px;
    margin-top: 20px;
  `,
};
