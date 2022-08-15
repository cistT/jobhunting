import React from "react";

import { ComponentMeta } from "@storybook/react";

import CompanyListItem from ".";
import DateBox from "components/atoms/Box/DateBox";

export default {
  title: "molecules/CompanyListItem",
  component: CompanyListItem,
} as ComponentMeta<typeof CompanyListItem>;

export const Original = () => {
  return (
    <CompanyListItem
      label="Original"
      rightItem={<DateBox date={new Date()} />}
    />
  );
};
