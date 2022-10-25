import React from "react";

import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import { CompanyType } from "types";

import slashDateToString from "utils/date/slashDateToString";

import ListTitle from "components/molecules/ListTitle";
import ListItemBothEndsTextButton from "components/ListItem/ListItemBothEndsTextButton";

import { Companies } from "./_app";

type SSRProps = {
  companyData: CompanyType[];
};

const Home: NextPage<SSRProps> = (props) => {
  const { companyData } = props;
  const router = useRouter();

  const { dispatchRegisteredCompanyData } = React.useContext(Companies);
  dispatchRegisteredCompanyData({
    type: "init",
    fetchCompanyData: companyData,
  });

  return (
    <>
      <Head>
        <title>就活管理アプリ</title>
      </Head>

      <ListTitle title="直近の予定" />

      {companyData.map((data) => (
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_COMPANY_API_URL}/company/userID=1`,
  );
  const companyData = await res.json();

  return {
    props: { companyData: companyData.companyData },
  };
};
