import Head from "next/head";
import { getPageTitle } from "notion-utils";
import React, { FC } from "react";
import { Collection, CollectionRow, NotionRenderer } from "react-notion-x";

import * as types from "../lib/types";
import styles from "./styles.module.css";
import cs from "classnames";

interface NotionPageProps {
  className?: string;
  chidlren?: React.ReactNode;
}

const NotionPage: FC<types.PageProps> = (props) => {
  const { recordMap } = props;
  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);
  console.log(title, recordMap);
  return (
    <div>
      <Head>
        <meta name="description" content="Mehran portfolio" />
        <title>{title}</title>
      </Head>
      <NotionRenderer
        bodyClassName={cs(styles.notion, "index-page")}
        recordMap={recordMap}
        fullPage={true}
        darkMode={true}
        rootDomain=""
        components={{
          collection: Collection,
          collectionRow: CollectionRow,
        }}
      />
    </div>
  );
};

export default NotionPage;
