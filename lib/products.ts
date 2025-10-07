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
    slug: 'voice-assistant-sdk',
    title: {
      en: 'Voice Assistant SDK',
      ru: 'SDK Голосового Ассистента',
      be: 'SDK Галасавога Асістэнта',
      pl: 'SDK Asystenta Głosowego',
      uk: 'SDK Голосового Асистента',
    },
    description: {
      en: 'Developer-friendly SDK for building custom voice assistants with natural language understanding. Support for 50+ languages, offline mode, and seamless integration into any application.',
      ru: 'Дружелюбный к разработчикам SDK для создания кастомных голосовых ассистентов с пониманием естественного языка. Поддержка 50+ языков, офлайн-режим и бесшовная интеграция в любое приложение.',
      be: 'Зручны для распрацоўшчыкаў SDK для стварэння кастомных галасавых асістэнтаў з разуменнем натуральнай мовы. Падтрымка 50+ моў, афлайн-рэжым і бесшвовая інтэграцыя ў любую праграму.',
      pl: 'Przyjazny dla programistów SDK do budowania niestandardowych asystentów głosowych ze zrozumieniem języka naturalnego. Obsługa ponad 50 języków, tryb offline i płynna integracja z dowolną aplikacją.',
      uk: 'Дружній до розробників SDK для створення кастомних голосових асистентів з розумінням природної мови. Підтримка 50+ мов, офлайн-режим та безшовна інтеграція в будь-який додаток.',
    },
    shortDescription: {
      en: 'SDK for building custom voice assistants with NLU',
      ru: 'SDK для создания голосовых ассистентов с NLU',
      be: 'SDK для стварэння галасавых асістэнтаў з NLU',
      pl: 'SDK do tworzenia asystentów głosowych z NLU',
      uk: 'SDK для створення голосових асистентів з NLU',
    },
    techStack: ['Python', 'C++', 'PyTorch', 'ONNX', 'WebRTC', 'gRPC'],
    thumbnail: {
      src: '/images/projects/voice-sdk/thumbnail.jpg',
      alt: {
        en: 'Voice Assistant SDK Interface',
        ru: 'Интерфейс SDK Голосового Ассистента',
        be: 'Інтэрфейс SDK Галасавога Асістэнта',
        pl: 'Interfejs SDK Asystenta Głosowego',
        uk: 'Інтерфейс SDK Голосового Асистента',
      },
      width: 800,
      height: 600,
    },
    links: {
      website: 'https://voicesdk.example.com',
      github: 'https://github.com/pink-black-team/voice-sdk',
    },
    investment: {
      problem: {
        en: 'Building voice interfaces requires deep expertise in ML, NLP, and audio processing. Development costs exceed $500K and take 12+ months, making it inaccessible for most companies.',
        ru: 'Создание голосовых интерфейсов требует глубокой экспертизы в ML, NLP и обработке аудио. Стоимость разработки превышает $500K и занимает 12+ месяцев, делая это недоступным для большинства компаний.',
        be: 'Стварэнне галасавых інтэрфейсаў патрабуе глыбокай экспертызы ў ML, NLP і апрацоўцы аўдыё. Кошт распрацоўкі перавышае $500K і займае 12+ месяцаў, робячы гэта недаступным для большасці кампаній.',
        pl: 'Budowanie interfejsów głosowych wymaga głębokiej wiedzy z zakresu ML, NLP i przetwarzania audio. Koszty rozwoju przekraczają 500 000 USD i trwają ponad 12 miesięcy, co czyni to niedostępnym dla większości firm.',
        uk: 'Створення голосових інтерфейсів вимагає глибокої експертизи в ML, NLP та обробці аудіо. Вартість розробки перевищує $500K і займає 12+ місяців, роблячи це недоступним для більшості компаній.',
      },
      solution: {
        en: 'Our SDK reduces time-to-market from 12 months to 2 weeks. Developers can integrate voice capabilities with just a few lines of code. No ML expertise required.',
        ru: 'Наш SDK сокращает время выхода на рынок с 12 месяцев до 2 недель. Разработчики могут интегрировать голосовые возможности всего несколькими строками кода. Не требуется экспертиза в ML.',
        be: 'Наш SDK скарачае час выхаду на рынак з 12 месяцаў да 2 тыдняў. Распрацоўшчыкі могуць інтэграваць галасавыя магчымасці толькі некалькімі радкамі коду. Не патрабуецца экспертыза ў ML.',
        pl: 'Nasz SDK skraca czas wprowadzenia na rynek z 12 miesięcy do 2 tygodni. Programiści mogą zintegrować możliwości głosowe za pomocą zaledwie kilku linijek kodu. Nie jest wymagana wiedza z zakresu ML.',
        uk: 'Наш SDK скорочує час виходу на ринок з 12 місяців до 2 тижнів. Розробники можуть інтегрувати голосові можливості лише кількома рядками коду. Не потрібна експертиза в ML.',
      },
      metrics: [
        {
          key: {
            en: 'SDK Downloads',
            ru: 'Загрузок SDK',
            be: 'Спампоўванняў SDK',
            pl: 'Pobrania SDK',
            uk: 'Завантажень SDK',
          },
          value: '50K+',
          trend: 'up',
        },
        {
          key: {
            en: 'Active Developers',
            ru: 'Активных разработчиков',
            be: 'Актыўных распрацоўшчыкаў',
            pl: 'Aktywni programiści',
            uk: 'Активних розробників',
          },
          value: '5,000+',
          trend: 'up',
        },
      ],
      traction: {
        en: 'Open-source community with 10K+ GitHub stars. Used by 50+ startups and enterprise clients. Partnerships with AWS and Google Cloud.',
        ru: 'Open-source сообщество с 10K+ звездами на GitHub. Используется 50+ стартапами и корпоративными клиентами. Партнерства с AWS и Google Cloud.',
        be: 'Open-source супольнасць з 10K+ зоркамі на GitHub. Выкарыстоўваецца 50+ стартапамі і карпаратыўнымі кліентамі. Партнёрствы з AWS і Google Cloud.',
        pl: 'Społeczność open-source z ponad 10 tys. gwiazdek na GitHub. Używane przez ponad 50 startupów i klientów korporacyjnych. Partnerstwa z AWS i Google Cloud.',
        uk: 'Open-source спільнота з 10K+ зірками на GitHub. Використовується 50+ стартапами і корпоративними клієнтами. Партнерства з AWS і Google Cloud.',
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
          en: '$1.5M',
          ru: '$1.5M',
          be: '$1.5M',
          pl: '$1.5M',
          uk: '$1.5M',
        },
      },
      contact: {
        email: 'invest@pink-black-team.com',
        telegram: '@pinkblackteam',
      },
    },
    status: 'active',
    featured: false,
    publishedAt: '2024-06-10T00:00:00Z',
    updatedAt: '2025-09-28T00:00:00Z',
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
