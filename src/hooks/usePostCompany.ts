import axios from "axios";
import React from "react";
import { CompanyType } from "types";

type UsePostCompany = () => { postCompany: (company: CompanyType) => void };

const usePostCompany: UsePostCompany = () => {
  const [registeredCompany, setRegisteredCompany] =
    React.useState<CompanyType | null>(null);

  React.useEffect(() => {
    if (registeredCompany) {
      (async () => {
        await axios({
          method: "POST",
          url: `${process.env.NEXT_PUBLIC_COMPANY_API_URL}/company/update/userID=1`,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },

          data: registeredCompany,
        });
      })();
    }
  }, [registeredCompany]);

  return {
    postCompany: (company: CompanyType) => {
      setRegisteredCompany(company);
    },
  };
};

export default usePostCompany;
