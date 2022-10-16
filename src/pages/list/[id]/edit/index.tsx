import React from "react";

import { Companies } from "pages/_app";

import useGetURLQuery from "hooks/useGetURLQuery";

import DitailLayout from "components/templetes/DitailLayout/DitailLayout";
import CompanyEditForm from "components/organisms/CompanyEditForm/CompanyEditForm";

const Edit = () => {
  const { id } = useGetURLQuery("id");
  const { registeredCompanyData, dispatchRegisteredCompanyData } =
    React.useContext(Companies);
  const company = registeredCompanyData.filter((data) => data.id === id)[0];

  return (
    <DitailLayout companyName={company?.name ?? ""}>
      <CompanyEditForm
        company={company}
        closeButtonHref={`/list/${id}`}
        dispatchRegisteredCompanyData={dispatchRegisteredCompanyData}
      />
    </DitailLayout>
  );
};

export default Edit;
