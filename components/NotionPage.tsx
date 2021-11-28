import Head from "next/head";
import { getPageTitle } from "notion-utils";
import React, { FC } from "react";
import {
  Collection,
  CollectionRow,
  Code,
  NotionRenderer,
} from "react-notion-x";
import Link from "next/link";
import * as types from "../lib/types";
import styles from "./styles.module.css";
import cs from "classnames";
import SideBar from "./SideBar";
import useDarkMode from "use-dark-mode";
import { Footer } from "./Footer";

interface NotionPageProps {
  className?: string;
  chidlren?: React.ReactNode;
}

const NotionPage: FC<types.PageProps> = (props) => {
  const { recordMap } = props;
  const darkMode = useDarkMode(false, { classNameDark: "dark-mode" });
  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);
  // console.log(title, recordMap);
  return (
    <div>
      <Head>
        <meta name="description" content="Mehran portfolio" />
        <title>{title}</title>
      </Head>
      <SideBar isDarkMode={darkMode.value} toggleDarkMode={darkMode.toggle} />
      <NotionRenderer
        bodyClassName={cs(styles.notion, "index-page")}
        recordMap={recordMap}
        fullPage={true}
        darkMode={darkMode.value}
        showTableOfContents={true}
        showCollectionViewDropdown={false}
        minTableOfContentsItems={3}
        rootDomain=""
        components={{
          pageLink: ({
            href,
            as,
            passHref,
            prefetch,
            replace,
            scroll,
            shallow,
            locale,
            ...props
          }: any) => (
            <Link
              href={href}
              as={as}
              passHref={passHref}
              replace={replace}
              scroll={scroll}
              shallow={shallow}
              locale={locale}
            >
              <a {...props} />
            </Link>
          ),
          code: Code,
          collection: Collection,
          collectionRow: CollectionRow,
        }}
        footer={<Footer />}
      />
    </div>
  );
};

export default NotionPage;
