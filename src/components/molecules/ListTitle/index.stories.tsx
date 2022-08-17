import React from "react";

import { ComponentMeta } from "@storybook/react";

import ListTitle from ".";

export default {
  title: "molecules/ListTitle",
  component: ListTitle,
} as ComponentMeta<typeof ListTitle>;

export const Original = () => <ListTitle title="Test" />;
