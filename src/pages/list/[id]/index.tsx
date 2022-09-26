import CompanyDitail from "components/organisms/CompanyDitail";
import { useRouter } from "next/router";
import { Companies } from "pages/_app";
import React from "react";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const { registeredCompanyData } = React.useContext(Companies);
  const company = registeredCompanyData.filter((data) => data.id === id)[0];

  return <CompanyDitail company={company} />;
};

export default Index;
