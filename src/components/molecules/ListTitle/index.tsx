import React from "react";

import { css } from "@emotion/react";

import { Typography, Divider } from "@mui/material";

export type ListTitleProps = {
  title: string;
  className?: string;
};

const ListTitle = (props: ListTitleProps) => {
  const { title, className = "" } = props;

  return (
    <div css={styles.container}>
      <Typography
        variant="h1"
        component="h1"
        css={styles.title}
        className={className}>
        {title}
      </Typography>
      <Divider />
    </div>
  );
};

export default ListTitle;

const styles = {
  container: css`
    text-align: center;
  `,
  title: css`
    font-size: 32px;
    margin-bottom: 10px;
  `,
};
