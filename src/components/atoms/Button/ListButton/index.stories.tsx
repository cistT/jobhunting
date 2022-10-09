import React from "react";

import { ComponentMeta } from "@storybook/react";

import ListButton from ".";
import { ButtonProps } from "../type";

export default {
  title: "Button/ListButton",
  component: ListButton,
} as ComponentMeta<typeof ListButton>;

export const Original = (props: ButtonProps) => <ListButton {...props} />;

export const Header = (props: ButtonProps) => <ListButton {...props} />;
