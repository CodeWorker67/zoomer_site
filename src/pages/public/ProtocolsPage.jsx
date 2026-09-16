import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '@utils/constants';
import { canonicalFor } from '@utils/seo';
import SeoCta from '@components/seo/SeoCta';

export default function ProtocolsPage() {
  return (
    <>
      <Helmet>
        <title>Протоколы VLESS Reality и инфраструктура | Зумерский VPN</title>
        <meta
          name="description"
          content="Как устроен Зумерский VPN: VLESS, Reality, серверы в DE, NL, PL, US, no-logs и клиенты Happ / V2rayTun."
        />
        <link rel="canonical" href={canonicalFor(ROUTES.PROTOCOLS)} />
      </Helmet>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 text-gray-300 leading-relaxed"
          >
            <h1 className="text-4xl font-bold text-white">Протоколы и инфраструктура</h1>
            <p>
              Зумерский VPN построен на стеке Xray с транспортом VLESS и расширением Reality. Для пользователя это
              означает высокую скорость, устойчивость соединения и простую выдачу конфигурации через subscription-ссылку.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">VLESS</h2>
              <p>
                VLESS — лёгкий транспортный протокол в экосистеме Xray. Он не добавляет лишнего шифрования поверх TLS там,
                где это не нужно, и хорошо сочетается с современными методами маскировки. Для пользователя это выражается
                в высокой скорости и стабильности на длинных сессиях (стримы, звонки, загрузки).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Reality</h2>
              <p>
                Reality позволяет VPN-соединению выглядеть как обычный защищённый визит на популярный сайт (TLS handshake к
                «белому» домену). Это усложняет автоматическое распознавание VPN-трафика по сигнатурам и повышает
                устойчивость в условиях фильтрации по сравнению с классическими OpenVPN/IPsec-схемами.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Subscription и ключи</h2>
              <p>
                Вместо ручного ввода десятков параметров вы получаете одну subscription-ссылку в личном кабинете. Клиент
                Happ или V2rayTun подтягивает список серверов автоматически; при обновлении инфраструктуры достаточно
                обновить подписку в приложении.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Серверная сеть</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Узлы в Германии, Нидерландах, Польше и США</li>
                <li>Каналы до 10 Гбит/с на ключевых направлениях</li>
                <li>Безлимитный трафик в рамках тарифа</li>
                <li>
                  Мониторинг доступности —{' '}
                  <Link to={ROUTES.STATUS} className="text-zoomer-neon hover:underline">
                    статус серверов
                  </Link>
                </li>
              </ul>
              <p className="mt-3 text-sm text-gray-500">
                Рекомендация: для мессенджеров и игр — PL/DE; для стриминга 4K — NL/DE; для US-сервисов — узел США.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Клиенты</h2>
              <p>
                Мы рекомендуем Happ и V2rayTun — они поддерживают импорт subscription-ссылки из личного кабинета. Пошаговые
                гайды:{' '}
                <Link to="/kak-nastroit-vpn-na-iphone" className="text-zoomer-neon hover:underline">
                  iPhone
                </Link>
                ,{' '}
                <Link to="/kak-ustanovit-vpn-na-android" className="text-zoomer-neon hover:underline">
                  Android
                </Link>
                ,{' '}
                <Link to="/kak-podklyuchit-vless-na-windows" className="text-zoomer-neon hover:underline">
                  Windows
                </Link>
                . macOS использует те же приложения, что и iOS.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Приватность</h2>
              <p>
                Мы не ведём журналов посещённых ресурсов и не анализируем содержимое пакетов. Храним только данные,
                необходимые для учётной записи и биллинга — см.{' '}
                <Link to={ROUTES.PRIVACY_POLICY} className="text-zoomer-neon hover:underline">
                  политику конфиденциальности
                </Link>
                .
              </p>
            </section>

            <SeoCta />
          </motion.article>
        </div>
      </section>
    </>
  );
}
