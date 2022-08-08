import React from "react";

import { css } from "@emotion/react";

import { ListItem, ListItemText } from "@mui/material";

import ListItemProps from "../type";

const TextListItem = (props: ListItemProps) => {
  const { text, onClick = () => undefined, className = "" } = props;
  return (
    <>
      <ListItem css={styles.listItem} className={className} onClick={onClick}>
        <ListItemText primary={text} />
      </ListItem>
    </>
  );
};

export default TextListItem;

const styles = {
  listItem: css`
    height: 60px;
    width: 200px;
    border: 1px solid black;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    color: #5f76f8;
    :hover {
      color: white;
      background-color: #5f76f8;
      border: none;
    }
  `,
};
