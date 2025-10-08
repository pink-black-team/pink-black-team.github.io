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
      en: 'AI-powered astrology and tarot reading platform delivering personalized divination services at scale. Currently operational in Polish market with 4 core services: love horoscopes, annual tarot readings, partner compatibility analysis, and natal chart interpretations. Uses GPT-based AI to automate traditional astrological interpretations, enabling unlimited scalability without human astrologers. Revenue model: paid digital readings with 70-85% profit margins. Expanding to Russian, English, Ukrainian, and Belarusian markets. Future: mobile apps, subscription model, and white-label API for astrology businesses.',
      ru: 'AI-платформа астрологии и таро, предоставляющая персонализированные услуги гаданий в масштабе. В настоящее время работает на польском рынке с 4 основными услугами: любовные гороскопы, годовые таро-чтения, анализ совместимости партнеров и интерпретации натальных карт. Использует AI на базе GPT для автоматизации традиционных астрологических интерпретаций, обеспечивая неограниченную масштабируемость без астрологов-людей. Модель дохода: платные цифровые чтения с маржой 70-85%. Расширение на русский, английский, украинский и белорусский рынки. Будущее: мобильные приложения, модель подписки и white-label API для астрологических бизнесов.',
      be: 'AI-платформа астралогіі і тара, якая прадастаўляе персаналізаваныя паслугі варажбы ў маштабе. У цяперашні час працуе на польскім рынку з 4 асноўнымі паслугамі: каханыя гараскопы, гадавыя тара-чытанні, аналіз сумяшчальнасці партнёраў і інтэрпрэтацыі натальных карт. Выкарыстоўвае AI на базе GPT для аўтаматызацыі традыцыйных астралагічных інтэрпрэтацый, забяспечваючы неабмежаваную маштабаванасць без астролагаў-людзей. Мадэль даходу: платныя лічбавыя чытанні з маржой 70-85%. Пашырэнне на рускі, англійскі, украінскі і беларускі рынкі. Будучыня: мабільныя прыкладанні, мадэль падпіскі і white-label API для астралагічных бізнесаў.',
      pl: 'Platforma astrologii i tarota oparta na AI, dostarczająca spersonalizowane usługi wróżbiarskie na skalę. Obecnie działa na rynku polskim z 4 podstawowymi usługami: horoskopy miłosne, roczne czytanie tarota, analiza kompatybilności partnerów i interpretacje kart urodzenia. Wykorzystuje AI oparty na GPT do automatyzacji tradycyjnych interpretacji astrologicznych, umożliwiając nieograniczoną skalowalność bez ludzkich astrologów. Model przychodów: płatne cyfrowe czytania z marżą 70-85%. Rozszerzenie na rynki rosyjski, angielski, ukraiński i białoruski. Przyszłość: aplikacje mobilne, model subskrypcyjny i white-label API dla firm astrologicznych.',
      uk: 'AI-платформа астрології та таро, що надає персоналізовані послуги ворожіння в масштабі. Наразі працює на польському ринку з 4 основними послугами: любовні гороскопи, річні таро-читання, аналіз сумісності партнерів та інтерпретації натальних карт. Використовує AI на базі GPT для автоматизації традиційних астрологічних інтерпретацій, забезпечуючи необмежену масштабованість без астрологів-людей. Модель доходу: платні цифрові читання з маржею 70-85%. Розширення на російський, англійський, український та білоруський ринки. Майбутнє: мобільні застосунки, модель підписки та white-label API для астрологічних бізнесів.',
    },
    shortDescription: {
      en: 'AI-powered astrology and tarot platform with automated personalized readings',
      ru: 'AI-платформа астрологии и таро с автоматизированными персональными чтениями',
      be: 'AI-платформа астралогіі і тара з аўтаматызаванымі персанальнымі чытаннямі',
      pl: 'Platforma astrologii i tarota AI z automatycznymi spersonalizowanymi czytaniami',
      uk: 'AI-платформа астрології та таро з автоматизованими персональними читаннями',
    },
    techStack: ['Next.js 14', 'OpenAI GPT-4', 'TypeScript', 'PostgreSQL', 'Stripe', 'Google Analytics', 'Facebook Pixel'],
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
        en: 'The $12B global astrology market is dominated by generic horoscopes and expensive human astrologers ($100-300/session). 40% of adults read horoscopes regularly, but personalized readings are inaccessible due to cost and availability. Traditional astrologers cannot scale - limited to 5-10 clients daily. Polish market (38M population + 10M diaspora) lacks affordable, high-quality personalized astrology services. Customers want instant, private, affordable readings without judgment or scheduling hassles.',
        ru: 'Мировой рынок астрологии в $12 млрд доминируют общие гороскопы и дорогие астрологи-люди ($100-300/сеанс). 40% взрослых регулярно читают гороскопы, но персонализированные чтения недоступны из-за стоимости и доступности. Традиционные астрологи не масштабируются - ограничены 5-10 клиентами в день. Польский рынок (38М население + 10М диаспора) испытывает недостаток доступных качественных персонализированных астрологических услуг. Клиенты хотят мгновенные, приватные, доступные чтения без осуждения и проблем с расписанием.',
        be: 'Сусветны рынак астралогіі ў $12 млрд дамінуюць агульныя гараскопы і дарагія астролагі-людзі ($100-300/сеанс). 40% дарослых рэгулярна чытаюць гараскопы, але персаналізаваныя чытанні недаступныя з-за кошту і даступнасці. Традыцыйныя астролагі не маштабуюцца - абмежаваныя 5-10 кліентамі на дзень. Польскі рынак (38М насельніцтва + 10М дыяспара) адчувае недахоп даступных якасных персаналізаваных астралагічных паслуг. Кліенты хочуць імгненныя, прыватныя, даступныя чытанні без асуджэння і праблем з раскладам.',
        pl: 'Globalny rynek astrologii o wartości 12 miliardów dolarów jest zdominowany przez ogólne horoskopy i drogich ludzkich astrologów (100-300 USD/sesja). 40% dorosłych regularnie czyta horoskopy, ale spersonalizowane czytania są niedostępne ze względu na koszty i dostępność. Tradycyjni astrolodzy nie skalują się - ograniczeni do 5-10 klientów dziennie. Polski rynek (38 mln populacji + 10 mln diaspory) brakuje przystępnych cenowo, wysokiej jakości spersonalizowanych usług astrologicznych. Klienci chcą natychmiastowych, prywatnych, przystępnych czytań bez oceniania lub problemów z harmonogramem.',
        uk: 'Світовий ринок астрології в $12 млрд домінують загальні гороскопи та дорогі астрологи-люди ($100-300/сеанс). 40% дорослих регулярно читають гороскопи, але персоналізовані читання недоступні через вартість та доступність. Традиційні астрологи не масштабуються - обмежені 5-10 клієнтами на день. Польський ринок (38М населення + 10М діаспора) відчуває нестачу доступних якісних персоналізованих астрологічних послуг. Клієнти хочуть миттєві, приватні, доступні читання без осуду та проблем з розкладом.',
      },
      solution: {
        en: 'Astrologia.guru uses GPT-4 AI to deliver personalized astrology and tarot readings at 1/10th the cost of human astrologers. Currently live with 4 services: love horoscopes, annual tarot, partner compatibility, and natal charts. Average price $12-35 per reading vs. $100-300 for traditional astrologers. Platform operates in Polish, targeting 48M+ Polish speakers globally. AI generates high-quality interpretations in seconds, enabling unlimited scalability. Users provide birth data, receive detailed written analysis via email, can ask follow-up questions. Expanding to Russian, English, Ukrainian, Belarusian markets in 2025-2026. Future: mobile apps, subscription model ($9.99/month unlimited readings), white-label API for astrology businesses.',
        ru: 'Astrologia.guru использует AI GPT-4 для предоставления персонализированных астрологических и таро-чтений в 10 раз дешевле астрологов-людей. В настоящее время работает с 4 услугами: любовные гороскопы, годовое таро, совместимость партнеров и натальные карты. Средняя цена $12-35 за чтение против $100-300 у традиционных астрологов. Платформа работает на польском, ориентируясь на 48М+ польскоязычных глобально. AI генерирует высококачественные интерпретации за секунды, обеспечивая неограниченную масштабируемость. Пользователи предоставляют данные о рождении, получают детальный письменный анализ по email, могут задавать дополнительные вопросы. Расширение на русский, английский, украинский, белорусский рынки в 2025-2026. Будущее: мобильные приложения, модель подписки ($9.99/месяц безлимитные чтения), white-label API для астрологических бизнесов.',
        be: 'Astrologia.guru выкарыстоўвае AI GPT-4 для прадастаўлення персаналізаваных астралагічных і тара-чытанняў у 10 разоў танней за астролагаў-людзей. У цяперашні час працуе з 4 паслугамі: каханыя гараскопы, гадавое тара, сумяшчальнасць партнёраў і натальныя карты. Сярэдняя цана $12-35 за чытанне супраць $100-300 у традыцыйных астролагаў. Платформа працуе на польскай, арыентуючыся на 48М+ польскамоўных глабальна. AI генеруе высакаякасныя інтэрпрэтацыі за секунды, забяспечваючы неабмежаваную маштабаванасць. Карыстальнікі прадастаўляюць дадзеныя аб нараджэнні, атрымліваюць дэталёвы пісьмовы аналіз па email, могуць задаваць дадатковыя пытанні. Пашырэнне на рускі, англійскі, украінскі, беларускі рынкі ў 2025-2026. Будучыня: мабільныя прыкладанні, мадэль падпіскі ($9.99/месяц бязлімітныя чытанні), white-label API для астралагічных бізнесаў.',
        pl: 'Astrologia.guru wykorzystuje AI GPT-4 do dostarczania spersonalizowanych czytań astrologii i tarota za 1/10 ceny ludzkich astrologów. Obecnie działa z 4 usługami: horoskopy miłosne, roczny tarot, kompatybilność partnerów i karty urodzenia. Średnia cena 12-35 USD za czytanie vs. 100-300 USD za tradycyjnych astrologów. Platforma działa po polsku, kierując się do ponad 48 mln osób mówiących po polsku na całym świecie. AI generuje wysokiej jakości interpretacje w sekundach, umożliwiając nieograniczoną skalowalność. Użytkownicy podają dane urodzenia, otrzymują szczegółową pisemną analizę e-mailem, mogą zadawać pytania uzupełniające. Rozszerzenie na rynki rosyjski, angielski, ukraiński, białoruski w latach 2025-2026. Przyszłość: aplikacje mobilne, model subskrypcyjny (9,99 USD/miesiąc nielimitowane czytania), white-label API dla firm astrologicznych.',
        uk: 'Astrologia.guru використовує AI GPT-4 для надання персоналізованих астрологічних та таро-читань у 10 разів дешевше за астрологів-людей. Наразі працює з 4 послугами: любовні гороскопи, річне таро, сумісність партнерів та натальні карти. Середня ціна $12-35 за читання проти $100-300 у традиційних астрологів. Платформа працює польською, орієнтуючись на 48М+ польськомовних глобально. AI генерує високоякісні інтерпретації за секунди, забезпечуючи необмежену масштабованість. Користувачі надають дані про народження, отримують детальний письмовий аналіз електронною поштою, можуть ставити додаткові питання. Розширення на російський, англійський, український, білоруський ринки у 2025-2026. Майбутнє: мобільні застосунки, модель підписки ($9.99/місяць безлімітні читання), white-label API для астрологічних бізнесів.',
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
          value: 'Live (Polish)',
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
            en: 'Profit Margin',
            ru: 'Маржа прибыли',
            be: 'Маржа прыбытку',
            pl: 'Marża zysku',
            uk: 'Маржа прибутку',
          },
          value: '70-85%',
          trend: 'up',
        },
      ],
      traction: {
        en: 'Platform operational since Dec 2024, serving Polish market. First large-scale commercial project for 3-person team. Core AI reading engine completed with 4 service types. Currently validating product-market fit and optimizing conversion funnel. 2025 targets: 2,400-6,000 paying customers, $48K-$120K revenue (avg. $20/reading). 2026 targets: 12,000-24,000 customers, $240K-$480K revenue with multi-language expansion. Projections based on 3-5% conversion from blog traffic, $15-25 customer acquisition cost via Facebook/TikTok ads, 10-15% repeat purchase rate. Roadmap: Q1-Q2 2025 marketing scale-up + SEO, Q3-Q4 2025 mobile apps + subscription model, 2026 expansion to RU/EN/UK/BE markets, 2027 white-label API platform. Revenue model: paid one-time readings + future subscription ($9.99/mo) + API licensing.',
        ru: 'Платформа работает с декабря 2024, обслуживает польский рынок. Первый крупномасштабный коммерческий проект для команды из 3 человек. Основной AI-движок чтения завершен с 4 типами услуг. В настоящее время проверяется соответствие продукта рынку и оптимизация воронки конверсии. Цели 2025: 2,400-6,000 платящих клиентов, $48K-$120K выручки (средний $20/чтение). Цели 2026: 12,000-24,000 клиентов, $240K-$480K выручки с многоязычным расширением. Прогнозы основаны на 3-5% конверсии из трафика блога, $15-25 стоимости привлечения клиента через Facebook/TikTok рекламу, 10-15% повторных покупок. Дорожная карта: Q1-Q2 2025 масштабирование маркетинга + SEO, Q3-Q4 2025 мобильные приложения + модель подписки, 2026 расширение на RU/EN/UK/BE рынки, 2027 white-label API платформа. Модель дохода: платные разовые чтения + будущая подписка ($9.99/мес) + лицензирование API.',
        be: 'Платформа працуе з снежня 2024, абслугоўвае польскі рынак. Першы маштабны камерцыйны праект для каманды з 3 чалавек. Асноўны AI-рухавік чытання завершаны з 4 тыпамі паслуг. У цяперашні час правяраецца адпаведнасць прадукту рынку і аптымізацыя варонкі канверсіі. Мэты 2025: 2,400-6,000 плацяжных кліентаў, $48K-$120K выручкі (сярэдні $20/чытанне). Мэты 2026: 12,000-24,000 кліентаў, $240K-$480K выручкі з шматмоўным пашырэннем. Прагнозы заснаваны на 3-5% канверсіі з трафіку блога, $15-25 кошту прыцягнення кліента праз Facebook/TikTok рэкламу, 10-15% паўторных пакупак. Дарожная карта: Q1-Q2 2025 маштабаванне маркетынгу + SEO, Q3-Q4 2025 мабільныя прыкладанні + мадэль падпіскі, 2026 пашырэнне на RU/EN/UK/BE рынкі, 2027 white-label API платформа. Мадэль даходу: платныя разовыя чытанні + будучая падпіска ($9.99/мес) + ліцэнзаванне API.',
        pl: 'Platforma działa od grudnia 2024 r., obsługując rynek polski. Pierwszy projekt komercyjny na dużą skalę dla 3-osobowego zespołu. Podstawowy silnik czytania AI ukończony z 4 typami usług. Obecnie weryfikacja dopasowania produktu do rynku i optymalizacja lejka konwersji. Cele 2025: 2,400-6,000 płacących klientów, 48-120 tys. USD przychodów (średnio 20 USD/czytanie). Cele 2026: 12,000-24,000 klientów, 240-480 tys. USD przychodów z rozszerzeniem wielojęzycznym. Prognozy oparte na 3-5% konwersji z ruchu na blogu, 15-25 USD kosztów pozyskania klienta za pośrednictwem reklam Facebook/TikTok, 10-15% wskaźniku powtórnych zakupów. Plan działania: Q1-Q2 2025 skalowanie marketingu + SEO, Q3-Q4 2025 aplikacje mobilne + model subskrypcyjny, 2026 ekspansja na rynki RU/EN/UK/BE, 2027 platforma white-label API. Model przychodów: płatne jednorazowe czytania + przyszła subskrypcja (9,99 USD/mies.) + licencjonowanie API.',
        uk: 'Платформа працює з грудня 2024, обслуговує польський ринок. Перший великомасштабний комерційний проект для команди з 3 осіб. Основний AI-двигун читання завершено з 4 типами послуг. Наразі перевіряється відповідність продукту ринку та оптимізація воронки конверсії. Цілі 2025: 2,400-6,000 платних клієнтів, $48K-$120K виручки (середній $20/читання). Цілі 2026: 12,000-24,000 клієнтів, $240K-$480K виручки з багатомовним розширенням. Прогнози засновані на 3-5% конверсії з трафіку блогу, $15-25 вартості залучення клієнта через Facebook/TikTok рекламу, 10-15% повторних покупок. Дорожня карта: Q1-Q2 2025 масштабування маркетингу + SEO, Q3-Q4 2025 мобільні застосунки + модель підписки, 2026 розширення на RU/EN/UK/BE ринки, 2027 white-label API платформа. Модель доходу: платні разові читання + майбутня підписка ($9.99/міс) + ліцензування API.',
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
    updatedAt: '2025-10-08T00:00:00Z',
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
