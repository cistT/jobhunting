import React from "react";

import { ComponentMeta } from "@storybook/react";

import Step1 from ".";

export default {
  title: "organisms/AddContents/Step1",
  component: Step1,
} as ComponentMeta<typeof Step1>;

export const Original = () => <Step1 />;
