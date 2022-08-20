import React from "react";
import type { AppProps } from "next/app";

import "modern-css-reset/dist/reset.min.css";
import Layout from "components/templetes/Layout";
import testData from "data/testData";

export const Companies = React.createContext(testData);

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Companies.Provider value={testData}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Companies.Provider>
);

export default MyApp;
