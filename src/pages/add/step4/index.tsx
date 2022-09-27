import React from "react";

import CompanyMotivationForm from "components/organisms/AddContents/CompanyMotivationForm/CompanyMotivationForm";
import { Companies, TemporarilyCompanies } from "pages/_app";
import { useRouter } from "next/router";
import {
  LeftClick,
  RightClick,
} from "components/organisms/AddContents/type/ButtonClick";

const Index = () => {
  const { temporarilySavedCompanyData, dispatchTemporarilySavedCompanyData } =
    React.useContext(TemporarilyCompanies);

  const { dispatchRegisteredCompanyData } = React.useContext(Companies);

  const router = useRouter();
  const rightClick: RightClick = (input) => {
    dispatchRegisteredCompanyData({
      type: "register",
      newCompanyData: {
        ...temporarilySavedCompanyData,
        motivation: input?.motivation ?? "",
      },
    });

    dispatchTemporarilySavedCompanyData({
      type: "init",
    });

    router.push("/add/finish");
  };
  const leftClick: LeftClick = () => {
    router.push("/add/step3");
  };

  return (
    <CompanyMotivationForm rightClick={rightClick} leftClick={leftClick} />
  );
};

export default Index;
