import React from "react";

import { ComponentMeta } from "@storybook/react";

import FixedMenu from ".";

export default {
  title: "Organisms/FixedMenu",
  component: FixedMenu,
} as ComponentMeta<typeof FixedMenu>;

export const Home = () => <FixedMenu focus="Home" />;

export const List = () => <FixedMenu focus="List" />;

export const Add = () => <FixedMenu focus="Add" />;

export const Calender = () => <FixedMenu focus="Calender" />;
