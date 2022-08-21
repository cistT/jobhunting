import React from "react";

import { ComponentMeta } from "@storybook/react";

import { Typography } from "@mui/material";

import CompanyItem from ".";

export default {
  title: "molecules/CompanyItem",
  component: CompanyItem,
} as ComponentMeta<typeof CompanyItem>;

export const Original = () => (
  <CompanyItem
    listName="Original"
    element={
      <Typography variant="h5" component="h5">
        original
      </Typography>
    }
  />
);

export const Unregistered = () => <CompanyItem listName="Unregistered" />;
