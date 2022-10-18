import React from "react";

import { ComponentMeta } from "@storybook/react";

import ListIcon from "@mui/icons-material/List";

import IconListItem, { IconListItemProps } from ".";

export default {
  title: "ListItem/IconListItem",
  component: IconListItem,
} as ComponentMeta<typeof IconListItem>;

export const Original = (props: IconListItemProps) => (
  <IconListItem {...props} icon={<ListIcon />} label="test" />
);
