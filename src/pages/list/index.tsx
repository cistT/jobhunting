import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import ListTitle from "components/molecules/ListTitle";

import ListItemBothEndsTextButton from "components/ListItem/ListItemBothEndsTextButton";
import { GetServerSideProps } from "next";
import { CompanyType } from "types";
import fetchCompanyList from "features/api/fetchCompanyList";

type SSRProps = {
  companies: CompanyType[];
};

const Index = (props: SSRProps) => {
  const { companies } = props;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>企業一覧</title>
      </Head>
      <ListTitle title="企業一覧" />

      {companies.map((data) => (
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

export const getServerSideProps: GetServerSideProps<SSRProps> = async () => {
  const companies = await fetchCompanyList();

  return {
    props: { companies },
  };
};
