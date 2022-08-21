import React from "react";

import { ComponentMeta } from "@storybook/react";

import QuestionHeadline from ".";

export default {
  title: "Headline/QuestionHeadline",
  component: QuestionHeadline,
} as ComponentMeta<typeof QuestionHeadline>;

export const Original = () => <QuestionHeadline headline="Original" />;
