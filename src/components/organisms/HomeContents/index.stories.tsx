import React from "react";

import { ComponentMeta } from "@storybook/react";

import HomeContents from ".";

export default {
  title: "Organisms/HomeContents",
  component: HomeContents,
} as ComponentMeta<typeof HomeContents>;

const dummyData = [
  {
    id: "1",
    name: "モーターヘッドモーターズ",
    interviewDate: new Date("2022/8/11"),
  },
  { id: "2", name: "山下商事", interviewDate: new Date("2022/7/10") },
  { id: "3", name: "大日本銀行", interviewDate: new Date("2022/8/1") },
  { id: "4", name: "古海製薬", interviewDate: new Date("2022/9/29") },
];

export const Original = () => <HomeContents companies={dummyData} />;
