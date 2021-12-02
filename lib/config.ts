import { parsePageId } from "notion-utils";
import { getSiteConfig, getEnv } from "./get-config-value";

// making sure the pageId is valid
export const rootNotionPageId: string = parsePageId(
  getSiteConfig("rootNotionPageId"),
  { uuid: false }
);

if (!rootNotionPageId) {
  throw new Error('Config error invalid "rootNotionPageId"');
}

// general site config
export const name: string = getSiteConfig("name");
export const author: string = getSiteConfig("author");
export const domain: string = getSiteConfig("domain");
export const description: string = getSiteConfig("description", "Notion Blog");

// social accounts
export const twitter: string | null = getSiteConfig("twitter", null);
export const github: string | null = getSiteConfig("github", null);
export const linkedin: string | null = getSiteConfig("linkedin", null);

export const socialImageTitle: string | null = getSiteConfig(
  "socialImageTitle",
  null
);
export const socialImageSubtitle: string | null = getSiteConfig(
  "socialImageSubtitle",
  null
);

// default notion values for site-wide consistency (optional; may be overridden on a per-page basis)
export const defaultPageIcon: string | null = getSiteConfig(
  "defaultPageIcon",
  null
);
export const defaultPageCover: string | null = getSiteConfig(
  "defaultPageCover",
  null
);
export const defaultPageCoverPosition: number = getSiteConfig(
  "defaultPageCoverPosition",
  0.5
);

// ----------------------------------------------------------------------------
export const isDev =
  process.env.NODE_ENV === "development" || !process.env.NODE_ENV;

export const isServer = typeof window === "undefined";

export const port = getEnv("PORT", "3000");
export const host = isDev ? `http://localhost:${port}` : `https://${domain}`;

export const apiBaseUrl = `${host}/api`;

export const api = {
  createPreviewImage: `${apiBaseUrl}/create-preview-image`,
  searchNotion: `${apiBaseUrl}/search-notion`,
};
