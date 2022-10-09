import React from "react";

import { ComponentMeta } from "@storybook/react";

import CalenderButton from ".";
import { ButtonProps } from "../type";

export default {
  title: "Button/CalenderButton",
  component: CalenderButton,
} as ComponentMeta<typeof CalenderButton>;

export const Original = (props: ButtonProps) => <CalenderButton {...props} />;

export const Header = (props: ButtonProps) => <CalenderButton {...props} />;
