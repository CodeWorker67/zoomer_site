import { replaceLocationSearch } from '@utils/replaceLocationSearch';

export const STAMP_STORAGE_KEY = 'zoomer_stamp';
export const STAMP_QUERY_PARAM = 'stamp';
export const STAMP_START_PARAM = 'start';

const STAMP_RE = /^[a-z0-9_-]{1,100}$/;

/** Страницы, где query без ключа — не stamp (подарок, токен входа и т.п.). */
const RESERVED_PATHS = ['/gift', '/auth/bot', '/login/telegram-callback'];

const RESERVED_QUERY_KEYS = new Set([
  'token',
  'id',
  'hash',
  'tariff',
  'method',
  'gift',
  'auth_date',
  'first_name',
  'last_name',
  'username',
  'photo_url',
  'code',
  'ref',
  'partner',
  'start',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
  'gclid',
  'ttclid',
  'yclid',
]);

function normalizeStamp(raw) {
  if (!raw || typeof raw !== 'string') return null;
  const s = raw.trim().toLowerCase();
  if (!s || s === 'email' || !STAMP_RE.test(s)) return null;
  return s;
}

function isReservedPath(pathname) {
  return RESERVED_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

/**
 * Сохраняет метку first-touch из URL и убирает её из адресной строки.
 * Форматы: site.ru?vk, site.ru?stamp=vk, site.ru?start=vk (не partner_*)
 */
/** UTM / click-id → stamp (порядок: более специфичные id первыми). */
const SEARCH_UTM_RULES = [
  { match: (utm, params) => params.has('gclid') || utm.includes('google'), stamp: 'google' },
  { match: (utm, params) => params.has('yclid') || utm.includes('yandex'), stamp: 'yandex' },
  { match: (utm) => utm.includes('bing'), stamp: 'bing' },
  { match: (utm) => utm.includes('duckduckgo') || utm === 'ddg', stamp: 'duckduckgo' },
];

/** Referrer hostname → stamp */
const SEARCH_REFERRER_RULES = [
  { match: (host) => host.includes('google.'), stamp: 'google' },
  { match: (host) => host.includes('yandex.'), stamp: 'yandex' },
  {
    match: (host) => host === 'bing.com' || host.endsWith('.bing.com') || host.includes('bing.'),
    stamp: 'bing',
  },
  { match: (host) => host.includes('duckduckgo.'), stamp: 'duckduckgo' },
];

function detectSearchEngineStamp(params, referrer) {
  const utm = (params.get('utm_source') || '').trim().toLowerCase();
  for (const rule of SEARCH_UTM_RULES) {
    if (rule.match(utm, params)) return rule.stamp;
  }

  if (!referrer) return null;
  try {
    const host = new URL(referrer).hostname.toLowerCase();
    for (const rule of SEARCH_REFERRER_RULES) {
      if (rule.match(host)) return rule.stamp;
    }
  } catch {
    // ignore invalid referrer
  }
  return null;
}

/**
 * First-touch: google/yandex/bing/duckduckgo (referrer или utm/click-id),
 * если явная метка stamp ещё не сохранена.
 */
export function captureSearchEngineStamp() {
  if (typeof window === 'undefined') return;
  if (getStoredStamp()) return;

  const params = new URLSearchParams(window.location.search);
  const stamp = detectSearchEngineStamp(params, document.referrer);
  if (stamp) {
    localStorage.setItem(STAMP_STORAGE_KEY, stamp);
  }
}

export function captureStampFromUrl() {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const namedRaw = params.get(STAMP_QUERY_PARAM);
  let stamp = normalizeStamp(namedRaw);
  let stripNamed = namedRaw !== null && params.has(STAMP_QUERY_PARAM);
  let stripUnnamed = null;
  let stripStart = false;

  if (!stamp) {
    const startRaw = params.get(STAMP_START_PARAM);
    if (startRaw && !startRaw.trim().toLowerCase().startsWith('partner_')) {
      const fromStart = normalizeStamp(startRaw);
      if (fromStart) {
        stamp = fromStart;
        stripStart = params.has(STAMP_START_PARAM);
      }
    }
  }

  if (!stamp && !isReservedPath(window.location.pathname)) {
    const keys = [...params.keys()];
    if (
      keys.length === 1 &&
      !params.get(keys[0]) &&
      !RESERVED_QUERY_KEYS.has(keys[0].toLowerCase())
    ) {
      const candidate = normalizeStamp(keys[0]);
      if (candidate) {
        stamp = candidate;
        stripUnnamed = keys[0];
      }
    }
  }

  if (stamp && !localStorage.getItem(STAMP_STORAGE_KEY)) {
    localStorage.setItem(STAMP_STORAGE_KEY, stamp);
  }

  if (stripNamed) params.delete(STAMP_QUERY_PARAM);
  if (stripUnnamed) params.delete(stripUnnamed);
  if (stripStart) params.delete(STAMP_START_PARAM);

  if (stripNamed || stripUnnamed || stripStart) {
    replaceLocationSearch(params);
  }
}

export function getStoredStamp() {
  if (typeof window === 'undefined') return null;
  return normalizeStamp(localStorage.getItem(STAMP_STORAGE_KEY));
}

export function clearStoredStamp() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STAMP_STORAGE_KEY);
}
