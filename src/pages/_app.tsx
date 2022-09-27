import React from "react";
import type { AppProps } from "next/app";

import "modern-css-reset/dist/reset.min.css";
import Layout from "components/templetes/Layout";

import useFetchRegisteredCompanyData, {
  CompanyDataWithUpDate,
} from "hooks/useFetchRegisteredCompanyData";
import useTemporarilySavedCompanyData, {
  TemporarilySavedCompanyDataWithUpdate,
} from "hooks/useTemporarilySavedCompanyData";
import { CompanyType } from "types";

export const Companies: React.Context<CompanyDataWithUpDate> =
  React.createContext<CompanyDataWithUpDate>({
    registeredCompanyData: [],
    dispatchRegisteredCompanyData: () => undefined,
  });

export const TemporarilyCompanies: React.Context<TemporarilySavedCompanyDataWithUpdate> =
  React.createContext<TemporarilySavedCompanyDataWithUpdate>({
    temporarilySavedCompanyData: {} as CompanyType,
    dispatchTemporarilySavedCompanyData: () => undefined,
  });

const MyApp = ({ Component, pageProps }: AppProps) => {
  const companyDataWithUpDate = useFetchRegisteredCompanyData();
  const temporarilySavedCompanyDataWithUpdate =
    useTemporarilySavedCompanyData();

  return (
    <TemporarilyCompanies.Provider
      value={temporarilySavedCompanyDataWithUpdate}>
      <Companies.Provider value={companyDataWithUpDate}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Companies.Provider>
    </TemporarilyCompanies.Provider>
  );
};

export default MyApp;
