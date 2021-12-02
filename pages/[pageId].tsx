import React from "react";

import { getPageTitle, getAllPagesInSpace } from "notion-utils";
import { NotionAPI } from "notion-client";
import { GetStaticProps, NextPage } from "next";
import NotionPage from "../components/NotionPage";
import resolveNotionPage from "../lib/resolve-notion-page";
import { domain, isDev, rootNotionPageId } from "../lib/config";

const notion = new NotionAPI();

export const getStaticProps: GetStaticProps = async (context) => {
  const rawPageId = context.params?.pageId as string;
  try {
    const props = await resolveNotionPage(domain, rawPageId);

    return {
      props,
      revalidate: 10,
    };
  } catch (err) {
    throw err;
  }
};

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true,
    };
  }

  // This crawls all public pages strating from the givern root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just easily
  // set paths to an empty array to not pre-generate any pages at build time.
  const pages = await getAllPagesInSpace(
    rootNotionPageId,
    "",
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

const Page: NextPage = (props) => {
  return <NotionPage {...props} />;
};

export default Page;
