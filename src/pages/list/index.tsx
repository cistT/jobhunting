import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { Companies } from "pages/_app";

import ListContents from "components/organisms/ListContents";

const Index = () => {
  const { registeredCompanyData } = React.useContext(Companies);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>企業一覧</title>
      </Head>
      <ListContents
        companies={registeredCompanyData.map((data) => ({
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
