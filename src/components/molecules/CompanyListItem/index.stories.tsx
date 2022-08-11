import React from "react";

import { css } from "@emotion/react";

import { ComponentMeta } from "@storybook/react";

import CompanyListItem from ".";

export default {
  title: "molecules/CompanyListItem",
  component: CompanyListItem,
} as ComponentMeta<typeof CompanyListItem>;

export const Original = () => {
  return <CompanyListItem label="Original" date={new Date()} />;
};
