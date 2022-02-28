import type { NextPage } from "next";
import Layout from "../components/layout";
import Today from "../views/today";

const Home: NextPage = () => {
  return (
    <Layout>
      <Today />
    </Layout>
  );
};

export default Home;
