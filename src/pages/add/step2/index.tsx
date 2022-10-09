import React from "react";

import CompanyURLForm from "components/organisms/AddContents/CompanyURLForm/CompanyURLForm";
import {
  LeftClick,
  RightClick,
} from "components/organisms/AddContents/type/ButtonClick";
import { TemporarilyCompanies } from "pages/_app";
import { useRouter } from "next/router";

const Index = () => {
  const { dispatchTemporarilySavedCompanyData } =
    React.useContext(TemporarilyCompanies);

  const router = useRouter();
  const rightClick: RightClick = (input) => {
    if (input?.homepageURL || input?.adoptionURL) {
      dispatchTemporarilySavedCompanyData({
        type: "registerURL",
        input: {
          homepageURL: input?.homepageURL ?? "",
          adoptionURL: input?.adoptionURL ?? "",
        },
      });
    }
    router.push("/add/step3");
  };
  const leftClick: LeftClick = () => {
    router.push("/add");
  };

  return <CompanyURLForm rightClick={rightClick} leftClick={leftClick} />;
};

export default Index;
