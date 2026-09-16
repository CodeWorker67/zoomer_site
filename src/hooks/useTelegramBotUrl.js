import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { capturePartnerFromUrl } from '@utils/partner';
import { captureStampFromUrl } from '@utils/stamp';
import { getTelegramBotUrl } from '@utils/telegramBotLink';

/** Ссылка на бота с актуальным ?start= по метке / партнёру / домену. */
export function useTelegramBotUrl() {
  const { search } = useLocation();

  return useMemo(() => {
    if (typeof window !== 'undefined') {
      capturePartnerFromUrl();
      captureStampFromUrl();
    }
    return getTelegramBotUrl();
  }, [search]);
}
