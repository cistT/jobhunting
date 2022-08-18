import React from "react";

import { ComponentMeta } from "@storybook/react";

import testData from "data/testData";
import HomeContents from ".";

export default {
  title: "Organisms/HomeContents",
  component: HomeContents,
} as ComponentMeta<typeof HomeContents>;

const companies = testData;

export const Original = () => <HomeContents companies={companies} />;
