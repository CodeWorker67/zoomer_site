import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Clock, BookOpen } from 'lucide-react';
import { ROUTES, TELEGRAM } from '@utils/constants';
import { canonicalFor } from '@utils/seo';
import { useTelegramBotUrl } from '@hooks/useTelegramBotUrl';
import SeoCta from '@components/seo/SeoCta';

export default function ContactsPage() {
  const telegramBotUrl = useTelegramBotUrl();
  return (
    <>
      <Helmet>
        <title>Контакты и поддержка | Зумерский VPN</title>
        <meta name="description" content="Связаться с поддержкой Зумерский VPN: Telegram-бот, чат поддержки, FAQ." />
        <link rel="canonical" href={canonicalFor(ROUTES.CONTACTS)} />
      </Helmet>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Контакты</span> и поддержка
            </h1>
            <p className="text-gray-400">
              Поможем с подключением, оплатой, сменой сервера и восстановлением доступа к кабинету.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <a
              href={TELEGRAM.SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-zoomer-border bg-zoomer-card hover:border-zoomer-neon/40 transition-colors flex flex-col items-center text-center gap-3"
            >
              <MessageCircle className="w-10 h-10 text-zoomer-neon" />
              <span className="text-white font-medium">Чат поддержки</span>
              <span className="text-gray-500 text-sm">@suppzoomvpn — технические вопросы</span>
            </a>
            <a
              href={telegramBotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-zoomer-border bg-zoomer-card hover:border-zoomer-neon/40 transition-colors flex flex-col items-center text-center gap-3"
            >
              <Send className="w-10 h-10 text-zoomer-neon" />
              <span className="text-white font-medium">Telegram-бот</span>
              <span className="text-gray-500 text-sm">Подключение, ключи, тарифы</span>
            </a>
          </div>

          <div className="space-y-4 mb-10 text-gray-300 text-sm leading-relaxed">
            <div className="flex gap-3 p-4 rounded-xl border border-zoomer-border bg-zoomer-card">
              <Clock className="w-5 h-5 text-zoomer-neon flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Время ответа</p>
                <p className="text-gray-400 mt-1">
                  Обычно отвечаем в течение 15–30 минут в дневное время (МСК). В ночные часы — дольше, но заявки не
                  теряются.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 rounded-xl border border-zoomer-border bg-zoomer-card">
              <BookOpen className="w-5 h-5 text-zoomer-neon flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Перед обращением</p>
                <p className="text-gray-400 mt-1">
                  Загляните в{' '}
                  <Link to={ROUTES.FAQ} className="text-zoomer-neon hover:underline">
                    FAQ
                  </Link>
                  ,{' '}
                  <Link to={ROUTES.GUIDES} className="text-zoomer-neon hover:underline">
                    инструкции
                  </Link>{' '}
                  и{' '}
                  <Link to={ROUTES.SETUP} className="text-zoomer-neon hover:underline">
                    подключение
                  </Link>
                  . Укажите в сообщении: устройство, приложение (Happ/V2rayTun), провайдер и что уже пробовали.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mb-8">
            Юридические документы:{' '}
            <Link to={ROUTES.PRIVACY_POLICY} className="text-zoomer-neon hover:underline">
              конфиденциальность
            </Link>
            ,{' '}
            <Link to={ROUTES.TERMS} className="text-zoomer-neon hover:underline">
              условия использования
            </Link>
            .
          </p>

          <SeoCta />
        </div>
      </section>
    </>
  );
}
