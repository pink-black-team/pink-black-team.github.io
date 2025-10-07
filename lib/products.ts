import { Product, ProductCard } from '@/types/product';

/**
 * List of all products
 */
export const products: Product[] = [
  {
    id: '1',
    slug: 'ai-content-generator',
    title: {
      en: 'AI Content Generator',
      ru: 'AI Генератор Контента',
      be: 'AI Генератар Кантэнту',
      pl: 'AI Generator Treści',
      uk: 'AI Генератор Контенту',
    },
    description: {
      en: 'Advanced AI-powered content generation platform that creates high-quality marketing copy, blog posts, and social media content in seconds. Uses state-of-the-art language models to understand context and generate engaging content.',
      ru: 'Продвинутая платформа для генерации контента на основе AI, которая создает высококачественные маркетинговые тексты, посты для блогов и контент для социальных сетей за секунды. Использует современные языковые модели для понимания контекста и создания увлекательного контента.',
      be: 'Прасунутая платформа для генерацыі кантэнту на аснове AI, якая стварае высакаякасныя маркетынгавыя тэксты, посты для блогаў і кантэнт для сацыяльных сетак за секунды. Выкарыстоўвае сучасныя моўныя мадэлі для разумення кантэксту і стварэння захапляльнага кантэнту.',
      pl: 'Zaawansowana platforma do generowania treści oparta na AI, która tworzy wysokiej jakości teksty marketingowe, posty na blogi i treści do mediów społecznościowych w ciągu kilku sekund. Wykorzystuje najnowocześniejsze modele językowe do zrozumienia kontekstu i generowania angażujących treści.',
      uk: 'Просунута платформа для генерації контенту на основі AI, яка створює високоякісні маркетингові тексти, пости для блогів і контент для соціальних мереж за лічені секунди. Використовує сучасні мовні моделі для розуміння контексту і створення захопливого контенту.',
    },
    shortDescription: {
      en: 'AI-powered content generation platform for marketing and social media',
      ru: 'AI-платформа для генерации маркетингового контента',
      be: 'AI-платформа для генерацыі маркетынгавага кантэнту',
      pl: 'Platforma AI do generowania treści marketingowych',
      uk: 'AI-платформа для генерації маркетингового контенту',
    },
    techStack: ['Next.js', 'TypeScript', 'OpenAI GPT-4', 'PostgreSQL', 'Redis', 'Docker'],
    thumbnail: {
      src: '/images/projects/ai-content-generator/thumbnail.jpg',
      alt: {
        en: 'AI Content Generator Dashboard',
        ru: 'Панель AI Генератора Контента',
        be: 'Панэль AI Генератара Кантэнту',
        pl: 'Panel AI Generator Treści',
        uk: 'Панель AI Генератора Контенту',
      },
      width: 800,
      height: 600,
    },
    links: {
      website: 'https://aicontentgen.example.com',
      demo: 'https://demo.aicontentgen.example.com',
      github: 'https://github.com/pink-black-team/ai-content-generator',
    },
    investment: {
      problem: {
        en: 'Content creation is time-consuming and expensive. Businesses spend 30+ hours per week creating marketing content, costing $50,000+ annually per content creator.',
        ru: 'Создание контента занимает много времени и дорого стоит. Компании тратят 30+ часов в неделю на создание маркетингового контента, что обходится в $50,000+ ежегодно на одного создателя контента.',
        be: 'Стварэнне кантэнту займае шмат часу і дорага каштуе. Кампаніі траціць 30+ гадзін у тыдзень на стварэнне маркетынгавага кантэнту, што каштуе $50,000+ штогод на аднаго стваральніка кантэнту.',
        pl: 'Tworzenie treści jest czasochłonne i kosztowne. Firmy spędzają ponad 30 godzin tygodniowo na tworzeniu treści marketingowych, co kosztuje ponad 50 000 USD rocznie na jednego twórcę treści.',
        uk: 'Створення контенту займає багато часу і коштує дорого. Компанії витрачають 30+ годин на тиждень на створення маркетингового контенту, що коштує $50,000+ щорічно на одного створювача контенту.',
      },
      solution: {
        en: 'Our AI platform reduces content creation time by 80% and costs by 70%, while maintaining high quality. Generate blog posts, ads, and social media content in minutes instead of hours.',
        ru: 'Наша AI-платформа сокращает время создания контента на 80% и затраты на 70%, сохраняя высокое качество. Создавайте посты для блогов, рекламу и контент для социальных сетей за минуты, а не часы.',
        be: 'Наша AI-платформа скарачае час стварэння кантэнту на 80% і выдаткі на 70%, захоўваючы высокую якасць. Ствараеце посты для блогаў, рэкламу і кантэнт для сацыяльных сетак за хвіліны, а не гадзіны.',
        pl: 'Nasza platforma AI skraca czas tworzenia treści o 80% i koszty o 70%, zachowując wysoką jakość. Generuj posty na bloga, reklamy i treści do mediów społecznościowych w ciągu minut zamiast godzin.',
        uk: 'Наша AI-платформа скорочує час створення контенту на 80% і витрати на 70%, зберігаючи високу якість. Створюйте пости для блогів, рекламу і контент для соціальних мереж за хвилини, а не години.',
      },
      metrics: [
        {
          key: {
            en: 'Active Users',
            ru: 'Активных пользователей',
            be: 'Актыўных карыстальнікаў',
            pl: 'Aktywni użytkownicy',
            uk: 'Активних користувачів',
          },
          value: '15,000+',
          trend: 'up',
        },
        {
          key: {
            en: 'Monthly Recurring Revenue',
            ru: 'Ежемесячный доход',
            be: 'Штомесячны даход',
            pl: 'Miesięczny przychód',
            uk: 'Щомісячний дохід',
          },
          value: '$120,000',
          trend: 'up',
        },
        {
          key: {
            en: 'Content Generated',
            ru: 'Контента создано',
            be: 'Кантэнту створана',
            pl: 'Utworzone treści',
            uk: 'Контенту створено',
          },
          value: '2M+',
          trend: 'up',
        },
      ],
      traction: {
        en: 'Growing 40% MoM. Featured in TechCrunch. 1,000+ enterprise clients including Fortune 500 companies. 95% user retention rate.',
        ru: 'Рост 40% месяц к месяцу. Упомянуты в TechCrunch. 1,000+ корпоративных клиентов, включая компании Fortune 500. 95% удержание пользователей.',
        be: 'Рост 40% месяц да месяца. Згаданы ў TechCrunch. 1,000+ карпаратыўных кліентаў, уключаючы кампаніі Fortune 500. 95% утрыманне карыстальнікаў.',
        pl: 'Wzrost 40% MoM. Wymienione w TechCrunch. Ponad 1000 klientów korporacyjnych, w tym firmy z listy Fortune 500. 95% wskaźnik utrzymania użytkowników.',
        uk: 'Зростання 40% місяць до місяця. Згадано в TechCrunch. 1,000+ корпоративних клієнтів, включаючи компанії Fortune 500. 95% утримання користувачів.',
      },
      request: {
        round: {
          en: 'Seed Round',
          ru: 'Посевной раунд',
          be: 'Пасяўны раўнд',
          pl: 'Runda Seed',
          uk: 'Посівний раунд',
        },
        amount: {
          en: '$2M',
          ru: '$2M',
          be: '$2M',
          pl: '$2M',
          uk: '$2M',
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
    publishedAt: '2024-01-15T00:00:00Z',
    updatedAt: '2025-10-01T00:00:00Z',
  },
  {
    id: '2',
    slug: 'smart-analytics-platform',
    title: {
      en: 'Smart Analytics Platform',
      ru: 'Платформа Умной Аналитики',
      be: 'Платформа Разумнай Аналітыкі',
      pl: 'Platforma Inteligentnej Analityki',
      uk: 'Платформа Розумної Аналітики',
    },
    description: {
      en: 'Real-time business intelligence platform powered by machine learning. Automatically discovers insights, predicts trends, and provides actionable recommendations for data-driven decision making.',
      ru: 'Платформа бизнес-аналитики реального времени на основе машинного обучения. Автоматически находит инсайты, прогнозирует тренды и предоставляет практические рекомендации для принятия решений на основе данных.',
      be: 'Платформа бізнес-аналітыкі рэальнага часу на аснове машыннага навучання. Аўтаматычна знаходзіць інсайты, прагназуе трэнды і дае практычныя рэкамендацыі для прыняцця рашэнняў на аснове дадзеных.',
      pl: 'Platforma analizy biznesowej w czasie rzeczywistym oparta na uczeniu maszynowym. Automatycznie odkrywa spostrzeżenia, przewiduje trendy i dostarcza praktyczne zalecenia do podejmowania decyzji opartych na danych.',
      uk: 'Платформа бізнес-аналітики реального часу на основі машинного навчання. Автоматично знаходить інсайти, прогнозує тренди і надає практичні рекомендації для прийняття рішень на основі даних.',
    },
    shortDescription: {
      en: 'ML-powered business intelligence and predictive analytics',
      ru: 'Бизнес-аналитика с ML и прогнозированием',
      be: 'Бізнес-аналітыка з ML і прагназаваннем',
      pl: 'Analiza biznesowa z ML i prognozowaniem',
      uk: 'Бізнес-аналітика з ML і прогнозуванням',
    },
    techStack: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'Apache Kafka', 'Kubernetes'],
    thumbnail: {
      src: '/images/projects/smart-analytics/thumbnail.jpg',
      alt: {
        en: 'Smart Analytics Dashboard',
        ru: 'Панель Умной Аналитики',
        be: 'Панэль Разумнай Аналітыкі',
        pl: 'Panel Inteligentnej Analityki',
        uk: 'Панель Розумної Аналітики',
      },
      width: 800,
      height: 600,
    },
    links: {
      website: 'https://smartanalytics.example.com',
      demo: 'https://demo.smartanalytics.example.com',
    },
    investment: {
      problem: {
        en: 'Companies have vast amounts of data but lack the tools and expertise to extract actionable insights. 80% of business data goes unused, resulting in missed opportunities worth millions.',
        ru: 'Компании имеют огромные объемы данных, но не имеют инструментов и экспертизы для извлечения практических инсайтов. 80% бизнес-данных не используются, что приводит к упущенным возможностям стоимостью в миллионы.',
        be: 'Кампаніі маюць вялікія аб\'ёмы дадзеных, але не маюць інструментаў і экспертызы для атрымання практычных інсайтаў. 80% бізнес-дадзеных не выкарыстоўваюцца, што прыводзіць да страчаных магчымасцей кошту ў мільёны.',
        pl: 'Firmy dysponują ogromnymi ilościami danych, ale brakuje im narzędzi i wiedzy do wydobycia praktycznych spostrzeżeń. 80% danych biznesowych pozostaje niewykorzystanych, co skutkuje straconymi możliwościami wartymi miliony.',
        uk: 'Компанії мають величезні обсяги даних, але не мають інструментів та експертизи для отримання практичних інсайтів. 80% бізнес-даних не використовуються, що призводить до втрачених можливостей вартістю в мільйони.',
      },
      solution: {
        en: 'Our platform democratizes data analysis with AI-powered insights that anyone can understand. No data science degree required. Get predictions, anomaly detection, and recommendations automatically.',
        ru: 'Наша платформа демократизирует анализ данных с AI-инсайтами, понятными каждому. Не требуется степень в области Data Science. Получайте прогнозы, обнаружение аномалий и рекомендации автоматически.',
        be: 'Наша платформа дэмакратызуе аналіз дадзеных з AI-інсайтамі, зразумелымі кожнаму. Не патрабуецца ступень у галіне Data Science. Атрымлівайце прагнозы, выяўленне анамалій і рэкамендацыі аўтаматычна.',
        pl: 'Nasza platforma demokratyzuje analizę danych dzięki spostrzeżeniom AI, które każdy może zrozumieć. Nie jest wymagany stopień z zakresu Data Science. Otrzymuj prognozy, wykrywanie anomalii i zalecenia automatycznie.',
        uk: 'Наша платформа демократизує аналіз даних з AI-інсайтами, зрозумілими кожному. Не потрібен ступінь в галузі Data Science. Отримуйте прогнози, виявлення аномалій та рекомендації автоматично.',
      },
      metrics: [
        {
          key: {
            en: 'Enterprise Clients',
            ru: 'Корпоративных клиентов',
            be: 'Карпаратыўных кліентаў',
            pl: 'Klienci korporacyjni',
            uk: 'Корпоративних клієнтів',
          },
          value: '200+',
          trend: 'up',
        },
        {
          key: {
            en: 'Annual Revenue',
            ru: 'Годовой доход',
            be: 'Гадавы даход',
            pl: 'Roczny przychód',
            uk: 'Річний дохід',
          },
          value: '$3.5M',
          trend: 'up',
        },
      ],
      traction: {
        en: 'Signed partnerships with 3 Fortune 500 companies. 60% YoY growth. Featured in Forbes AI 50.',
        ru: 'Подписаны партнерства с 3 компаниями Fortune 500. Рост 60% год к году. Упомянуты в Forbes AI 50.',
        be: 'Падпісаны партнёрствы з 3 кампаніямі Fortune 500. Рост 60% год да году. Згаданы ў Forbes AI 50.',
        pl: 'Podpisano partnerstwa z 3 firmami z listy Fortune 500. Wzrost 60% rok do roku. Wymienione w Forbes AI 50.',
        uk: 'Підписано партнерства з 3 компаніями Fortune 500. Зростання 60% рік до року. Згадано в Forbes AI 50.',
      },
      request: {
        round: {
          en: 'Series A',
          ru: 'Раунд A',
          be: 'Раўнд A',
          pl: 'Seria A',
          uk: 'Раунд A',
        },
        amount: {
          en: '$5M',
          ru: '$5M',
          be: '$5M',
          pl: '$5M',
          uk: '$5M',
        },
      },
      contact: {
        email: 'invest@pink-black-team.com',
        telegram: '@pinkblackteam',
      },
    },
    status: 'active',
    featured: true,
    publishedAt: '2024-03-20T00:00:00Z',
    updatedAt: '2025-10-05T00:00:00Z',
  },
  {
    id: '3',
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
        en: 'FoodReceipts eliminates friction with AI-powered automation: extract recipes from ANY source in seconds using Azure OpenAI, automatically match ingredients to 50,000+ products from local suppliers with 95% accuracy, plan weekly menus with budget optimization, and checkout instantly through integrated delivery partners. Users save 90% of planning time and reduce food waste by 40%.',
        ru: 'FoodReceipts устраняет трение с помощью AI-автоматизации: извлекайте рецепты из ЛЮБОГО источника за секунды используя Azure OpenAI, автоматически сопоставляйте ингредиенты с 50,000+ продуктами от местных поставщиков с точностью 95%, планируйте недельное меню с оптимизацией бюджета и мгновенно оформляйте заказ через интегрированных партнеров по доставке. Пользователи экономят 90% времени планирования и сокращают пищевые отходы на 40%.',
        be: 'FoodReceipts ліквідуе трэнне з дапамогай AI-аўтаматызацыі: здабывайце рэцэпты з ЛЮБОЙ крыніцы за секунды выкарыстоўваючы Azure OpenAI, аўтаматычна супастаўляйце інгрэдыенты з 50,000+ прадуктамі ад мясцовых пастаўшчыкаў з дакладнасцю 95%, планіруйце тыднёвае меню з аптымізацыяй бюджэту і імгненна афармляйце заказ праз інтэграваных партнёраў па дастаўцы. Карыстальнікі эканоміць 90% часу планавання і скарачаюць харчовыя адходы на 40%.',
        pl: 'FoodReceipts eliminuje tarcia dzięki automatyzacji AI: wyodrębniaj przepisy z DOWOLNEGO źródła w ciągu kilku sekund za pomocą Azure OpenAI, automatycznie dopasowuj składniki do ponad 50 000 produktów od lokalnych dostawców z dokładnością 95%, planuj tygodniowe menu z optymalizacją budżetu i natychmiast finalizuj zakupy za pośrednictwem zintegrowanych partnerów dostawczych. Użytkownicy oszczędzają 90% czasu planowania i redukują marnotrawstwo żywności o 40%.',
        uk: 'FoodReceipts усуває тертя за допомогою AI-автоматизації: витягуйте рецепти з БУДЬ-ЯКОГО джерела за секунди використовуючи Azure OpenAI, автоматично зіставляйте інгредієнти з 50,000+ продуктами від місцевих постачальників з точністю 95%, плануйте тижневе меню з оптимізацією бюджету та миттєво оформляйте замовлення через інтегрованих партнерів з доставки. Користувачі економлять 90% часу планування і скорочують харчові відходи на 40%.',
      },
      metrics: [
        {
          key: {
            en: 'Active Users (Beta)',
            ru: 'Активных пользователей (Бета)',
            be: 'Актыўных карыстальнікаў (Бета)',
            pl: 'Aktywni użytkownicy (Beta)',
            uk: 'Активних користувачів (Бета)',
          },
          value: '3,200+',
          trend: 'up',
        },
        {
          key: {
            en: 'Recipes Processed',
            ru: 'Обработано рецептов',
            be: 'Апрацавана рэцэптаў',
            pl: 'Przetworzonych przepisów',
            uk: 'Оброблено рецептів',
          },
          value: '85,000+',
          trend: 'up',
        },
        {
          key: {
            en: 'GMV (Monthly)',
            ru: 'GMV (месячный)',
            be: 'GMV (месячны)',
            pl: 'GMV (miesięczny)',
            uk: 'GMV (місячний)',
          },
          value: '42,000 PLN',
          trend: 'up',
        },
        {
          key: {
            en: 'AI Accuracy',
            ru: 'Точность AI',
            be: 'Дакладнасць AI',
            pl: 'Dokładność AI',
            uk: 'Точність AI',
          },
          value: '95%',
          trend: 'up',
        },
      ],
      traction: {
        en: 'Launched MVP in Dec 2024. Growing 35% MoM. Secured partnership with Lisek (Poland\'s leading grocery delivery). LOI signed with Uber Eats Poland and Bolt Food. 78% user retention rate. Featured in Polish tech media. Processing 500+ recipes daily. Average order value: 180 PLN. 4.8/5 user rating.',
        ru: 'Запуск MVP в декабре 2024. Рост 35% месяц к месяцу. Подписано партнерство с Lisek (ведущей службой доставки продуктов в Польше). LOI подписан с Uber Eats Poland и Bolt Food. 78% удержание пользователей. Упомянуты в польских технологических СМИ. Обработка 500+ рецептов ежедневно. Средний чек заказа: 180 PLN. Рейтинг пользователей 4.8/5.',
        be: 'Запуск MVP у снежні 2024. Рост 35% месяц да месяца. Падпісана партнёрства з Lisek (вядучай службай дастаўкі прадуктаў у Польшчы). LOI падпісан з Uber Eats Poland і Bolt Food. 78% утрыманне карыстальнікаў. Згаданы ў польскіх тэхналагічных СМІ. Апрацоўка 500+ рэцэптаў штодня. Сярэдні чэк заказу: 180 PLN. Рэйтынг карыстальнікаў 4.8/5.',
        pl: 'Uruchomienie MVP w grudniu 2024 r. Wzrost 35% MoM. Zabezpieczone partnerstwo z Lisek (wiodącą dostawą spożywczą w Polsce). LOI podpisane z Uber Eats Poland i Bolt Food. 78% wskaźnik utrzymania użytkowników. Wymienione w polskich mediach technologicznych. Przetwarzanie ponad 500 przepisów dziennie. Średnia wartość zamówienia: 180 PLN. Ocena użytkowników 4.8/5.',
        uk: 'Запуск MVP у грудні 2024. Зростання 35% місяць до місяця. Підписано партнерство з Lisek (провідною службою доставки продуктів у Польщі). LOI підписано з Uber Eats Poland та Bolt Food. 78% утримання користувачів. Згадано в польських технологічних ЗМІ. Обробка 500+ рецептів щодня. Середній чек замовлення: 180 PLN. Рейтинг користувачів 4.8/5.',
      },
      request: {
        round: {
          en: 'Seed Round',
          ru: 'Посевной раунд',
          be: 'Пасяўны раўнд',
          pl: 'Runda Seed',
          uk: 'Посівний раунд',
        },
        amount: {
          en: '$1.8M',
          ru: '$1.8M',
          be: '$1.8M',
          pl: '$1.8M',
          uk: '$1.8M',
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
