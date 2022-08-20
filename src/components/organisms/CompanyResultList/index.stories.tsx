import React from "react";

import { ComponentMeta } from "@storybook/react";

import testData from "data/testData";
import CompanyResultList from ".";


export default {
  title: "organisms/CompanyResultList",
  component: CompanyResultList,
} as ComponentMeta<typeof CompanyResultList>;

const companies = testData;

export const Original = () => <CompanyResultList companies={companies} />;