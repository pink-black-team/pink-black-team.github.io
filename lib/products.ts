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
      en: 'AI-powered fact-checking and content authenticity verification platform for social media. Currently supports TikTok video verification with audio transcription, claim identification, and multi-source fact-checking. Expanding to Instagram, YouTube, Twitter/X, and Facebook. Features AI-generated content detection for videos and images. Free tools for individuals supported by ads, premium API for enterprises and media organizations.',
      ru: 'Платформа для проверки фактов и подлинности контента в социальных сетях на основе AI. В настоящее время поддерживает проверку видео TikTok с транскрипцией аудио, выявлением утверждений и проверкой фактов из нескольких источников. Расширение на Instagram, YouTube, Twitter/X и Facebook. Функция обнаружения контента, созданного AI, для видео и изображений. Бесплатные инструменты для частных лиц с рекламой, премиум API для предприятий и медиа-организаций.',
      be: 'Платформа для праверкі фактаў і сапраўднасці кантэнту ў сацыяльных сетках на аснове AI. У цяперашні час падтрымлівае праверку відэа TikTok з транскрыпцыяй аўдыё, выяўленнем сцвярджэнняў і праверкай фактаў з некалькіх крыніц. Пашырэнне на Instagram, YouTube, Twitter/X і Facebook. Функцыя выяўлення кантэнту, створанага AI, для відэа і выяў. Бясплатныя інструменты для прыватных асоб з рэкламай, прэміум API для прадпрыемстваў і медыя-арганізацый.',
      pl: 'Platforma weryfikacji faktów i autentyczności treści w mediach społecznościowych oparta na AI. Obecnie obsługuje weryfikację filmów TikTok z transkrypcją audio, identyfikacją twierdzeń i sprawdzaniem faktów z wielu źródeł. Rozszerzenie na Instagram, YouTube, Twitter/X i Facebook. Funkcja wykrywania treści wygenerowanych przez AI dla filmów i obrazów. Darmowe narzędzia dla użytkowników indywidualnych z reklamami, premium API dla firm i organizacji medialnych.',
      uk: 'Платформа для перевірки фактів та автентичності контенту в соціальних мережах на основі AI. Наразі підтримує перевірку відео TikTok з транскрипцією аудіо, виявленням тверджень та перевіркою фактів з декількох джерел. Розширення на Instagram, YouTube, Twitter/X та Facebook. Функція виявлення контенту, створеного AI, для відео та зображень. Безкоштовні інструменти для приватних осіб з рекламою, преміум API для підприємств та медіа-організацій.',
    },
    shortDescription: {
      en: 'AI-powered fact-checking and deepfake detection for social media',
      ru: 'Проверка фактов и обнаружение дипфейков с помощью AI',
      be: 'Праверка фактаў і выяўленне дыпфейкаў з дапамогай AI',
      pl: 'Sprawdzanie faktów i wykrywanie deepfake\'ów za pomocą AI',
      uk: 'Перевірка фактів та виявлення дипфейків за допомогою AI',
    },
    techStack: ['Next.js 14', 'Python', 'OpenAI Whisper', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'TensorFlow'],
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
      website: 'https://checktruth.pink-black-team.com',
      github: 'https://github.com/pink-black-team/checktruth',
    },
    investment: {
      problem: {
        en: 'Misinformation spreads 6x faster than truth on social media, reaching millions in hours. 68% of people share content without verifying it. Manual fact-checking takes hours or days while viral content spreads instantly. AI-generated deepfakes and synthetic media are proliferating, making it increasingly difficult to distinguish real from fake. Enterprise content moderation costs companies $500M+ annually, with 30% error rates from manual review.',
        ru: 'Дезинформация распространяется в 6 раз быстрее правды в социальных сетях, достигая миллионов за часы. 68% людей делятся контентом без проверки. Ручная проверка фактов занимает часы или дни, пока вирусный контент распространяется мгновенно. AI-дипфейки и синтетические медиа множатся, усложняя различение настоящего от поддельного. Модерация контента обходится компаниям в $500М+ ежегодно, с 30% ошибок при ручной проверке.',
        be: 'Дэзінфармацыя распаўсюджваецца ў 6 разоў хутчэй за праўду ў сацыяльных сетках, дасягаючы мільёнаў за гадзіны. 68% людзей дзеляцца кантэнтам без праверкі. Ручная праверка фактаў займае гадзіны або дні, пакуль вірусны кантэнт распаўсюджваецца імгненна. AI-дыпфейкі і сінтэтычныя медыя множацца, ускладняючы адрозненне сапраўднага ад падробленага. Мадэрацыя кантэнту каштуе кампаніям $500М+ штогод, з 30% памылак пры ручной праверцы.',
        pl: 'Dezinformacja rozprzestrzenia się 6 razy szybciej niż prawda w mediach społecznościowych, docierając do milionów w ciągu godzin. 68% ludzi udostępnia treści bez weryfikacji. Ręczne sprawdzanie faktów zajmuje godziny lub dni, podczas gdy wirusowe treści rozprzestrzeniają się natychmiast. AI-deepfake\'i i syntetyczne media mnożą się, utrudniając odróżnienie prawdziwego od fałszywego. Moderacja treści kosztuje firmy ponad 500 mln USD rocznie, z 30% błędów przy ręcznym przeglądzie.',
        uk: 'Дезінформація поширюється в 6 разів швидше за правду в соціальних мережах, досягаючи мільйонів за години. 68% людей діляться контентом без перевірки. Ручна перевірка фактів займає години або дні, поки вірусний контент поширюється миттєво. AI-дипфейки та синтетичні медіа множаться, ускладнюючи розрізнення справжнього від підробленого. Модерація контенту коштує компаніям $500М+ щорічно, з 30% помилок при ручній перевірці.',
      },
      solution: {
        en: 'CheckTruth provides automated fact-checking and AI content detection tools. Currently operational: TikTok video verification with audio transcription, claim extraction, and multi-source verification (supporting English, Russian, Spanish, French, Arabic, Portuguese). In development: expanding platform to Instagram, YouTube, Twitter/X, Facebook; adding AI-generated content detection for videos and images; building enterprise API for content moderation at scale. Freemium model: free ad-supported tools for individuals, premium API subscriptions for businesses and media organizations.',
        ru: 'CheckTruth предоставляет автоматизированные инструменты для проверки фактов и обнаружения AI-контента. Сейчас работает: проверка видео TikTok с транскрипцией аудио, извлечением утверждений и проверкой из нескольких источников (поддержка английского, русского, испанского, французского, арабского, португальского). В разработке: расширение платформы на Instagram, YouTube, Twitter/X, Facebook; добавление обнаружения AI-контента для видео и изображений; создание корпоративного API для масштабной модерации контента. Freemium модель: бесплатные инструменты с рекламой для частных лиц, премиум API-подписки для бизнеса и медиа-организаций.',
        be: 'CheckTruth прадастаўляе аўтаматызаваныя інструменты для праверкі фактаў і выяўлення AI-кантэнту. Зараз працуе: праверка відэа TikTok з транскрыпцыяй аўдыё, здабыццём сцвярджэнняў і праверкай з некалькіх крыніц (падтрымка англійскай, рускай, іспанскай, французскай, арабскай, партугальскай). У распрацоўцы: пашырэнне платформы на Instagram, YouTube, Twitter/X, Facebook; даданне выяўлення AI-кантэнту для відэа і выяў; стварэнне карпаратыўнага API для маштабнай мадэрацыі кантэнту. Freemium мадэль: бясплатныя інструменты з рэкламай для прыватных асоб, прэміум API-падпіскі для бізнесу і медыя-арганізацый.',
        pl: 'CheckTruth dostarcza zautomatyzowane narzędzia do sprawdzania faktów i wykrywania treści AI. Obecnie działające: weryfikacja filmów TikTok z transkrypcją audio, wyodrębnianiem twierdzeń i weryfikacją z wielu źródeł (obsługa języków: angielski, rosyjski, hiszpański, francuski, arabski, portugalski). W rozwoju: rozszerzenie platformy na Instagram, YouTube, Twitter/X, Facebook; dodanie wykrywania treści generowanych przez AI dla filmów i obrazów; budowanie API dla firm do moderacji treści na dużą skalę. Model freemium: darmowe narzędzia z reklamami dla użytkowników indywidualnych, premium subskrypcje API dla firm i organizacji medialnych.',
        uk: 'CheckTruth надає автоматизовані інструменти для перевірки фактів та виявлення AI-контенту. Зараз працює: перевірка відео TikTok з транскрипцією аудіо, витяганням тверджень та перевіркою з декількох джерел (підтримка англійської, російської, іспанської, французької, арабської, португальської). В розробці: розширення платформи на Instagram, YouTube, Twitter/X, Facebook; додавання виявлення AI-контенту для відео та зображень; створення корпоративного API для масштабної модерації контенту. Freemium модель: безкоштовні інструменти з рекламою для приватних осіб, преміум API-підписки для бізнесу та медіа-організацій.',
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
        en: 'TikTok verification platform operational since Dec 2024. First large-scale project for 3-person founding team. Core features completed: audio transcription (6 languages), claim identification, multi-source fact-checking. 2025 targets: 25K users, $35-55K revenue (display ads $8-12K + API $27-43K from 3-5 enterprise clients). 2026 targets: 100K users, 15-20 API clients, $450-600K revenue (ads $180-270K + API $270-330K). Projections based on 25% organic user growth, 80% ad fill rate, $2-3 CPM, API pricing $1,500-2,500/mo. Roadmap: Q1-Q3 2025 multi-platform expansion (Instagram, YouTube, Twitter/X, Facebook), Q4 2025 enterprise API beta, 2026 API v1.0 + mobile apps + strategic partnerships. Revenue model: freemium (ad-supported free tools for individuals, premium API for enterprises).',
        ru: 'Платформа проверки TikTok работает с декабря 2024. Первый крупномасштабный проект для команды из 3 основателей. Основные функции завершены: транскрипция аудио (6 языков), выявление утверждений, проверка фактов из нескольких источников. Цели 2025: 25K пользователей, $35-55K выручки (медийная реклама $8-12K + API $27-43K от 3-5 корпоративных клиентов). Цели 2026: 100K пользователей, 15-20 API-клиентов, $450-600K выручки (реклама $180-270K + API $270-330K). Прогнозы основаны на 25% органическом росте, 80% заполнении рекламы, $2-3 CPM, ценообразовании API $1,500-2,500/мес. Дорожная карта: Q1-Q3 2025 мультиплатформенная экспансия (Instagram, YouTube, Twitter/X, Facebook), Q4 2025 бета корпоративного API, 2026 API v1.0 + мобильные приложения + стратегические партнерства. Модель дохода: freemium (бесплатные инструменты с рекламой для частных лиц, премиум API для предприятий).',
        be: 'Платформа праверкі TikTok працуе з снежня 2024. Першы маштабны праект для каманды з 3 заснавальнікаў. Асноўныя функцыі завершаны: транскрыпцыя аўдыё (6 моў), выяўленне сцвярджэнняў, праверка фактаў з некалькіх крыніц. Мэты 2025: 25K карыстальнікаў, $35-55K выручкі (медыйная рэклама $8-12K + API $27-43K ад 3-5 карпаратыўных кліентаў). Мэты 2026: 100K карыстальнікаў, 15-20 API-кліентаў, $450-600K выручкі (рэклама $180-270K + API $270-330K). Прагнозы заснаваны на 25% арганічным росце, 80% запаўненні рэкламы, $2-3 CPM, цэнаўтварэнні API $1,500-2,500/мес. Дарожная карта: Q1-Q3 2025 мультыплатформенная экспансія (Instagram, YouTube, Twitter/X, Facebook), Q4 2025 бета карпаратыўнага API, 2026 API v1.0 + мабільныя прыкладанні + стратэгічныя партнёрствы. Мадэль даходу: freemium (бясплатныя інструменты з рэкламай для прыватных асоб, прэміум API для прадпрыемстваў).',
        pl: 'Platforma weryfikacji TikTok działa od grudnia 2024 r. Pierwszy projekt na dużą skalę dla 3-osobowego zespołu założycielskiego. Podstawowe funkcje ukończone: transkrypcja audio (6 języków), identyfikacja twierdzeń, sprawdzanie faktów z wielu źródeł. Cele 2025: 25K użytkowników, $35-55K przychodów (reklamy displayowe $8-12K + API $27-43K od 3-5 klientów korporacyjnych). Cele 2026: 100K użytkowników, 15-20 klientów API, $450-600K przychodów (reklamy $180-270K + API $270-330K). Prognozy oparte na 25% organicznym wzroście, 80% zapełnieniu reklam, $2-3 CPM, cenie API $1,500-2,500/mies. Plan działania: Q1-Q3 2025 ekspansja wieloplatformowa (Instagram, YouTube, Twitter/X, Facebook), Q4 2025 beta API dla firm, 2026 API v1.0 + aplikacje mobilne + partnerstwa strategiczne. Model przychodów: freemium (darmowe narzędzia z reklamami dla użytkowników indywidualnych, premium API dla firm).',
        uk: 'Платформа перевірки TikTok працює з грудня 2024. Перший великомасштабний проект для команди з 3 засновників. Основні функції завершено: транскрипція аудіо (6 мов), виявлення тверджень, перевірка фактів з декількох джерел. Цілі 2025: 25K користувачів, $35-55K виручки (медійна реклама $8-12K + API $27-43K від 3-5 корпоративних клієнтів). Цілі 2026: 100K користувачів, 15-20 API-клієнтів, $450-600K виручки (реклама $180-270K + API $270-330K). Прогнози засновані на 25% органічному зростанні, 80% заповненні реклами, $2-3 CPM, ціноутворенні API $1,500-2,500/міс. Дорожня карта: Q1-Q3 2025 мультиплатформена експансія (Instagram, YouTube, Twitter/X, Facebook), Q4 2025 бета корпоративного API, 2026 API v1.0 + мобільні застосунки + стратегічні партнерства. Модель доходу: freemium (безкоштовні інструменти з рекламою для приватних осіб, преміум API для підприємств).',
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
    updatedAt: '2025-10-08T00:00:00Z',
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
      en: 'Revolutionary AI-powered platform that transforms recipe discovery into instant shopping experiences. Extract recipes from any source (websites, YouTube, TikTok, Instagram), get automatic ingredient matching with local suppliers, and enjoy seamless meal planning with one-click grocery delivery from Polish retailers like Lisek, Uber Eats, and Bolt Food.',
      ru: 'Революционная AI-платформа, превращающая поиск рецептов в мгновенный шопинг-опыт. Извлекайте рецепты из любых источников (сайты, YouTube, TikTok, Instagram), получайте автоматическое сопоставление ингредиентов с местными поставщиками и наслаждайтесь планированием меню с доставкой продуктов в один клик от польских ритейлеров Lisek, Uber Eats и Bolt Food.',
      be: 'Рэвалюцыйная AI-платформа, якаяператварае пошук рэцэптаў у імгненны шопінг-вопыт. Здабывайце рэцэпты з любых крыніц (сайты, YouTube, TikTok, Instagram), атрымлівайце аўтаматычнае супастаўленне інгрэдыентаў з мясцовымі пастаўшчыкамі і атрымлівайце задавальненне ад планавання меню з дастаўкай прадуктаў у адзін клік ад польскіх рытэйлераў Lisek, Uber Eats і Bolt Food.',
      pl: 'Rewolucyjna platforma AI, która przekształca odkrywanie przepisów w natychmiastowe doświadczenie zakupowe. Wyodrębniaj przepisy z dowolnego źródła (strony internetowe, YouTube, TikTok, Instagram), uzyskuj automatyczne dopasowanie składników do lokalnych dostawców i ciesz się planowaniem posiłków z dostawą produktów spożywczych jednym kliknięciem od polskich detalistów Lisek, Uber Eats i Bolt Food.',
      uk: 'Революційна AI-платформа, яка перетворює пошук рецептів на миттєвий шопінг-досвід. Витягуйте рецепти з будь-яких джерел (сайти, YouTube, TikTok, Instagram), отримуйте автоматичне зіставлення інгредієнтів з місцевими постачальниками та насолоджуйтеся плануванням меню з доставкою продуктів в один клік від польських ритейлерів Lisek, Uber Eats та Bolt Food.',
    },
    shortDescription: {
      en: 'AI-powered recipe extraction and grocery shopping platform',
      ru: 'AI-платформа для извлечения рецептов и покупки продуктов',
      be: 'AI-платформа для здабычы рэцэптаў і пакупкі прадуктаў',
      pl: 'Platforma AI do wyodrębniania przepisów i zakupów spożywczych',
      uk: 'AI-платформа для витягування рецептів та покупки продуктів',
    },
    techStack: ['ASP.NET Core 9', 'Next.js 14', 'Azure OpenAI', 'PostgreSQL 16', 'Redis', 'Docker', 'TypeScript', 'Dapper'],
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
      github: 'https://github.com/pink-black-team/foodreceipts',
      demo: 'https://foodreceipts.pink-black-team.com',
    },
    investment: {
      problem: {
        en: 'Meal planning is a $12B problem. People spend 5+ hours weekly planning meals, searching recipes, comparing prices across stores, and creating shopping lists. 68% of consumers abandon recipes due to ingredient availability issues. The disconnect between recipe discovery and grocery shopping costs families $2,400 annually in food waste and inefficient purchases.',
        ru: 'Планирование питания - проблема на $12 млрд. Люди тратят 5+ часов в неделю на планирование меню, поиск рецептов, сравнение цен в магазинах и создание списков покупок. 68% потребителей отказываются от рецептов из-за недоступности ингредиентов. Разрыв между поиском рецептов и покупкой продуктов обходится семьям в $2,400 ежегодно в виде пищевых отходов и неэффективных покупок.',
        be: 'Планаванне харчавання - праблема на $12 млрд. Людзі траціць 5+ гадзін у тыдзень на планаванне меню, пошук рэцэптаў, параўнанне цэн у краамах і стварэнне спісаў пакупак. 68% спажыўцоў адмаўляюцца ад рэцэптаў з-за недаступнасці інгрэдыентаў. Разрыў паміж пошукам рэцэптаў і пакупкай прадуктаў каштуе сем\'ям $2,400 штогод у выглядзе харчовых адходаў і неэфектыўных пакупак.',
        pl: 'Planowanie posiłków to problem wartości 12 miliardów dolarów. Ludzie spędzają ponad 5 godzin tygodniowo na planowaniu posiłków, wyszukiwaniu przepisów, porównywaniu cen w sklepach i tworzeniu list zakupów. 68% konsumentów rezygnuje z przepisów ze względu na problemy z dostępnością składników. Rozdźwięk między odkrywaniem przepisów a zakupami spożywczymi kosztuje rodziny 2400 USD rocznie w postaci marnowania żywności i nieefektywnych zakupów.',
        uk: 'Планування харчування - проблема на $12 млрд. Люди витрачають 5+ годин на тиждень на планування меню, пошук рецептів, порівняння цін у магазинах та створення списків покупок. 68% споживачів відмовляються від рецептів через недоступність інгредієнтів. Розрив між пошуком рецептів і покупкою продуктів коштує сім\'ям $2,400 щорічно у вигляді харчових відходів та неефективних покупок.',
      },
      solution: {
        en: 'FoodReceipts is an early-stage MVP platform that aims to simplify meal planning with AI automation. Our core technology extracts recipes from various sources using Azure OpenAI and matches ingredients to products. We plan to integrate with Polish grocery delivery services (Lisek, Uber Eats, Bolt Food) and expand globally. Currently focused on validating product-market fit with initial users and refining our AI accuracy.',
        ru: 'FoodReceipts - это MVP-платформа на ранней стадии, которая стремится упростить планирование меню с помощью AI-автоматизации. Наша основная технология извлекает рецепты из различных источников, используя Azure OpenAI, и сопоставляет ингредиенты с продуктами. Мы планируем интеграцию с польскими сервисами доставки продуктов (Lisek, Uber Eats, Bolt Food) и глобальное расширение. В настоящее время фокусируемся на проверке соответствия продукта рынку с первыми пользователями и улучшении точности AI.',
        be: 'FoodReceipts - гэта MVP-платформа на ранняй стадыі, якая імкнецца спрасціць планаванне меню з дапамогай AI-аўтаматызацыі. Наша асноўная тэхналогія здабывае рэцэпты з розных крыніц, выкарыстоўваючы Azure OpenAI, і супастаўляе інгрэдыенты з прадуктамі. Мы плануем інтэграцыю з польскімі сэрвісамі дастаўкі прадуктаў (Lisek, Uber Eats, Bolt Food) і глабальнае пашырэнне. У цяперашні час фокусуемся на праверцы адпаведнасці прадукту рынку з першымі карыстальнікамі і паляпшэнні дакладнасці AI.',
        pl: 'FoodReceipts to wczesna platforma MVP, która ma na celu uproszczenie planowania posiłków za pomocą automatyzacji AI. Nasza podstawowa technologia wyodrębnia przepisy z różnych źródeł za pomocą Azure OpenAI i dopasowuje składniki do produktów. Planujemy integrację z polskimi usługami dostawy spożywczej (Lisek, Uber Eats, Bolt Food) i globalną ekspansję. Obecnie koncentrujemy się na walidacji dopasowania produktu do rynku z pierwszymi użytkownikami i doskonaleniu dokładności AI.',
        uk: 'FoodReceipts - це MVP-платформа на ранній стадії, яка прагне спростити планування меню за допомогою AI-автоматизації. Наша основна технологія витягує рецепти з різних джерел, використовуючи Azure OpenAI, і зіставляє інгредієнти з продуктами. Ми плануємо інтеграцію з польськими сервісами доставки продуктів (Lisek, Uber Eats, Bolt Food) і глобальне розширення. Наразі фокусуємося на перевірці відповідності продукту ринку з першими користувачами та покращенні точності AI.',
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
        en: 'MVP in active development by 3-person founding team. First large-scale project for the team. Core AI recipe extraction functionality completed. Planning integrations with Lisek, Uber Eats Poland, and Bolt Food (negotiations not started). Projected timeline: Q1 2025 beta launch with 50-100 early adopters, Q2-Q3 2025 product refinement (target 300-500 users), Q4 2025 Polish market expansion (target 1,000-2,000 users). Year 2-3: Scale to 5,000-15,000 users across Poland and Central Europe with minimal marketing spend. Long-term vision: Global expansion to major markets.',
        ru: 'MVP в активной разработке командой из 3 основателей. Первый крупномасштабный проект для команды. Основной функционал AI-извлечения рецептов завершен. Планируются интеграции с Lisek, Uber Eats Poland и Bolt Food (переговоры не начаты). Планируемый график: Q1 2025 бета-запуск с 50-100 ранними пользователями, Q2-Q3 2025 доработка продукта (цель 300-500 пользователей), Q4 2025 расширение на польском рынке (цель 1,000-2,000 пользователей). Год 2-3: Масштабирование до 5,000-15,000 пользователей в Польше и Центральной Европе с минимальными маркетинговыми затратами. Долгосрочная цель: Глобальная экспансия на основные рынки.',
        be: 'MVP у актыўнай распрацоўцы камандай з 3 заснавальнікаў. Першы маштабны праект для каманды. Асноўны функцыянал AI-здабычы рэцэптаў завершаны. Плануюцца інтэграцыі з Lisek, Uber Eats Poland і Bolt Food (перамовы не пачаты). Планаваны графік: Q1 2025 бета-запуск з 50-100 ранімі карыстальнікамі, Q2-Q3 2025 дапрацоўка прадукту (мэта 300-500 карыстальнікаў), Q4 2025 пашырэнне на польскім рынку (мэта 1,000-2,000 карыстальнікаў). Год 2-3: Маштабаванне да 5,000-15,000 карыстальнікаў у Польшчы і Цэнтральнай Еўропе з мінімальнымі маркетынгавымі выдаткамі. Доўгатэрміновая мэта: Глабальная экспансія на асноўныя рынкі.',
        pl: 'MVP w aktywnym rozwoju przez 3-osobowy zespół założycielski. Pierwszy projekt na dużą skalę dla zespołu. Podstawowa funkcjonalność AI do wyodrębniania przepisów ukończona. Planowane integracje z Lisek, Uber Eats Poland i Bolt Food (negocjacje nierozpoczęte). Przewidywany harmonogram: Q1 2025 uruchomienie beta z 50-100 wczesnymi użytkownikami, Q2-Q3 2025 udoskonalenie produktu (cel 300-500 użytkowników), Q4 2025 ekspansja na rynku polskim (cel 1,000-2,000 użytkowników). Rok 2-3: Skalowanie do 5,000-15,000 użytkowników w Polsce i Europie Środkowej przy minimalnych wydatkach marketingowych. Długoterminowa wizja: Globalna ekspansja na główne rynki.',
        uk: 'MVP в активній розробці командою з 3 засновників. Перший великомасштабний проект для команди. Основний функціонал AI-витягування рецептів завершено. Плануються інтеграції з Lisek, Uber Eats Poland та Bolt Food (переговори не розпочато). Плановий графік: Q1 2025 бета-запуск з 50-100 ранніми користувачами, Q2-Q3 2025 доопрацювання продукту (мета 300-500 користувачів), Q4 2025 розширення на польському ринку (мета 1,000-2,000 користувачів). Рік 2-3: Масштабування до 5,000-15,000 користувачів у Польщі та Центральній Європі з мінімальними маркетинговими витратами. Довгострокова мета: Глобальна експансія на основні ринки.',
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
    updatedAt: '2025-10-07T00:00:00Z',
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
