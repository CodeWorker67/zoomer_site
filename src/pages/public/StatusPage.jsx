import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Activity, AlertCircle } from 'lucide-react';
import { ROUTES, TELEGRAM } from '@utils/constants';
import { canonicalFor } from '@utils/seo';
import SeoCta from '@components/seo/SeoCta';

const nodes = [
  { id: 'de', name: 'Германия', latency: '32 ms', load: 'Низкая', use: 'Стриминг, общий доступ' },
  { id: 'nl', name: 'Нидерланды', latency: '38 ms', load: 'Низкая', use: 'YouTube 4K, загрузки' },
  { id: 'pl', name: 'Польша', latency: '28 ms', load: 'Низкая', use: 'Мессенджеры, низкий ping' },
  { id: 'us', name: 'США', latency: '112 ms', load: 'Средняя', use: 'Сервисы US-региона' },
];

const services = [
  { name: 'VPN-туннели (VLESS Reality)', status: 'ok' },
  { name: 'Выдача ключей в боте', status: 'ok' },
  { name: 'Личный кабинет на сайте', status: 'ok' },
  { name: 'Оплата (СБП, карта, крипто)', status: 'ok' },
];

export default function StatusPage() {
  return (
    <>
      <Helmet>
        <title>Статус серверов Зумерский VPN</title>
        <meta
          name="description"
          content="Актуальный статус VPN-серверов Зумерский VPN: Германия, Нидерланды, Польша, США."
        />
        <link rel="canonical" href={canonicalFor(ROUTES.STATUS)} />
      </Helmet>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-8 h-8 text-zoomer-green" />
              <h1 className="text-4xl font-bold text-white">Статус серверов</h1>
            </div>
            <p className="text-gray-400 mb-2">
              Все системы работают штатно. Данные обновляются вручную при изменениях инфраструктуры.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Задержки указаны ориентировочно из Москвы; фактический ping зависит от вашего провайдера и времени суток.
            </p>

            <h2 className="text-lg font-semibold text-white mb-4">Локации VPN</h2>
            <div className="space-y-3 mb-10">
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className="p-4 rounded-xl border border-zoomer-border bg-zoomer-card"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-zoomer-green" />
                      <span className="text-white font-medium">{node.name}</span>
                    </div>
                    <span className="text-sm text-zoomer-green">Работает</span>
                  </div>
                  <div className="text-sm text-gray-500 flex flex-wrap gap-x-4 gap-y-1 pl-8">
                    <span>Ping ~{node.latency}</span>
                    <span>Нагрузка: {node.load}</span>
                    <span>{node.use}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-lg font-semibold text-white mb-4">Сервисы</h2>
            <ul className="space-y-2 mb-10">
              {services.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-zoomer-border text-sm text-gray-300"
                >
                  <CheckCircle className="w-4 h-4 text-zoomer-green flex-shrink-0" />
                  {s.name}
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl border border-zoomer-border bg-zoomer-card/50 mb-8 flex gap-3">
              <AlertCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-400">
                <p className="text-white font-medium mb-1">Плановые работы</p>
                <p>
                  Краткие перезагрузки узлов возможны ночью по UTC (обычно не более 5 минут). О сбоях сообщаем в{' '}
                  <a href={TELEGRAM.CHANNEL_URL} className="text-zoomer-neon hover:underline" target="_blank" rel="noreferrer">
                    канале
                  </a>
                  .
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              При локальных проблемах сначала смените сервер в приложении. Сообщить о сбое:{' '}
              <a href={TELEGRAM.SUPPORT_URL} className="text-zoomer-neon hover:underline" target="_blank" rel="noreferrer">
                поддержка в Telegram
              </a>
              .
            </p>

            <SeoCta />
          </motion.div>
        </div>
      </section>
    </>
  );
}
