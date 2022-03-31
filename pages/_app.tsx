import "../styles/globals.scss";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Layout from "../components/Layout";
import light from "../styles/themes/light";

let isLoggedIn = true;

function MyApp({ Component, pageProps }: AppProps) {
  let appView = (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

  let authView = <Component {...pageProps} />;

  return (
    <ThemeProvider theme={light}>
      {isLoggedIn ? appView : authView}
    </ThemeProvider>
  );
}

export default MyApp;
