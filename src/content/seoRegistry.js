import { SEO_PAGES, getSeoPageByPath as getBaseSeoPage } from './seoPages';
import { COMPETITOR_PAGES, getCompetitorPageByPath } from './competitor/index.js';

export { SEO_PAGES, COMPETITOR_PAGES };

export function getSeoPageByPath(pathname) {
  return getBaseSeoPage(pathname) ?? getCompetitorPageByPath(pathname);
}

export const EXTRA_SEO_PATHS = COMPETITOR_PAGES.map((p) => p.path);
