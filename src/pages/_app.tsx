import React from "react";
import type { AppProps } from "next/app";

import "modern-css-reset/dist/reset.min.css";
import Layout from "components/templetes/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
