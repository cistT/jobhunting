import React from "react";

import { ComponentMeta } from "@storybook/react";

import testData from "data/testData";
import ListContents from ".";

export default {
  title: "Organisms/ListContents",
  component: ListContents,
} as ComponentMeta<typeof ListContents>;

const companies = testData;

export const Original = () => <ListContents companies={companies} />;
