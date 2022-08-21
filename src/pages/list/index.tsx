import React from "react";

import Head from "next/head";

import { Companies } from "pages/_app";

import ListContents from "components/organisms/ListContents";
import { useRouter } from "next/router";

const Index = () => {
  const companies = React.useContext(Companies);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>企業一覧</title>
      </Head>
      <ListContents
        companies={companies.map((data) => ({
          ...data,
          onClick: () =>
            router.push({
              pathname: "/list/[id]",
              query: { id: data.id },
            }),
        }))}
      />
    </>
  );
};

export default Index;
