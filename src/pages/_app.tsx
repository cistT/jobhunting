import React from "react";
import type { AppProps } from "next/app";

import "modern-css-reset/dist/reset.min.css";
import Layout from "components/templetes/Layout";

import useFetchRegisteredCompanyData, {
  CompanyDataWithUpDate,
} from "hooks/useFetchRegisteredCompanyData";

export const Companies: React.Context<CompanyDataWithUpDate> =
  React.createContext<CompanyDataWithUpDate>({
    registeredCompanyData: [],
    dispatchRegisteredCompanyData: () => undefined,
  });

const MyApp = ({ Component, pageProps }: AppProps) => {
  const companyDataWithUpDate = useFetchRegisteredCompanyData();

  return (
    <Companies.Provider value={companyDataWithUpDate}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Companies.Provider>
  );
};

export default MyApp;
