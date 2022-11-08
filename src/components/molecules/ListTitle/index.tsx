import React from "react";

import classNames from "classnames";

import { Typography, Divider } from "@mui/material";

import styles from "./index.module.scss";

export type ListTitleProps = {
  title: string;
  className?: string;
};

const ListTitle = (props: ListTitleProps) => {
  const { title, className = "" } = props;

  return (
    <div className={classNames(styles["container"], className)}>
      <Typography
        variant="h2"
        component="h2"
        css={styles.title}
        className={styles["title"]}>
        {title}
      </Typography>
      <Divider />
    </div>
  );
};

export default ListTitle;
