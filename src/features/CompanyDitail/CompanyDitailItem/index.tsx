import React from "react";

import { css } from "@emotion/react";
import { Divider, Typography } from "@mui/material";

export type CompanyDitailItemProps = {
  label: string;
  element?: JSX.Element;
  className?: string;
};

const CompanyDitailItem = (props: CompanyDitailItemProps) => {
  const { label, element, className = "" } = props;

  return (
    <div className={className}>
      <div css={styles.container}>
        <Typography variant="h3" component="h3" css={styles.label}>
          {label}
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

export default CompanyDitailItem;

const styles = {
  container: css`
    display: grid;
    grid-template-columns: 1fr 40%;
    align-items: center;
    gap: 10px;
    padding: 20px 10px;
  `,
  label: css`
    font-size: clamp(1.5rem, 1.5vw + 1rem, 2.25rem);
  `,
  unregistered: css`
    text-align: center;
    font-size: clamp(1.5rem, 1.5vw + 1rem, 2.25rem);
  `,
};
