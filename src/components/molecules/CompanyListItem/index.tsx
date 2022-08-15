import React from "react";

import { css } from "@emotion/react";

import { Divider, ListItem, Typography } from "@mui/material";

export type CompanyListItemProps = {
  label: string;
  rightItem?: React.ReactElement<any, any>;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  className?: string;
};

const CompanyListItem = (props: CompanyListItemProps) => {
  const {
    label,
    rightItem = undefined,
    onClick = () => undefined,
    className = "",
  } = props;
  return (
    <>
      <ListItem css={styles.container} onClick={onClick} className={className}>
        <>
          <Typography variant="h3" component="h3" css={styles.label}>
            {label}
          </Typography>
          {rightItem}
        </>
      </ListItem>

      <Divider />
    </>
  );
};

export default CompanyListItem;
const styles = {
  container: css`
    display: grid;
    grid-template-columns: 60% 40%;
    padding-bottom: 5px;
    :hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `,
  label: css`
    inline-size: 70%;
    font-size: 26px;
    overflow-wrap: break-word;
  `,
};
