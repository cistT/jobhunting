import React from "react";

import { ComponentMeta } from "@storybook/react";

import CompanyDateForm, { CompanyDateFormProps } from "./CompanyDateForm";

export default {
  title: "organisms/AddContents/CompanyDateForm",
  component: CompanyDateForm,
} as ComponentMeta<typeof CompanyDateForm>;

export const Original = (props: CompanyDateFormProps) => (
  <CompanyDateForm {...props} />
);
