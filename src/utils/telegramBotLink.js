import { TELEGRAM } from '@utils/constants';
import { getStoredPartner } from '@utils/partner';
import { getStoredStamp } from '@utils/stamp';

/** Payload для deep-link t.me/bot?start=… (партнёр > метка > домен). */
export function getBotStartPayload() {
  if (typeof window === 'undefined') return null;

  const partner = getStoredPartner();
  if (partner) return `partner_${partner}`;

  const stamp = getStoredStamp();
  if (stamp) return stamp;

  return window.location.hostname.replace(/\./g, '_');
}

export function getTelegramBotUrl() {
  const username = TELEGRAM.BOT_NAME.replace(/^@/, '').trim();
  const base = `https://t.me/${username}`;

  if (typeof window === 'undefined') {
    return TELEGRAM.BOT_URL;
  }

  const start = getBotStartPayload();
  if (!start) return base;

  return `${base}?start=${encodeURIComponent(start)}`;
}
