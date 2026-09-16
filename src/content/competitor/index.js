import { buildCompetitorPages } from './buildArticles.js';

export const COMPETITOR_PAGES = buildCompetitorPages();
export const COMPETITOR_PAGE_PATHS = COMPETITOR_PAGES.map((p) => p.path);

export function getCompetitorPageByPath(pathname) {
  const normalized = pathname.replace(/\/$/, '') || '/';
  return COMPETITOR_PAGES.find((p) => p.path === normalized);
}
