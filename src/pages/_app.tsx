import React from "react";
import type { AppProps } from "next/app";

import "modern-css-reset/dist/reset.min.css";
import Layout from "features/Layout";

import useTemporarilySavedCompanyData, {
  TemporarilySavedCompanyDataWithUpdate,
} from "hooks/useTemporarilySavedCompanyData";
import { CompanyType } from "types";

export const TemporarilyCompanies: React.Context<TemporarilySavedCompanyDataWithUpdate> =
  React.createContext<TemporarilySavedCompanyDataWithUpdate>({
    temporarilySavedCompanyData: {} as CompanyType,
    dispatchTemporarilySavedCompanyData: () => undefined,
  });

const MyApp = ({ Component, pageProps }: AppProps) => {
  const temporarilySavedCompanyDataWithUpdate =
    useTemporarilySavedCompanyData();

  return (
    <TemporarilyCompanies.Provider
      value={temporarilySavedCompanyDataWithUpdate}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TemporarilyCompanies.Provider>
  );
};

export default MyApp;
