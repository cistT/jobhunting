import React from "react";

import Head from "next/head";

import ListContents from "components/organisms/ListContents";

import { CompaniesType } from "types";

type Props = { companies: CompaniesType[] };

const Index = (props: Props) => {
  const { companies } = props;

  return (
    <>
      <Head>
        <title>就活管理アプリ</title>
      </Head>
      <ListContents companies={companies} />
    </>
  );
};

export default Index;
