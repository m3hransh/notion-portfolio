import { createGlobalStyle } from "styled-components";
import { colors as SKColors } from "./colors";
import { DarkMode } from "use-dark-mode";
const breakpoints = [480, 768, 992, 1500];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const unit = 8;
export const widths = {
  largePageWidth: 1600,
  regularPageWidth: 1000,
  textPageWidth: 800,
};
export const theme = {
  light: {
    primary: SKColors.black.base,
    secondary: SKColors.teal.base,
    accent: SKColors.pink.base,
    background: SKColors.silver.light,
    surface: "hsla(0,0%,100%,0.8)",
    grey: SKColors.silver.dark,
    text: SKColors.black.base,
    textSecondary: SKColors.grey.dark,
  },
  dark: {
    primary: SKColors.silver.base,
    secondary: SKColors.teal.base,
    accent: SKColors.pink.base,
    background: SKColors.black.base,
    grey: SKColors.silver.dark,
    text: SKColors.black.base,
    textSecondary: SKColors.grey.dark,
  },
  color: {
    ...SKColors,
  },
  fonts: ["sans-serif", "Roboto", "Segoe UI", "Segoe UI Emoji"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  darkMode: {} as DarkMode,
};
export const GlobalStyle = createGlobalStyle`
  html, body {
    height: '100%';
  }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Source Sans Pro, sans-serif;
    overflow-x: hidden;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
  }
  h1 {
    font-size: 40;
    line-height: 1;
  }
  h2 {
    font-size: 36;
  }
  h3 {
    font-size: 30;
  }
  h5 {
    font-size: 16;
    text-transform: uppercase;
    letter-spacing: 4;
  }
  a {
    color: inherit;
    text-decoration: none;
    }
  //Notion styles
  :root {
  --notion-max-width: ${widths.textPageWidth}px;
  --notion-header-height: 54px;
  }

.notion-page {
  padding-bottom: calc(max(5vh, 32px)) !important;
  line-height: 1.65;
  }
.notion > * {
  padding: 0;
  }
.index-page {
  --notion-max-width: ${widths.textPageWidth}px;
}
${mq[3]}{ 
.notion-header .nav-header {
  max-width: 1100px;
  margin: 0 auto;
}
 }

.notion-text {
  padding: 0.5em 2px;
}

.notion-asset-caption {
  text-align: center;
}

.notion-asset-wrapper {
  margin-top: 1em;
  margin-bottom: 1em;
}

/* <-- Fix embedded video's size overflows its container */
.notion-asset-wrapper-video > div,
.notion-asset-wrapper-video video {
  width: 100% !important;
}
/* Fix embedded video's size overflows its container --> */

.notion-gallery-grid {
  grid-gap: 6vmin;
  gap: 6vmin;
}

.notion-gallery-grid .notion-page-icon {
  display: none;
}

.notion-gallery-grid .notion-page-title-text {
  font-size: 2em;
  white-space: unset;
}

.notion-gallery-grid .notion-collection-card-property {
  white-space: unset;
  text-overflow: unset;
}

.notion-gallery-grid .notion-property-text {
  font-size: 14px;
}

.notion-collection-card {
  border-radius: 16px;
  box-shadow: none;
}

.notion-collection-card-cover img {
  border-radius: 16px;
}

.notion-collection-card {
  overflow: visible;
}

.notion-collection-card-cover {
  border-radius: 16px;
  overflow: visible;
  box-shadow: 2px 2px 8px 4px rgba(15, 15, 15, 0.1);
}

.notion-collection-card-cover {
  border-bottom: 0 none;
  transition: filter 150ms linear;
  filter: none;
}

.notion-collection-card:hover .notion-collection-card-cover {
  filter: brightness(120%);
}

/* only target safari */
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  _::-webkit-full-page-media,
  _:future,
  :root,
  .notion-collection-card-cover {
    transition: none 0ms linear;
  }
}

.notion-quote {
  padding: 0.2em 0.75em;
  font-size: 1.1em;
}

.notion-h1,
.notion-h2,
.notion-h3 {
  margin-bottom: 0.25em;
}

.notion-callout {
  margin: 0.75em 0;
}

.notion-hr {
  margin: 2em 0;
}

@media only screen and (max-width: ${breakpoints[3]}px) {
  .index-page.notion-page {
    padding-left: 2vw;
    padding-right: 2vw;
  }
  .nav-header{
    margin-left: var(--notion-header-height);
  }
}

@media only screen and (max-width: ${breakpoints[2]}px) {
  .notion-page {
    padding-left: 2vw;
    padding-right: 2vw;
  }
}

@media only screen and (max-width: ${breakpoints[1]}px) {
  .notion-search-button {
    display: none !important;
  }
}

@media only screen and (max-width: ${breakpoints[0]}px) {
  .notion-gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 10vmin;
    gap: 10vmin;
  }
}

.notion .notion-page-icon-cover {
  margin-left: auto;
  margin-right: auto;
}

.notion-title {
  display: block;
  text-align: center;
}

.notion-collection-column-title {
  display: none !important;
}

.notion-collection-row-property .notion-property {
  display: flex;
  justify-content: center;
}

// remove notion-checkbox from notion collection row
.notion-property.notion-property-checkbox{
  display:none;
}
.notion-collection-row-value {
  padding: 0;
}

.notion-page-cover {
  max-width: ${widths.regularPageWidth}px;
  border-radius: 24px;
  box-shadow: 2px 2px 8px 4px rgba(15, 15, 15, 0.1);
}

@media only screen and (max-width: ${breakpoints[3]}px) {
  .notion-page-cover {
    border-radius: 0;
  }
}

.notion-block-ab9a258d6cf444f3bb40dc2600feae91 .notion-page-link {
  justify-content: center;
  padding: 2em;
}

.notion-code {
  background: rgba(249, 250, 251, 1);
  border: 1px solid rgba(229, 231, 235, 1);
  border-radius: 0.375rem;
}

.notion-link {
  position: relative;
  transition: unset;
  opacity: 1;
}

.notion-link:hover {
  border-width: 3px;
  border-image: linear-gradient(90.68deg, ${SKColors.purple.base} 0.26%, ${SKColors.rose.light} 102.37%);
  border-image-slice: 1;
}

.notion-red_background,
.notion-pink_background,
.notion-blue_background,
.notion-purple_background,
.notion-teal_background,
.notion-yellow_background,
.notion-orange_background,
.notion-brown_background,
.notion-gray_background {
  padding: 0 0.5rem;
  margin: 0 -0.5rem 0 -0.25rem;
  border-radius: 0.5rem;
  border-bottom-left-radius: 0.125rem;
  box-decoration-break: clone;

  background-color: none;

  /* light yellow */
  background-image: linear-gradient(
    119deg,
    var(--bg-color),
    #fff697 10.5%,
    #fdf59d 85.29%,
    var(--bg-color)
  );
}

.notion-purple_background,
.notion-pink_background {
  /* light pink */
  background-image: linear-gradient(
    119deg,
    var(--bg-color),
    #f5b8d1 10.5%,
    #f9bcd3 85.29%,
    var(--bg-color)
  );
}

.notion-blue_background,
.notion-gray_background {
  /* light blue */
  background-image: linear-gradient(
    119deg,
    var(--bg-color),
    #adedfc 10.5%,
    #adebfd 85.29%,
    var(--bg-color)
  );
}

.notion-red_background,
.notion-orange_background {
  /* light red */
  background-image: linear-gradient(
    119deg,
    var(--bg-color),
    #f5c4ff 10.5%,
    #e7a8fc 85.29%,
    var(--bg-color)
  );
}

.notion-teal_background {
  /* light green */
  background-image: linear-gradient(
    119deg,
    var(--bg-color),
    #d4eabc 10.5%,
    #d2eabc 85.29%,
    var(--bg-color)
  );
}

.notion-brown_background {
  /* dark blue */
  background-image: linear-gradient(
    119deg,
    var(--bg-color),
    #96b8ec 10.5%,
    #a6c3f0 85.29%,
    var(--bg-color)
  );
}

.dark-mode .notion-red_background,
.dark-mode .notion-pink_background,
.dark-mode .notion-blue_background,
.dark-mode .notion-purple_background,
.dark-mode .notion-teal_background,
.dark-mode .notion-yellow_background,
.dark-mode .notion-orange_background,
.dark-mode .notion-brown_background,
.dark-mode .notion-gray_background {
  padding: 0;
  margin: 0;
  border-radius: 0;
  background: none !important;
}

.notion-block-f382a57807bc40779860eb079d0144f2 .lazy-image-wrapper {
  border-radius: 16px;
}

/* if you don't want rounded page images, remove this */
.notion-page-icon-wrapper img.notion-page-icon {
  border-radius: 50%;
  box-shadow: 0 8px 40px 0 rgb(0 0 0 / 21%);
}

.notion-header {
  /* background: hsla(0, 0%, 100%, 0.8); */
  background: transparent;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  backdrop-filter: saturate(180%) blur(16px);
}

.dark-mode .notion-header {
  background: transparent;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  backdrop-filter: saturate(180%) blur(8px);
}

.notion-bookmark:hover {
  border-image: linear-gradient(90.68deg, #b439df 0.26%, #e5337e 102.37%);
  border-image-slice: 1;
}
.dark-mode{
  --fg-color: ${theme.dark.primary};
  --fg-color-0: var(--fg-color);
  --fg-color-1: var(--fg-color);
  --fg-color-2: var(--fg-color);
  --fg-color-3: var(--fg-color);
  --fg-color-4: var(--fg-color);
  --fg-color-5: rgba(255, 255, 255, 0.7);
  --fg-color-6: #fff;
  --fg-color-icon: #fff;
  --bg-color: ${theme.dark.background};
  --bg-color-0: rgb(71, 76, 80);
  --bg-color-1: rgb(63, 68, 71);
  --bg-color-2: rgba(135, 131, 120, 0.15);
}
:root {
  --fg-color: ${theme.light.primary};
  --fg-color-0: rgba(55, 53, 47, 0.09);
  --fg-color-1: rgba(55, 53, 47, 0.16);
  --fg-color-2: rgba(55, 53, 47, 0.4);
  --fg-color-3: rgba(55, 53, 47, 0.6);
  --fg-color-4: #000;
  --fg-color-5: rgba(55, 53, 47, 0.024);
  --fg-color-6: rgba(55, 53, 47, 0.8);
  --fg-color-icon: var(--fg-color);
  --bg-color: ${theme.light.background};
  --bg-color-0: rgba(135, 131, 120, 0.15);
  --bg-color-1: rgb(247, 246, 243);
  --bg-color-2: rgba(135, 131, 120, 0.15);
  --select-color-0: rgb(46, 170, 220);
  --select-color-1: rgba(45, 170, 219, 0.3);
  --select-color-2: #d9eff8;
  --notion-red: rgb(224, 62, 62);
  --notion-pink: rgb(173, 26, 114);
  --notion-blue: rgb(11, 110, 153);
  --notion-purple: rgb(105, 64, 165);
  --notion-teal: rgb(15, 123, 108);
  --notion-yellow: rgb(223, 171, 1);
  --notion-orange: rgb(217, 115, 13);
  --notion-brown: rgb(100, 71, 58);
  --notion-gray: rgb(155, 154, 151);
  --notion-red_background: rgb(251, 228, 228);
  --notion-pink_background: rgb(244, 223, 235);
  --notion-blue_background: rgb(221, 235, 241);
  --notion-purple_background: rgb(234, 228, 242);
  --notion-teal_background: rgb(221, 237, 234);
  --notion-yellow_background: rgb(251, 243, 219);
  --notion-orange_background: rgb(250, 235, 221);
  --notion-brown_background: rgb(233, 229, 227);
  --notion-gray_background: rgb(235, 236, 237);
  --notion-red_background_co: rgba(251, 228, 228, 0.3);
  --notion-pink_background_co: rgba(244, 223, 235, 0.3);
  --notion-blue_background_co: rgba(221, 235, 241, 0.3);
  --notion-purple_background_co: rgba(234, 228, 242, 0.3);
  --notion-teal_background_co: rgba(221, 237, 234, 0.3);
  --notion-yellow_background_co: rgba(251, 243, 219, 0.3);
  --notion-orange_background_co: rgba(250, 235, 221, 0.3);
  --notion-brown_background_co: rgba(233, 229, 227, 0.3);
  --notion-gray_background_co: rgba(235, 236, 237, 0.3);
  --notion-item-blue: rgba(0, 120, 223, 0.2);
  --notion-item-orange: rgba(245, 93, 0, 0.2);
  --notion-item-green: rgba(0, 135, 107, 0.2);
  --notion-item-pink: rgba(221, 0, 129, 0.2);
  --notion-item-brown: rgba(140, 46, 0, 0.2);
  --notion-item-red: rgba(255, 0, 26, 0.2);
  --notion-item-yellow: rgba(233, 168, 0, 0.2);
  --notion-item-default: rgba(206, 205, 202, 0.5);
  --notion-item-purple: rgba(103, 36, 222, 0.2);
  --notion-item-gray: rgba(155, 154, 151, 0.4);
}
`;
