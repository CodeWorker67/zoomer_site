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
      text: 'Сервис построен на протоколе VLESS Reality: соединение выглядит как обычный HTTPS, его сложнее распознать и заблокировать. Каналы до 10 Гбит/с, серверы в Германии, Нидерландах, Польше и США, до 5 устройств на одной подписке и политика no-logs.',
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
    title: 'VPN для YouTube — быстрый доступ без ограничений | Зумерский ВПН',
    h1: 'VPN для YouTube',
    description:
      'Смотрите YouTube без ограничений: стабильный VPN на VLESS Reality, высокая скорость для 4K и Shorts. Подключение за минуты.',
    intro:
      'YouTube требует стабильного канала и обхода региональных ограничений. Зумерский VPN даёт быстрый доступ к роликам, трансляциям и Premium-контенту с телефона и компьютера.',
    sections: [
      {
        heading: 'Зачем VPN для YouTube',
        blocks: [
          {
            type: 'p',
            text: 'Провайдеры и локальные фильтры могут замедлять или блокировать YouTube. VPN шифрует трафик и направляет его через зарубежный сервер — плеер загружается быстрее, а рекомендации и подписки работают как обычно.',
          },
          {
            type: 'ul',
            items: [
              'Просмотр в 1080p и 4K без постоянной буферизации',
              'Доступ к каналам и плейлистам из других регионов',
              'Работа на Android, iPhone, Smart TV через роутер или приложение',
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
      { path: '/vpn-dlya-youtube-v-rossii', label: 'YouTube в России' },
      { path: '/kak-ustanovit-vpn-na-android', label: 'VPN на Android' },
      { path: '/byistryy-vpn', label: 'Быстрый VPN' },
    ],
  }),

  page('/vpn-for-instagram', {
    title: 'VPN для Instagram — стабильный доступ к Reels и Direct | Зумерский ВПН',
    h1: 'VPN для Instagram',
    description:
      'VPN для Instagram: Reels, Stories и сообщения без обрывов. VLESS Reality, серверы в Европе и США.',
    intro:
      'Instagram чувствителен к блокировкам и нестабильным маршрутам. Зумерский VPN помогает стабильно заходить в приложение и в веб-версию с любого устройства.',
    sections: [
      {
        heading: 'Что даёт VPN для Instagram',
        blocks: [
          {
            type: 'p',
            text: 'Зашифрованный туннель скрывает характер трафика от провайдера. Загрузка Stories и Reels идёт через быстрый сервер — меньше ошибок «Не удалось загрузить» и вылетов при публикации.',
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
    title: 'VPN для Telegram — звонки, каналы и боты без блокировок | Зумерский ВПН',
    h1: 'VPN для Telegram',
    description:
      'Надёжный VPN для Telegram: сообщения, звонки и медиа. Протокол VLESS Reality, низкая задержка.',
    intro:
      'Telegram — основной канал связи для многих пользователей. VPN обеспечивает стабильную работу мессенджера, когда доступ ограничен или нестабилен.',
    sections: [
      {
        heading: 'Когда нужен VPN для Telegram',
        blocks: [
          {
            type: 'ul',
            items: [
              'Мессенджер не подключается или долго «крутится»',
              'Не доходят голосовые и видеозвонки',
              'Нужен доступ к каналам и ботам без перебоя',
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
      { path: '/vpn-dlya-rossii', label: 'VPN для России' },
      { path: '/luchshiy-vpn', label: 'Лучший VPN' },
    ],
  }),

  page('/kak-nastroit-vpn-na-iphone', {
    title: 'Как настроить VPN на iPhone — пошаговая инструкция | Зумерский ВПН',
    h1: 'Как настроить VPN на iPhone',
    description:
      'Пошагово: как настроить VPN на iPhone через Happ или V2rayTun и ключ VLESS от Зумерского VPN.',
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
              'Выберите сервер (Германия, NL, PL или US) и включите туннель.',
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
      { path: '/vpn-dlya-iphone-v-rossii', label: 'VPN для iPhone в России' },
      { path: '/setup', label: 'Все устройства' },
    ],
  }),

  page('/kak-ustanovit-vpn-na-android', {
    title: 'Как установить VPN на Android — инструкция 2026 | Зумерский ВПН',
    h1: 'Как установить VPN на Android',
    description:
      'Установка VPN на Android: Happ, VLESS и ключ из личного кабинета Зумерского VPN.',
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
      { path: '/vpn-dlya-android-v-rossii', label: 'Android в России' },
    ],
  }),

  page('/kak-podklyuchit-vless-na-windows', {
    title: 'Как подключить VLESS на Windows — Happ и V2rayTun | Зумерский ВПН',
    h1: 'Как подключить VLESS на Windows',
    description:
      'Подключение VLESS Reality на Windows 10 и 11: установка клиента, импорт ключа, выбор сервера.',
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
            text: 'Reality маскирует VPN под обычный TLS-трафик к популярным сайтам. Для пользователя это стабильнее классических OpenVPN-схем при фильтрации трафика.',
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
      { path: '/vpn-dlya-windows-11-v-rossii', label: 'Windows 11 в России' },
      { path: '/protocols', label: 'Протоколы' },
    ],
  }),

  page('/luchshiy-vpn', {
    title: 'Лучший VPN в 2026 — скорость, приватность, VLESS | Зумерский ВПН',
    h1: 'Лучший VPN: на что смотреть при выборе',
    description:
      'Как выбрать лучший VPN: протокол, скорость, no-logs, поддержка устройств. Обзор критериев и Зумерский VPN.',
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
      { path: '/vpn-dlya-rossii', label: 'VPN для России' },
      { path: '/kakoy-vpn-rabotaet-v-rossii-2026', label: 'VPN в России 2026' },
    ],
  }),

  page('/vpn-dlya-rossii', {
    title: 'VPN для России — стабильный доступ в 2026 | Зумерский ВПН',
    h1: 'VPN для России',
    description:
      'VPN для России: обход блокировок, VLESS Reality, быстрые серверы в Европе. Подключение через Telegram.',
    intro:
      'Из России важны устойчивость протокола и скорость до зарубежных площадок. Зумерский VPN использует VLESS Reality и несколько локаций для резервирования маршрута.',
    sections: [
      {
        heading: 'Особенности использования в РФ',
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
      { path: '/kakoy-vpn-rabotaet-v-rossii-2026', label: 'Какой VPN работает в 2026' },
      { path: '/vpn-dlya-moskvy', label: 'VPN для Москвы' },
      { path: '/vpn-for-youtube', label: 'VPN для YouTube' },
      { path: '/vpn-for-telegram', label: 'VPN для Telegram' },
    ],
  }),

  page('/byistryy-vpn', {
    title: 'Быстрый VPN — до 10 Гбит/с, стримы и игры | Зумерский ВПН',
    h1: 'Быстрый VPN без просадки скорости',
    description: 'Быстрый VPN для стримов, игр и загрузок. Каналы до 10 Гбит/с, VLESS Reality.',
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
    related: [{ path: '/vpn-for-youtube', label: 'VPN для YouTube' }],
  }),

  page('/vpn-dlya-telefona', {
    title: 'VPN для телефона — iPhone и Android | Зумерский ВПН',
    h1: 'VPN для телефона',
    description: 'VPN для телефона: одна подписка на iOS и Android, до 5 устройств, VLESS.',
    intro: 'Мобильный VPN нужен для соцсетей, мессенджеров и карт за границей. Одна подписка Зумерского VPN покрывает несколько телефонов и планшетов.',
    sections: [mobileScenarios, whyZoomer, connectSteps, troubleshooting, trialBlock],
    related: [
      { path: '/vpn-dlya-iphone', label: 'iPhone' },
      { path: '/vpn-dlya-android', label: 'Android' },
    ],
  }),

  page('/vpn-dlya-windows', {
    title: 'VPN для Windows 10 и 11 | Зумерский ВПН',
    h1: 'VPN для Windows',
    description: 'VPN для Windows: VLESS, Happ Desktop, настройка за минуты.',
    intro: 'На Windows удобнее всего работать через Happ Desktop или V2rayTun с ключом из личного кабинета.',
    sections: [
      {
        heading: 'Быстрый старт',
        blocks: [
          {
            type: 'p',
            text: 'Подробная инструкция — в материале «Как подключить VLESS на Windows». Кратко: установите клиент, импортируйте ключ с главной через бота, включите туннель.',
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
    description: 'VPN для iPhone: Happ, V2rayTun, VLESS Reality. Пошаговая настройка.',
    intro: 'Для iPhone подходят Happ и V2rayTun из App Store. Ключ выдаётся после регистрации на главной странице сервиса.',
    sections: [iphoneNotes, mobileScenarios, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/kak-nastroit-vpn-na-iphone', label: 'Настройка на iPhone' }],
  }),

  page('/vpn-dlya-android', {
    title: 'VPN для Android — Google Play, VLESS | Зумерский ВПН',
    h1: 'VPN для Android',
    description: 'VPN для Android: установка из Play Market, импорт ключа, стабильное соединение.',
    intro: 'Android-клиенты Happ и V2rayTun поддерживают подписку Зумерского VPN в один тап из буфера обмена.',
    sections: [androidNotes, mobileScenarios, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/kak-ustanovit-vpn-na-android', label: 'Установка на Android' }],
  }),

  page('/vpn-dlya-youtube', {
    title: 'VPN для YouTube на телефоне и ПК | Зумерский ВПН',
    h1: 'VPN для YouTube: гайд',
    description: 'Полный гайд по VPN для YouTube — скорость, устройства, настройка.',
    intro: 'Тематически эта страница дополняет посадочную /vpn-for-youtube/ — здесь акцент на сценариях просмотра и выборе сервера.',
    sections: [
      {
        heading: 'Выбор сервера для стриминга',
        blocks: [
          {
            type: 'p',
            text: 'Для 4K выбирайте NL или DE при хорошем домашнем канале; для мобильного LTE часто оптимальны PL или DE.',
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
    title: 'VPN для Instagram — Reels и Direct | Зумерский ВПН',
    h1: 'VPN для Instagram',
    description: 'VPN для Instagram на iOS и Android. Стабильная загрузка медиа.',
    intro: 'Используйте мобильный клиент и ближайший EU-сервер для стабильной работы Instagram.',
    sections: [instagramUsage, mobileScenarios, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/vpn-for-instagram', label: 'Посадочная Instagram' }],
  }),

  page('/vpn-dlya-telegram', {
    title: 'VPN для Telegram — сообщения и звонки | Зумерский ВПН',
    h1: 'VPN для Telegram',
    description: 'VPN для Telegram с низкой задержкой. VLESS Reality.',
    intro: 'Для звонков в Telegram важен низкий ping — выбирайте PL или DE.',
    sections: [telegramUsage, whyZoomer, connectSteps, troubleshooting, trialBlock],
    related: [{ path: '/vpn-for-telegram', label: 'Посадочная Telegram' }],
  }),

  page('/kakoy-vpn-rabotaet-v-rossii-2026', {
    title: 'Какой VPN работает в России в 2026 году | Зумерский ВПН',
    h1: 'Какой VPN работает в России в 2026',
    description:
      'Обзор: какой VPN работает в России в 2026 — протоколы, Reality, практические советы.',
    intro:
      'В 2026 году решает не бренд из рекламы, а протокол и качество маршрутов. VLESS Reality показывает устойчивость там, где классический VPN даёт сбои.',
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
    related: [{ path: '/vpn-dlya-rossii', label: 'VPN для России' }],
  }),

  page('/vpn-dlya-youtube-v-rossii', {
    title: 'VPN для YouTube в России — смотреть без ограничений | Зумерский ВПН',
    h1: 'VPN для YouTube в России',
    description: 'YouTube в России через VPN: скорость, серверы, настройка Зумерского VPN.',
    intro: 'Для YouTube из РФ критичны скорость uplink у провайдера и устойчивый протокол на стороне VPN.',
    sections: [youtubeRussiaDetail, youtubeStreaming, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/vpn-for-youtube', label: 'VPN для YouTube' }],
  }),

  page('/vpn-dlya-iphone-v-rossii', {
    title: 'VPN для iPhone в России — настройка 2026 | Зумерский ВПН',
    h1: 'VPN для iPhone в России',
    description: 'VPN для iPhone в России: App Store, VLESS, инструкция.',
    intro: 'На iPhone в РФ используйте Happ или V2rayTun и ключ из личного кабинета после регистрации на главной.',
    sections: [iphoneNotes, russiaNetworkContext, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/kak-nastroit-vpn-na-iphone', label: 'Настройка iPhone' }],
  }),

  page('/vpn-dlya-android-v-rossii', {
    title: 'VPN для Android в России | Зумерский ВПН',
    h1: 'VPN для Android в России',
    description: 'VPN для Android в РФ: Play Market, VLESS Reality, Зумерский VPN.',
    intro: 'Установите клиент из Google Play, импортируйте подписку с сайта — доступ к сервисам восстановится за минуты.',
    sections: [androidNotes, russiaNetworkContext, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/kak-ustanovit-vpn-na-android', label: 'Установка Android' }],
  }),

  page('/vpn-dlya-windows-11-v-rossii', {
    title: 'VPN для Windows 11 в России — VLESS | Зумерский ВПН',
    h1: 'VPN для Windows 11 в России',
    description: 'VPN Windows 11 в России: Happ Desktop, VLESS, пошаговое подключение.',
    intro: 'Windows 11 полностью поддерживается клиентами Happ и V2rayTun; ключ выдаётся через Telegram-бота после старта с главной страницы.',
    sections: [windowsScenarios, russiaNetworkContext, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/kak-podklyuchit-vless-na-windows', label: 'VLESS Windows' }],
  }),

  page('/vpn-dlya-smart-tv', {
    title: 'VPN для Smart TV — через роутер и телефон | Зумерский ВПН',
    h1: 'VPN для Smart TV',
    description:
      'Как смотреть контент на Smart TV через VPN: роутер, общий hotspot с телефона, ПК.',
    intro:
      'Большинство Smart TV не поддерживают VLESS напрямую. Рабочие схемы — VPN на роутере, раздача с телефона или ПК с включённым туннелем.',
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
    related: [{ path: '/vpn-for-youtube', label: 'YouTube' }],
  }),

  ...['rostelekom', 'mts', 'beeline', 'megafon'].map((isp) =>
    page(`/vpn-dlya-${isp}`, {
      title: `VPN для ${ispLabel(isp)} — стабильный обход | Зумерский ВПН`,
      h1: `VPN для ${ispLabel(isp)}`,
      description: `VPN при интернете ${ispLabel(isp)}: VLESS Reality, EU/US серверы, быстрая настройка.`,
      intro: `Абоненты ${ispLabel(isp)} часто сталкиваются с фильтрацией и нестабильными маршрутами. VPN с протоколом Reality помогает выйти на зарубежные площадки с предсказуемой скоростью.`,
      sections: [
        ispExtraBlocks(ispLabel(isp), isp !== 'rostelekom'),
        russiaNetworkContext,
        whyZoomer,
        connectSteps,
        troubleshooting,
        trialBlock,
      ],
      related: [{ path: '/vpn-dlya-rossii', label: 'VPN для России' }],
    })
  ),

  page('/vpn-dlya-moskvy', {
    title: 'VPN для Москвы — низкий ping, EU серверы | Зумерский ВПН',
    h1: 'VPN для Москвы',
    description: 'VPN для пользователей в Москве: ближайшие серверы, VLESS, быстрое подключение.',
    intro: 'Из Москвы оптимальны серверы в Польше и Германии — короткий маршрут и стабильный канал.',
    sections: [cityBlocks('Москвы', 'PL и DE'), russiaNetworkContext, whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/vpn-dlya-sankt-peterburga', label: 'Санкт-Петербург' }],
  }),

  page('/vpn-dlya-sankt-peterburga', {
    title: 'VPN для Санкт-Петербурга | Зумерский ВПН',
    h1: 'VPN для Санкт-Петербурга',
    description: 'VPN в СПб: доступ к сервисам, VLESS Reality, поддержка 24/7.',
    intro: 'Для СПб рекомендуем те же EU-локации; при необходимости тестируйте NL для стриминга.',
    sections: [cityBlocks('Санкт-Петербурга', 'PL, DE и NL'), whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/vpn-dlya-moskvy', label: 'Москва' }],
  }),

  page('/vpn-dlya-kazahstana', {
    title: 'VPN для Казахстана — доступ к сервисам | Зумерский ВПН',
    h1: 'VPN для Казахстана',
    description: 'VPN для Казахстана: серверы EU/US, VLESS, подключение через Telegram.',
    intro: 'Пользователям из KZ подходят европейские узлы для баланса скорости и доступности контента.',
    sections: [cisCountryBlocks('Казахстана'), whyZoomer, connectSteps, trialBlock],
    related: [{ path: '/vpn-dlya-belarusi', label: 'Беларусь' }],
  }),

  page('/vpn-dlya-belarusi', {
    title: 'VPN для Беларуси | Зумерский ВПН',
    h1: 'VPN для Беларуси',
    description: 'VPN для Беларуси: стабильный VLESS, несколько стран, пробный период.',
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
