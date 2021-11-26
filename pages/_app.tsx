import "../styles/globals.css";
import type { AppProps } from "next/app";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
// global style overrides for notion
import "../styles/notion.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
