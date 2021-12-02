import Head from "next/head";
import * as React from "react";
import * as types from "../lib/types";

export const PageHead: React.FC<types.PageProps> = ({ site }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="twitter:domain" content={site?.domain} />
      {site?.description && (
        <>
          <meta name="description" content={site.description} />
          <meta property="og:description" content={site.description} />
        </>
      )}

      <meta name="theme-color" content="#EB625A" />
      <meta property="og:type" content="website" />
      {/* TODO: make this dynamic  */}
      <meta
        property="og:image"
        content={`https://mehranshahidi.ir/ogImage.png`}
      />
      <meta property="og:image:width" content="512" />

      <meta property="og:image:height" content="512" />
      <meta name="og:title" content={site?.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="shortcut icon" href="/favicon.png" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
};
