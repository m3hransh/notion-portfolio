import { parsePageId } from "notion-utils";
import { ExtendedRecordMap } from "notion-types";
import { NotionAPI } from "notion-client";
const rootPageId = "0bdd777d69ef4af2836d5e8445fcee5f";

const notion = new NotionAPI();

// Get the record Map of by pageId
// TODO: change the function to use pageName instead of pageId
export default async function resolveNotionPage(
  pageId = rootPageId
): Promise<ExtendedRecordMap> {
  const recordMap: ExtendedRecordMap = await notion.getPage(pageId);
  return recordMap;
}
