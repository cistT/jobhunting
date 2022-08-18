import React from "react";

import { ComponentMeta } from "@storybook/react";

import DateBox from ".";

export default {
  title: "Box/DateBox",
  component: DateBox,
} as ComponentMeta<typeof DateBox>;

export const Original = () => {
  const date = new Date();

  return <DateBox date={date} />;
};
