import React from "react";

import { css } from "@emotion/react";

import { ListItem, ListItemText } from "@mui/material";

import ListItemProps from "../type";

const IconListItem = (props: ListItemProps) => {
  const { icon, label, onClick = () => undefined, className = "" } = props;
  return (
    <>
      <ListItem css={styles.listItem} className={className} onClick={onClick}>
        {icon}
        <ListItemText primary={label} />
      </ListItem>
    </>
  );
};

export default IconListItem;

const styles = {
  listItem: css`
    height: 60px;
    width: 40vw;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    color: #5f76f8;
    :hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `,
};
