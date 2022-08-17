import React from "react";

import { ComponentMeta } from "@storybook/react";

import HomeContents from ".";
import testData from "data/testData";

export default {
  title: "Organisms/HomeContents",
  component: HomeContents,
} as ComponentMeta<typeof HomeContents>;

const companies = testData;

export const Original = () => <HomeContents companies={companies} />;
