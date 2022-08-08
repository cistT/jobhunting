import type { AppProps } from "next/app";

import "modern-css-reset/dist/reset.min.css";
import Layout from "components/templetes/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;