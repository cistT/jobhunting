import React from "react";

import classNames from "classnames";

import { Divider, ListItem, Typography } from "@mui/material";

import ListItemProps from "..";

import styles from "./BothEndsTextButton.module.scss";
import commonStyles from "../index.module.scss";

export type BothEndsTextButtonProps = ListItemProps & {
  onClick: (event?: React.MouseEvent) => void;
};

const BothEndsTextButton = (props: BothEndsTextButtonProps) => {
  const {
    leftText,
    rightText,
    onClick,
    underline = false,
    className = "",
  } = props;

  return (
    <div
      className={classNames(
        commonStyles["container"],
        styles["container"],
        className,
      )}>
      <ListItem
        className={classNames(
          commonStyles["text-container"],
          styles["text-container"],
        )}
        onClick={onClick}>
        <Typography
          variant="h3"
          component="h3"
          className={commonStyles["text"]}>
          {leftText}
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          className={commonStyles["text"]}>
          {rightText}
        </Typography>
      </ListItem>
      {underline && <Divider />}
    </div>
  );
};

export default BothEndsTextButton;
