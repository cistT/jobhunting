import React from "react";

import { css } from "@emotion/react";

import { Button, ButtonGroup } from "@mui/material";

export type TwoLinedButtonProps = {
  rightLabel: string;
  leftLabel: string;
  rightClick: (event?: React.MouseEvent) => void;
  leftClick: (event?: React.MouseEvent) => void;
  className?: string;
};

const TwoLinedButton = (props: TwoLinedButtonProps) => {
  const {
    rightLabel,
    leftLabel,
    rightClick,
    leftClick,
    className = "",
  } = props;

  return (
    <ButtonGroup css={styles.buttonGroup} className={className}>
      <Button css={styles.button} onClick={leftClick}>
        {leftLabel}
      </Button>
      <Button css={styles.button} onClick={rightClick}>
        {rightLabel}
      </Button>
    </ButtonGroup>
  );
};

export default TwoLinedButton;

const styles = {
  buttonGroup: css`
    display: flex;
    justify-content: center;
  `,
  button: css`
    height: 60px;
    width: 50%;
  `,
};
