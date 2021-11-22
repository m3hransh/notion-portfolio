import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ExtendedRecordMap } from "notion-types";
import { NotionAPI } from "notion-client";
import { getPageTitle } from "notion-utils";
import { Collection, CollectionRow, NotionRenderer } from "react-notion-x";

const notion = new NotionAPI();
export const getStaticProps: GetStaticProps = async (context) => {
  const pageId = "0bdd777d69ef4af2836d5e8445fcee5f";
  const recordMap: ExtendedRecordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

const Home: NextPage<{ recordMap: ExtendedRecordMap }> = (props) => {
  const { recordMap } = props;
  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);
  console.log(title, recordMap);
  return (
    <>
      <Head>
        <meta name="description" content="Mehran portfolio" />
        <title>{title}</title>
      </Head>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={true}
        rootDomain=""
        components={{
          collection: Collection,
          collectionRow: CollectionRow,
        }}
      />
    </>
  );
};

export default Home;
