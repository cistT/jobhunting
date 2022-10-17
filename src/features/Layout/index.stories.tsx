import React from "react";

import { ComponentMeta } from "@storybook/react";

import Layout from ".";

export default {
  title: "templetes/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

export const Original = () => <Layout />;

export const Home = () => <Layout focus="Home" />;

export const List = () => <Layout focus="List" />;

export const Add = () => <Layout focus="Add" />;

export const Calender = () => <Layout focus="Calender" />;
