import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

let isLoggedIn = true;

function MyApp({ Component, pageProps }: AppProps) {
  let appView = (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

  let authView = (
    <div>
      <Component {...pageProps} />
    </div>
  );

  return isLoggedIn ? appView : authView;
}

export default MyApp;
