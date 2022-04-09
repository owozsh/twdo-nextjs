import React, { FC } from "react";
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import light from "../styles/themes/light";

const isLoggedIn = true;

const MyApp = ({ Component, pageProps }: AppProps) => {
  let appView = (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

  let authView = <Component {...pageProps} />;

  return (
    <ThemeProvider theme={light}>
      {isLoggedIn ? appView : authView}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100vh;
    font-family: Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 18px;
    background-color: #fff;

    overflow: hidden;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: Nunito;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #__next {
    height: 100%;
  }
`;
