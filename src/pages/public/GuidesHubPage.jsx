import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Apple, Smartphone, Monitor } from 'lucide-react';
import { ROUTES } from '@utils/constants';
import { SEO_PAGES } from '@content/seoPages';
import { canonicalFor } from '@utils/seo';
import SeoCta from '@components/seo/SeoCta';

const guidePaths = [
  '/kak-nastroit-vpn-na-iphone',
  '/kak-ustanovit-vpn-na-android',
  '/kak-podklyuchit-vless-na-windows',
];

const icons = {
  '/kak-nastroit-vpn-na-iphone': Apple,
  '/kak-ustanovit-vpn-na-android': Smartphone,
  '/kak-podklyuchit-vless-na-windows': Monitor,
};

const guides = guidePaths.map((path) => SEO_PAGES.find((p) => p.path === path)).filter(Boolean);

export default function GuidesHubPage() {
  return (
    <>
      <Helmet>
        <title>Инструкции по VPN на всех устройствах | Зумерский VPN</title>
        <meta
          name="description"
          content="Гайды VPN: защищённая передача данных, iPhone, Android, Windows VLESS. Зумерский VPN."
        />
        <link rel="canonical" href={canonicalFor(ROUTES.GUIDES)} />
      </Helmet>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold text-white mb-4">Инструкции по устройствам</h1>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Зумерский VPN использует протокол VLESS Reality. Ключ подписки вы получаете в личном кабинете после
              регистрации через Telegram-бота. Ниже — подробные гайды; для macOS шаги совпадают с iOS (Happ / V2rayTun из
              App Store).
            </p>
            <p className="text-gray-500 text-sm mb-8">
              Быстрый выбор приложения и платформы — на странице{' '}
              <Link to={ROUTES.SETUP} className="text-zoomer-neon hover:underline">
                Подключение
              </Link>
              .
            </p>

            <ul className="space-y-4 mb-10">
              {guides.map((g) => {
                const Icon = icons[g.path] || Smartphone;
                return (
                  <li key={g.path}>
                    <Link
                      to={g.path}
                      className="block p-5 rounded-xl border border-zoomer-border bg-zoomer-card hover:border-zoomer-neon/30 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zoomer-neon/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-zoomer-neon" />
                        </div>
                        <div>
                          <span className="text-white font-medium">{g.h1}</span>
                          <p className="text-gray-500 text-sm mt-2 leading-relaxed">{g.intro}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="p-5 rounded-xl border border-zoomer-border bg-white/5 mb-10 text-sm text-gray-400">
              <p className="text-white font-medium mb-2">Общие шаги для всех платформ</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Активируйте пробный период или тариф на главной странице сайта.</li>
                <li>Откройте бота и перейдите в личный кабинет.</li>
                <li>Скопируйте subscription и импортируйте в Happ или V2rayTun.</li>
                <li>Выберите сервер и включите VPN.</li>
              </ol>
            </div>

            <SeoCta />
          </motion.div>
        </div>
      </section>
    </>
  );
}
