import React from "react";

import { ComponentMeta } from "@storybook/react";

import TwoLinedButton, { TwoLinedButtonProps } from ".";

export default {
  title: "molecules/TwoLinedButton",
  component: TwoLinedButton,
} as ComponentMeta<typeof TwoLinedButton>;

const props: TwoLinedButtonProps = {
  rightLabel: "Right",
  leftLabel: "Left",
  rightClick: () => undefined,
  leftClick: () => undefined,
};

export const Original = () => <TwoLinedButton {...props} />;
