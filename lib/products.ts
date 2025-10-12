import { Product, ProductCard } from '@/types/product';

/**
 * List of all products
 */
export const products: Product[] = [
  {
    id: '1',
    slug: 'checktruth',
    title: {
      en: 'CheckTruth - AI Content Verification',
      ru: 'CheckTruth - Проверка Контента AI',
      be: 'CheckTruth - Праверка Кантэнту AI',
      pl: 'CheckTruth - Weryfikacja Treści AI',
      uk: 'CheckTruth - Перевірка Контенту AI',
    },
    description: {
      en: 'AI-powered fact-checking and content authenticity verification platform for social media. Currently operational exclusively for TikTok videos with audio transcription, claim identification, and multi-source fact-checking across 6 languages. In development: AI-generated video detection to identify deepfakes and synthetic media. Future expansion planned: enhanced video analysis for Instagram Reels, YouTube Shorts, and other social platforms. Monetization through display advertising on free tools and premium API subscriptions for enterprises and media organizations requiring high-volume content moderation.',
      ru: 'Платформа для проверки фактов и подлинности контента в социальных сетях на основе AI. В настоящее время работает исключительно с видео TikTok с транскрипцией аудио, выявлением утверждений и проверкой фактов из нескольких источников на 6 языках. В разработке: детекция AI-генерированных видео для выявления дипфейков и синтетических медиа. Планируется расширение: улучшенный анализ видео для Instagram Reels, YouTube Shorts и других социальных платформ. Монетизация через медийную рекламу на бесплатных инструментах и премиум API-подписки для предприятий и медиа-организаций, требующих масштабной модерации контента.',
      be: 'Платформа для праверкі фактаў і сапраўднасці кантэнту ў сацыяльных сетках на аснове AI. У цяперашні час працуе выключна з відэа TikTok з транскрыпцыяй аўдыё, выяўленнем сцвярджэнняў і праверкай фактаў з некалькіх крыніц на 6 мовах. У распрацоўцы: дэтэкцыя AI-генераваных відэа для выяўлення дыпфейкаў і сінтэтычных медыя. Плануецца пашырэнне: паляпшаны аналіз відэа для Instagram Reels, YouTube Shorts і іншых сацыяльных платформаў. Манетызацыя праз медыйную рэкламу на бясплатных інструментах і прэміум API-падпіскі для прадпрыемстваў і медыя-арганізацый, якія патрабуюць маштабнай мадэрацыі кантэнту.',
      pl: 'Platforma weryfikacji faktów i autentyczności treści w mediach społecznościowych oparta na AI. Obecnie działa wyłącznie z filmami TikTok z transkrypcją audio, identyfikacją twierdzeń i sprawdzaniem faktów z wielu źródeł w 6 językach. W rozwoju: detekcja wideo generowanego przez AI w celu identyfikacji deepfake\'ów i syntetycznych mediów. Planowana ekspansja: ulepszony analizator wideo dla Instagram Reels, YouTube Shorts i innych platform społecznościowych. Monetyzacja poprzez reklamy displayowe na darmowych narzędziach oraz premium subskrypcje API dla firm i organizacji medialnych wymagających moderacji treści na dużą skalę.',
      uk: 'Платформа для перевірки фактів та автентичності контенту в соціальних мережах на основі AI. Наразі працює виключно з відео TikTok з транскрипцією аудіо, виявленням тверджень та перевіркою фактів з декількох джерел на 6 мовах. В розробці: детекція AI-генерованих відео для виявлення дипфейків та синтетичних медіа. Планується розширення: покращений аналіз відео для Instagram Reels, YouTube Shorts та інших соціальних платформ. Монетизація через медійну рекламу на безкоштовних інструментах та преміум API-підписки для підприємств та медіа-організацій, що потребують масштабної модерації контенту.',
    },
    shortDescription: {
      en: 'Verify truth and detect AI-generated content in social media videos instantly',
      ru: 'Проверяйте правдивость и определяйте AI-контент в видео из соцсетей мгновенно',
      be: 'Правярайце праўдзівасць і вызначайце AI-кантэнт у відэа з соцсетак імгненна',
      pl: 'Weryfikuj prawdę i wykrywaj treści AI w filmach z mediów społecznościowych natychmiast',
      uk: 'Перевіряйте правдивість та виявляйте AI-контент у відео з соцмереж миттєво',
    },
    techStack: ['.Net 9.0','Next.js 14', 'Azure OpenAI', 'TypeScript', 'PostgreSQL', 'Circle CI', 'Digital Ocean', 'Docker', 'Bunny.net CDN'],
    thumbnail: {
      src: '/images/projects/checktruth/thumbnail.jpg',
      alt: {
        en: 'CheckTruth Fact-Checking Platform',
        ru: 'CheckTruth Платформа Проверки Фактов',
        be: 'CheckTruth Платформа Праверкі Фактаў',
        pl: 'CheckTruth Platforma Weryfikacji Faktów',
        uk: 'CheckTruth Платформа Перевірки Фактів',
      },
      width: 800,
      height: 600,
    },
    links: {
      website: 'https://checktiktok.com',
      github: '',
    },
    investment: {
      problem: {
        en: 'Users cannot determine whether information in social media videos is true or false, and cannot identify if videos are AI-generated or authentic. AI-generated deepfakes and synthetic media proliferate, making it increasingly difficult to distinguish authentic content from fabricated material. Existing fact-checking solutions require hours of manual verification by specialists, while market demands instant, accessible tools for both content verification and AI-detection.',
        ru: 'Пользователи не могут определить, правдива ли информация в видео из социальных сетей, и не могут определить, является ли видео AI-генерированным или настоящим. AI-дипфейки и синтетические медиа распространяются, усложняя различение подлинного контента от сфабрикованного материала. Существующие решения для проверки фактов требуют часов ручной верификации специалистами, тогда как рынок требует мгновенных доступных инструментов как для верификации контента, так и для детекции AI.',
        be: 'Карыстальнікі не могуць вызначыць, праўдзівая ці ілжывая інфармацыя ў відэа з сацыяльных сетак, і не могуць вызначыць, ці з\'яўляецца відэа AI-генераваным або сапраўдным. AI-дыпфейкі і сінтэтычныя медыя распаўсюджваюцца, ускладняючы адрозненне сапраўднага кантэнту ад сфабрыкаванага матэрыялу. Існуючыя рашэнні для праверкі фактаў патрабуюць гадзін ручной верыфікацыі спецыялістамі, тады як рынак патрабуе імгненных даступных інструментаў як для верыфікацыі кантэнту, так і для дэтэкцыі AI.',
        pl: 'Użytkownicy nie mogą określić, czy informacje w filmach z mediów społecznościowych są prawdziwe czy fałszywe, i nie mogą zidentyfikować, czy filmy są generowane przez AI czy autentyczne. AI-deepfake\'i i syntetyczne media proliferują, utrudniając odróżnienie autentycznych treści od sfabrykowanego materiału. Istniejące rozwiązania fact-checkingu wymagają godzin ręcznej weryfikacji przez specjalistów, podczas gdy rynek wymaga natychmiastowych, dostępnych narzędzi zarówno do weryfikacji treści, jak i detekcji AI.',
        uk: 'Користувачі не можуть визначити, чи правдива інформація у відео з соціальних мереж, і не можуть визначити, чи є відео AI-генерованим або справжнім. AI-дипфейки та синтетичні медіа поширюються, ускладнюючи розрізнення справжнього контенту від сфабрикованого матеріалу. Існуючі рішення для перевірки фактів потребують годин ручної верифікації спеціалістами, тоді як ринок вимагає миттєвих доступних інструментів як для верифікації контенту, так і для детекції AI.',
      },
      solution: {
        en: 'CheckTruth eliminates verification uncertainty by providing instant, authoritative verdicts on video content claims and AI-generation detection - users simply submit a video link and receive immediate fact-check results with source citations plus authenticity analysis, removing hours of manual research. Platform analyzes claims against authoritative sources using AI-powered audio transcription and multi-source verification across 6 languages. In development: deepfake and AI-generated video detection to identify synthetic media. Operational for TikTok videos; Instagram Reels and YouTube Shorts integration in active development.',
        ru: 'CheckTruth устраняет неопределенность верификации, предоставляя мгновенные авторитетные вердикты по утверждениям в видео и детекцию AI-генерации - пользователи просто отправляют ссылку на видео и получают немедленные результаты фактчекинга с цитированием источников плюс анализ подлинности, экономя часы ручного исследования. Платформа анализирует утверждения по авторитетным источникам с использованием AI-транскрипции аудио и мультиисточниковой верификации на 6 языках. В разработке: детекция дипфейков и AI-генерированных видео для выявления синтетических медиа. Работает для видео TikTok; интеграция Instagram Reels и YouTube Shorts в активной разработке.',
        be: 'CheckTruth ліквідуе нявызначанасць верыфікацыі, прадастаўляючы імгненныя аўтарытэтныя вердыкты па сцвярджэнням у відэа і дэтэкцыю AI-генерацыі - карыстальнікі проста адпраўляюць спасылку на відэа і атрымліваюць неадкладныя вынікі фактчэкінгу з цытаваннем крыніц плюс аналіз сапраўднасці, эканомячы гадзіны ручнога даследавання. Платформа аналізуе сцвярджэнні па аўтарытэтных крыніцах з выкарыстаннем AI-транскрыпцыі аўдыё і мультыкрынічнай верыфікацыі на 6 мовах. У распрацоўцы: дэтэкцыя дыпфейкаў і AI-генераваных відэа для выяўлення сінтэтычных медыя. Працуе для відэа TikTok; інтэграцыя Instagram Reels і YouTube Shorts у актыўнай распрацоўцы.',
        pl: 'CheckTruth eliminuje niepewność weryfikacji, dostarczając natychmiastowe, autorytatywne werdykty dotyczące twierdzeń w filmach i detekcję generowania AI - użytkownicy po prostu przesyłają link do filmu i otrzymują natychmiastowe wyniki fact-checkingu z cytowaniem źródeł plus analizę autentyczności, oszczędzając godziny ręcznych badań. Platforma analizuje twierdzenia w oparciu o autorytatywne źródła, wykorzystując transkrypcję audio AI i weryfikację wieloźródłową w 6 językach. W rozwoju: detekcja deepfake\'ów i wideo generowanego przez AI w celu identyfikacji syntetycznych mediów. Działa dla filmów TikTok; integracja Instagram Reels i YouTube Shorts w aktywnym rozwoju.',
        uk: 'CheckTruth усуває невизначеність верифікації, надаючи миттєві авторитетні вердикти щодо тверджень у відео та детекцію AI-генерації - користувачі просто надсилають посилання на відео та отримують негайні результати фактчекінгу з цитуванням джерел плюс аналіз автентичності, заощаджуючи години ручного дослідження. Платформа аналізує твердження за авторитетними джерелами з використанням AI-транскрипції аудіо та мультиджерельної верифікації на 6 мовах. В розробці: детекція дипфейків та AI-генерованих відео для виявлення синтетичних медіа. Працює для відео TikTok; інтеграція Instagram Reels та YouTube Shorts в активній розробці.',
      },
      metrics: [
        {
          key: {
            en: 'Platform Status',
            ru: 'Статус платформы',
            be: 'Статус платформы',
            pl: 'Status platformy',
            uk: 'Статус платформи',
          },
          value: 'TikTok Live',
          trend: 'up',
        },
        {
          key: {
            en: 'Supported Languages',
            ru: 'Поддерживаемых языков',
            be: 'Падтрымліваемых моў',
            pl: 'Obsługiwanych języków',
            uk: 'Підтримуваних мов',
          },
          value: '6 languages',
          trend: 'up',
        },
        {
          key: {
            en: 'Team Size',
            ru: 'Размер команды',
            be: 'Памер каманды',
            pl: 'Wielkość zespołu',
            uk: 'Розмір команди',
          },
          value: '3 founders',
          trend: 'stable',
        },
        {
          key: {
            en: 'Target Market',
            ru: 'Целевой рынок',
            be: 'Мэтавы рынак',
            pl: 'Rynek docelowy',
            uk: 'Цільовий ринок',
          },
          value: 'Global',
          trend: 'up',
        },
      ],
      traction: {
        en: 'Current Status: MVP operational since Dec 2024, 3-person founding team. Pre-revenue stage, focused on user base growth and product refinement.\n\nCompleted Features: 6-language audio transcription, claim extraction, multi-source fact verification for TikTok videos.\n\nIn Development: AI-generated video detection (deepfake identification), Instagram Reels and YouTube Shorts integration. Multi-platform R&D and AI detection capabilities in progress, enterprise API beta testing.\n\nGrowth Stage: Organic user acquisition phase, building SEO presence, preparing enterprise API for monetization launch.\n\nConservative Revenue Projections:\n• 2026: 25K-50K users, $80-150K revenue (ads $30-60K + 3-5 API clients $50-90K at $1,500-2,500/month)\n• 2027: 100K-200K users, $350-550K revenue (ads $150-250K + 10-15 API clients $200-300K)\n\nDevelopment Roadmap:\n• 2026: API v1.0 launch, mobile apps, strategic partnerships\n• 2027: Advanced verification features, market expansion',
        ru: 'Текущий статус: MVP работает с декабря 2024, команда из 3 основателей. Пре-доходная стадия, фокус на росте пользовательской базы и доработке продукта.\n\nЗавершенные функции: Транскрипция на 6 языках, извлечение утверждений, мультиисточниковая верификация фактов для видео TikTok.\n\nВ разработке: Детекция AI-генерированных видео (идентификация дипфейков), интеграция Instagram Reels и YouTube Shorts. Мультиплатформенный R&D и возможности детекции AI в процессе, бета-тестирование корпоративного API.\n\nСтадия роста: Фаза органического привлечения пользователей, построение SEO-присутствия, подготовка корпоративного API для запуска монетизации.\n\nКонсервативные прогнозы выручки:\n• 2026: 25K-50K пользователей, $80-150K выручки (реклама $30-60K + 3-5 API-клиентов $50-90K по $1,500-2,500/месяц)\n• 2027: 100K-200K пользователей, $350-550K выручки (реклама $150-250K + 10-15 API-клиентов $200-300K)\n\nДорожная карта:\n• 2026: Запуск API v1.0, мобильные приложения, стратегические партнерства\n• 2027: Расширенные функции верификации, расширение рынка',
        be: 'Бягучы статус: MVP працуе з снежня 2024, каманда з 3 заснавальнікаў. Прэ-даходная стадыя, фокус на росце карыстальніцкай базы і дапрацоўцы прадукту.\n\nЗавершаныя функцыі: Транскрыпцыя на 6 мовах, здабыццё сцвярджэнняў, мультыкрынічная верыфікацыя фактаў для відэа TikTok.\n\nУ распрацоўцы: Дэтэкцыя AI-генераваных відэа (ідэнтыфікацыя дыпфейкаў), інтэграцыя Instagram Reels і YouTube Shorts. Мультыплатформенны R&D і магчымасці дэтэкцыі AI ў працэсе, бета-тэставанне карпаратыўнага API.\n\nСтадыя росту: Фаза арганічнага прыцягнення карыстальнікаў, пабудова SEO-прысутнасці, падрыхтоўка карпаратыўнага API для запуску манетызацыі.\n\nКансерватыўныя прагнозы выручкі:\n• 2026: 25K-50K карыстальнікаў, $80-150K выручкі (рэклама $30-60K + 3-5 API-кліентаў $50-90K па $1,500-2,500/месяц)\n• 2027: 100K-200K карыстальнікаў, $350-550K выручкі (рэклама $150-250K + 10-15 API-кліентаў $200-300K)\n\nДарожная карта:\n• 2026: Запуск API v1.0, мабільныя прыкладанні, стратэгічныя партнёрствы\n• 2027: Пашыраныя функцыі верыфікацыі, пашырэнне рынку',
        pl: 'Status platformy: MVP działa od grudnia 2024, zespół 3 założycieli. Etap przed-przychodowy, fokus na wzroście bazy użytkowników i udoskonaleniu produktu.\n\nUkończone funkcje: Transkrypcja w 6 językach, wyodrębnianie twierdzeń, weryfikacja faktów wieloźródłowa dla filmów TikTok.\n\nW rozwoju: Detekcja wideo generowanego przez AI (identyfikacja deepfake\'ów), integracja Instagram Reels i YouTube Shorts. Wieloplatformowy R&D i możliwości detekcji AI w toku, beta testy API dla przedsiębiorstw.\n\nEtap wzrostu: Faza organicznej akwizycji użytkowników, budowanie obecności SEO, przygotowanie API dla przedsiębiorstw do uruchomienia monetyzacji.\n\nKonserwatywne prognozy przychodów:\n• 2026: 25K-50K użytkowników, $80-150K przychodów (reklamy $30-60K + 3-5 klientów API $50-90K po $1,500-2,500/miesiąc)\n• 2027: 100K-200K użytkowników, $350-550K przychodów (reklamy $150-250K + 10-15 klientów API $200-300K)\n\nMapa drogowa:\n• 2026: Uruchomienie API v1.0, aplikacje mobilne, partnerstwa strategiczne\n• 2027: Zaawansowane funkcje weryfikacji, ekspansja rynkowa',
        uk: 'Поточний статус: MVP працює з грудня 2024, команда з 3 засновників. Пре-дохідна стадія, фокус на зростанні користувацької бази та доопрацюванні продукту.\n\nЗавершені функції: Транскрипція на 6 мовах, витягування тверджень, мультиджерельна верифікація фактів для відео TikTok.\n\nВ розробці: Детекція AI-генерованих відео (ідентифікація дипфейків), інтеграція Instagram Reels та YouTube Shorts. Мультиплатформний R&D та можливості детекції AI в процесі, бета-тестування корпоративного API.\n\nСтадія зростання: Фаза органічного залучення користувачів, побудова SEO-присутності, підготовка корпоративного API для запуску монетизації.\n\nКонсервативні прогнози виручки:\n• 2026: 25K-50K користувачів, $80-150K виручки (реклама $30-60K + 3-5 API-клієнтів $50-90K по $1,500-2,500/місяць)\n• 2027: 100K-200K користувачів, $350-550K виручки (реклама $150-250K + 10-15 API-клієнтів $200-300K)\n\nДорожня карта:\n• 2026: Запуск API v1.0, мобільні застосунки, стратегічні партнерства\n• 2027: Розширені функції верифікації, розширення ринку',
      },
      request: {
        round: {
          en: 'Pre-Seed / Angel',
          ru: 'Pre-Seed / Angel',
          be: 'Pre-Seed / Angel',
          pl: 'Pre-Seed / Angel',
          uk: 'Pre-Seed / Angel',
        },
        amount: {
          en: '$200K - $400K',
          ru: '$200K - $400K',
          be: '$200K - $400K',
          pl: '$200K - $400K',
          uk: '$200K - $400K',
        },
      },
      contact: {
        email: 'invest@pink-black-team.com',
        telegram: '@pinkblackteam',
        linkedin: 'https://linkedin.com/company/pink-black-team',
      },
    },
    status: 'active',
    featured: true,
    publishedAt: '2024-12-01T00:00:00Z',
    updatedAt: '2025-10-11T05:00:00Z',
  },
  {
    id: '2',
    slug: 'foodreceipts',
    title: {
      en: 'FoodReceipts - AI Recipe Platform',
      ru: 'FoodReceipts - AI Платформа Рецептов',
      be: 'FoodReceipts - AI Платформа Рэцэптаў',
      pl: 'FoodReceipts - Platforma AI Przepisów',
      uk: 'FoodReceipts - AI Платформа Рецептів',
    },
    description: {
      en: 'AI-powered platform connecting recipe discovery with grocery shopping. MVP in development: extracts recipes from multiple sources (websites, YouTube, TikTok, Instagram) using Azure OpenAI, automatically matches ingredients to products. Planned integrations with Polish grocery delivery services (Lisek, Uber Eats Poland, Bolt Food). Target market: Poland initially, with global expansion roadmap. Currently validating product-market fit and refining AI accuracy for ingredient matching.',
      ru: 'AI-платформа, соединяющая поиск рецептов с покупкой продуктов. MVP в разработке: извлекает рецепты из множественных источников (сайты, YouTube, TikTok, Instagram) используя Azure OpenAI, автоматически сопоставляет ингредиенты с продуктами. Планируются интеграции с польскими сервисами доставки продуктов (Lisek, Uber Eats Poland, Bolt Food). Целевой рынок: Польша изначально, с дорожной картой глобального расширения. В настоящее время валидируем product-market fit и улучшаем точность AI для сопоставления ингредиентов.',
      be: 'AI-платформа, якая злучае пошук рэцэптаў з пакупкай прадуктаў. MVP у распрацоўцы: здабывае рэцэпты з множных крыніц (сайты, YouTube, TikTok, Instagram) выкарыстоўваючы Azure OpenAI, аўтаматычна супастаўляе інгрэдыенты з прадуктамі. Плануюцца інтэграцыі з польскімі сэрвісамі дастаўкі прадуктаў (Lisek, Uber Eats Poland, Bolt Food). Мэтавы рынак: Польшча спачатку, з дарожнай картай глабальнага пашырэння. У цяперашні час валідуем product-market fit і паляпшаем дакладнасць AI для супастаўлення інгрэдыентаў.',
      pl: 'Platforma AI łącząca odkrywanie przepisów z zakupami spożywczymi. MVP w rozwoju: wyodrębnia przepisy z wielu źródeł (strony internetowe, YouTube, TikTok, Instagram) używając Azure OpenAI, automatycznie dopasowuje składniki do produktów. Planowane integracje z polskimi usługami dostawy spożywczej (Lisek, Uber Eats Poland, Bolt Food). Rynek docelowy: Polska początkowo, z mapą drogową globalnej ekspansji. Obecnie walidujemy dopasowanie produktu do rynku i doskonalimy dokładność AI do dopasowywania składników.',
      uk: 'AI-платформа, що поєднує пошук рецептів з покупкою продуктів. MVP в розробці: витягує рецепти з множинних джерел (сайти, YouTube, TikTok, Instagram) використовуючи Azure OpenAI, автоматично зіставляє інгредієнти з продуктами. Плануються інтеграції з польськими сервісами доставки продуктів (Lisek, Uber Eats Poland, Bolt Food). Цільовий ринок: Польща спочатку, з дорожньою картою глобального розширення. Наразі валідуємо product-market fit та покращуємо точність AI для зіставлення інгредієнтів.',
    },
    shortDescription: {
      en: 'Turn any recipe into instant grocery delivery with AI ingredient matching',
      ru: 'Превратите любой рецепт в мгновенную доставку продуктов с AI-сопоставлением ингредиентов',
      be: 'Ператварыце любы рэцэпт у імгненную дастаўку прадуктаў з AI-супастаўленнем інгрэдыентаў',
      pl: 'Zamień dowolny przepis na natychmiastową dostawę zakupów z dopasowaniem składników AI',
      uk: 'Перетворіть будь-який рецепт на миттєву доставку продуктів з AI-зіставленням інгредієнтів',
    },
    techStack: ['.Net 9.0','Next.js 14', 'Azure OpenAI', 'TypeScript', 'PostgreSQL', 'Circle CI', 'Digital Ocean', 'Docker', 'Bunny.net CDN', 'React Native'],
    thumbnail: {
      src: '/images/projects/foodreceipts/thumbnail.jpg',
      alt: {
        en: 'FoodReceipts AI Recipe Platform',
        ru: 'FoodReceipts AI Платформа Рецептов',
        be: 'FoodReceipts AI Платформа Рэцэптаў',
        pl: 'FoodReceipts Platforma AI Przepisów',
        uk: 'FoodReceipts AI Платформа Рецептів',
      },
      width: 800,
      height: 600,
    },
    links: {
      github: '',
      demo: 'https://cdn.novastorm.ai/pink-black/Screen%20Recording%202025-09-25%20at%2018.53.38.mp4',
    },
    investment: {
      problem: {
        en: 'People spend 5+ hours weekly on meal planning, recipe searching, and creating shopping lists, with 68% abandoning recipes due to ingredient availability issues. The disconnect between recipe discovery and grocery shopping results in food waste and inefficient purchases, costing families $2,400 annually in a $12B global meal planning market.',
        ru: 'Люди тратят 5+ часов в неделю на планирование питания, поиск рецептов и создание списков покупок, при этом 68% отказываются от рецептов из-за недоступности ингредиентов. Разрыв между поиском рецептов и покупкой продуктов приводит к пищевым отходам и неэффективным покупкам, обходясь семьям в $2,400 ежегодно на рынке планирования питания объемом $12 млрд.',
        be: 'Людзі траціць 5+ гадзін у тыдзень на планаванне харчавання, пошук рэцэптаў і стварэнне спісаў пакупак, пры гэтым 68% адмаўляюцца ад рэцэптаў з-за недаступнасці інгрэдыентаў. Разрыў паміж пошукам рэцэптаў і пакупкай прадуктаў прыводзіць да харчовых адходаў і неэфектыўных пакупак, каштуючы сем\'ям $2,400 штогод на рынку планавання харчавання аб\'ёмам $12 млрд.',
        pl: 'Ludzie spędzają ponad 5 godzin tygodniowo na planowaniu posiłków, wyszukiwaniu przepisów i tworzeniu list zakupów, przy czym 68% rezygnuje z przepisów ze względu na problemy z dostępnością składników. Rozdźwięk między odkrywaniem przepisów a zakupami spożywczymi skutkuje marnotrawstwem żywności i nieefektywnymi zakupami, kosztując rodziny 2400 USD rocznie na globalnym rynku planowania posiłków wartym 12 miliardów USD.',
        uk: 'Люди витрачають 5+ годин на тиждень на планування харчування, пошук рецептів та створення списків покупок, при цьому 68% відмовляються від рецептів через недоступність інгредієнтів. Розрив між пошуком рецептів і покупкою продуктів призводить до харчових відходів та неефективних покупок, коштуючи сім\'ям $2,400 щорічно на ринку планування харчування обсягом $12 млрд.',
      },
      solution: {
        en: 'FoodReceipts eliminates meal planning friction by automating the recipe-to-grocery journey - users extract recipes from any source and receive matched ingredient lists ready for one-click delivery. Platform uses Azure OpenAI to extract recipes from websites, YouTube, TikTok, Instagram and automatically matches ingredients to local products. Planned integrations with Polish delivery services (Lisek, Uber Eats Poland, Bolt Food) for seamless checkout. MVP stage: validating product-market fit, refining AI ingredient matching accuracy (target 90-95%). Market focus: Poland launch, global expansion roadmap for major markets.',
        ru: 'FoodReceipts устраняет трения планирования питания, автоматизируя путь от рецепта к продуктам - пользователи извлекают рецепты из любого источника и получают сопоставленные списки ингредиентов, готовые для доставки в один клик. Платформа использует Azure OpenAI для извлечения рецептов с сайтов, YouTube, TikTok, Instagram и автоматически сопоставляет ингредиенты с локальными продуктами. Планируются интеграции с польскими сервисами доставки (Lisek, Uber Eats Poland, Bolt Food) для бесшовного оформления заказа. Стадия MVP: валидация product-market fit, улучшение точности AI-сопоставления ингредиентов (цель 90-95%). Фокус рынка: запуск в Польше, дорожная карта глобального расширения на основные рынки.',
        be: 'FoodReceipts ліквідуе трэнні планавання харчавання, аўтаматызуючы шлях ад рэцэпта да прадуктаў - карыстальнікі здабываюць рэцэпты з любой крыніцы і атрымліваюць супастаўленыя спісы інгрэдыентаў, гатовыя для дастаўкі ў адзін клік. Платформа выкарыстоўвае Azure OpenAI для здабычы рэцэптаў з сайтаў, YouTube, TikTok, Instagram і аўтаматычна супастаўляе інгрэдыенты з лакальнымі прадуктамі. Плануюцца інтэграцыі з польскімі сэрвісамі дастаўкі (Lisek, Uber Eats Poland, Bolt Food) для бясшвовага афармлення замовы. Стадыя MVP: валідацыя product-market fit, паляпшэнне дакладнасці AI-супастаўлення інгрэдыентаў (мэта 90-95%). Фокус рынку: запуск у Польшчы, дарожная карта глабальнага пашырэння на асноўныя рынкі.',
        pl: 'FoodReceipts eliminuje tarcia w planowaniu posiłków, automatyzując drogę od przepisu do produktów - użytkownicy wyodrębniają przepisy z dowolnego źródła i otrzymują dopasowane listy składników gotowe do dostawy jednym kliknięciem. Platforma wykorzystuje Azure OpenAI do wyodrębniania przepisów ze stron internetowych, YouTube, TikTok, Instagram i automatycznie dopasowuje składniki do lokalnych produktów. Planowane integracje z polskimi usługami dostawy (Lisek, Uber Eats Poland, Bolt Food) dla płynnego zamówienia. Etap MVP: walidacja dopasowania produktu do rynku, doskonalenie dokładności dopasowywania składników AI (cel 90-95%). Fokus rynkowy: uruchomienie w Polsce, mapa drogowa globalnej ekspansji na główne rynki.',
        uk: 'FoodReceipts усуває тертя планування харчування, автоматизуючи шлях від рецепта до продуктів - користувачі витягують рецепти з будь-якого джерела та отримують зіставлені списки інгредієнтів, готові для доставки в один клік. Платформа використовує Azure OpenAI для витягування рецептів з сайтів, YouTube, TikTok, Instagram та автоматично зіставляє інгредієнти з локальними продуктами. Плануються інтеграції з польськими сервісами доставки (Lisek, Uber Eats Poland, Bolt Food) для безшовного оформлення замовлення. Стадія MVP: валідація product-market fit, покращення точності AI-зіставлення інгредієнтів (ціль 90-95%). Фокус ринку: запуск у Польщі, дорожня карта глобального розширення на основні ринки.',
      },
      metrics: [
        {
          key: {
            en: 'MVP Status',
            ru: 'Статус MVP',
            be: 'Статус MVP',
            pl: 'Status MVP',
            uk: 'Статус MVP',
          },
          value: 'In Development',
          trend: 'up',
        },
        {
          key: {
            en: 'Team Size',
            ru: 'Размер команды',
            be: 'Памер каманды',
            pl: 'Wielkość zespołu',
            uk: 'Розмір команди',
          },
          value: '3 founders',
          trend: 'stable',
        },
        {
          key: {
            en: 'AI Accuracy (Target)',
            ru: 'Точность AI (цель)',
            be: 'Дакладнасць AI (мэта)',
            pl: 'Dokładność AI (cel)',
            uk: 'Точність AI (мета)',
          },
          value: '90-95%',
          trend: 'up',
        },
        {
          key: {
            en: 'Target Market',
            ru: 'Целевой рынок',
            be: 'Мэтавы рынак',
            pl: 'Rynek docelowy',
            uk: 'Цільовий ринок',
          },
          value: 'Poland → Global',
          trend: 'up',
        },
      ],
      traction: {
        en: 'Current Status: MVP in active development, 3-person founding team. Pre-launch phase, focused on core technology completion before beta testing.\n\nCompleted: AI recipe extraction engine using Azure OpenAI.\n\nIn Progress: Ingredient matching algorithm refinement (target 90-95% accuracy), UI/UX development. Beta testing with early adopters ongoing, delivery service integrations and product refinement in process.\n\nPlanned Integrations: Partnerships with Lisek, Uber Eats Poland, Bolt Food (negotiations planned for post-beta).\n\nGrowth Stage: Pre-beta phase, validating product-market fit, preparing for monetization launch.\n\nConservative Revenue Projections:\n• 2026: 1,000-3,000 users, $8-20K revenue (commission-based model from delivery integrations)\n• 2027: 5,000-10,000 users, $50-100K revenue (commissions + premium features)\n\nDevelopment Roadmap:\n• 2026: Polish market expansion, mobile app development\n• 2027: Central Europe expansion, revenue model optimization',
        ru: 'Текущий статус: MVP в активной разработке, команда из 3 основателей. Пре-запуск фаза, фокус на завершении основной технологии перед бета-тестированием.\n\nЗавершено: Движок AI-извлечения рецептов используя Azure OpenAI.\n\nВ процессе: Доработка алгоритма сопоставления ингредиентов (цель 90-95% точности), разработка UI/UX. Бета-тестирование с ранними пользователями в процессе, интеграции с сервисами доставки и доработка продукта.\n\nПланируемые интеграции: Партнерства с Lisek, Uber Eats Poland, Bolt Food (переговоры планируются после беты).\n\nСтадия роста: Пре-бета фаза, валидация product-market fit, подготовка к запуску монетизации.\n\nКонсервативные прогнозы выручки:\n• 2026: 1,000-3,000 пользователей, $8-20K выручки (комиссионная модель от интеграций доставки)\n• 2027: 5,000-10,000 пользователей, $50-100K выручки (комиссии + премиум функции)\n\nДорожная карта:\n• 2026: Расширение на польском рынке, разработка мобильного приложения\n• 2027: Экспансия в Центральную Европу, оптимизация модели дохода',
        be: 'Бягучы статус: MVP у актыўнай распрацоўцы, каманда з 3 заснавальнікаў. Прэ-запуск фаза, фокус на завяршэнні асноўнай тэхналогіі перад бета-тэставаннем.\n\nЗавершана: Рухавік AI-здабычы рэцэптаў выкарыстоўваючы Azure OpenAI.\n\nУ працэсе: Дапрацоўка алгарытму супастаўлення інгрэдыентаў (мэта 90-95% дакладнасці), распрацоўка UI/UX. Бета-тэставанне з ранімі карыстальнікамі ў працэсе, інтэграцыі з сэрвісамі дастаўкі і дапрацоўка прадукту.\n\nПланаваныя інтэграцыі: Партнёрствы з Lisek, Uber Eats Poland, Bolt Food (перамовы плануюцца пасля беты).\n\nСтадыя росту: Прэ-бета фаза, валідацыя product-market fit, падрыхтоўка да запуску манетызацыі.\n\nКансерватыўныя прагнозы выручкі:\n• 2026: 1,000-3,000 карыстальнікаў, $8-20K выручкі (камісійная мадэль ад інтэграцый дастаўкі)\n• 2027: 5,000-10,000 карыстальнікаў, $50-100K выручкі (камісіі + прэміум функцыі)\n\nДарожная карта:\n• 2026: Пашырэнне на польскім рынку, распрацоўка мабільнага прыкладання\n• 2027: Экспансія ў Цэнтральную Еўропу, аптымізацыя мадэлі даходу',
        pl: 'Status MVP: Aktywny rozwój, zespół 3 założycieli. Faza przed uruchomieniem, fokus na ukończeniu podstawowej technologii przed testami beta.\n\nUkończone: Silnik wyodrębniania przepisów AI używając Azure OpenAI.\n\nW trakcie: Udoskonalenie algorytmu dopasowywania składników (cel 90-95% dokładności), rozwój UI/UX. Testy beta z wczesnymi użytkownikami w toku, integracje z usługami dostawy i udoskonalenie produktu.\n\nPlanowane integracje: Partnerstwa z Lisek, Uber Eats Poland, Bolt Food (negocjacje planowane po beta).\n\nEtap wzrostu: Faza przed-beta, walidacja dopasowania produktu do rynku, przygotowanie do uruchomienia monetyzacji.\n\nKonserwatywne prognozy przychodów:\n• 2026: 1,000-3,000 użytkowników, $8-20K przychodów (model komisyjny z integracji dostawy)\n• 2027: 5,000-10,000 użytkowników, $50-100K przychodów (prowizje + funkcje premium)\n\nMapa drogowa:\n• 2026: Ekspansja na rynku polskim, rozwój aplikacji mobilnej\n• 2027: Ekspansja do Europy Środkowej, optymalizacja modelu przychodów',
        uk: 'Поточний статус: MVP в активній розробці, команда з 3 засновників. Пре-запуск фаза, фокус на завершенні основної технології перед бета-тестуванням.\n\nЗавершено: Двигун AI-витягування рецептів використовуючи Azure OpenAI.\n\nВ процесі: Доопрацювання алгоритму зіставлення інгредієнтів (ціль 90-95% точності), розробка UI/UX. Бета-тестування з ранніми користувачами в процесі, інтеграції з сервісами доставки та доопрацювання продукту.\n\nПлановані інтеграції: Партнерства з Lisek, Uber Eats Poland, Bolt Food (переговори плануються після бети).\n\nСтадія зростання: Пре-бета фаза, валідація product-market fit, підготовка до запуску монетизації.\n\nКонсервативні прогнози виручки:\n• 2026: 1,000-3,000 користувачів, $8-20K виручки (комісійна модель від інтеграцій доставки)\n• 2027: 5,000-10,000 користувачів, $50-100K виручки (комісії + преміум функції)\n\nДорожня карта:\n• 2026: Розширення на польському ринку, розробка мобільного застосунку\n• 2027: Експансія до Центральної Європи, оптимізація моделі доходу',
      },
      request: {
        round: {
          en: 'Pre-Seed / Angel',
          ru: 'Pre-Seed / Angel',
          be: 'Pre-Seed / Angel',
          pl: 'Pre-Seed / Angel',
          uk: 'Pre-Seed / Angel',
        },
        amount: {
          en: '$150K - $300K',
          ru: '$150K - $300K',
          be: '$150K - $300K',
          pl: '$150K - $300K',
          uk: '$150K - $300K',
        },
      },
      contact: {
        email: 'invest@pink-black-team.com',
        telegram: '@pinkblackteam',
        linkedin: 'https://linkedin.com/company/pink-black-team',
      },
    },
    status: 'active',
    featured: true,
    publishedAt: '2024-12-01T00:00:00Z',
    updatedAt: '2025-10-11T05:00:00Z',
  },
  {
    id: '3',
    slug: 'astrologia-guru',
    title: {
      en: 'Astrologia.guru - AI Astrology Platform',
      ru: 'Astrologia.guru - AI Платформа Астрологии',
      be: 'Astrologia.guru - AI Платформа Астралогіі',
      pl: 'Astrologia.guru - Platforma AI Astrologii',
      uk: 'Astrologia.guru - AI Платформа Астрології',
    },
    description: {
      en: 'AI-powered astrology and tarot platform automating personalized readings at scale. Launched October 2025 in Polish market with 4 services: love horoscopes, annual tarot, partner compatibility, natal charts. GPT-4 AI generates instant interpretations, enabling unlimited scalability without human astrologers. Revenue model: paid digital readings ($12-35 average) with 70-85% profit margins. Expansion roadmap: 2026 paid marketing launch, mobile apps and subscription model ($9.99/month), 2027 multi-language expansion (Russian, English, Ukrainian, Belarusian), 2028+ white-label API for astrology businesses.',
      ru: 'AI-платформа астрологии и таро, автоматизирующая персонализированные чтения в масштабе. Запущена в октябре 2025 на польском рынке с 4 услугами: любовные гороскопы, годовое таро, совместимость партнеров, натальные карты. AI GPT-4 генерирует мгновенные интерпретации, обеспечивая неограниченную масштабируемость без астрологов-людей. Модель дохода: платные цифровые чтения ($12-35 средняя) с маржой 70-85%. Дорожная карта расширения: 2026 запуск платного маркетинга, мобильные приложения и модель подписки ($9.99/месяц), 2027 многоязычное расширение (русский, английский, украинский, белорусский), 2028+ white-label API для астрологических бизнесов.',
      be: 'AI-платформа астралогіі і тара, якая аўтаматызуе персаналізаваныя чытанні ў маштабе. Запушчана ў кастрычніку 2025 на польскім рынку з 4 паслугамі: каханыя гараскопы, гадавое тара, сумяшчальнасць партнёраў, натальныя карты. AI GPT-4 генеруе імгненныя інтэрпрэтацыі, забяспечваючы неабмежаваную маштабаванасць без астролагаў-людзей. Мадэль даходу: платныя лічбавыя чытанні ($12-35 сярэдняя) з маржой 70-85%. Дарожная карта пашырэння: 2026 запуск платнага маркетынгу, мабільныя прыкладанні і мадэль падпіскі ($9.99/месяц), 2027 шматмоўнае пашырэнне (рускі, англійскі, украінскі, беларускі), 2028+ white-label API для астралагічных бізнесаў.',
      pl: 'Platforma astrologii i tarota oparta na AI, automatyzująca spersonalizowane czytania na skalę. Uruchomiona w październiku 2025 na rynku polskim z 4 usługami: horoskopy miłosne, roczny tarot, kompatybilność partnerów, karty urodzenia. AI GPT-4 generuje natychmiastowe interpretacje, umożliwiając nieograniczoną skalowalność bez ludzkich astrologów. Model przychodów: płatne cyfrowe czytania ($12-35 średnio) z marżą 70-85%. Mapa drogowa ekspansji: 2026 uruchomienie płatnego marketingu, aplikacje mobilne i model subskrypcyjny ($9.99/miesiąc), 2027 ekspansja wielojęzyczna (rosyjski, angielski, ukraiński, białoruski), 2028+ white-label API dla firm astrologicznych.',
      uk: 'AI-платформа астрології та таро, що автоматизує персоналізовані читання в масштабі. Запущена в жовтні 2025 на польському ринку з 4 послугами: любовні гороскопи, річне таро, сумісність партнерів, натальні карти. AI GPT-4 генерує миттєві інтерпретації, забезпечуючи необмежену масштабованість без астрологів-людей. Модель доходу: платні цифрові читання ($12-35 середня) з маржею 70-85%. Дорожня карта розширення: 2026 запуск платного маркетингу, мобільні застосунки та модель підписки ($9.99/місяць), 2027 багатомовне розширення (російська, англійська, українська, білоруська), 2028+ white-label API для астрологічних бізнесів.',
    },
    shortDescription: {
      en: 'Get affordable personalized astrology readings instantly - AI replaces expensive human astrologers',
      ru: 'Получайте доступные персонализированные астрологические чтения мгновенно - AI заменяет дорогих астрологов',
      be: 'Атрымлівайце даступныя персаналізаваныя астралагічныя чытанні імгненна - AI замяняе дарагіх астролагаў',
      pl: 'Otrzymuj przystępne spersonalizowane czytania astrologiczne natychmiast - AI zastępuje drogich astrologów',
      uk: 'Отримуйте доступні персоналізовані астрологічні читання миттєво - AI замінює дорогих астрологів',
    },
    techStack: ['.Net 9.0','Next.js 14', 'Azure OpenAI', 'TypeScript', 'PostgreSQL', 'Circle CI', 'Digital Ocean', 'Docker', 'Bunny.net CDN'],
    thumbnail: {
      src: '/images/projects/astrologia-guru/thumbnail.jpg',
      alt: {
        en: 'Astrologia.guru AI Astrology Platform',
        ru: 'Astrologia.guru AI Платформа Астрологии',
        be: 'Astrologia.guru AI Платформа Астралогіі',
        pl: 'Astrologia.guru Platforma AI Astrologii',
        uk: 'Astrologia.guru AI Платформа Астрології',
      },
      width: 800,
      height: 600,
    },
    links: {
      website: 'https://astrologia.guru',
    },
    investment: {
      problem: {
        en: '40% of adults regularly read horoscopes, but personalized astrology readings remain inaccessible - human astrologers charge $100-300 per session and cannot scale beyond 5-10 clients daily. Polish market (38M population + 10M diaspora) lacks affordable, instant, private astrology services in the $12B global astrology market dominated by generic horoscopes.',
        ru: '40% взрослых регулярно читают гороскопы, но персонализированные астрологические чтения остаются недоступными - астрологи-люди берут $100-300 за сеанс и не могут масштабироваться более 5-10 клиентов в день. Польский рынок (38М население + 10М диаспора) испытывает недостаток доступных, мгновенных, приватных астрологических услуг на мировом рынке астрологии $12 млрд, доминируемом общими гороскопами.',
        be: '40% дарослых рэгулярна чытаюць гараскопы, але персаналізаваныя астралагічныя чытанні застаюцца недаступнымі - астролагі-людзі бяруць $100-300 за сеанс і не могуць маштабавацца больш 5-10 кліентаў у дзень. Польскі рынак (38М насельніцтва + 10М дыяспара) адчувае недахоп даступных, імгненных, прыватных астралагічных паслуг на сусветным рынку астралогіі $12 млрд, дамінуемым агульнымі гараскопамі.',
        pl: '40% dorosłych regularnie czyta horoskopy, ale spersonalizowane czytania astrologiczne pozostają niedostępne - ludzcy astrolodzy pobierają 100-300 USD za sesję i nie mogą skalować się ponad 5-10 klientów dziennie. Polski rynek (38 mln populacji + 10 mln diaspory) brakuje przystępnych, natychmiastowych, prywatnych usług astrologicznych na globalnym rynku astrologii wartym 12 miliardów USD zdominowanym przez ogólne horoskopy.',
        uk: '40% дорослих регулярно читають гороскопи, але персоналізовані астрологічні читання залишаються недоступними - астрологи-люди беруть $100-300 за сеанс і не можуть масштабуватися більше 5-10 клієнтів на день. Польський ринок (38М населення + 10М діаспора) відчуває нестачу доступних, миттєвих, приватних астрологічних послуг на світовому ринку астрології $12 млрд, що домінується загальними гороскопами.',
      },
      solution: {
        en: 'Astrologia.guru democratizes personalized astrology by delivering instant readings at $12-35 (vs. $100-300 for human astrologers) - users provide birth data and receive detailed written interpretations via email with ability to ask follow-up questions. GPT-4 AI automates traditional astrological interpretations, generating high-quality readings in seconds with unlimited scalability. Live services: love horoscopes, annual tarot, partner compatibility, natal charts for 48M+ Polish speakers globally. Revenue model: paid one-time readings (70-85% profit margins), planned subscription model ($9.99/month unlimited readings) launching 2027. Expansion roadmap: 2026 paid marketing + mobile apps, 2027 multi-language markets (RU/EN/UK/BE), 2028+ white-label API for astrology businesses.',
        ru: 'Astrologia.guru демократизирует персонализированную астрологию, предоставляя мгновенные чтения за $12-35 (против $100-300 у астрологов-людей) - пользователи предоставляют данные рождения и получают детальные письменные интерпретации по email с возможностью задавать дополнительные вопросы. AI GPT-4 автоматизирует традиционные астрологические интерпретации, генерируя качественные чтения за секунды с неограниченной масштабируемостью. Действующие услуги: любовные гороскопы, годовое таро, совместимость партнеров, натальные карты для 48М+ польскоязычных глобально. Модель дохода: платные разовые чтения (маржа 70-85%), планируемая модель подписки ($9.99/месяц безлимитные чтения) запуск 2027. Дорожная карта расширения: 2026 платный маркетинг + мобильные приложения, 2027 многоязычные рынки (RU/EN/UK/BE), 2028+ white-label API для астрологических бизнесов.',
        be: 'Astrologia.guru дэмакратызуе персаналізаваную астралогію, прадастаўляючы імгненныя чытанні за $12-35 (супраць $100-300 у астролагаў-людзей) - карыстальнікі прадастаўляюць дадзеныя нараджэння і атрымліваюць дэталёвыя пісьмовыя інтэрпрэтацыі па email з магчымасцю задаваць дадатковыя пытанні. AI GPT-4 аўтаматызуе традыцыйныя астралагічныя інтэрпрэтацыі, генеруючы якасныя чытанні за секунды з неабмежаванай маштабаванасцю. Дзейныя паслугі: каханыя гараскопы, гадавое тара, сумяшчальнасць партнёраў, натальныя карты для 48М+ польскамоўных глабальна. Мадэль даходу: платныя разовыя чытанні (маржа 70-85%), планаваная мадэль падпіскі ($9.99/месяц бязлімітныя чытанні) запуск 2027. Дарожная карта пашырэння: 2026 платны маркетынг + мабільныя прыкладанні, 2027 шматмоўныя рынкі (RU/EN/UK/BE), 2028+ white-label API для астралагічных бізнесаў.',
        pl: 'Astrologia.guru demokratyzuje spersonalizowaną astrologię, dostarczając natychmiastowe czytania za 12-35 USD (vs. 100-300 USD za ludzkich astrologów) - użytkownicy podają dane urodzenia i otrzymują szczegółowe pisemne interpretacje e-mailem z możliwością zadawania pytań uzupełniających. AI GPT-4 automatyzuje tradycyjne interpretacje astrologiczne, generując wysokiej jakości czytania w sekundach z nieograniczoną skalowalnością. Działające usługi: horoskopy miłosne, roczny tarot, kompatybilność partnerów, karty urodzenia dla ponad 48 mln osób mówiących po polsku na całym świecie. Model przychodów: płatne jednorazowe czytania (marża 70-85%), planowany model subskrypcyjny (9,99 USD/miesiąc nielimitowane czytania) uruchomienie 2027. Mapa drogowa ekspansji: 2026 płatny marketing + aplikacje mobilne, 2027 rynki wielojęzyczne (RU/EN/UK/BE), 2028+ white-label API dla firm astrologicznych.',
        uk: 'Astrologia.guru демократизує персоналізовану астрологію, надаючи миттєві читання за $12-35 (проти $100-300 у астрологів-людей) - користувачі надають дані народження та отримують детальні письмові інтерпретації електронною поштою з можливістю ставити додаткові питання. AI GPT-4 автоматизує традиційні астрологічні інтерпретації, генеруючи якісні читання за секунди з необмеженою масштабованістю. Діючі послуги: любовні гороскопи, річне таро, сумісність партнерів, натальні карти для 48М+ польськомовних глобально. Модель доходу: платні разові читання (маржа 70-85%), планована модель підписки ($9.99/місяць безлімітні читання) запуск 2027. Дорожня карта розширення: 2026 платний маркетинг + мобільні застосунки, 2027 багатомовні ринки (RU/EN/UK/BE), 2028+ white-label API для астрологічних бізнесів.',
      },
      metrics: [
        {
          key: {
            en: 'Launch Date',
            ru: 'Дата запуска',
            be: 'Дата запуску',
            pl: 'Data uruchomienia',
            uk: 'Дата запуску',
          },
          value: 'Oct 2025',
          trend: 'up',
        },
        {
          key: {
            en: 'Services Offered',
            ru: 'Предлагаемых услуг',
            be: 'Прапануемых паслуг',
            pl: 'Oferowanych usług',
            uk: 'Пропонованих послуг',
          },
          value: '4 AI readings',
          trend: 'stable',
        },
        {
          key: {
            en: 'Team Size',
            ru: 'Размер команды',
            be: 'Памер каманды',
            pl: 'Wielkość zespołu',
            uk: 'Розмір команди',
          },
          value: '3 founders',
          trend: 'stable',
        },
        {
          key: {
            en: 'Current Revenue',
            ru: 'Текущая выручка',
            be: 'Бягучая выручка',
            pl: 'Obecne przychody',
            uk: 'Поточна виручка',
          },
          value: '$0 (pre-marketing)',
          trend: 'stable',
        },
      ],
      traction: {
        en: 'Current Status: Platform launched October 2025, 3-person founding team. Pre-marketing phase, building organic audience before monetization.\n\nCompleted: AI reading engine with 4 services (love horoscopes, annual tarot, partner compatibility, natal charts) for 48M+ Polish speakers.\n\nCurrent Phase: Building organic SEO presence through content, validating service quality and pricing ($12-35/reading). Paid marketing and SEO optimization in active planning.\n\nGrowth Stage: Early-stage bootstrapped, focused on content marketing and SEO foundation.\n\nConservative Revenue Projections:\n• 2026: 100-300 paying customers, $2-6K revenue (organic SEO + initial paid ads, 2-4% conversion)\n• 2027: 500-1,500 customers, $10-30K revenue (paid ads scaling, subscription model beta)\n• 2028: 2,000-5,000 customers, $40-100K revenue (subscription $9.99/month + one-time readings, multi-language markets)\n\nGrowth Assumptions: Organic SEO traffic plus paid ads ($10-20 CAC), 2-4% conversion, 15-20% repeat rate, 70-85% profit margin.\n\nDevelopment Roadmap:\n• 2026: Paid marketing launch, SEO optimization, mobile apps development\n• 2027: Subscription model, expansion to RU/EN/UK/BE markets\n• 2028: White-label API, partnership development',
        ru: 'Текущий статус: Платформа запущена в октябре 2025, команда из 3 основателей. Пре-маркетинговая фаза, построение органической аудитории до монетизации.\n\nЗавершено: AI-движок чтения с 4 услугами (любовные гороскопы, годовое таро, совместимость партнеров, натальные карты) для 48М+ польскоязычных.\n\nТекущая фаза: Построение органического SEO-присутствия через контент, валидация качества услуг и ценообразования ($12-35/чтение). Платный маркетинг и SEO-оптимизация в активном планировании.\n\nСтадия роста: Ранняя bootstrapped стадия, фокус на контент-маркетинге и SEO-фундаменте.\n\nКонсервативные прогнозы выручки:\n• 2026: 100-300 платящих клиентов, $2-6K выручки (органический SEO + начальная платная реклама, 2-4% конверсия)\n• 2027: 500-1,500 клиентов, $10-30K выручки (масштабирование платной рекламы, бета модели подписки)\n• 2028: 2,000-5,000 клиентов, $40-100K выручки (подписка $9.99/месяц + разовые чтения, многоязычные рынки)\n\nПредположения роста: Органический SEO-трафик плюс платная реклама ($10-20 CAC), 2-4% конверсия, 15-20% повторных покупок, 70-85% маржа прибыли.\n\nДорожная карта:\n• 2026: Запуск платного маркетинга, SEO-оптимизация, разработка мобильных приложений\n• 2027: Модель подписки, расширение на рынки RU/EN/UK/BE\n• 2028: White-label API, развитие партнерств',
        be: 'Бягучы статус: Платформа запушчана ў кастрычніку 2025, каманда з 3 заснавальнікаў. Прэ-маркетынгавая фаза, пабудова арганічнай аўдыторыі да манетызацыі.\n\nЗавершана: AI-рухавік чытання з 4 паслугамі (каханыя гараскопы, гадавое тара, сумяшчальнасць партнёраў, натальныя карты) для 48М+ польскамоўных.\n\nБягучая фаза: Пабудова арганічнага SEO-прысутнасці праз кантэнт, валідацыя якасці паслуг і цэнаўтварэння ($12-35/чытанне). Платны маркетынг і SEO-аптымізацыя ў актыўным планаванні.\n\nСтадыя росту: Ранняя bootstrapped стадыя, фокус на кантэнт-маркетынгу і SEO-фундаменце.\n\nКансерватыўныя прагнозы выручкі:\n• 2026: 100-300 плацяжных кліентаў, $2-6K выручкі (арганічны SEO + пачатковая платная рэклама, 2-4% канверсія)\n• 2027: 500-1,500 кліентаў, $10-30K выручкі (маштабаванне платнай рэкламы, бета мадэлі падпіскі)\n• 2028: 2,000-5,000 кліентаў, $40-100K выручкі (падпіска $9.99/месяц + разовыя чытанні, шматмоўныя рынкі)\n\nПрадпалажэнні росту: Арганічны SEO-трафік плюс платная рэклама ($10-20 CAC), 2-4% канверсія, 15-20% паўторных пакупак, 70-85% маржа прыбытку.\n\nДарожная карта:\n• 2026: Запуск платнага маркетынгу, SEO-аптымізацыя, распрацоўка мабільных прыкладанняў\n• 2027: Мадэль падпіскі, пашырэнне на рынкі RU/EN/UK/BE\n• 2028: White-label API, развіццё партнёрстваў',
        pl: 'Status platformy: Platforma uruchomiona w październiku 2025, zespół 3 założycieli. Faza przed-marketingowa, budowanie organicznej publiczności przed monetyzacją.\n\nUkończone: Silnik czytania AI z 4 usługami (horoskopy miłosne, roczny tarot, kompatybilność partnerów, karty urodzenia) dla ponad 48 mln osób mówiących po polsku.\n\nObecna faza: Budowanie organicznej obecności SEO poprzez treści, walidacja jakości usług i cen ($12-35/czytanie). Płatny marketing i optymalizacja SEO w aktywnym planowaniu.\n\nEtap wzrostu: Wczesny etap bootstrapped, fokus na content marketingu i fundamencie SEO.\n\nKonserwatywne prognozy przychodów:\n• 2026: 100-300 płacących klientów, $2-6K przychodów (organiczne SEO + początkowe płatne reklamy, 2-4% konwersja)\n• 2027: 500-1,500 klientów, $10-30K przychodów (skalowanie płatnych reklam, beta modelu subskrypcyjnego)\n• 2028: 2,000-5,000 klientów, $40-100K przychodów (subskrypcja $9.99/miesiąc + jednorazowe czytania, rynki wielojęzyczne)\n\nZałożenia wzrostu: Organiczny ruch SEO plus płatne reklamy ($10-20 CAC), 2-4% konwersja, 15-20% wskaźnik powtórnych zakupów, 70-85% marża zysku.\n\nMapa drogowa:\n• 2026: Uruchomienie płatnego marketingu, optymalizacja SEO, rozwój aplikacji mobilnych\n• 2027: Model subskrypcyjny, ekspansja na rynki RU/EN/UK/BE\n• 2028: White-label API, rozwój partnerstw',
        uk: 'Поточний статус: Платформа запущена в жовтні 2025, команда з 3 засновників. Пре-маркетингова фаза, побудова органічної аудиторії до монетизації.\n\nЗавершено: AI-двигун читання з 4 послугами (любовні гороскопи, річне таро, сумісність партнерів, натальні карти) для 48М+ польськомовних.\n\nПоточна фаза: Побудова органічної SEO-присутності через контент, валідація якості послуг та ціноутворення ($12-35/читання). Платний маркетинг та SEO-оптимізація в активному плануванні.\n\nСтадія зростання: Рання bootstrapped стадія, фокус на контент-маркетингу та SEO-фундаменті.\n\nКонсервативні прогнози виручки:\n• 2026: 100-300 платних клієнтів, $2-6K виручки (органічний SEO + початкова платна реклама, 2-4% конверсія)\n• 2027: 500-1,500 клієнтів, $10-30K виручки (масштабування платної реклами, бета моделі підписки)\n• 2028: 2,000-5,000 клієнтів, $40-100K виручки (підписка $9.99/місяць + разові читання, багатомовні ринки)\n\nПрипущення зростання: Органічний SEO-трафік плюс платна реклама ($10-20 CAC), 2-4% конверсія, 15-20% повторних покупок, 70-85% маржа прибутку.\n\nДорожня карта:\n• 2026: Запуск платного маркетингу, SEO-оптимізація, розробка мобільних застосунків\n• 2027: Модель підписки, розширення на ринки RU/EN/UK/BE\n• 2028: White-label API, розвиток партнерств',
      },
      request: {
        round: {
          en: 'Pre-Seed / Angel',
          ru: 'Pre-Seed / Angel',
          be: 'Pre-Seed / Angel',
          pl: 'Pre-Seed / Angel',
          uk: 'Pre-Seed / Angel',
        },
        amount: {
          en: '$50K - $100K',
          ru: '$50K - $100K',
          be: '$50K - $100K',
          pl: '$50K - $100K',
          uk: '$50K - $100K',
        },
      },
      contact: {
        email: 'invest@pink-black-team.com',
        telegram: '@pinkblackteam',
        linkedin: 'https://linkedin.com/company/pink-black-team',
      },
    },
    status: 'active',
    featured: true,
    publishedAt: '2024-12-01T00:00:00Z',
    updatedAt: '2025-10-11T05:00:00Z',
  },
  {
    id: '4',
    slug: 'novastorm-ai',
    title: {
      en: 'NovaStorm AI - Verified Video Creation',
      ru: 'NovaStorm AI - Создание Проверенного Видео',
      be: 'NovaStorm AI - Стварэнне Правераных Відэа',
      pl: 'NovaStorm AI - Tworzenie Zweryfikowanych Filmów',
      uk: 'NovaStorm AI - Створення Перевіреного Відео',
    },
    description: {
      en: 'AI video generation platform with integrated fact-checking capabilities. Concept stage project combining text-to-video generation (20+ language TTS, auto-subtitles, customizable templates for TikTok, Instagram Reels, YouTube Shorts) with CheckTruth verification technology for pre-publication content accuracy checking. Planned freemium SaaS: free tier (watermarked), Pro ($29/month), Business ($99/month), Enterprise ($499+/month). Target users: content creators, SMBs, educators, journalists requiring rapid verified video production. Development timeline: Q4 2025 MVP completion, Mid 2026 public launch, 2027 enterprise API and mobile apps, 2028+ global scale with advanced verification features.',
      ru: 'Платформа AI-генерации видео с интегрированными возможностями проверки фактов. Проект на стадии концепции, объединяющий генерацию текст-в-видео (TTS на 20+ языках, авто-субтитры, настраиваемые шаблоны для TikTok, Instagram Reels, YouTube Shorts) с технологией верификации CheckTruth для проверки точности контента перед публикацией. Планируемая freemium SaaS: бесплатный уровень (с водяными знаками), Pro ($29/месяц), Business ($99/месяц), Enterprise ($499+/месяц). Целевые пользователи: создатели контента, МСБ, преподаватели, журналисты, требующие быстрого проверенного видеопроизводства. График разработки: Q4 2025 завершение MVP, Середина 2026 публичный запуск, 2027 корпоративный API и мобильные приложения, 2028+ глобальный масштаб с расширенными функциями верификации.',
      be: 'Платформа AI-генерацыі відэа з інтэграванымі магчымасцямі праверкі фактаў. Праект на стадыі канцэпцыі, які аб\'ядноўвае генерацыю тэкст-у-відэа (TTS на 20+ мовах, аўта-субтытры, наладжвальныя шаблоны для TikTok, Instagram Reels, YouTube Shorts) з тэхналогіяй верыфікацыі CheckTruth для праверкі дакладнасці кантэнту перад публікацыяй. Планаваная freemium SaaS: бясплатны ўзровень (з вадзянымі знакамі), Pro ($29/месяц), Business ($99/месяц), Enterprise ($499+/месяц). Мэтавыя карыстальнікі: стваральнікі кантэнту, МСБ, выкладчыкі, журналісты, якія патрабуюць хуткага праверанага відэавытворчасці. Графік распрацоўкі: Q4 2025 завяршэнне MVP, Сярэдзіна 2026 публічны запуск, 2027 карпаратыўны API і мабільныя прыкладанні, 2028+ глабальны маштаб з пашыранымі функцыямі верыфікацыі.',
      pl: 'Platforma generowania wideo AI ze zintegrowanymi możliwościami sprawdzania faktów. Projekt w fazie koncepcji, łączący generowanie tekst-na-wideo (TTS w ponad 20 językach, automatyczne napisy, konfigurowalne szablony dla TikTok, Instagram Reels, YouTube Shorts) z technologią weryfikacji CheckTruth do sprawdzania dokładności treści przed publikacją. Planowany freemium SaaS: poziom bezpłatny (ze znakami wodnymi), Pro (29 USD/miesiąc), Business (99 USD/miesiąc), Enterprise (499+ USD/miesiąc). Docelowi użytkownicy: twórcy treści, MŚP, edukatorzy, dziennikarze wymagający szybkiej zweryfikowanej produkcji wideo. Harmonogram rozwoju: Q4 2025 ukończenie MVP, Połowa 2026 publiczne uruchomienie, 2027 API dla przedsiębiorstw i aplikacje mobilne, 2028+ globalny zasięg z zaawansowanymi funkcjami weryfikacji.',
      uk: 'Платформа AI-генерації відео з інтегрованими можливостями перевірки фактів. Проєкт на стадії концепції, що поєднує генерацію текст-у-відео (TTS на 20+ мовах, авто-субтитри, налаштовувані шаблони для TikTok, Instagram Reels, YouTube Shorts) з технологією верифікації CheckTruth для перевірки точності контенту перед публікацією. Планована freemium SaaS: безкоштовний рівень (з водяними знаками), Pro ($29/місяць), Business ($99/місяць), Enterprise ($499+/місяць). Цільові користувачі: створювачі контенту, МСП, викладачі, журналісти, що потребують швидкого перевіреного відеовиробництва. Графік розробки: Q4 2025 завершення MVP, Середина 2026 публічний запуск, 2027 корпоративний API та мобільні застосунки, 2028+ глобальний масштаб з розширеними функціями верифікації.',
    },
    shortDescription: {
      en: 'Create verified video content with AI - instant generation plus built-in fact-checking',
      ru: 'Создавайте проверенный видеоконтент с AI - мгновенная генерация плюс встроенный фактчекинг',
      be: 'Стварайце праверані відэакантэнт з AI - імгненная генерацыя плюс убудаваны фактчэкінг',
      pl: 'Twórz zweryfikowane treści wideo z AI - natychmiastowa generacja plus wbudowany fact-checking',
      uk: 'Створюйте перевірений відеоконтент з AI - миттєва генерація плюс вбудований фактчекінг',
    },
    techStack: ['.Net 9.0','Next.js 14', 'Azure OpenAI', 'TypeScript', 'PostgreSQL', 'Circle CI', 'Digital Ocean', 'Docker', 'Bunny.net CDN'],
    thumbnail: {
      src: '/images/projects/novastorm-ai/thumbnail.jpg',
      alt: {
        en: 'NovaStorm AI Video Creation Platform',
        ru: 'NovaStorm AI Платформа Создания Видео',
        be: 'NovaStorm AI Платформа Стварэння Відэа',
        pl: 'NovaStorm AI Platforma Tworzenia Filmów',
        uk: 'NovaStorm AI Платформа Створення Відео',
      },
      width: 800,
      height: 600,
    },
    links: {
      website: 'https://www.novastorm.ai',
    },
    investment: {
      problem: {
        en: 'Professional video content creation requires expensive tools ($50-300/month), technical skills, and hours of editing, while creators simultaneously face the misinformation crisis - lacking tools to verify claims before publishing. The creator economy ($104B in 2024, projected $480B by 2027) demands scalable solutions for rapid, trustworthy video production that addresses both production barriers and content verification needs.',
        ru: 'Создание профессионального видеоконтента требует дорогих инструментов ($50-300/месяц), технических навыков и часов монтажа, в то время как создатели одновременно сталкиваются с кризисом дезинформации - отсутствуют инструменты для проверки утверждений перед публикацией. Экономика создателей ($104 млрд в 2024, прогноз $480 млрд к 2027) требует масштабируемых решений для быстрого, достоверного видеопроизводства, решающих как барьеры производства, так и потребности верификации контента.',
        be: 'Стварэнне прафесійнага відэакантэнту патрабуе дарагіх інструментаў ($50-300/месяц), тэхнічных навыкаў і гадзін мантажу, у той час як стваральнікі адначасова сутыкаюцца з крызісам дэзінфармацыі - адсутнічаюць інструменты для праверкі сцвярджэнняў перад публікацыяй. Эканоміка стваральнікаў ($104 млрд у 2024, прагноз $480 млрд да 2027) патрабуе маштабуемых рашэнняў для хуткага, дастовернага відэавытворчасці, якія вырашаюць як бар\'еры вытворчасці, так і патрэбы верыфікацыі кантэнту.',
        pl: 'Tworzenie profesjonalnych treści wideo wymaga drogich narzędzi (50-300 USD/miesiąc), umiejętności technicznych i godzin edycji, podczas gdy twórcy jednocześnie stają w obliczu kryzysu dezinformacji - brakuje narzędzi do weryfikacji twierdzeń przed publikacją. Ekonomia twórców (104 mld USD w 2024 r., prognoza 480 mld USD do 2027 r.) wymaga skalowalnych rozwiązań dla szybkiej, wiarygodnej produkcji wideo, która odpowiada zarówno na bariery produkcji, jak i potrzeby weryfikacji treści.',
        uk: 'Створення професійного відеоконтенту вимагає дорогих інструментів ($50-300/місяць), технічних навичок та годин монтажу, в той час як створювачі одночасно стикаються з кризою дезінформації - відсутні інструменти для перевірки тверджень перед публікацією. Економіка створювачів ($104 млрд у 2024, прогноз $480 млрд до 2027) вимагає масштабованих рішень для швидкого, достовірного відеовиробництва, що вирішують як бар\'єри виробництва, так і потреби верифікації контенту.',
      },
      solution: {
        en: 'NovaStorm AI solves dual problems by merging video creation and verification in one platform - creators generate professional videos from text and receive pre-publication fact-checking automatically. Text-to-video with 20+ language TTS, auto-subtitles, social media templates (TikTok, Instagram Reels, YouTube Shorts); integrated CheckTruth technology detects claims and verifies against authoritative sources with citations. Concept stage leveraging CheckTruth verification infrastructure. Freemium SaaS model: free tier (5 videos/month, watermarked), Pro $29/month (50 videos + basic verification), Business $99/month (200 videos + full fact-checking), Enterprise $499+/month (unlimited + API). Target market: content creators, SMBs, educators, journalists in $480B creator economy (2027 projection). Development timeline: Q4 2025 MVP, Mid 2026 public launch, 2027 enterprise API + mobile apps.',
        ru: 'NovaStorm AI решает две проблемы, объединяя создание видео и верификацию на одной платформе - создатели генерируют профессиональные видео из текста и получают автоматический фактчекинг перед публикацией. Текст-в-видео с TTS на 20+ языках, авто-субтитры, шаблоны для соцсетей (TikTok, Instagram Reels, YouTube Shorts); интегрированная технология CheckTruth обнаруживает утверждения и верифицирует по авторитетным источникам с цитатами. Стадия концепции с использованием инфраструктуры верификации CheckTruth. Freemium SaaS модель: бесплатный уровень (5 видео/месяц, с водяными знаками), Pro $29/месяц (50 видео + базовая верификация), Business $99/месяц (200 видео + полный фактчекинг), Enterprise $499+/месяц (безлимит + API). Целевой рынок: создатели контента, МСБ, преподаватели, журналисты в экономике создателей $480 млрд (прогноз 2027). График разработки: Q4 2025 MVP, Середина 2026 публичный запуск, 2027 корпоративный API + мобильные приложения.',
        be: 'NovaStorm AI вырашае дзве праблемы, аб\'ядноўваючы стварэнне відэа і верыфікацыю на адной платформе - стваральнікі генеруюць прафесійныя відэа з тэксту і атрымліваюць аўтаматычны фактчэкінг перад публікацыяй. Тэкст-у-відэа з TTS на 20+ мовах, аўта-субтытры, шаблоны для соцсетак (TikTok, Instagram Reels, YouTube Shorts); інтэграваная тэхналогія CheckTruth выяўляе сцвярджэнні і верыфікуе па аўтарытэтных крыніцах з цытатамі. Стадыя канцэпцыі з выкарыстаннем інфраструктуры верыфікацыі CheckTruth. Freemium SaaS мадэль: бясплатны ўзровень (5 відэа/месяц, з вадзянымі знакамі), Pro $29/месяц (50 відэа + базавая верыфікацыя), Business $99/месяц (200 відэа + поўны фактчэкінг), Enterprise $499+/месяц (бязлімітны + API). Мэтавы рынак: стваральнікі кантэнту, МСБ, выкладчыкі, журналісты ў эканоміцы стваральнікаў $480 млрд (прагноз 2027). Графік распрацоўкі: Q4 2025 MVP, Сярэдзіна 2026 публічны запуск, 2027 карпаратыўны API + мабільныя прыкладанні.',
        pl: 'NovaStorm AI rozwiązuje podwójny problem, łącząc tworzenie wideo i weryfikację na jednej platformie - twórcy generują profesjonalne filmy z tekstu i otrzymują automatyczny fact-checking przed publikacją. Tekst-na-wideo z TTS w ponad 20 językach, automatyczne napisy, szablony dla mediów społecznościowych (TikTok, Instagram Reels, YouTube Shorts); zintegrowana technologia CheckTruth wykrywa twierdzenia i weryfikuje w oparciu o autorytatywne źródła z cytatami. Faza koncepcji wykorzystująca infrastrukturę weryfikacji CheckTruth. Model freemium SaaS: poziom bezpłatny (5 filmów/miesiąc, ze znakami wodnymi), Pro 29 USD/miesiąc (50 filmów + podstawowa weryfikacja), Business 99 USD/miesiąc (200 filmów + pełny fact-checking), Enterprise 499+ USD/miesiąc (nieograniczone + API). Rynek docelowy: twórcy treści, MŚP, edukatorzy, dziennikarze w ekonomii twórców 480 mld USD (prognoza 2027). Harmonogram rozwoju: Q4 2025 MVP, Połowa 2026 publiczne uruchomienie, 2027 API dla przedsiębiorstw + aplikacje mobilne.',
        uk: 'NovaStorm AI вирішує подвійну проблему, поєднуючи створення відео та верифікацію на одній платформі - створювачі генерують професійні відео з тексту та отримують автоматичний фактчекінг перед публікацією. Текст-у-відео з TTS на 20+ мовах, авто-субтитри, шаблони для соцмереж (TikTok, Instagram Reels, YouTube Shorts); інтегрована технологія CheckTruth виявляє твердження та верифікує за авторитетними джерелами з цитатами. Стадія концепції з використанням інфраструктури верифікації CheckTruth. Freemium SaaS модель: безкоштовний рівень (5 відео/місяць, з водяними знаками), Pro $29/місяць (50 відео + базова верифікація), Business $99/місяць (200 відео + повний фактчекінг), Enterprise $499+/місяць (безліміт + API). Цільовий ринок: створювачі контенту, МСП, викладачі, журналісти в економіці створювачів $480 млрд (прогноз 2027). Графік розробки: Q4 2025 MVP, Середина 2026 публічний запуск, 2027 корпоративний API + мобільні застосунки.',
      },
      metrics: [
        {
          key: {
            en: 'Project Status',
            ru: 'Статус проекта',
            be: 'Статус праекта',
            pl: 'Status projektu',
            uk: 'Статус проєкту',
          },
          value: 'Concept/Planning',
          trend: 'up',
        },
        {
          key: {
            en: 'MVP Timeline',
            ru: 'Сроки MVP',
            be: 'Тэрміны MVP',
            pl: 'Harmonogram MVP',
            uk: 'Терміни MVP',
          },
          value: 'Q4 2025',
          trend: 'up',
        },
        {
          key: {
            en: 'Launch Date',
            ru: 'Дата запуска',
            be: 'Дата запуску',
            pl: 'Data uruchomienia',
            uk: 'Дата запуску',
          },
          value: 'Mid 2026',
          trend: 'up',
        },
        {
          key: {
            en: 'Team Size',
            ru: 'Размер команды',
            be: 'Памер каманды',
            pl: 'Wielkość zespołu',
            uk: 'Розмір команди',
          },
          value: '3 founders',
          trend: 'stable',
        },
      ],
      traction: {
        en: 'Current Status: Concept/planning phase, 3-person founding team. Pre-development stage, focused on technical architecture design and market validation.\n\nVision: Combine AI video generation with CheckTruth fact-checking technology for verified content creation.\n\nMVP Development: In progress, targeting completion by end of year (text-to-video, 5 languages, 10 templates, basic fact-checking integration).\n\nPublic Launch: Targeted Mid 2026.\n\nGrowth Stage: Early concept validation, technology stack planning, leveraging existing CheckTruth infrastructure to accelerate development.\n\nConservative Revenue Projections:\n• 2026 (2H): 1K-3K users, $15-50K revenue (freemium launch, initial subscriptions)\n• 2027: 5K-15K users, $150-350K revenue (Pro/Business subscriptions, pay-per-video model)\n• 2028: 20K-50K users, $600K-$1.5M revenue (Enterprise API, subscription base growth)\n\nGrowth Assumptions: $30-50 CAC via content marketing, 8-12% free-to-paid conversion, 60-70% gross margin (AI processing costs), <5% monthly churn.\n\nDevelopment Roadmap:\n• 2026: Freemium launch, initial user acquisition, mobile apps development\n• 2027: Enterprise API, advanced verification features\n• 2028: Scale to 50+ languages, live fact-checking, deepfake detection',
        ru: 'Текущий статус: Стадия концепции/планирования, команда из 3 основателей. Пре-девелопмент стадия, фокус на проектировании технической архитектуры и валидации рынка.\n\nВидение: Объединить AI-генерацию видео с технологией фактчекинга CheckTruth для создания проверенного контента.\n\nРазработка MVP: В процессе, планируется завершение до конца года (текст-в-видео, 5 языков, 10 шаблонов, базовая интеграция фактчекинга).\n\nПубличный запуск: Запланирован на середину 2026.\n\nСтадия роста: Ранняя валидация концепции, планирование технологического стека, использование существующей инфраструктуры CheckTruth для ускорения разработки.\n\nКонсервативные прогнозы выручки:\n• 2026 (2H): 1K-3K пользователей, $15-50K выручки (freemium запуск, начальные подписки)\n• 2027: 5K-15K пользователей, $150-350K выручки (подписки Pro/Business, модель оплаты за видео)\n• 2028: 20K-50K пользователей, $600K-$1.5M выручки (Enterprise API, рост базы подписчиков)\n\nПредположения роста: $30-50 CAC через контент-маркетинг, 8-12% конверсия бесплатных в платных, 60-70% валовая маржа (затраты на AI-обработку), <5% месячный отток.\n\nДорожная карта:\n• 2026: Freemium запуск, начальное привлечение пользователей, разработка мобильных приложений\n• 2027: Корпоративный API, расширенные функции верификации\n• 2028: Масштабирование до 50+ языков, проверка фактов в реальном времени, обнаружение дипфейков',
        be: 'Бягучы статус: Стадыя канцэпцыі/планавання, каманда з 3 заснавальнікаў. Прэ-девелопмент стадыя, фокус на праектаванні тэхнічнай архітэктуры і валідацыі рынку.\n\nБачанне: Аб\'яднаць AI-генерацыю відэа з тэхналогіяй фактчэкінгу CheckTruth для стварэння праверанага кантэнту.\n\nРаспрацоўка MVP: У працэсе, плануецца завяршэнне да канца года (тэкст-у-відэа, 5 моў, 10 шаблонаў, базавая інтэграцыя фактчэкінгу).\n\nПублічны запуск: Запланаваны на сярэдзіну 2026.\n\nСтадыя росту: Ранняя валідацыя канцэпцыі, планаванне тэхналагічнага стэка, выкарыстанне існуючай інфраструктуры CheckTruth для паскарэння распрацоўкі.\n\nКансерватыўныя прагнозы выручкі:\n• 2026 (2H): 1K-3K карыстальнікаў, $15-50K выручкі (freemium запуск, пачатковыя падпіскі)\n• 2027: 5K-15K карыстальнікаў, $150-350K выручкі (падпіскі Pro/Business, мадэль аплаты за відэа)\n• 2028: 20K-50K карыстальнікаў, $600K-$1.5M выручкі (Enterprise API, рост базы падпісчыкаў)\n\nПрадпалажэнні росту: $30-50 CAC праз кантэнт-маркетынг, 8-12% канверсія бясплатных у платных, 60-70% валавая маржа (выдаткі на AI-апрацоўку), <5% месячны адток.\n\nДарожная карта:\n• 2026: Freemium запуск, пачатковае прыцягненне карыстальнікаў, распрацоўка мабільных прыкладанняў\n• 2027: Карпаратыўны API, пашыраныя функцыі верыфікацыі\n• 2028: Маштабаванне да 50+ моў, праверка фактаў у рэальным часе, выяўленне дыпфейкаў',
        pl: 'Status projektu: Faza koncepcji/planowania, zespół 3 założycieli. Etap przed-rozwojowy, fokus na projektowaniu architektury technicznej i walidacji rynku.\n\nWizja: Połączenie generowania wideo AI z technologią fact-checkingu CheckTruth dla tworzenia zweryfikowanych treści.\n\nRozwój MVP: W toku, planowane ukończenie do końca roku (tekst-na-wideo, 5 języków, 10 szablonów, podstawowa integracja fact-checkingu).\n\nPubliczne uruchomienie: Planowane na połowę 2026.\n\nEtap wzrostu: Wczesna walidacja koncepcji, planowanie stosu technologicznego, wykorzystanie istniejącej infrastruktury CheckTruth do przyspieszenia rozwoju.\n\nKonserwatywne prognozy przychodów:\n• 2026 (2H): 1K-3K użytkowników, $15-50K przychodów (uruchomienie freemium, początkowe subskrypcje)\n• 2027: 5K-15K użytkowników, $150-350K przychodów (subskrypcje Pro/Business, model płatności za film)\n• 2028: 20K-50K użytkowników, $600K-$1.5M przychodów (Enterprise API, wzrost bazy subskrybentów)\n\nZałożenia wzrostu: $30-50 CAC przez content marketing, 8-12% konwersja bezpłatnych na płatne, 60-70% marża brutto (koszty przetwarzania AI), <5% miesięczny churn.\n\nMapa drogowa:\n• 2026: Uruchomienie freemium, początkowa akwizycja użytkowników, rozwój aplikacji mobilnych\n• 2027: API dla przedsiębiorstw, zaawansowane funkcje weryfikacji\n• 2028: Skalowanie do 50+ języków, sprawdzanie faktów na żywo, wykrywanie deepfake',
        uk: 'Поточний статус: Стадія концепції/планування, команда з 3 засновників. Пре-девелопмент стадія, фокус на проєктуванні технічної архітектури і валідації ринку.\n\nБачення: Поєднати AI-генерацію відео з технологією фактчекінгу CheckTruth для створення перевіреного контенту.\n\nРозробка MVP: В процесі, планується завершення до кінця року (текст-у-відео, 5 мов, 10 шаблонів, базова інтеграція фактчекінгу).\n\nПублічний запуск: Заплановано на середину 2026.\n\nСтадія зростання: Рання валідація концепції, планування технологічного стеку, використання існуючої інфраструктури CheckTruth для прискорення розробки.\n\nКонсервативні прогнози виручки:\n• 2026 (2H): 1K-3K користувачів, $15-50K виручки (freemium запуск, початкові підписки)\n• 2027: 5K-15K користувачів, $150-350K виручки (підписки Pro/Business, модель оплати за відео)\n• 2028: 20K-50K користувачів, $600K-$1.5M виручки (Enterprise API, зростання бази підписників)\n\nПрипущення зростання: $30-50 CAC через контент-маркетинг, 8-12% конверсія безкоштовних у платні, 60-70% валова маржа (витрати на AI-обробку), <5% місячний відтік.\n\nДорожня карта:\n• 2026: Freemium запуск, початкове залучення користувачів, розробка мобільних застосунків\n• 2027: Корпоративний API, розширені функції верифікації\n• 2028: Масштабування до 50+ мов, перевірка фактів у реальному часі, виявлення дипфейків',
      },
      request: {
        round: {
          en: 'Seed',
          ru: 'Seed',
          be: 'Seed',
          pl: 'Seed',
          uk: 'Seed',
        },
        amount: {
          en: '$500K - $1M',
          ru: '$500K - $1M',
          be: '$500K - $1M',
          pl: '$500K - $1M',
          uk: '$500K - $1M',
        },
      },
      contact: {
        email: 'invest@pink-black-team.com',
        telegram: '@pinkblackteam',
        linkedin: 'https://linkedin.com/company/pink-black-team',
      },
    },
    status: 'planned',
    featured: true,
    publishedAt: '2025-10-08T00:00:00Z',
    updatedAt: '2025-10-11T05:00:00Z',
  },
];

/**
 * Get all products
 */
export function getAllProducts(): Product[] {
  return products;
}

/**
 * Get product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/**
 * Get featured products
 */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

/**
 * Get product cards (minimal data for listing)
 */
export function getProductCards(): ProductCard[] {
  return products.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    shortDescription: p.shortDescription,
    techStack: p.techStack,
    thumbnail: p.thumbnail,
    status: p.status,
    featured: p.featured,
  }));
}
