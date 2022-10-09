import React from "react";

import { ComponentMeta } from "@storybook/react";

import LabelField, { LabelFieldProps } from ".";

export default {
  title: "molecules/LabelField",
  component: LabelField,
} as ComponentMeta<typeof LabelField>;

export const Original = (props: LabelFieldProps) => <LabelField {...props} />;
