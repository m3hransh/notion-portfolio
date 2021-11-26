import type { GetStaticProps, NextPage } from "next";
import resolveNotionPage from "../lib/resolve-notion-page";
import { ExtendedRecordMap } from "notion-types";
import NotionPage from "../components/NotionPage";

export const getStaticProps: GetStaticProps = async (context) => {
  // the default resolveNotionPage is root
  const recordMap: ExtendedRecordMap = await resolveNotionPage();

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

const Home: NextPage = (props) => {
  return <NotionPage {...props} />;
};

export default Home;
