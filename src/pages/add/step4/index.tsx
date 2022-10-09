import React from "react";
import axios from "axios";
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
    (async () => {
      await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_COMPANY_API_URL}/company/register/userID=1`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },

        data: { ...temporarilySavedCompanyData, motivation: input?.motivation },
      });
    })();
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
