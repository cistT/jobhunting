import React from "react";

import { ComponentMeta } from "@storybook/react";

import DateBox from "components/atoms/Box/DateBox";
import CompanyListItem from ".";

export default {
  title: "molecules/CompanyListItem",
  component: CompanyListItem,
} as ComponentMeta<typeof CompanyListItem>;

export const Original = () => (
    <CompanyListItem
      label="Original"
      rightItem={<DateBox date={new Date()} />}
    />
  );
