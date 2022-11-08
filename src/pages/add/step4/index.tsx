import React from "react";

import CompanyMotivationForm from "components/organisms/AddContents/CompanyMotivationForm/CompanyMotivationForm";
import { TemporarilyCompanies } from "pages/_app";
import { useRouter } from "next/router";
import {
  LeftClick,
  RightClick,
} from "components/organisms/AddContents/type/ButtonClick";
import registerCompany from "features/api/registerCompany";

const Index = () => {
  const { temporarilySavedCompanyData, dispatchTemporarilySavedCompanyData } =
    React.useContext(TemporarilyCompanies);

  const router = useRouter();
  const rightClick: RightClick = (input) => {
    registerCompany({
      ...temporarilySavedCompanyData,
      motivation: input?.motivation,
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
