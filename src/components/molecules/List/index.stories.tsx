import React from "react";

import { css } from "@emotion/react";

import { ComponentMeta } from "@storybook/react";

import List from ".";
import ListProps from "./type/index";

export default {
  title: "molecules/List",
  component: List,
} as ComponentMeta<typeof List>;

const props: ListProps = {
  items: [
    { label: "test0", onClick: () => undefined },
    { label: "test1", onClick: () => undefined },
    { label: "test2", onClick: () => undefined },
    { label: "test3", onClick: () => undefined },
    { label: "test4", onClick: () => undefined },
  ],
};

export const Original = () => {
  return <List items={props.items} />;
};
