import React from "react";
import Head from "next/head";

import { getPageTitle, getAllPagesInSpace } from "notion-utils";
import { NotionAPI } from "notion-client";
import { Collection, CollectionRow, NotionRenderer } from "react-notion-x";
import { GetStaticProps } from "next";
import { ExtendedRecordMap } from "notion-types";
const isDev = process.env.NODE_ENV === "development" || !process.env.NODE_ENV;

const notion = new NotionAPI();

export const getStaticProps: GetStaticProps = async (context) => {
  const pageId = context.params?.pageId as string;
  const recordMap: ExtendedRecordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true,
    };
  }
  const rootNotionPageId = "0bdd777d69ef4af2836d5e8445fcee5f";
  const rootNotionSpaceId = "";

  // This crawls all public pages strating from the givern root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just easily
  // set paths to an empty array to not pre-generate any pages at build time.
  const pages = await getAllPagesInSpace(
    rootNotionPageId,
    rootNotionSpaceId,
    notion.getPage.bind(notion),
    {
      traverseCollections: false,
    }
  );

  const paths = Object.keys(pages).map((pageId) => `/${pageId}`);

  return {
    paths,
    fallback: true,
  };
}

export default function NotionPage(props: { recordMap: ExtendedRecordMap }) {
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
}
