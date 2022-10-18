import React from "react";

import HomeIcon from "@mui/icons-material/Home";

import { ComponentMeta } from "@storybook/react";

import IconList, { IconListProps } from ".";

export default {
  title: "molecules/IconList",
  component: IconList,
} as ComponentMeta<typeof IconList>;

const icon = <HomeIcon />;

const props: IconListProps = {
  items: [
    { icon, label: "test0", onClick: () => undefined },
    { icon, label: "test1", onClick: () => undefined },
    { icon, label: "test2", onClick: () => undefined },
    { icon, label: "test3", onClick: () => undefined },
    { icon, label: "test4", onClick: () => undefined },
  ],
};

// eslint-disable-next-line react/prop-types
export const Original = () => <IconList items={props.items} />;
