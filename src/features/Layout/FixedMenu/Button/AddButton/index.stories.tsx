import React from "react";

import { css } from "@emotion/react";

import { ComponentMeta } from "@storybook/react";

import AddButton from ".";
import { ButtonProps } from "../../../../../components/atoms/Button/type";

export default {
  title: "Button/AddButton",
  component: AddButton,
} as ComponentMeta<typeof AddButton>;

export const Original = (props: ButtonProps) => <AddButton {...props} />;

export const Header = (props: ButtonProps) => (
  <AddButton {...props} css={styles.header} />
);

const styles = {
  header: css`
    color: white;
    background-color: #3f51b5;
  `,
};
