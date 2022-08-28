import React from "react";

import { ComponentMeta } from "@storybook/react";

import { Typography } from "@mui/material";

import CompanyDitailItem from ".";

export default {
  title: "molecules/CompanyDitailItem",
  component: CompanyDitailItem,
} as ComponentMeta<typeof CompanyDitailItem>;

export const Original = () => (
  <CompanyDitailItem
    label="Original"
    element={
      <Typography variant="h5" component="h5">
        original
      </Typography>
    }
  />
);

export const Unregistered = () => <CompanyDitailItem label="Unregistered" />;
