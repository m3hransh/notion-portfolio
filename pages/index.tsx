import type { GetStaticProps, NextPage } from "next";
import resolveNotionPage from "../lib/resolve-notion-page";
import { ExtendedRecordMap } from "notion-types";
import NotionPage from "../components/NotionPage";
import { domain } from "../site.config";
import * as types from "../lib/types";

export const getStaticProps: GetStaticProps = async (context) => {
  // the default resolveNotionPage is root
  const props: types.PageProps = await resolveNotionPage(domain);

  return {
    props,
    revalidate: 10,
  };
};

const Home: NextPage = (props) => {
  return <NotionPage {...props} />;
};

export default Home;
