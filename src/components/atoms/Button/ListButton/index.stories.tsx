import React from "react";

import { css } from "@emotion/react";

import { ComponentMeta } from "@storybook/react";

import ListButton from ".";
import { ButtonProps } from "../type";

export default {
  title: "Button/ListButton",
  component: ListButton,
} as ComponentMeta<typeof ListButton>;

export const Original = (props: ButtonProps) => <ListButton {...props} />;

export const Header = (props: ButtonProps) => (
  <ListButton {...props} css={styles.header} />
);

const styles = {
  header: css`
    color: white;
    background-color: #3f51b5;
  `,
};
