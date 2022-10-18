import React from "react";

import { Companies } from "pages/_app";

import useGetURLQuery from "hooks/useGetURLQuery";

import CompanyDitail from "features/CompanyDitail";

const Index = () => {
  const { id } = useGetURLQuery("id");
  const { registeredCompanyData } = React.useContext(Companies);
  const company = registeredCompanyData.filter((data) => data.id === id)[0];

  return <CompanyDitail company={company} editHref={`/list/${id}/edit`} />;
};

export default Index;
