import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ROUTES } from '@utils/constants';
import { canonicalFor } from '@utils/seo';
import SeoCta from '@components/seo/SeoCta';

const faqs = [
  {
    q: 'Что такое Зумерский VPN?',
    a: 'Это сервис доступа в интернет через зашифрованный туннель на протоколе VLESS Reality. Управление — через Telegram-бота и личный кабинет на сайте.',
  },
  {
    q: 'Сохраняете ли вы логи?',
    a: 'Нет. Мы не храним историю сайтов, содержимое трафика и IP-адреса пользователей. Подробнее — в политике конфиденциальности.',
  },
  {
    q: 'На скольких устройствах работает одна подписка?',
    a: 'До 5 устройств одновременно: телефон, планшет, ноутбук и т.д.',
  },
  {
    q: 'Какие приложения использовать?',
    a: 'Рекомендуем Happ; альтернатива — V2rayTun на iOS, Android, Windows и macOS. Инструкции — в разделе «Подключение» и в гайдах по устройствам.',
  },
  {
    q: 'Есть ли бесплатный период?',
    a: 'Да, на главной странице можно активировать пробный доступ без привязки карты (условия указаны в тарифах).',
  },
  {
    q: 'Какие способы оплаты?',
    a: 'СБП, карты РФ, криптовалюта через CryptoBot.',
  },
  {
    q: 'VPN не подключается — что делать?',
    a: 'Смените сервер (страну), обновите приложение, проверьте ключ в личном кабинете. Если не помогло — напишите в поддержку.',
  },
  {
    q: 'Работает ли VPN для YouTube, Instagram, Telegram?',
    a: 'Да. Для каждой платформы есть отдельные материалы; главное — выбрать стабильный сервер и актуальный клиент.',
  },
  {
    q: 'Чем VLESS Reality лучше обычного VPN?',
    a: 'Трафик маскируется под обычный HTTPS к легитимным сайтам, что повышает устойчивость при фильтрации. Подробнее — на странице «Протоколы».',
  },
  {
    q: 'Как связаться с поддержкой?',
    a: 'Telegram @suppzoomvpn или раздел «Контакты» на сайте.',
  },
  {
    q: 'Можно ли вернуть деньги?',
    a: 'Если VPN не подключается — напишите в поддержку, поможем с настройкой. Вопросы возврата решаются индивидуально согласно пользовательскому соглашению.',
  },
  {
    q: 'Нужно ли каждый раз настраивать VPN заново?',
    a: 'Нет. После импорта subscription достаточно включать и выключать туннель в приложении. Новый импорт нужен только при смене ключа или переустановке клиента.',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const path = ROUTES.FAQ;

  return (
    <>
      <Helmet>
        <title>FAQ — частые вопросы | Зумерский VPN</title>
        <meta
          name="description"
          content="Ответы на частые вопросы о Зумерском VPN: оплата, устройства, VLESS, YouTube, поддержка."
        />
        <link rel="canonical" href={canonicalFor(path)} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          })}
        </script>
      </Helmet>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-gradient">FAQ</span> — частые вопросы
            </h1>
            <p className="text-gray-400">Всё о подключении, оплате и работе сервиса.</p>
          </motion.div>

          <div className="space-y-3 mb-12">
            {faqs.map((item, i) => (
              <div key={i} className="rounded-xl border border-zoomer-border bg-zoomer-card overflow-hidden">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 p-4 text-left text-white font-medium"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  {item.q}
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-4 pb-4 text-gray-400 text-sm leading-relaxed">{item.a}</div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mb-6">
            Подробнее о протоколах —{' '}
            <Link to={ROUTES.PROTOCOLS} className="text-zoomer-neon hover:underline">
              VLESS и инфраструктура
            </Link>
            .
          </p>

          <SeoCta />
        </div>
      </section>
    </>
  );
}
