import { Divider, ListItem, Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";
import VerticalArrangementTextProps from "..";
import styles from "./VerticalArrangementTextButton.module.scss";
import commonStyles from "../index.module.scss";

export type VerticalArrangementTextButtonProps =
  VerticalArrangementTextProps & {
    onClick: (event?: React.MouseEvent) => void;
  };

const VerticalArrangementTextButton = (
  props: VerticalArrangementTextButtonProps,
) => {
  const {
    upText,
    underText,
    className = "",
    onClick,
    underline = false,
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

export default VerticalArrangementTextButton;
