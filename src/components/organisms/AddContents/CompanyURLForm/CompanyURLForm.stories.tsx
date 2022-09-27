import React from "react";

import { ComponentMeta } from "@storybook/react";

import CompanyURLForm, { CompanyURLFormProps } from "./CompanyURLForm";

export default {
  title: "organisms/AddContents/CompanyURLForm",
  component: CompanyURLForm,
} as ComponentMeta<typeof CompanyURLForm>;

export const Original = (props: CompanyURLFormProps) => (
  <CompanyURLForm {...props} />
);
