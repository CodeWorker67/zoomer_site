/**
 * Export SEO titles, descriptions, h1, FAQ, static pages → seo-keywords-phrases.txt
 * Run: node scripts/export-seo-phrases.js
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { COMPETITOR_PAGES } from '../src/content/competitor/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const outPath = resolve(root, 'seo-keywords-phrases.txt');

const STATIC = [
  'Зумерский VPN — защищённая передача данных | VLESS Reality',
  'Зумерский ВПН: защищённая передача данных, приватная маршрутизация, VLESS Reality, доступ к глобальному контенту. Попробуй бесплатно!',
  'Зумерский ВПН: защищённая передача данных, VLESS Reality, доступ к глобальному контенту. До 10 Гбит/с, 4 страны. 5 дней бесплатно.',
  'Быстрый VPN',
  'для дома и работы',
  'VLESS Reality протокол. До 10 Гбит/с. Серверы в 4 странах.',
  'Защищённая передача данных и стабильное соединение в любых сетях.',
  'VPN-сервис: защищённая передача данных, доступ к глобальному контенту, VLESS Reality',
  '5 дней бесплатно',
  'Зумерский VPN',
  'Тарифы — Зумерский VPN',
  'Тарифы Зумерский VPN от 99 ₽: защищённая передача данных, безлимит, до 5 устройств, 26 серверов.',
  'Подключение — Зумерский VPN',
  'Подключение Зумерский VPN: защищённая передача данных на Android, iOS, Windows и macOS.',
  'Контакты и поддержка | Зумерский VPN',
  'Поддержка Зумерский VPN: Telegram, FAQ. Помощь с защищённым подключением и доступом к сервисам.',
  'О сервисе Зумерский VPN — миссия и инфраструктура',
  'О Зумерском VPN: защита передаваемой информации, VLESS Reality, доступ к международным сервисам, no-logs, поддержка РФ и СНГ.',
  'Инструкции по VPN на всех устройствах | Зумерский VPN',
  'Гайды VPN: защищённая передача данных, iPhone, Android, Windows VLESS. Зумерский VPN.',
  'Протоколы VLESS Reality и инфраструктура | Зумерский VPN',
  'Зумерский VPN: защищённая передача данных, VLESS Reality, серверы DE/NL/PL/US, no-logs, Happ / V2rayTun.',
  'Статус серверов Зумерский VPN',
  'Статус серверов Зумерский VPN: DE, NL, PL, US. Мониторинг защищённых подключений VLESS Reality.',
  'FAQ — частые вопросы | Зумерский VPN',
  'FAQ Зумерский VPN: защищённая передача данных, доступ к глобальному контенту, оплата, устройства, VLESS, поддержка.',
  'Поддержка — Зумерский VPN',
  'Поддержка Зумерский VPN: настройка, оплата, стабильное соединение. Защита передаваемой информации.',
  'Политика конфиденциальности — Зумерский VPN',
  'Пользовательское соглашение — Зумерский VPN',
  'Вход — Зумерский VPN',
  'Личный кабинет — Зумерский VPN',
  'Оплата — Зумерский VPN',
  'Оплата успешна — Зумерский VPN',
  'Активация подарка — Зумерский VPN',
  'Вход с бота — Зумерский VPN',
  'Вход через мессенджер — Зумерский VPN',
];

const FAQ = [
  'Что такое Зумерский VPN?',
  'Это сервис доступа в интернет с защищённой передачей данных и приватной маршрутизацией на протоколе VLESS Reality. Управление — через Telegram-бота и личный кабинет на сайте.',
  'Сохраняете ли вы логи?',
  'Нет. Мы не храним историю сайтов, содержимое трафика и IP-адреса пользователей. Подробнее — в политике конфиденциальности.',
  'На скольких устройствах работает одна подписка?',
  'До 5 устройств одновременно: телефон, планшет, ноутбук и т.д.',
  'Какие приложения использовать?',
  'Рекомендуем Happ; альтернатива — V2rayTun на iOS, Android, Windows и macOS. Инструкции — в разделе «Подключение» и в гайдах по устройствам.',
  'Есть ли бесплатный период?',
  'Да, на главной странице можно активировать пробный доступ без привязки карты (условия указаны в тарифах).',
  'Какие способы оплаты?',
  'СБП, карты РФ, криптовалюта через CryptoBot.',
  'VPN не подключается — что делать?',
  'Смените сервер (страну), обновите приложение, проверьте ключ в личном кабинете. Если не помогло — напишите в поддержку.',
  'Для чего подходит Зумерский VPN?',
  'Для защищённого подключения дома и в публичных сетях, удалённой работы и стабильного соединения с EU/US серверами. Подробности — в разделах «Протоколы» и «Подключение».',
  'Чем VLESS Reality лучше обычного VPN?',
  'Соединение оформляется как обычный HTTPS к легитимным сайтам — это повышает стабильность в мобильных и нестабильных сетях. Подробнее — на странице «Протоколы».',
  'Как связаться с поддержкой?',
  'Telegram @suppzoomvpn или раздел «Контакты» на сайте.',
  'Можно ли вернуть деньги?',
  'Если VPN не подключается — напишите в поддержку, поможем с настройкой. Вопросы возврата решаются индивидуально согласно пользовательскому соглашению.',
  'Нужно ли каждый раз настраивать VPN заново?',
  'Нет. После импорта subscription достаточно включать и выключать защищённое подключение в приложении. Новый импорт нужен только при смене ключа или переустановке клиента.',
];

function extractQuotedFields(source, field) {
  const lines = [];
  const re = new RegExp(`${field}:\\s*('(?:\\\\'|[^'])*'|\`(?:\\\\\`|[^\`])*\`)`, 'g');
  let m;
  while ((m = re.exec(source)) !== null) {
    const raw = m[1];
    const unquoted = raw.slice(1, -1).replace(/\\'/g, "'");
    lines.push(unquoted);
  }
  return lines;
}

function extractFromSeoPagesFile() {
  const source = readFileSync(resolve(root, 'src/content/seoPages.js'), 'utf8');
  const fields = ['title', 'h1', 'description', 'intro', 'heading', 'label'];
  const lines = [];
  for (const field of fields) {
    lines.push(...extractQuotedFields(source, field));
  }
  return lines;
}

function collectFromPages(pages) {
  const lines = [];
  for (const p of pages) {
    if (p.title) lines.push(p.title);
    if (p.description) lines.push(p.description);
    if (p.h1) lines.push(p.h1);
    if (p.intro) lines.push(p.intro);
    for (const s of p.sections ?? []) {
      if (s.heading) lines.push(s.heading);
    }
    for (const r of p.related ?? []) {
      if (r.label) lines.push(r.label);
    }
  }
  return lines;
}

const all = [
  ...STATIC,
  ...FAQ,
  ...extractFromSeoPagesFile(),
  ...collectFromPages(COMPETITOR_PAGES),
];

const seen = new Set();
const unique = [];
for (const line of all) {
  const trimmed = String(line).replace(/\s+/g, ' ').trim();
  if (!trimmed || seen.has(trimmed)) continue;
  seen.add(trimmed);
  unique.push(trimmed);
}

unique.sort((a, b) => a.localeCompare(b, 'ru'));

writeFileSync(outPath, `${unique.join('\n')}\n`, 'utf8');
console.log(`Wrote ${unique.length} lines to ${outPath}`);
