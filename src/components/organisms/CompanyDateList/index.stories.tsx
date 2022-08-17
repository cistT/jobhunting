import React from "react";

import { ComponentMeta } from "@storybook/react";

import CompanyDateList from ".";
import testData from "data/testData";

export default {
  title: "organisms/CompanyDateList",
  component: CompanyDateList,
} as ComponentMeta<typeof CompanyDateList>;

const companies = testData;

export const Original = () => {
  return <CompanyDateList companies={companies} />;
};
