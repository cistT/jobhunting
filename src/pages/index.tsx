import React from "react";

import type { NextPage } from "next";
import Head from "next/head";

import HomeContents from "components/organisms/HomeContents";

const Home: NextPage = () => {
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
  return (
    <>
      <Head>
        <title>就活管理アプリ</title>
      </Head>
      <HomeContents companies={dummyData} />
    </>
  );
};

export default Home;
