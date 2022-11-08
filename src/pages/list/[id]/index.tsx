import React from "react";

import useGetURLQuery from "hooks/useGetURLQuery";

import { GetServerSideProps } from "next";
import { CompanyType } from "types";
import fetchCompanyDetail from "features/api/fetchCompanyDetail";
import CompanyDitail from "features/CompanyDitail";

type SSRProps = {
  company: CompanyType;
};

const Index = (props: SSRProps) => {
  const { company } = props;

  const { id } = useGetURLQuery("id");

  if (company) {
    return <CompanyDitail company={company} editHref={`/list/${id}/edit`} />;
  }

  return <div>Sorry</div>;
};

export default Index;

export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context,
) => {
  const id = (context?.params?.id as string) ?? "";
  const company = await fetchCompanyDetail(id);

  return {
    props: { company },
  };
};
