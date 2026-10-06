export const SITE_NAME = 'Зумерский VPN';
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://4zoomer.top').replace(/\/$/, '');

export function canonicalFor(path) {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
