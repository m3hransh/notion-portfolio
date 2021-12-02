import { ExtendedRecordMap } from "notion-types";

export interface PageProps {
  recordMap?: ExtendedRecordMap;
  pageId?: string;
  site?: Site;
  error?: PageError;
}

export interface PageError {
  message?: string;
  statusCode: number;
}

export interface Site {
  name: string;
  domain: string;

  rootNotionPageId: string;

  description?: string;
  image?: string;
}
