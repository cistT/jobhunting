import React from "react";

import { css } from "@emotion/react";

import { Divider, Typography } from "@mui/material";

import CompanyDateList, { CompanyDateListProps } from "../CompanyDateList";

export type HomeContentsProps = CompanyDateListProps;

const HomeContents = (props: HomeContentsProps) => {
  const { companies } = props;

  return (
    <div css={styles.container}>
      <Typography variant="h1" component="h1" css={styles.title}>
        直近の予定
      </Typography>
      <Divider />
      <CompanyDateList companies={companies} />
    </div>
  );
};

export default HomeContents;

const styles = {
  container: css`
    text-align: center;
  `,
  title: css`
    font-size: 32px;
    margin-bottom: 10px;
  `,
};
