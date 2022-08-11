import React from "react";

import { ComponentMeta } from "@storybook/react";

import HomeContents from ".";

export default {
  title: "Organisms/HomeContents",
  component: HomeContents,
} as ComponentMeta<typeof HomeContents>;

const onClick = () => undefined;
const dummyData = [
  {
    id: "1",
    label: "モーターヘッドモーターズ",
    date: new Date("2022/8/11"),
    onClick,
  },
  { id: "2", label: "山下商事", date: new Date("2022/7/10"), onClick },
  { id: "3", label: "大日本銀行", date: new Date("2022/8/1"), onClick },
  { id: "4", label: "古海製薬", date: new Date("2022/9/29"), onClick },
];

export const Original = () => <HomeContents companies={dummyData} />;
