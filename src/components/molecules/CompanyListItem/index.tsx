import React from "react";

import { css } from "@emotion/react";

import { Divider, ListItem, Typography } from "@mui/material";

export type CompanyListItemProps = {
  label: string;
  item?: JSX.Element;
  bottom?: boolean;
  onClick?: (event?: React.MouseEvent) => void;
  className?: string;
};

const CompanyListItem = (props: CompanyListItemProps) => {
  const {
    label,
    item = undefined,
    bottom = false,
    onClick = () => undefined,
    className = "",
  } = props;

  return (
    <>
      <ListItem
        css={bottom ? styles.containerBottom : styles.container}
        onClick={onClick}
        className={className}>
        <>
          <Typography variant="h3" component="h3" css={styles.label}>
            {label}
          </Typography>
          <div>{item}</div>
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
    grid-template-columns: 70% 1fr;
    padding: 20px 10px;
    :hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `,
  containerBottom: css`
    display: grid;
    grid-template-rows: 70% 1fr;
    justify-content: center;
    gap: 10px;
    text-align: center;
    padding: 5px 10px 30px 10px;
    :hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `,
  label: css`
    font-size: clamp(1.5rem, 1vw + 1rem, 2.25rem);
    overflow-wrap: break-word;
  `,
};
