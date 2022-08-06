import React from "react";
import type { NextPage } from "next";
import Header from "components/organisms/Header";
import Head from "next/head";

const Home: NextPage = () => (
  <>
    <Head>
      <title>就活管理アプリ</title>
    </Head>
    <Header />
  </>
);

export default Home;
