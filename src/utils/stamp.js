export const STAMP_STORAGE_KEY = 'zoomer_stamp';
export const STAMP_QUERY_PARAM = 'stamp';

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
 * Форматы: ?stamp=vk  или  ?vk
 */
export function captureStampFromUrl() {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const namedRaw = params.get(STAMP_QUERY_PARAM);
  let stamp = normalizeStamp(namedRaw);
  let stripNamed = namedRaw !== null && params.has(STAMP_QUERY_PARAM);
  let stripUnnamed = null;

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

  if (stripNamed || stripUnnamed) {
    const qs = params.toString();
    const next = `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`;
    window.history.replaceState(null, '', next);
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
