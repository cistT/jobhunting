import React from "react";

import { ComponentMeta } from "@storybook/react";

import CompanyNameForm, { CompanyNameFormProps } from "./CompanyNameForm";

export default {
  title: "organisms/AddContents/CompanyNameForm",
  component: CompanyNameForm,
} as ComponentMeta<typeof CompanyNameForm>;

export const Original = (props: CompanyNameFormProps) => (
  <CompanyNameForm {...props} />
);
