import React from "react";

import { ComponentMeta } from "@storybook/react";

import testData from "data/testData";
import CompanyDateList from ".";

export default {
  title: "organisms/CompanyDateList",
  component: CompanyDateList,
} as ComponentMeta<typeof CompanyDateList>;

const companies = testData;

export const Original = () => <CompanyDateList companies={companies} />;
