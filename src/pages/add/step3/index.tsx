import React from "react";

import CompanyDateForm from "components/organisms/AddContents/CompanyDateForm/CompanyDateForm";
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
    if (
      input?.explanatoryMeetingDate ||
      input?.interviewDate ||
      input?.internshipDate
    ) {
      dispatchTemporarilySavedCompanyData({
        type: "registerEventDate",
        input: {
          explanatoryMeetingDate: input?.explanatoryMeetingDate ?? undefined,
          interviewDate: input?.interviewDate ?? undefined,
          internshipDate: input?.internshipDate ?? undefined,
        },
      });
    }
    router.push("/add/step4");
  };
  const leftClick: LeftClick = () => {
    router.push("/add/step2");
  };

  return <CompanyDateForm rightClick={rightClick} leftClick={leftClick} />;
};

export default Index;
