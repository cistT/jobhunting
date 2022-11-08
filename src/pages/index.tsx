import React from "react";

import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import { CompanyType } from "types";

import slashDateToString from "utils/date/slashDateToString";

import ListTitle from "components/molecules/ListTitle";
import ListItemBothEndsTextButton from "components/ListItem/ListItemBothEndsTextButton";

import fetchCompanyList from "features/api/fetchCompanyList";

type SSRProps = {
  companies: CompanyType[];
};

const Home: NextPage<SSRProps> = (props: SSRProps) => {
  const { companies } = props;

  const router = useRouter();

  return (
    <>
      <Head>
        <title>就活管理アプリ</title>
      </Head>

      <ListTitle title="直近の予定" />

      {companies.map((data) => (
        <ListItemBothEndsTextButton
          label={data.name}
          explanation={
            data?.interviewDate ? slashDateToString(data.interviewDate) : "未定"
          }
          onClick={() => router.push(`/list/${data.id}`)}
          underline
          key={data.id}
        />
      ))}
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<SSRProps> = async () => {
  const companies = await fetchCompanyList();

  return {
    props: { companies },
  };
};
