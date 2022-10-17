import React from "react";

import { ComponentMeta } from "@storybook/react";

import SideMenu from ".";

export default {
  title: "organisms/SideMenu",
  component: SideMenu,
} as ComponentMeta<typeof SideMenu>;

export const Original = () => <SideMenu />;
