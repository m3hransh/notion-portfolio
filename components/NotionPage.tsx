import Head from "next/head";
import { getPageTitle } from "notion-utils";
import React, { FC, useState } from "react";
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
import { Footer } from "./Footer";
import HamButton from "./HamButton";
import { PageHead } from "./PageHead";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface NotionPageProps {
  className?: string;
  chidlren?: React.ReactNode;
}

const NotionPage: FC<types.PageProps> = (props) => {
  const { recordMap } = props;
  const { darkMode } = useContext(ThemeContext);
  const [showPannel, setShowPannel] = useState(true);
  if (!recordMap) {
    return null;
  }
  const title = getPageTitle(recordMap);
  return (
    <div>
      <PageHead site={props.site} />
      <Head>
        <meta name="description" content="Mehran portfolio" />
        <title>{title}</title>
      </Head>
      <HamButton active={showPannel} setActive={setShowPannel} />
      {/* <Navigation active={showPannel} /> */}
      <SideBar isDarkMode={darkMode.value} active={showPannel} />
      <NotionRenderer
        bodyClassName={cs("index-page")}
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
