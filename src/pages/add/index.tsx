import React from "react";

import { useRouter } from "next/router";

import { TemporarilyCompanies } from "pages/_app";

import CompanyNameForm from "components/organisms/AddContents/CompanyNameForm/CompanyNameForm";

import {
  LeftClick,
  RightClick,
} from "components/organisms/AddContents/type/ButtonClick";

const Index = () => {
  const { dispatchTemporarilySavedCompanyData } =
    React.useContext(TemporarilyCompanies);

  const router = useRouter();

  const rightClick: RightClick = (input) => {
    if (input.name) {
      dispatchTemporarilySavedCompanyData({
        type: "registerName",
        input: { name: input.name },
      });
    }
    router.push("/add/step2");
  };
  const leftClick: LeftClick = () => {
    router.push("/list");
  };

  return <CompanyNameForm rightClick={rightClick} leftClick={leftClick} />;
};

export default Index;
