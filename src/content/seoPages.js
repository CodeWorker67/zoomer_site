import {
  troubleshooting,
  trialBlock,
  youtubeStreaming,
  instagramUsage,
  telegramUsage,
  mobileScenarios,
  windowsScenarios,
  iphoneNotes,
  androidNotes,
  russiaNetworkContext,
  russia2026Detail,
  youtubeRussiaDetail,
  smartTvDetail,
  compareFreeVsPaid,
  ispExtraBlocks,
  cityBlocks,
  cisCountryBlocks,
  youtubeLandingGuide,
  instagramLandingGuide,
  telegramLandingGuide,
  russiaLandingGuide,
  bestVpnLandingGuide,
} from './seoContentBlocks';

/** @typedef {{ type: 'p'|'ul'|'ol', text?: string, items?: string[] }} Block */
/** @typedef {{ heading?: string, blocks: Block[] }} Section */

const whyZoomer = {
  heading: 'Почему Зумерский VPN',
  blocks: [
    {
      type: 'p',
      text: 'Сервис построен на протоколе VLESS Reality: защищённая передача данных с приватной маршрутизацией, соединение выглядит как обычный HTTPS. Каналы до 10 Гбит/с, серверы в Германии, Нидерландах, Польше и США, до 5 устройств на одной подписке и политика no-logs.',
    },
    {
      type: 'ul',
      items: [
        'Подключение через Telegram-бота и личный кабинет за 2–3 минуты',
        'Приложения Happ и V2rayTun для iPhone, Android, Windows и macOS',
        'Бесплатный пробный период без привязки карты',
        'Поддержка 24/7 в Telegram',
      ],
    },
  ],
};

const connectSteps = {
  heading: 'Как подключиться',
  blocks: [
    {
      type: 'ol',
      items: [
        'Перейдите на главную страницу Зумерского VPN и выберите тариф или бесплатный пробный период.',
        'Откройте Telegram-бота и нажмите «Подключить VPN».',
        'В личном кабинете скопируйте ключ и импортируйте его в Happ или V2rayTun (инструкции — в разделе «Подключение»).',
        'Выберите ближайший сервер и включите VPN.',
      ],
    },
  ],
};

/** @param {string} path @param {object} data */
function page(path, data) {
  return { path, ...data };
}

/** @type {ReturnType<typeof page>[]} */
export const SEO_PAGES = [
  page('/vpn-for-youtube', {
    title: 'VPN и стабильный стриминг видео | Зумерский ВПН',
    h1: 'VPN для просмотра видео',
    description:
      'VPN для стриминга: защищённая передача данных, VLESS Reality, советы по серверам для 4K и Shorts.',
    intro:
      'Видеосервисы требуют стабильного канала и низкой задержки. Зумерский VPN помогает защитить трафик и подобрать EU/US сервер для плавного просмотра с телефона и компьютера.',
    sections: [
      {
        heading: 'VPN и качество просмотра',
        blocks: [
          {
            type: 'p',
            text: 'При нестабильном Wi‑Fi или мобильном интернете буферизация чаще связана с маршрутом и ping, а не только с тарифом. VPN с ближайшим сервером и защищённой передачей данных помогает выровнять соединение для длинных сессий.',
          },
          {
            type: 'ul',
            items: [
              'Просмотр в 1080p и 4K при достаточной скорости канала',
              'Системный VPN на телефоне и ПК — один профиль на все приложения',
              'Smart TV через роутер или hotspot (см. гайд Smart TV)',
            ],
          },
        ],
      },
      ...youtubeLandingGuide,
      youtubeStreaming,
      whyZoomer,
      connectSteps,
      troubleshooting,
      trialBlock,
    ],
    related: [
      { path: '/vpn-dlya-youtube', label: 'Гайд по стримингу' },
      { path: '/kak-ustanovit-vpn-na-android', label: 'VPN на Android' },
      { path: '/byistryy-vpn', label: 'Быстрый VPN' },
    ],
  }),

  page('/vpn-for-instagram', {
    title: 'VPN и мобильные соцсети — стабильная загрузка медиа | Зумерский ВПН',
    h1: 'VPN для работы с соцсетями',
    description:
      'VPN для мобильных соцсетей: защищённая передача данных, Reels и Stories, VLESS Reality, EU/US.',
    intro:
      'Соцсети активно используют CDN; при слабом сигнале загрузка медиа может обрываться. VPN добавляет защиту трафика и помогает выбрать стабильный маршрут через EU/US сервер.',
    sections: [
      {
        heading: 'Защита и стабильность',
        blocks: [
          {
            type: 'p',
            text: 'Приватная передача данных особенно важна в публичном Wi‑Fi. Стабильный маршрут до сервера снижает риск ошибок при публикации Stories и Reels.',
          },
        ],
      },
      ...instagramLandingGuide,
      instagramUsage,
      whyZoomer,
      connectSteps,
      troubleshooting,
      trialBlock,
    ],
    related: [
      { path: '/vpn-dlya-telefona', label: 'VPN для телефона' },
      { path: '/vpn-dlya-iphone', label: 'VPN для iPhone' },
      { path: '/vpn-dlya-android', label: 'VPN для Android' },
    ],
  }),

  page('/vpn-for-telegram', {
    title: 'VPN и мессенджеры — звонки и файлы | Зумерский ВПН',
    h1: 'VPN для мессенджеров',
    description:
      'VPN для мессенджеров: защищённая передача данных, низкая задержка, VLESS Reality.',
    intro:
      'Мессенджеры чувствительны к ping и потере пакетов. VPN помогает защитить трафик и выбрать сервер с минимальной задержкой для звонков и обмена файлами.',
    sections: [
      {
        heading: 'Когда VPN полезен для мессенджеров',
        blocks: [
          {
            type: 'ul',
            items: [
              'Голосовые и видеозвонки при нестабильном Wi‑Fi',
              'Работа с каналами и ботами из публичных сетей',
              'Синхронизация медиа при высокой нагрузке на канал',
            ],
          },
        ],
      },
      ...telegramLandingGuide,
      telegramUsage,
      whyZoomer,
      connectSteps,
      troubleshooting,
      trialBlock,
    ],
    related: [
      { path: '/vpn-dlya-rossii', label: 'VPN в РФ и СНГ' },
      { path: '/luchshiy-vpn', label: 'Лучший VPN' },
    ],
  }),

  page('/kak-nastroit-vpn-na-iphone', {
    title: 'Как настроить VPN на iPhone — пошаговая инструкция | Зумерский ВПН',
    h1: 'Как настроить VPN на iPhone',
    description:
      'VPN на iPhone: пошаговая настройка Happ/V2rayTun, защищённая передача данных, VLESS Reality.',
    intro:
      'На iPhone VPN настраивается через App Store-приложение и ссылку или ключ из личного кабинета. Весь процесс занимает несколько минут.',
    sections: [
      {
        heading: 'Шаг 1. Установите приложение',
        blocks: [
          {
            type: 'p',
            text: 'Рекомендуем Happ (Happ Proxy Utility Plus) или V2rayTun — оба поддерживают VLESS Reality.',
          },
          {
            type: 'ul',
            items: [
              'Happ — в App Store по запросу «Happ Proxy Utility Plus»',
              'V2rayTun — официальное приложение в App Store',
            ],
          },
        ],
      },
      {
        heading: 'Шаг 2. Получите ключ в Зумерском VPN',
        blocks: [
          {
            type: 'ol',
            items: [
              'На главной сайта оформите пробный период или тариф.',
              'Откройте Telegram-бота и нажмите «Подключить VPN».',
              'Перейдите в личный кабинет по ссылке из бота.',
              'Скопируйте subscription-ссылку или конфиг в буфер обмена.',
            ],
          },
        ],
      },
      {
        heading: 'Шаг 3. Импорт и подключение',
        blocks: [
          {
            type: 'ul',
            items: [
              'В Happ: нажмите «Из буфера» — серверы появятся в списке.',
              'В V2rayTun: «+» → «Импорт из буфера обмена».',
              'Разрешите VPN-профиль в iOS (системный запрос).',
              'Выберите сервер (Германия, NL, PL или US) и включите защищённое подключение.',
            ],
          },
        ],
      },
      iphoneNotes,
      {
        heading: 'Частые ошибки на iPhone',
        blocks: [
          {
            type: 'ul',
            items: [
              '«VPN configuration error» — переустановите профиль через повторный импорт ключа.',
              'Нет интернета при включённом VPN — смените сервер или проверьте срок подписки в кабинете.',
              'Приложение закрывается в фоне — отключите для Happ ограничение фоновой активности.',
            ],
          },
        ],
      },
      whyZoomer,
      trialBlock,
    ],
    related: [
      { path: '/vpn-dlya-iphone', label: 'VPN для iPhone' },
      { path: '/vpn-dlya-iphone-v-rossii', label: 'iPhone: советы по сети' },
      { path: '/setup', label: 'Все устройства' },
    ],
  }),

  page('/kak-ustanovit-vpn-na-android', {
    title: 'Как установить VPN на Android — инструкция 2026 | Зумерский ВПН',
    h1: 'Как установить VPN на Android',
    description:
      'VPN на Android: установка Happ, приватная передача данных, ключ из личного кабинета Зумерского VPN.',
    intro:
      'На Android VPN ставится из Google Play и активируется импортом ключа из личного кабинета Зумерского VPN.',
    sections: [
      {
        heading: 'Установка приложения',
        blocks: [
          {
            type: 'ol',
            items: [
              'Откройте Google Play и найдите Happ или V2rayTun.',
              'Установите приложение и при необходимости разрешите создание VPN-подключения.',
            ],
          },
        ],
      },
      {
        heading: 'Подключение к Зумерскому VPN',
        blocks: [
          {
            type: 'ol',
            items: [
              'Зарегистрируйтесь через главную страницу сайта и Telegram-бота.',
              'В личном кабинете скопируйте ссылку подписки.',
              'В Happ нажмите «Из буфера»; в V2rayTun — импорт из буфера.',
              'Выберите сервер и включите VPN.',
            ],
          },
        ],
      },
      {
        heading: 'Советы',
        blocks: [
          {
            type: 'ul',
            items: [
              'Отключите энергосбережение для VPN-приложения, если соединение обрывается.',
              'При проблемах с одним сервером переключитесь на другую страну.',
            ],
          },
        ],
      },
      androidNotes,
      troubleshooting,
      whyZoomer,
      trialBlock,
    ],
    related: [
      { path: '/vpn-dlya-android', label: 'VPN для Android' },
      { path: '/vpn-dlya-android-v-rossii', label: 'Android: советы по сети' },
    ],
  }),

  page('/kak-podklyuchit-vless-na-windows', {
    title: 'Как подключить VLESS на Windows — Happ и V2rayTun | Зумерский ВПН',
    h1: 'Как подключить VLESS на Windows',
    description:
      'VLESS на Windows 10/11: защищённая передача данных, Happ/V2rayTun, импорт ключа, выбор сервера.',
    intro:
      'VLESS на Windows работает через десктоп-клиент Happ или V2rayTun. Ключ вы получаете в личном кабинете после регистрации на сайте.',
    sections: [
      {
        heading: 'Установка клиента',
        blocks: [
          {
            type: 'ul',
            items: [
              'Happ — установщик с GitHub (Happ Desktop, x64).',
              'V2rayTun — клиент с официального сайта v2raytun.com.',
            ],
          },
        ],
      },
      {
        heading: 'Импорт конфигурации VLESS',
        blocks: [
          {
            type: 'ol',
            items: [
              'Оформите доступ на главной странице Зумерского VPN.',
              'В боте откройте личный кабинет и скопируйте subscription URL.',
              'В Happ: «Из буфера» или импорт по ссылке.',
              'В V2rayTun: добавьте подписку из буфера обмена.',
              'Выберите узел и активируйте подключение.',
            ],
          },
        ],
      },
      {
        heading: 'Почему VLESS Reality',
        blocks: [
          {
            type: 'p',
            text: 'Reality оформляет VPN как обычный TLS-трафик к популярным сайтам. Для пользователя это стабильнее классических OpenVPN-схем в нестабильных сетях.',
          },
        ],
      },
      windowsScenarios,
      troubleshooting,
      whyZoomer,
      trialBlock,
    ],
    related: [
      { path: '/vpn-dlya-windows', label: 'VPN для Windows' },
      { path: '/vpn-dlya-windows-11-v-rossii', label: 'Windows 11' },
      { path: '/protocols', label: 'Протоколы' },
    ],
  }),

  page('/luchshiy-vpn', {
    title: 'Лучший VPN в 2026 — скорость, приватность, VLESS | Зумерский ВПН',
    h1: 'Лучший VPN: на что смотреть при выборе',
    description:
      'Как выбрать VPN: протокол, скорость, no-logs. Зумерский VPN — защищённая передача данных, VLESS Reality.',
    intro:
      '«Лучший VPN» — не одно приложение из рейтинга, а сочетание протокола, инфраструктуры и удобства. Ниже — критерии, которые реально влияют на ежедневное использование.',
    sections: [
      ...bestVpnLandingGuide,
      {
        heading: 'Критерии выбора (кратко)',
        blocks: [
          {
            type: 'ul',
            items: [
              'Современный протокол (VLESS Reality, WireGuard) вместо устаревших решений',
              'Политика no-logs и минимум данных при оплате',
              'Скорость канала и несколько локаций серверов',
              'Клиенты под телефон и ПК, понятная настройка',
              'Живая поддержка на русском языке',
            ],
          },
        ],
      },
      compareFreeVsPaid,
      connectSteps,
      whyZoomer,
      troubleshooting,
      trialBlock,
    ],
    related: [
      { path: '/vpn-dlya-rossii', label: 'VPN в РФ и СНГ' },
      { path: '/kakoy-vpn-rabotaet-v-rossii-2026', label: 'Выбор VPN в 2026' },
    ],
  }),

  page('/vpn-dlya-rossii', {
    title: 'VPN в РФ и СНГ — подключение и серверы | Зумерский ВПН',
    h1: 'VPN для пользователей в РФ и СНГ',
    description:
      'VPN в РФ и СНГ: защищённая передача данных, VLESS Reality, EU-серверы, оплата в рублях.',
    intro:
      'Для пользователей в России и СНГ важны устойчивость протокола, выбор ближайшего сервера и понятная оплата. Зумерский VPN использует VLESS Reality и несколько локаций для резервирования маршрута.',
    sections: [
      {
        heading: 'Особенности подключения',
        blocks: [
          {
            type: 'ul',
            items: [
              'Выбирайте ближайшую локацию (Польша, Германия, NL) для минимального пинга',
              'При деградации одного сервера переключайтесь на другой без смены подписки',
              'Используйте актуальные клиенты Happ / V2rayTun',
            ],
          },
        ],
      },
      ...russiaLandingGuide,
      russiaNetworkContext,
      russia2026Detail,
      whyZoomer,
      connectSteps,
      troubleshooting,
      trialBlock,
    ],
    related: [
      { path: '/kakoy-vpn-rabotaet-v-rossii-2026', label: 'Выбор VPN в 2026' },
      { path: '/vpn-dlya-moskvy', label: 'VPN для Москвы' },
      { path: '/luchshiy-vpn', label: 'Критерии выбора VPN' },
      { path: '/protocols', label: 'Протоколы' },
    ],
  }),

  page('/byistryy-vpn', {
    title: 'Быстрый VPN — до 10 Гбит/с, стримы и игры | Зумерский ВПН',
    h1: 'Быстрый VPN без просадки скорости',
    description:
      'Быстрый VPN: адаптивная передача данных, до 10 Гбит/с, стримы и игры, VLESS Reality.',
    intro:
      'Скорость VPN зависит от протокола и загрузки сервера. Зумерский VPN размещён на высокопропускных каналах с упором на низкие задержки.',
    sections: [
      {
        heading: 'Как получить максимальную скорость',
        blocks: [
          {
            type: 'ul',
            items: [
              'Подключайтесь к географически близкому серверу',
              'Используйте проводной интернет на ПК, на телефоне — Wi‑Fi 5 GHz',
              'Не запускайте несколько тяжёлых VPN-клиентов одновременно',
            ],
          },
        ],
      },
      {
        heading: 'Тест скорости с VPN',
        blocks: [
          {
            type: 'p',
            text: 'Замерьте speedtest.net без VPN и с включённым DE/PL. Потеря 10–20% скорости нормальна; если падение больше 50%, смените сервер или протокол клиента (обновите приложение).',
          },
        ],
      },
      whyZoomer,
      connectSteps,
      trialBlock,
    ],
    related: [{ path: '/vpn-for-youtube', label: 'Стриминг видео' }],
  }),

  page('/vpn-dlya-telefona', {
    title: 'VPN для телефона — iPhone и Android | Зумерский ВПН',
    h1: 'VPN для телефона',
    description:
      'VPN для телефона: совместимость с мобильным интернетом, до 5 устройств, VLESS Reality.',
    intro: 'Мобильный VPN защищает трафик в публичных сетях и при поездках. Одна подписка Зумерского VPN покрывает несколько телефонов и планшетов.',
    sections: [mobileScenarios, whyZoomer, connectSteps, troubleshooting, trialBlock],
    related: [
      { path: '/vpn-dlya-iphone', label: 'iPhone' },
      { path: '/vpn-dlya-android', label: 'Android' },
    ],
  }),

  page('/vpn-dlya-windows', {
    title: 'VPN для Windows 10 и 11 | Зумерский ВПН',
    h1: 'VPN для Windows',
    description: 'VPN для Windows: защищённая передача данных, Happ Desktop, VLESS, настройка за минуты.',
    intro: 'На Windows удобнее всего работать через Happ Desktop или V2rayTun с ключом из личного кабинета.',
    sections: [
      {
        heading: 'Быстрый старт',
        blocks: [
          {
            type: 'p',
            text: 'Подробная инструкция — в материале «Как подключить VLESS на Windows». Кратко: установите клиент, импортируйте ключ с главной через бота, включите VPN.',
          },
        ],
      },
      windowsScenarios,
      whyZoomer,
      connectSteps,
      troubleshooting,
      trialBlock,
    ],
    related: [{ path: '/kak-podklyuchit-vless-na-windows', label: 'VLESS на Windows' }],
  }),

  page('/vpn-dlya-iphone', {
    title: 'VPN для iPhone — App Store, VLESS | Зумерский ВПН',
    h1: 'VPN для iPhone',
    description: 'VPN для iPhone: оптимизация под мобильные сети, Happ, V2rayTun, VLESS Reality.',
    intro: 'Для iPhone подходят Happ и V2rayTun из App Store. Ключ выдаётся после регистрации на главной странице сервиса.',
    sections: [iphoneNotes, mobileScenarios, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/kak-nastroit-vpn-na-iphone', label: 'Настройка на iPhone' }],
  }),

  page('/vpn-dlya-android', {
    title: 'VPN для Android — Google Play, VLESS | Зумерский ВПН',
    h1: 'VPN для Android',
    description: 'VPN для Android: совместимость с мобильным интернетом, Play Market, защищённое подключение.',
    intro: 'Android-клиенты Happ и V2rayTun поддерживают подписку Зумерского VPN в один тап из буфера обмена.',
    sections: [androidNotes, mobileScenarios, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/kak-ustanovit-vpn-na-android', label: 'Установка на Android' }],
  }),

  page('/vpn-dlya-youtube', {
    title: 'Стриминг видео через VPN — гайд | Зумерский ВПН',
    h1: 'Стриминг видео и VPN',
    description: 'Гайд: VPN для стриминга, защищённая передача данных, выбор сервера, устройства.',
    intro: 'Страница дополняет материал о просмотре видео — акцент на выборе сервера, скорости и настройке клиента.',
    sections: [
      {
        heading: 'Выбор сервера для стриминга',
        blocks: [
          {
            type: 'p',
            text: 'Для 4K выбирайте NL или DE при хорошем домашнем канале; для мобильного интернета часто оптимальны PL или DE.',
          },
        ],
      },
      youtubeStreaming,
      whyZoomer,
      connectSteps,
      trialBlock,
    ],
    related: [{ path: '/vpn-for-youtube', label: 'Посадочная YouTube' }],
  }),

  page('/vpn-dlya-instagram', {
    title: 'VPN и загрузка медиа в соцсетях | Зумерский ВПН',
    h1: 'VPN для соцсетей: гайд',
    description: 'VPN для соцсетей: защита в публичном Wi‑Fi, стабильная загрузка Reels, VLESS.',
    intro: 'Используйте мобильный клиент и ближайший EU-сервер для стабильной загрузки медиа.',
    sections: [instagramUsage, mobileScenarios, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/vpn-for-instagram', label: 'Посадочная Instagram' }],
  }),

  page('/vpn-dlya-telegram', {
    title: 'VPN и мессенджеры — звонки | Зумерский ВПН',
    h1: 'VPN для мессенджеров: гайд',
    description: 'VPN для звонков и чатов: низкая задержка, защищённая передача данных, VLESS Reality.',
    intro: 'Для голосовых и видеозвонков важен низкий ping — выбирайте PL или DE.',
    sections: [telegramUsage, whyZoomer, connectSteps, troubleshooting, trialBlock],
    related: [{ path: '/vpn-for-telegram', label: 'Посадочная Telegram' }],
  }),

  page('/kakoy-vpn-rabotaet-v-rossii-2026', {
    title: 'Как выбрать VPN-сервис в 2026 | Зумерский ВПН',
    h1: 'Выбор VPN-сервиса в 2026',
    description:
      'Критерии выбора VPN в 2026: защищённая передача данных, VLESS Reality, серверы, поддержка.',
    intro:
      'При выборе сервиса важны протокол, качество маршрутов и прозрачная политика данных — а не только бренд из рекламы.',
    sections: [
      {
        heading: 'На что обратить внимание',
        blocks: [
          {
            type: 'ul',
            items: [
              'Поддержка VLESS / Reality в клиенте',
              'Несколько стран для переключения',
              'Русскоязычная поддержка и быстрая выдача ключей',
            ],
          },
        ],
      },
      russia2026Detail,
      whyZoomer,
      connectSteps,
      trialBlock,
    ],
    related: [{ path: '/vpn-dlya-rossii', label: 'VPN в РФ и СНГ' }],
  }),

  page('/vpn-dlya-youtube-v-rossii', {
    title: 'Стриминг видео: серверы и скорость | Зумерский ВПН',
    h1: 'Стриминг видео: настройка VPN',
    description: 'Стриминг через VPN: защищённая передача данных, выбор сервера, скорость, настройка.',
    intro: 'Для плавного просмотра важны скорость uplink у провайдера и устойчивый протокол на стороне VPN.',
    sections: [youtubeRussiaDetail, youtubeStreaming, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/vpn-for-youtube', label: 'Стриминг видео' }],
  }),

  page('/vpn-dlya-iphone-v-rossii', {
    title: 'VPN на iPhone — настройка 2026 | Зумерский ВПН',
    h1: 'VPN на iPhone: советы по сети',
    description: 'VPN на iPhone: совместимость с мобильным интернетом, App Store, VLESS Reality.',
    intro: 'На iPhone используйте Happ или V2rayTun и ключ из личного кабинета после регистрации на главной.',
    sections: [iphoneNotes, russiaNetworkContext, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/kak-nastroit-vpn-na-iphone', label: 'Настройка iPhone' }],
  }),

  page('/vpn-dlya-android-v-rossii', {
    title: 'VPN на Android — настройка | Зумерский ВПН',
    h1: 'VPN на Android: советы по сети',
    description: 'VPN на Android: оптимизация под мобильные сети, Play Market, VLESS Reality.',
    intro: 'Установите клиент из Google Play и импортируйте подписку с сайта — подключение займёт несколько минут.',
    sections: [androidNotes, russiaNetworkContext, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/kak-ustanovit-vpn-na-android', label: 'Установка Android' }],
  }),

  page('/vpn-dlya-windows-11-v-rossii', {
    title: 'VPN на Windows 11 — VLESS | Зумерский ВПН',
    h1: 'VPN на Windows 11',
    description: 'VPN Windows 11 в РФ: защита передаваемой информации, Happ Desktop, VLESS Reality.',
    intro: 'Windows 11 полностью поддерживается клиентами Happ и V2rayTun; ключ выдаётся через Telegram-бота после старта с главной страницы.',
    sections: [windowsScenarios, russiaNetworkContext, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/kak-podklyuchit-vless-na-windows', label: 'VLESS Windows' }],
  }),

  page('/vpn-dlya-smart-tv', {
    title: 'VPN для Smart TV — через роутер и телефон | Зумерский ВПН',
    h1: 'VPN для Smart TV',
    description:
      'VPN для Smart TV: защищённое подключение через роутер, hotspot с телефона или ПК.',
    intro:
      'Большинство Smart TV не поддерживают VLESS напрямую. Рабочие схемы — VPN на роутере, раздача с телефона или ПК с включённым VPN.',
    sections: [
      {
        heading: 'Рекомендуемые схемы',
        blocks: [
          {
            type: 'ul',
            items: [
              'VPN на роутере (если прошивка поддерживает VLESS или общий прокси)',
              'Hotspot с Android/iPhone, где уже включён Зумерский VPN',
              'ПК с VPN + HDMI на телевизор для стриминговых приложений',
            ],
          },
        ],
      },
      smartTvDetail,
      whyZoomer,
      connectSteps,
      trialBlock,
    ],
    related: [{ path: '/vpn-for-youtube', label: 'Стриминг видео' }],
  }),

  ...['rostelekom', 'mts', 'beeline', 'megafon'].map((isp) =>
    page(`/vpn-dlya-${isp}`, {
      title: `VPN для ${ispLabel(isp)} — стабильное соединение | Зумерский ВПН`,
      h1: `VPN для ${ispLabel(isp)}`,
      description: `VPN для ${ispLabel(isp)}: совместимость с мобильным интернетом, защищённая передача данных, VLESS Reality.`,
      intro: `Абоненты ${ispLabel(isp)} могут видеть разный ping до EU-серверов. VPN с протоколом Reality и выбором ближайшей локации помогает стабилизировать соединение для работы и домашнего использования.`,
      sections: [
        ispExtraBlocks(ispLabel(isp), isp !== 'rostelekom'),
        russiaNetworkContext,
        whyZoomer,
        connectSteps,
        troubleshooting,
        trialBlock,
      ],
      related: [{ path: '/vpn-dlya-rossii', label: 'VPN в РФ и СНГ' }],
    })
  ),

  page('/vpn-dlya-moskvy', {
    title: 'VPN для Москвы — низкий ping, EU серверы | Зумерский ВПН',
    h1: 'VPN для Москвы',
    description: 'VPN для Москвы: стабильное соединение, EU-серверы, защищённая передача данных, VLESS.',
    intro: 'Из Москвы оптимальны серверы в Польше и Германии — короткий маршрут и стабильный канал.',
    sections: [cityBlocks('Москвы', 'PL и DE'), russiaNetworkContext, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/vpn-dlya-sankt-peterburga', label: 'Санкт-Петербург' }],
  }),

  page('/vpn-dlya-sankt-peterburga', {
    title: 'VPN для Санкт-Петербурга | Зумерский ВПН',
    h1: 'VPN для Санкт-Петербурга',
    description: 'VPN в СПб: стабильное соединение, VLESS Reality, EU-серверы, поддержка 24/7.',
    intro: 'Для СПб рекомендуем те же EU-локации; при необходимости тестируйте NL для стриминга.',
    sections: [cityBlocks('Санкт-Петербурга', 'PL, DE и NL'), whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/vpn-dlya-moskvy', label: 'Москва' }],
  }),

  page('/vpn-dlya-kazahstana', {
    title: 'VPN для Казахстана — подключение | Зумерский ВПН',
    h1: 'VPN для Казахстана',
    description: 'VPN для Казахстана: защищённая передача данных, EU/US, VLESS, Telegram.',
    intro: 'Пользователям из KZ подходят европейские узлы для баланса скорости и доступности контента.',
    sections: [cisCountryBlocks('Казахстана'), whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/vpn-dlya-belarusi', label: 'Беларусь' }],
  }),

  page('/vpn-dlya-belarusi', {
    title: 'VPN для Беларуси | Зумерский ВПН',
    h1: 'VPN для Беларуси',
    description: 'VPN для Беларуси: приватная передача данных, VLESS Reality, несколько стран, пробный период.',
    intro: 'Из Беларуси удобно подключаться к PL и DE — короткий путь и стабильный Reality-трафик.',
    sections: [cisCountryBlocks('Беларуси'), whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/vpn-dlya-kazahstana', label: 'Казахстан' }],
  }),
];

function ispLabel(id) {
  const map = {
    rostelekom: 'Ростелеком',
    mts: 'МТС',
    beeline: 'Билайн',
    megafon: 'Мегафон',
  };
  return map[id] || id;
}

/** @param {string} pathname */
export function getSeoPageByPath(pathname) {
  const normalized = pathname.replace(/\/$/, '') || '/';
  return SEO_PAGES.find((p) => p.path === normalized);
}

export const SEO_PAGE_PATHS = SEO_PAGES.map((p) => p.path);
