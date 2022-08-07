import React from "react";

import { css } from "@emotion/react";

import { ComponentMeta } from "@storybook/react";

import HomeButton from ".";
import ButtonProps from "../type";

export default {
  title: "Button/HomeButton",
  component: HomeButton,
} as ComponentMeta<typeof HomeButton>;

export const Original = (props: ButtonProps) => <HomeButton {...props} />;

export const Header = (props: ButtonProps) => (
  <HomeButton {...props} css={styles.header} />
);

const styles = {
  header: css`
    color: white;
    background-color: #3f51b5;
  `,
};
