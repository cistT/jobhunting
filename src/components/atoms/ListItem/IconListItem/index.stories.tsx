import React from "react";

import { css } from "@emotion/react";

import { ComponentMeta } from "@storybook/react";

import ListIcon from "@mui/icons-material/List";

import IconListItem from ".";
import IconListItemProps from "../type";

export default {
  title: "ListItem/IconListItem",
  component: IconListItem,
} as ComponentMeta<typeof IconListItem>;

export const Original = (props: IconListItemProps) => (
  <IconListItem {...props} icon={<ListIcon />} label="test" />
);
