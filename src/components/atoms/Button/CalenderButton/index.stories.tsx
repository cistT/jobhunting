import React from "react";

import { css } from "@emotion/react";

import { ComponentMeta } from "@storybook/react";

import CalenderButton from ".";
import { ButtonProps } from "../type";

export default {
  title: "Button/CalenderButton",
  component: CalenderButton,
} as ComponentMeta<typeof CalenderButton>;

export const Original = (props: ButtonProps) => <CalenderButton {...props} />;

export const Header = (props: ButtonProps) => (
  <CalenderButton {...props} css={styles.header} />
);

const styles = {
  header: css`
    color: white;
    background-color: #3f51b5;
  `,
};
