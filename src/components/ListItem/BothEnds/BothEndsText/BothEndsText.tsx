import React from "react";

import classNames from "classnames";

import { Divider, ListItem, Typography } from "@mui/material";

import ListItemProps from "..";

import commonStyles from "../index.module.scss";

export type BothEndsTextProps = ListItemProps;

const BothEndsText = (props: BothEndsTextProps) => {
  const { leftText, rightText, underline = false, className = "" } = props;

  return (
    <div
      className={classNames(
        commonStyles["container"],

        className,
      )}>
      <ListItem className={commonStyles["text-container"]}>
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

export default BothEndsText;
