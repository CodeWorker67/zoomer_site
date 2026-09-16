import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES, FEATURES, TELEGRAM } from '@utils/constants';
import { canonicalFor } from '@utils/seo';
import SeoCta from '@components/seo/SeoCta';

const steps = [
  {
    title: 'Старт на сайте',
    text: 'Откройте главную страницу, выберите пробный период или тариф. Регистрация занимает меньше минуты.',
  },
  {
    title: 'Telegram-бот',
    text: 'Бот выдаёт ссылку в личный кабинет, где хранится subscription-ключ и статус подписки.',
  },
  {
    title: 'Клиент Happ / V2rayTun',
    text: 'Импортируйте ключ из буфера обмена, выберите сервер (DE, NL, PL, US) и включите VPN.',
  },
  {
    title: 'Поддержка',
    text: 'Если что-то не работает — команда отвечает в Telegram @suppzoomvpn и помогает с настройкой.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>О сервисе Зумерский VPN — миссия и инфраструктура</title>
        <meta
          name="description"
          content="О Зумерском VPN: VLESS Reality, серверы в 4 странах, no-logs, поддержка пользователей из России и СНГ."
        />
        <link rel="canonical" href={canonicalFor(ROUTES.ABOUT)} />
      </Helmet>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold text-white mb-6">О сервисе</h1>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Зумерский VPN</strong> — сервис приватного доступа в интернет для
                пользователей, которым важны скорость, простая настройка и современная защита трафика. Мы используем
                протокол VLESS с расширением Reality и размещаем узлы на высокопропускных каналах в Европе и США.
              </p>
              <p>
                Регистрация и выдача ключей проходят через Telegram-бота и веб-кабинет: не нужно запоминать сложные
                настройки — достаточно импортировать подписку в Happ или V2rayTun.
              </p>

              <h2 className="text-xl font-semibold text-white pt-4">Как это работает</h2>
              <ol className="space-y-4">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4 p-4 rounded-xl bg-zoomer-card border border-zoomer-border">
                    <span className="w-8 h-8 rounded-full bg-zoomer-neon/20 text-zoomer-neon flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <div className="text-white font-medium">{s.title}</div>
                      <p className="text-sm text-gray-400 mt-1">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <h2 className="text-xl font-semibold text-white pt-4">Наши принципы</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Политика no-logs — не анализируем содержимое вашего трафика</li>
                <li>Прозрачные тарифы от 7 дней до года, оплата СБП, картой РФ и криптой</li>
                <li>До 5 устройств на одной подписке</li>
                <li>Поддержка на русском языке в Telegram</li>
                <li>Регулярное обновление инфраструктуры и клиентских инструкций</li>
              </ul>

              <h2 className="text-xl font-semibold text-white pt-4">Возможности</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {FEATURES.map((f) => (
                  <li key={f.title} className="p-3 rounded-lg bg-zoomer-card border border-zoomer-border text-sm">
                    <span className="text-white font-medium">{f.title}</span>
                    <span className="text-gray-500"> — {f.description}</span>
                  </li>
                ))}
              </ul>

              <p>
                Технические детали — на странице{' '}
                <Link to={ROUTES.PROTOCOLS} className="text-zoomer-neon hover:underline">
                  Протоколы и инфраструктура
                </Link>
                . Новости и акции —{' '}
                <a href={TELEGRAM.CHANNEL_URL} className="text-zoomer-neon hover:underline" target="_blank" rel="noreferrer">
                  Telegram-канал
                </a>
                .
              </p>
            </div>

            <SeoCta className="mt-10" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
