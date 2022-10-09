import React from "react";

import { ComponentMeta } from "@storybook/react";

import homepageURLForm, { homepageURLFormProps } from "./homepageURLForm";

export default {
  title: "organisms/AddContents/homepageURLForm",
  component: homepageURLForm,
} as ComponentMeta<typeof homepageURLForm>;

export const Original = (props: homepageURLFormProps) => (
  <homepageURLForm {...props} />
);
