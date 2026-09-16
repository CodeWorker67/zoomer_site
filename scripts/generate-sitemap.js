/**
 * Generates public/sitemap.xml from SEO routes. Run: node scripts/generate-sitemap.js
 */
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { COMPETITOR_PAGE_PATHS } from '../src/content/competitor/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const siteUrl = (process.env.VITE_SITE_URL || 'https://zoomerskyvpn.ru').replace(/\/$/, '');

const staticPaths = [
  '/',
  '/pricing',
  '/setup',
  '/support',
  '/faq',
  '/about',
  '/status',
  '/protocols',
  '/contacts',
  '/guides',
  '/privacy',
  '/terms',
];

// SEO paths — keep in sync with src/content/seoPages.js (import would need bundler)
const seoPaths = [
  '/vpn-for-youtube',
  '/vpn-for-instagram',
  '/vpn-for-telegram',
  '/kak-nastroit-vpn-na-iphone',
  '/kak-ustanovit-vpn-na-android',
  '/kak-podklyuchit-vless-na-windows',
  '/luchshiy-vpn',
  '/vpn-dlya-rossii',
  '/byistryy-vpn',
  '/vpn-dlya-telefona',
  '/vpn-dlya-windows',
  '/vpn-dlya-iphone',
  '/vpn-dlya-android',
  '/vpn-dlya-youtube',
  '/vpn-dlya-instagram',
  '/vpn-dlya-telegram',
  '/kakoy-vpn-rabotaet-v-rossii-2026',
  '/vpn-dlya-youtube-v-rossii',
  '/vpn-dlya-iphone-v-rossii',
  '/vpn-dlya-android-v-rossii',
  '/vpn-dlya-windows-11-v-rossii',
  '/vpn-dlya-smart-tv',
  '/vpn-dlya-rostelekom',
  '/vpn-dlya-mts',
  '/vpn-dlya-beeline',
  '/vpn-dlya-megafon',
  '/vpn-dlya-moskvy',
  '/vpn-dlya-sankt-peterburga',
  '/vpn-dlya-kazahstana',
  '/vpn-dlya-belarusi',
];

const all = [...new Set([...staticPaths, ...seoPaths, ...COMPETITOR_PAGE_PATHS])];
const lastmod = new Date().toISOString().slice(0, 10);

const urls = all
  .map(
    (path) => `  <url>
    <loc>${siteUrl}${path === '/' ? '' : path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '/' ? '1.0' : path.startsWith('/vpn') || path.includes('luchshiy') ? '0.8' : path.includes('-vs-zoomer') || path.includes('alternativa-') ? '0.65' : '0.6'}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(resolve(root, 'public/sitemap.xml'), xml, 'utf8');
console.log(`Wrote ${all.length} URLs to public/sitemap.xml`);
