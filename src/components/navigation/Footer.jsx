import { Link } from 'react-router-dom';
import { Shield, Send, MessageCircle } from 'lucide-react';
import { ROUTES, TELEGRAM } from '@utils/constants';
import { useTelegramBotUrl } from '@hooks/useTelegramBotUrl';

export default function Footer() {
  const telegramBotUrl = useTelegramBotUrl();
  return (
    <footer className="bg-zoomer-card border-t border-zoomer-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zoomer-neon-dim to-zoomer-neon flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Зумерский VPS</span>
            </div>
            <p className="text-gray-400 text-sm">
              VPN на VLESS Reality: защищённая передача данных, стабильное соединение и конфиденциальность.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to={ROUTES.PRICING} className="text-gray-400 hover:text-white text-sm transition-colors">Тарифы</Link></li>
              <li><Link to={ROUTES.SETUP} className="text-gray-400 hover:text-white text-sm transition-colors">Подключение</Link></li>
              <li><Link to={ROUTES.GUIDES} className="text-gray-400 hover:text-white text-sm transition-colors">Инструкции</Link></li>
              <li><Link to={ROUTES.FAQ} className="text-gray-400 hover:text-white text-sm transition-colors">FAQ</Link></li>
              <li><Link to={ROUTES.ABOUT} className="text-gray-400 hover:text-white text-sm transition-colors">О сервисе</Link></li>
              <li><Link to={ROUTES.STATUS} className="text-gray-400 hover:text-white text-sm transition-colors">Статус серверов</Link></li>
              <li><Link to={ROUTES.CONTACTS} className="text-gray-400 hover:text-white text-sm transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* SEO / guides */}
          <div>
            <h3 className="text-white font-semibold mb-4">VPN-гайды</h3>
            <ul className="space-y-2">
              <li><Link to="/vpn-for-youtube" className="text-gray-400 hover:text-white text-sm transition-colors">Стриминг видео</Link></li>
              <li><Link to="/vpn-for-instagram" className="text-gray-400 hover:text-white text-sm transition-colors">Соцсети и медиа</Link></li>
              <li><Link to="/vpn-for-telegram" className="text-gray-400 hover:text-white text-sm transition-colors">Мессенджеры</Link></li>
              <li><Link to="/vpn-dlya-rossii" className="text-gray-400 hover:text-white text-sm transition-colors">VPN в РФ и СНГ</Link></li>
              <li><Link to="/luchshiy-vpn" className="text-gray-400 hover:text-white text-sm transition-colors">Лучший VPN</Link></li>
              <li><Link to={ROUTES.PROTOCOLS} className="text-gray-400 hover:text-white text-sm transition-colors">Протоколы</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Документы</h3>
            <ul className="space-y-2">
              <li>
                <Link to={ROUTES.PRIVACY_POLICY} className="text-gray-400 hover:text-white text-sm transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to={ROUTES.TERMS} className="text-gray-400 hover:text-white text-sm transition-colors">
                  Условия использования
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white font-semibold mb-4">Связаться</h3>
            <div className="flex gap-3">
              <a
                href={telegramBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-zoomer-border flex items-center justify-center text-gray-400 hover:text-zoomer-neon hover:border-zoomer-neon transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href={TELEGRAM.SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-zoomer-border flex items-center justify-center text-gray-400 hover:text-zoomer-neon hover:border-zoomer-neon transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zoomer-border text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Зумерский VPS. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
