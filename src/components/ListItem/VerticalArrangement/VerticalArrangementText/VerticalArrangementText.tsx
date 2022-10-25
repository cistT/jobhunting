import React from "react";

import classNames from "classnames";

import { Divider, ListItem, Typography } from "@mui/material";

import VerticalArrangementTextProps from "..";

import commonStyles from "../index.module.scss";

const VerticalArrangementText = (props: VerticalArrangementTextProps) => {
  const { upText, underText, className = "", underline = false } = props;

  return (
    <div className={classNames(commonStyles["container"], className)}>
      <ListItem className={commonStyles["text-container"]}>
        <Typography
          variant="h3"
          component="h3"
          className={commonStyles["text"]}>
          {upText}
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          className={commonStyles["text"]}>
          {underText}
        </Typography>
      </ListItem>
      {underline && <Divider />}
    </div>
  );
};

export default VerticalArrangementText;
