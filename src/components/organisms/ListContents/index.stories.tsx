import React from "react";

import { ComponentMeta } from "@storybook/react";

import ListContents from ".";
import testData from "data/testData";

export default {
  title: "Organisms/ListContents",
  component: ListContents,
} as ComponentMeta<typeof ListContents>;

const companies = testData;

export const Original = () => <ListContents companies={companies} />;
