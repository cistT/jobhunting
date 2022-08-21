import React from "react";

import { css } from "@emotion/react";
import { Divider, Typography } from "@mui/material";

export type CompanyItemProps = {
  listName: string;
  element?: JSX.Element;
  className?: string;
};

const CompanyItem = (props: CompanyItemProps) => {
  const { listName, element, className = "" } = props;

  return (
    <div className={className}>
      <div css={styles.container}>
        <Typography variant="h3" component="h3" css={styles.listName}>
          {listName}
        </Typography>
        {element ?? (
          <Typography variant="h5" component="h5" css={styles.unregistered}>
            未登録
          </Typography>
        )}
      </div>
      <Divider />
    </div>
  );
};

export default CompanyItem;

const styles = {
  container: css`
    display: grid;
    grid-template-columns: 1fr 40%;
    align-items: end;
    padding-top: 10px;
    padding-bottom: 5px;
  `,
  listName: css`
    font-size: 26px;
    padding-left: 20px;
  `,
  unregistered: css`
    text-align: center;
  `,
};
