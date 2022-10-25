import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import BothEndsTextButton from "./BothEndsTextButton";

export default {
  title: "ListItem/BothEndsTextButton",
  component: BothEndsTextButton,
} as ComponentMeta<typeof BothEndsTextButton>;

const Template: ComponentStory<typeof BothEndsTextButton> = (props) => (
  <BothEndsTextButton {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  leftText: "Left",
  rightText: "Right",
  onClick: action("clicked"),
};

export const Underline = Template.bind({});
Underline.args = {
  leftText: "Left",
  rightText: "Right",
  onClick: action("clicked"),
  underline: true,
};
