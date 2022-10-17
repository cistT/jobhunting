import React from "react";

import { css } from "@emotion/react";

import { ComponentMeta } from "@storybook/react";

import HomeButton from ".";
import { IconButtonProps } from "../../../../../components/atoms/Button/type";

export default {
  title: "Button/HomeButton",
  component: HomeButton,
} as ComponentMeta<typeof HomeButton>;

export const Original = (props: IconButtonProps) => <HomeButton {...props} />;

export const Header = (props: IconButtonProps) => (
  <HomeButton {...props} css={styles.header} />
);

const styles = {
  header: css`
    color: white;
    background-color: #3f51b5;
  `,
};
