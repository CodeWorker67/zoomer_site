import { VPN_FACTS, ZOOMER, COMPETITOR_KEYS } from './vpnFacts.js';

/** @param {import('./vpnFacts.js').VpnFact} v */
export function comparisonTableBlock(v) {
  return {
    type: 'table',
    headers: ['Параметр', v.name, ZOOMER.shortName],
    rows: [
      ['Тип сервиса', v.type === 'self-hosted' ? 'Свой VPS' : v.type === 'circumvention' ? 'Разовый доступ (не классический VPN)' : 'Коммерческий VPN', 'Готовый VPN-сервис'],
      ['Протокол', v.protocol, ZOOMER.protocol],
      ['Цена', v.price, ZOOMER.price],
      ['Бесплатный тариф', v.freeTier, ZOOMER.freeTier],
      ['Платформы', v.platforms, ZOOMER.platforms],
      ['Серверы', v.servers, ZOOMER.servers],
      ['Скорость (ориентир)', v.speedNote, ZOOMER.speed],
      ['Устройства', v.devices, ZOOMER.devices],
      ['Установка', v.setup, ZOOMER.setup],
      ['Оплата из РФ', v.payment, ZOOMER.payment],
      ['Поддержка', v.support, ZOOMER.support],
    ],
  };
}

function relatedFor(v, currentPath) {
  const base = v.slug;
  const candidates = [
    { path: `/${base}-obzor-2026`, label: `Обзор ${v.name}` },
    { path: `/${base}-otzyvy-cena-skorost`, label: 'Отзывы и цена' },
    { path: `/${base}-vs-zoomer-vpn`, label: 'vs Зумерский VPN' },
    { path: `/alternativa-${base}`, label: `Альтернатива ${v.name}` },
  ].filter((l) => l.path !== currentPath);
  return candidates.slice(0, 3);
}

/** @param {import('./vpnFacts.js').VpnFact} v */
function sectionsObzor2026(v) {
  return [
    {
      heading: 'Кратко о сервисе',
      blocks: [
        { type: 'p', text: `${v.name} — ${v.type === 'self-hosted' ? 'решение для развёртывания VPN на собственном сервере' : v.type === 'circumvention' ? 'сервис разового доступа к ресурсам, а не premium VPN' : 'коммерческий VPN-сервис'}. Протоколы: ${v.protocol}.` },
        { type: 'p', text: v.speedNote },
      ],
    },
    {
      heading: 'Плюсы и минусы',
      blocks: [
        { type: 'ul', items: v.pros.map((p) => `✓ ${p}`) },
        { type: 'ul', items: v.cons.map((c) => `✗ ${c}`) },
      ],
    },
    {
      heading: 'Кому подходит / кому нет',
      blocks: [
        { type: 'p', text: `Подходит: ${v.bestFor}.` },
        { type: 'p', text: `Слабее там, где: ${v.weakFor}.` },
      ],
    },
    {
      heading: `Сравнение с ${ZOOMER.shortName}`,
      blocks: [comparisonTableBlock(v)],
    },
    {
      heading: 'Итог 2026',
      blocks: [
        {
          type: 'p',
          text: `Если вам нужен ${v.bestFor.toLowerCase()}, ${v.name} логичен. Если приоритет — быстрый старт, оплата в рублях и готовый сервис без администрирования VPS, чаще выигрывает ${ZOOMER.shortName} с VLESS Reality и выдачей ключа через Telegram.`,
        },
      ],
    },
  ];
}

function sectionsOtzyvy(v) {
  return [
    {
      heading: 'Отзывы пользователей (сводка)',
      blocks: [
        { type: 'p', text: v.reviewNote },
        {
          type: 'ul',
          items: [
            'В отзывах чаще хвалят: ' + v.pros[0].toLowerCase(),
            'Чаще критикуют: ' + v.cons[0].toLowerCase(),
            v.type === 'self-hosted' ? 'Новички пишут о «слишком сложной настройке VPS».' : 'Пользователи из РФ упоминают оплату и нестабильность free-тарифов.',
          ],
        },
      ],
    },
    {
      heading: 'Цена',
      blocks: [{ type: 'p', text: v.price }, { type: 'p', text: `Бесплатный уровень: ${v.freeTier}` }],
    },
    {
      heading: 'Скорость',
      blocks: [
        { type: 'p', text: v.speed },
        { type: 'p', text: v.speedNote },
      ],
    },
    {
      heading: 'Таблица: цена и скорость vs Зумерский VPN',
      blocks: [comparisonTableBlock(v)],
    },
  ];
}

function sectionsVs(v) {
  return [
    {
      heading: `${v.name} и ${ZOOMER.shortName} — разная логика`,
      blocks: [
        {
          type: 'p',
          text:
            v.type === 'self-hosted'
              ? `${v.name} требует свой VPS и администрирования. ${ZOOMER.shortName} — готовые серверы в DE/NL/PL/US и импорт ключа за минуты.`
              : `${v.name} продаёт доступ к своей сети на ${v.protocol}. ${ZOOMER.shortName} — готовый VLESS Reality с оплатой в рублях и поддержкой на русском.`,
        },
      ],
    },
    {
      heading: 'Прямое сравнение',
      blocks: [comparisonTableBlock(v)],
    },
    {
      heading: 'Когда выбрать что',
      blocks: [
        {
          type: 'ul',
          items: [
            `Выбирайте ${v.name}, если: ${v.bestFor}.`,
            `Выбирайте ${ZOOMER.shortName}, если: ${ZOOMER.bestFor}.`,
            `Не берите ${v.name}, если: ${v.weakFor}.`,
          ],
        },
      ],
    },
  ];
}

function sectionsChtoVibrat(v) {
  return [
    {
      heading: 'Сценарии',
      blocks: [
        {
          type: 'ol',
          items: [
            `Нужен только телефон «на вчера» и не хочется платить — оцените free-уровень ${v.name}, но проверьте лимиты.`,
            `Нужен стабильный канал каждый день — сравните скорость ${v.name} (${v.speedNote}) с ${ZOOMER.shortName}.`,
            `Готовы администрировать VPS — ${v.type === 'self-hosted' ? v.name + ' сильнее' : v.name + ' не заменит self-host, смотрите Amnezia/Outline'}.`,
            `Нужна оплата СБП и поддержка в Telegram — ${ZOOMER.shortName}.`,
          ],
        },
      ],
    },
    {
      heading: 'Сравнительная таблица',
      blocks: [comparisonTableBlock(v)],
    },
    {
      heading: 'Вердикт',
      blocks: [
        {
          type: 'p',
          text: `${v.name} или ${ZOOMER.shortName} — не «кто лучше вообще», а что ближе вашему сценарию. Для готового VPN без VPS с Reality и рублёвой оплатой чаще удобнее ${ZOOMER.shortName}. Для ${v.bestFor.toLowerCase()} — ${v.name}.`,
        },
      ],
    },
  ];
}

function sectionsAlternativa(v) {
  return [
    {
      heading: `Зачем искать альтернативу ${v.name}`,
      blocks: [
        {
          type: 'p',
          text: `Причины смены: ${v.cons.join('; ')}. Пользователи ищут «альтернатива ${v.name}» с лучшей скоростью, проще оплатой или без VPS.`,
        },
      ],
    },
    {
      heading: `${ZOOMER.shortName} как альтернатива`,
      blocks: [
        {
          type: 'ul',
          items: [
            ZOOMER.protocol + ' вместо «' + v.protocol.split(',')[0] + '»',
            ZOOMER.setup,
            ZOOMER.payment,
            ZOOMER.freeTier,
          ],
        },
      ],
    },
    {
      heading: 'Сравнение',
      blocks: [comparisonTableBlock(v)],
    },
    {
      heading: 'Как перейти',
      blocks: [
        {
          type: 'ol',
          items: [
            'На главной сайта нажмите «Попробовать бесплатно».',
            'Получите ключ в Telegram-боте и импортируйте в Happ/V2rayTun.',
            `Отключите ${v.name} перед тестом, чтобы сравнить скорость на том же Wi‑Fi.`,
          ],
        },
      ],
    },
  ];
}

function sectionsNeRabotaet(v) {
  return [
    {
      heading: `Почему ${v.name} может не работать`,
      blocks: [
        {
          type: 'ul',
          items:
            v.type === 'self-hosted'
              ? [
                  'Недоступен IP VPS или порт Shadowsocks/OpenVPN',
                  'Закончился трафик/деньги на хостинге',
                  'Устарел клиент Amnezia/Outline Manager',
                ]
              : v.type === 'circumvention'
                ? [
                    'Перегрузка бесплатной сети Psiphon',
                    'Режим VPN vs Psiphon mode перепутаны',
                    'Провайдер ограничивает известные IP Psiphon',
                  ]
                : [
                    'Исчерпан лимит free-тарифа',
                    'Нестабильная работа протокола в вашей сети',
                    'Устаревшее приложение или аккаунт',
                    'Выбран перегруженный сервер',
                  ],
        },
      ],
    },
    {
      heading: 'Чем заменить: Зумерский VPN',
      blocks: [
        {
          type: 'p',
          text: `${ZOOMER.shortName} — готовая замена с VLESS Reality, серверами ${ZOOMER.servers} и настройкой через Telegram. Подходит, если ${v.name} перестал давать стабильное соединение или скорость.`,
        },
      ],
    },
    {
      heading: 'Сравнение с Зумерским VPN',
      blocks: [comparisonTableBlock(v)],
    },
    {
      heading: 'Шаги миграции',
      blocks: [
        {
          type: 'ol',
          items: [
            `Удалите или отключите профиль ${v.name}.`,
            'Активируйте пробный период Зумерского VPN на главной.',
            'Импортируйте subscription в Happ, выберите PL или DE.',
            'Проверьте скорость и стабильность на своих задачах до оплаты годового тарифа.',
          ],
        },
      ],
    },
  ];
}

const BUILDERS = {
  'obzor-2026': {
    path: (s) => `/${s}-obzor-2026`,
    title: (v) => `${v.name} — обзор 2026 | ${ZOOMER.shortName}`,
    h1: (v) => `${v.name} — обзор 2026`,
    description: (v) =>
      `Обзор ${v.name} в 2026: протоколы, цена, скорость. ${ZOOMER.shortName} — защищённая передача данных, VLESS Reality.`,
    intro: (v) => `Разбираем ${v.name} без маркетинговых клише: кому подходит, где слабее и как смотрится на фоне ${ZOOMER.shortName}.`,
    sections: sectionsObzor2026,
  },
  'otzyvy-cena-skorost': {
    path: (s) => `/${s}-otzyvy-cena-skorost`,
    title: (v) => `${v.name} — отзывы, цена, скорость | ${ZOOMER.shortName}`,
    h1: (v) => `${v.name}: отзывы, цена и скорость`,
    description: (v) =>
      `Отзывы о ${v.name}, цена и скорость. ${ZOOMER.shortName}: приватная передача данных, VLESS Reality.`,
    intro: (v) => `Сводка отзывов и цифр по ${v.name}: ${v.price}. ${v.speedNote}`,
    sections: sectionsOtzyvy,
  },
  'vs-zoomer': {
    path: (s) => `/${s}-vs-zoomer-vpn`,
    title: (v) => `${v.name} vs ${ZOOMER.shortName} — сравнение 2026`,
    h1: (v) => `${v.name} vs ${ZOOMER.shortName}`,
    description: (v) =>
      `${v.name} или ${ZOOMER.shortName}? Сравнение протоколов и цены. ${ZOOMER.shortName} — адаптивная передача данных, VLESS Reality.`,
    intro: (v) => `Честное сравнение двух подходов: ${v.protocol} против ${ZOOMER.protocol}.`,
    sections: sectionsVs,
  },
  'chto-vybrat': {
    path: (s) => `/${s}-ili-zoomer-vpn-chto-vybrat`,
    title: (v) => `${v.name} или ${ZOOMER.shortName} — что выбрать`,
    h1: (v) => `${v.name} или ${ZOOMER.shortName}: что выбрать`,
    description: (v) =>
      `${v.name} или ${ZOOMER.shortName}? Сценарии и рекомендации. ${ZOOMER.shortName} — оптимизация под мобильные сети, защита передаваемой информации.`,
    intro: (v) => `Помогаем выбрать между ${v.name} и ${ZOOMER.shortName} под ваши задачи — не «лучший VPN», а подходящий.`,
    sections: sectionsChtoVibrat,
  },
  alternativa: {
    path: (s) => `/alternativa-${s}`,
    title: (v) => `Альтернатива ${v.name} — ${ZOOMER.shortName}`,
    h1: (v) => `Альтернатива ${v.name}`,
    description: (v) =>
      `Альтернатива ${v.name}: ${ZOOMER.shortName}, защищённая передача данных, оплата в рублях, VLESS Reality.`,
    intro: (v) => `Ищете замену ${v.name}? Рассмотрите ${ZOOMER.shortName} — другой тип сервиса и протокола.`,
    sections: sectionsAlternativa,
  },
  'ne-rabotaet': {
    path: (s) => `/${s}-ne-rabotaet-chem-zamenit`,
    title: (v) => `${v.name} не работает — чем заменить | ${ZOOMER.shortName}`,
    h1: (v) => `${v.name} не работает — чем заменить`,
    description: (v) =>
      `${v.name} не подключается? ${ZOOMER.shortName}: совместимость с мобильным интернетом, защищённая передача данных.`,
    intro: (v) => `Разбираем типичные сбои ${v.name} и как перейти на ${ZOOMER.shortName} с сохранением стабильного соединения.`,
    sections: sectionsNeRabotaet,
  },
};

const TYPE_ORDER = [
  'obzor-2026',
  'otzyvy-cena-skorost',
  'vs-zoomer',
  'chto-vybrat',
  'alternativa',
  'ne-rabotaet',
];

/** @returns {import('../seoPages.js').SEO_PAGE[]} */
export function buildCompetitorPages() {
  const pages = [];
  for (const key of COMPETITOR_KEYS) {
    const v = VPN_FACTS[key];
    for (const typeKey of TYPE_ORDER) {
      const b = BUILDERS[typeKey];
      const path = b.path(v.slug);
      pages.push({
        path,
        title: b.title(v),
        h1: b.h1(v),
        description: b.description(v),
        intro: b.intro(v),
        sections: b.sections(v),
        related: relatedFor(v, path),
        noindex: false,
      });
    }
  }
  return pages;
}
