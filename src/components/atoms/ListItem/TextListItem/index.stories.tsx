import React from "react";

import { css } from "@emotion/react";

import { ComponentMeta } from "@storybook/react";

import TextListItem from ".";
import ListItemProps from "../type";

export default {
  title: "ListItem/TextListItem",
  component: TextListItem,
} as ComponentMeta<typeof TextListItem>;

export const Original = (props: ListItemProps) => (
  <TextListItem {...props} text="test" />
);
