import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { Companies } from "pages/_app";

import ListTitle from "components/molecules/ListTitle";

import ListItemBothEndsTextButton from "components/ListItem/ListItemBothEndsTextButton";

const Index = () => {
  const { registeredCompanyData } = React.useContext(Companies);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>企業一覧</title>
      </Head>
      <ListTitle title="企業一覧" />

      {registeredCompanyData.map((data) => (
        <ListItemBothEndsTextButton
          label={data.name}
          explanation={data.result}
          onClick={() =>
            router.push({
              pathname: "/list/[id]",
              query: { id: data.id },
            })
          }
          underline
          key={data.id}
        />
      ))}
    </>
  );
};

export default Index;
