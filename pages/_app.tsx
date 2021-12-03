import type { AppProps } from "next/app";
import { GlobalStyle, theme } from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { resolveDarkMode } from "../lib/resolve-dark-mode";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
// global style overrides for notion
import "../styles/prism-theme.css";
import useDarkMode, { DarkMode } from "use-dark-mode";

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(false, { classNameDark: "dark-mode" });

  useEffect(() => {
    const isDarkMode = resolveDarkMode();
  }, []);

  // for accessing the darkMode inside styled-component
  theme.darkMode = darkMode;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
