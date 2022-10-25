import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import VerticalArrangementTextButton from "./VerticalArrangementTextButton";

export default {
  title: "ListItem/VerticalArrangementTextButton",
  component: VerticalArrangementTextButton,
} as ComponentMeta<typeof VerticalArrangementTextButton>;

const Template: ComponentStory<typeof VerticalArrangementTextButton> = (
  props,
) => <VerticalArrangementTextButton {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  upText: "UP",
  underText: "under",
  onClick: action("clicked"),
};

export const Underline = Template.bind({});
Underline.args = {
  upText: "UP",
  underText: "under",
  onClick: action("clicked"),
  underline: true,
};
