import { parsePageId } from "notion-utils";
import { ExtendedRecordMap } from "notion-types";
import { NotionAPI } from "notion-client";
import { getSiteForDomain } from "./get-site-for-domain";
import * as types from "./types";
import { pageAcl } from "./acl";

const notion = new NotionAPI();

// Get the record Map of by pageId
// TODO: change the function to use pageName instead of pageId
export default async function resolveNotionPage(
  domain: string,
  rawPageId?: string
): Promise<types.PageProps> {
  let site: types.Site;
  let recordMap: ExtendedRecordMap;
  let pageId: string;
  if (rawPageId && rawPageId !== "index") {
    pageId = parsePageId(rawPageId);

    const resources = await Promise.all([
      getSiteForDomain(domain),
      notion.getPage(rawPageId),
    ]);

    site = resources[0];
    recordMap = resources[1];
  } else {
    site = await getSiteForDomain(domain);
    pageId = site.rootNotionPageId;
    recordMap = await notion.getPage(site.rootNotionPageId);
  }
  const props = { site, recordMap, pageId };
  return { ...props, ...(await pageAcl(props)) };
}
