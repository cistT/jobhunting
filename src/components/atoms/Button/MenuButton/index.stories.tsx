import React from "react";

import { css } from "@emotion/react";

import { ComponentMeta } from "@storybook/react";

import MenuButton from ".";
import ButtonProps from "../type";

export default {
  title: "Button/MenuButton",
  component: MenuButton,
} as ComponentMeta<typeof MenuButton>;

export const Original = (props: ButtonProps) => <MenuButton {...props} />;

export const Header = (props: ButtonProps) => (
  <MenuButton {...props} css={styles.header} />
);

const styles = {
  header: css`
    color: white;
    background-color: #3f51b5;
  `,
};
