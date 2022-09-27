import React from "react";

import { ComponentMeta } from "@storybook/react";

import CompanyMotivationForm, {
  CompanyMotivationFormProps,
} from "./CompanyMotivationForm";

export default {
  title: "organisms/AddContents/CompanyMotivationForm",
  component: CompanyMotivationForm,
} as ComponentMeta<typeof CompanyMotivationForm>;

export const Original = (props: CompanyMotivationFormProps) => (
  <CompanyMotivationForm {...props} />
);
