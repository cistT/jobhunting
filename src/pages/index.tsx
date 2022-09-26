import React from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import HomeContents from "components/organisms/HomeContents";
import { Companies } from "./_app";

const Home: NextPage = () => {
  const router = useRouter();
  const { registeredCompanyData } = React.useContext(Companies);

  return (
    <>
      <Head>
        <title>就活管理アプリ</title>
      </Head>
      <HomeContents
        companies={registeredCompanyData.map((data) => ({
          ...data,
          onClick: () => router.push(`/list/${data.id}`),
        }))}
      />
    </>
  );
};

export default Home;
