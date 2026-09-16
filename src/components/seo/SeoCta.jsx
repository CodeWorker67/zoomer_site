import { Link } from 'react-router-dom';
import Button from '@components/ui/Button';
import { ROUTES } from '@utils/constants';
import { SITE_NAME } from '@utils/seo';
import { useTelegramBotUrl } from '@hooks/useTelegramBotUrl';

export default function SeoCta({
  title = `Подключить ${SITE_NAME}`,
  description = 'Бесплатный пробный период, настройка за пару минут через Telegram-бота и личный кабинет.',
  showPricing = true,
  className = '',
}) {
  const telegramBotUrl = useTelegramBotUrl();

  return (
    <div className={`p-6 sm:p-8 glass-card text-center ${className}`}>
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">{description}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to={{ pathname: ROUTES.HOME, hash: '#top' }}>
          <Button type="button" className="px-6 py-3 w-full sm:w-auto">
            Попробовать бесплатно
          </Button>
        </Link>
        {showPricing && (
          <Link to={ROUTES.PRICING}>
            <Button variant="secondary" className="px-6 py-3 w-full sm:w-auto">
              Тарифы
            </Button>
          </Link>
        )}
      </div>
      <p className="mt-4 text-xs text-gray-500">
        Или откройте{' '}
        <a
          href={telegramBotUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zoomer-neon hover:underline"
        >
          бот в Telegram
        </a>
      </p>
    </div>
  );
}
