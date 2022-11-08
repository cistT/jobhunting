import React from "react";

import useGetURLQuery from "hooks/useGetURLQuery";

import DitailLayout from "components/templetes/DitailLayout/DitailLayout";
import CompanyEditForm from "features/UpdateCompany/CompanyEditForm";

import { GetServerSideProps } from "next";
import fetchCompanyDetail from "features/api/fetchCompanyDetail";
import { CompanyType } from "types";

type SSRProps = {
  company: CompanyType;
};

const Edit = (props: SSRProps) => {
  const { company } = props;

  const { id } = useGetURLQuery("id");

  return (
    <DitailLayout companyName={company?.name ?? ""}>
      <CompanyEditForm company={company} closeButtonHref={`/list/${id}`} />
    </DitailLayout>
  );
};

export default Edit;

export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context,
) => {
  const id = (context?.params?.id as string) ?? "";
  const company = await fetchCompanyDetail(id);

  return {
    props: { company },
  };
};
