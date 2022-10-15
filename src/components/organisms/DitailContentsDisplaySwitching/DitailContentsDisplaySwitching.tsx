import React from "react";

import Link from "next/link";

import { Button, ButtonGroup } from "@mui/material";

import styles from "./DitailContentsDisplaySwitching.module.scss";

export type DitailContentsDisplaySwitchingProps = {
  buttons: { label: string; href: string }[];
};

const DitailContentsDisplaySwitching = (
  props: DitailContentsDisplaySwitchingProps,
) => {
  const { buttons } = props;

  return (
    <ButtonGroup className={styles["button-group"]}>
      {buttons.map((button) => (
        <Link href={button.href} key={button.label}>
          <Button className={styles["button"]}>{button.label}</Button>
        </Link>
      ))}
    </ButtonGroup>
  );
};

export default DitailContentsDisplaySwitching;
