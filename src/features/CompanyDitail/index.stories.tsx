import React from "react";

import { ComponentMeta } from "@storybook/react";

import testData from "data/testData";
import CompanyDitail from ".";

export default {
  title: "organisms/CompanyDitail",
  component: CompanyDitail,
} as ComponentMeta<typeof CompanyDitail>;

const companies = testData;

export const Original = () => <CompanyDitail company={companies[0]} />;
