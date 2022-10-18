import React from "react";

import { css } from "@emotion/react";

import { ComponentMeta } from "@storybook/react";

import LogoutButton from ".";
import { ButtonProps } from "../../../../../components/atoms/Button/type";

export default {
  title: "Button/LogoutButton",
  component: LogoutButton,
} as ComponentMeta<typeof LogoutButton>;

export const Original = (props: ButtonProps) => <LogoutButton {...props} />;

export const Header = (props: ButtonProps) => (
  <LogoutButton {...props} css={styles.header} />
);

const styles = {
  header: css`
    color: white;
    background-color: #3f51b5;
  `,
};
