import React from "react";

import { ComponentMeta } from "@storybook/react";

import CompanyResultList from ".";

import testData from "data/testData";

export default {
  title: "organisms/CompanyResultList",
  component: CompanyResultList,
} as ComponentMeta<typeof CompanyResultList>;

const companies = testData;

export const Original = () => {
  return <CompanyResultList companies={companies} />;
};
