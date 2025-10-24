import { Product, ProductCard } from '@/types/product';

/**
 * List of all products
 */
export const products: Product[] = [
  {
    id: '4',
    slug: 'novastorm-ai',
    title: {
      en: 'NovaStorm AI - Social Media Marketing Automation',
      ru: 'NovaStorm AI - Автоматизация Маркетинга в Соцсетях',
      be: 'NovaStorm AI - Аўтаматызацыя Маркетынгу ў Соцсетках',
      pl: 'NovaStorm AI - Automatyzacja Marketingu w Mediach Społecznościowych',
      uk: 'NovaStorm AI - Автоматизація Маркетингу в Соцмережах',
    },
    description: {
      en: 'AI-powered social media marketing automation platform for modern marketers. Automate content creation and social media management with intelligent AI that generates advertising videos, social media posts, and targeted hashtags. Features multi-account management for scaling content promotion across multiple profiles simultaneously. Eliminates routine marketing tasks, allowing marketers to focus on strategy while AI handles content generation and distribution. Targets marketing agencies, SMBs, influencers, and e-commerce brands. Freemium SaaS model: free tier with limitations, Pro ($49/mo), Business ($149/mo), Enterprise ($499+/mo). Future: advanced analytics, A/B testing, API access.',
      ru: 'AI-платформа для автоматизации маркетинга в социальных сетях для современных маркетологов. Автоматизируйте создание контента и управление соцсетями с помощью интеллектуального AI, который генерирует рекламные видео, посты для соцсетей и таргетированные хэштеги. Функция мультиаккаунтинга для масштабирования продвижения контента через несколько профилей одновременно. Устраняет рутинные маркетинговые задачи, позволяя маркетологам сосредоточиться на стратегии, пока AI обрабатывает генерацию и распространение контента. Ориентирована на маркетинговые агентства, МСБ, инфлюенсеров и e-commerce бренды. Freemium SaaS модель: бесплатный уровень с ограничениями, Pro ($49/мес), Business ($149/мес), Enterprise ($499+/мес). Будущее: расширенная аналитика, A/B тестирование, API-доступ.',
      be: 'AI-платформа для аўтаматызацыі маркетынгу ў сацыяльных сетках для сучасных маркетолагаў. Аўтаматызуйце стварэнне кантэнту і кіраванне соцсеткамі з дапамогай інтэлектуальнага AI, які генеруе рэкламныя відэа, посты для соцсетак і таргетаваныя хэштэгі. Функцыя мультыаккаўнтынгу для маштабавання прасоўвання кантэнту праз некалькі профіляў адначасова. Ліквідуе рутынныя маркетынгавыя задачы, дазваляючы маркетолагам засяродзіцца на стратэгіі, пакуль AI апрацоўвае генерацыю і распаўсюджванне кантэнту. Арыентавана на маркетынгавыя агенцтвы, МСБ, інфлюенсераў і e-commerce брэнды. Freemium SaaS мадэль: бясплатны ўзровень з абмежаваннямі, Pro ($49/мес), Business ($149/мес), Enterprise ($499+/мес). Будучыня: пашыраная аналітыка, A/B тэставанне, API-доступ.',
      pl: 'Platforma automatyzacji marketingu w mediach społecznościowych oparta na AI dla nowoczesnych marketerów. Automatyzuj tworzenie treści i zarządzanie mediami społecznościowymi dzięki inteligentnemu AI, który generuje filmy reklamowe, posty w mediach społecznościowych i ukierunkowane hashtagi. Funkcja zarządzania wieloma kontami do skalowania promocji treści na wielu profilach jednocześnie. Eliminuje rutynowe zadania marketingowe, pozwalając marketerom skupić się na strategii, podczas gdy AI zajmuje się generowaniem i dystrybucją treści. Skierowana do agencji marketingowych, MŚP, influencerów i marek e-commerce. Model freemium SaaS: poziom bezpłatny z ograniczeniami, Pro (49 USD/mies), Business (149 USD/mies), Enterprise (499+ USD/mies). Przyszłość: zaawansowana analityka, testy A/B, dostęp API.',
      uk: 'AI-платформа для автоматизації маркетингу в соціальних мережах для сучасних маркетологів. Автоматизуйте створення контенту та управління соцмережами за допомогою інтелектуального AI, який генерує рекламні відео, пости для соцмереж та таргетовані хештеги. Функція мультиаккаунтингу для масштабування просування контенту через декілька профілів одночасно. Усуває рутинні маркетингові завдання, дозволяючи маркетологам зосередитися на стратегії, поки AI обробляє генерацію та розповсюдження контенту. Орієнтована на маркетингові агенції, МСП, інфлюенсерів та e-commerce бренди. Freemium SaaS модель: безкоштовний рівень з обмеженнями, Pro ($49/міс), Business ($149/міс), Enterprise ($499+/міс). Майбутнє: розширена аналітика, A/B тестування, API-доступ.',
    },
    shortDescription: {
      en: 'AI-powered social media automation and content generation for marketers',
      ru: 'AI-автоматизация соцсетей и генерация контента для маркетологов',
      be: 'AI-аўтаматызацыя соцсетак і генерацыя кантэнту для маркетолагаў',
      pl: 'Automatyzacja mediów społecznościowych i generowanie treści AI dla marketerów',
      uk: 'AI-автоматизація соцмереж та генерація контенту для маркетологів',
    },
    techStack: ['.Net 9.0','Next.js 14', 'Azure OpenAI', 'TypeScript', 'PostgreSQL', 'Circle CI', 'Digital Ocean', 'Docker', 'Bunny.net CDN'],
    thumbnail: {
      src: '/images/projects/novastorm-ai/thumbnail.png',
      alt: {
        en: 'NovaStorm AI Social Media Marketing Automation Platform',
        ru: 'NovaStorm AI Платформа Автоматизации Маркетинга в Соцсетях',
        be: 'NovaStorm AI Платформа Аўтаматызацыі Маркетынгу ў Соцсетках',
        pl: 'NovaStorm AI Platforma Automatyzacji Marketingu w Mediach Społecznościowych',
        uk: 'NovaStorm AI Платформа Автоматизації Маркетингу в Соцмережах',
      },
      width: 800,
      height: 600,
    },
    links: {
      website: 'https://www.novastorm.ai',
    },
    investment: {
      problem: {
        en: 'Social media marketing is drowning in routine tasks. Marketers spend 60-80% of their time on repetitive content creation: writing posts, generating videos, designing graphics, researching hashtags, and manually posting across multiple accounts. The $350B digital advertising market (projected $786B by 2027) demands constant fresh content for targeting, but creating quality media content costs $50-300/mo per tool plus 20+ hours weekly. SMBs and marketing agencies struggle to manage multiple client accounts simultaneously. Manual multi-account posting risks bans and burnout. Marketers need to focus on strategy and analytics, not content production grunt work. The automation gap costs businesses $1.2M annually in lost productivity and missed opportunities.',
        ru: 'Маркетинг в социальных сетях тонет в рутинных задачах. Маркетологи тратят 60-80% времени на повторяющееся создание контента: написание постов, генерация видео, дизайн графики, подбор хэштегов и ручная публикация через несколько аккаунтов. Рынок цифровой рекламы в $350 млрд (прогноз $786 млрд к 2027) требует постоянного свежего контента для таргетинга, но создание качественного медиаконтента стоит $50-300/мес за инструмент плюс 20+ часов в неделю. МСБ и маркетинговым агенствам сложно одновременно управлять несколькими клиентскими аккаунтами. Ручной мультиаккаунтинг рискует банами и выгоранием. Маркетологам нужно сосредоточиться на стратегии и аналитике, а не на производстве контента. Разрыв в автоматизации обходится бизнесам в $1.2М ежегодно в потерянной продуктивности и упущенных возможностях.',
        be: 'Маркетынг у сацыяльных сетках тоне ў рутынных задачах. Маркетолагі траціць 60-80% часу на паўтаральнае стварэнне кантэнту: напісанне постаў, генерацыя відэа, дызайн графікі, падбор хэштэгаў і ручная публікацыя праз некалькі акаўнтаў. Рынак лічбавай рэкламы ў $350 млрд (прагноз $786 млрд да 2027) патрабуе пастаяннага свежага кантэнту для таргетынгу, але стварэнне якаснага медыякантэнту каштуе $50-300/мес за інструмент плюс 20+ гадзін у тыдзень. МСБ і маркетынгавым агенцтвам складана адначасова кіраваць некалькімі кліенцкімі акаўнтамі. Ручны мультыакаўнтынг рызыкуе банамі і выгараннем. Маркетолагам трэба сасярэдзіцца на стратэгіі і аналітыцы, а не на вытворчасці кантэнту. Разрыў у аўтаматызацыі каштуе бізнесам $1.2М штогод у страчанай прадуктыўнасці і прапушчаных магчымасцях.',
        pl: 'Marketing w mediach społecznościowych tonie w rutynowych zadaniach. Marketerzy spędzają 60-80% czasu na powtarzalnym tworzeniu treści: pisaniu postów, generowaniu filmów, projektowaniu grafik, badaniu hashtagów i ręcznym publikowaniu na wielu kontach. Rynek reklamy cyfrowej o wartości 350 mld USD (prognoza 786 mld USD do 2027 r.) wymaga ciągłych świeżych treści do targetowania, ale tworzenie wysokiej jakości treści medialnych kosztuje 50-300 USD/mies za narzędzie plus ponad 20 godzin tygodniowo. MŚP i agencje marketingowe mają trudności z jednoczesnym zarządzaniem wieloma kontami klientów. Ręczne zarządzanie wieloma kontami niesie ryzyko banów i wypalenia. Marketerzy muszą skupić się na strategii i analityce, a nie na produkcji treści. Luka w automatyzacji kosztuje firmy 1,2 mln USD rocznie w utraconej produktywności i zmarnowanych szansach.',
        uk: 'Маркетинг у соціальних мережах тоне в рутинних завданнях. Маркетологи витрачають 60-80% часу на повторюване створення контенту: написання постів, генерація відео, дизайн графіки, підбір хештегів та ручна публікація через декілька акаунтів. Ринок цифрової реклами в $350 млрд (прогноз $786 млрд до 2027) вимагає постійного свіжого контенту для таргетингу, але створення якісного медіаконтенту коштує $50-300/міс за інструмент плюс 20+ годин на тиждень. МСП та маркетинговим агенціям складно одночасно керувати декількома клієнтськими акаунтами. Ручний мультиаккаунтинг ризикує банами та вигоранням. Маркетологам потрібно зосередитися на стратегії та аналітиці, а не на виробництві контенту. Розрив в автоматизації коштує бізнесам $1.2М щорічно в утраченій продуктивності та упущених можливостях.',
      },
      solution: {
        en: 'NovaStorm AI (currently in concept/planning phase) is an all-in-one marketing automation platform that eliminates routine content tasks. Core features: AI-powered content generation creates advertising videos, social media posts, and optimized hashtags in minutes. Multi-account management system allows simultaneous posting and promotion across 10+ social profiles with smart anti-ban protection. Automated scheduling and content calendar management. Platform generates high-converting content tailored for TikTok, Instagram, Facebook, LinkedIn targeting. Built-in analytics tracks performance across all accounts. Pricing: Starter $49/mo (3 accounts, 50 AI posts/videos), Business $149/mo (10 accounts, 200 posts/videos, advanced analytics), Enterprise $499+/mo (unlimited accounts, API access, white-label). Target: marketing agencies (manage multiple clients), SMBs (scale social presence), e-commerce brands (automate product promotion), influencers (amplify reach via multi-accounting).',
        ru: 'NovaStorm AI (в настоящее время на стадии концепции/планирования) - универсальная платформа автоматизации маркетинга, которая устраняет рутинные задачи по контенту. Основные функции: AI-генерация контента создает рекламные видео, посты для соцсетей и оптимизированные хэштеги за минуты. Система мультиаккаунтинга позволяет одновременно публиковать и продвигать контент через 10+ социальных профилей с умной защитой от банов. Автоматизированное планирование и управление контент-календарем. Платформа генерирует высококонверсионный контент для таргетинга в TikTok, Instagram, Facebook, LinkedIn. Встроенная аналитика отслеживает эффективность по всем аккаунтам. Цены: Starter $49/мес (3 аккаунта, 50 AI-постов/видео), Business $149/мес (10 аккаунтов, 200 постов/видео, расширенная аналитика), Enterprise $499+/мес (безлимит аккаунтов, API-доступ, white-label). Целевая аудитория: маркетинговые агенства (управление клиентами), МСБ (масштабирование присутствия в соцсетях), e-commerce бренды (автоматизация продвижения товаров), инфлюенсеры (усиление охвата через мультиаккаунтинг).',
        be: 'NovaStorm AI (у цяперашні час на стадыі канцэпцыі/планавання) - універсальная платформа аўтаматызацыі маркетынгу, якая ліквідуе рутынныя задачы па кантэнту. Асноўныя функцыі: AI-генерацыя кантэнту стварае рэкламныя відэа, посты для соцсетак і аптымізаваныя хэштэгі за хвіліны. Сістэма мультыаккаўнтынгу дазваляе адначасова публікаваць і прасоўваць кантэнт праз 10+ сацыяльных профіляў з разумнай абаронай ад банаў. Аўтаматызаванае планаванне і кіраванне кантэнт-календаром. Платформа генеруе высокаканверсійны кантэнт для таргетынгу ў TikTok, Instagram, Facebook, LinkedIn. Убудаваная аналітыка адсочвае эфектыўнасць па ўсіх акаўнтах. Цэны: Starter $49/мес (3 акаўнты, 50 AI-постаў/відэа), Business $149/мес (10 акаўнтаў, 200 постаў/відэа, пашыраная аналітыка), Enterprise $499+/мес (бязліміт акаўнтаў, API-доступ, white-label). Мэтавая аўдыторыя: маркетынгавыя агенцтвы (кіраванне кліентамі), МСБ (маштабаванне прысутнасці ў соцсетках), e-commerce брэнды (аўтаматызацыя прасоўвання тавараў), інфлюенсеры (узмацненне ахопу праз мультыаккаўнтынг).',
        pl: 'NovaStorm AI (obecnie w fazie koncepcji/planowania) to kompleksowa platforma automatyzacji marketingu, która eliminuje rutynowe zadania związane z treścią. Główne funkcje: generowanie treści AI tworzy filmy reklamowe, posty w mediach społecznościowych i zoptymalizowane hashtagi w ciągu minut. System zarządzania wieloma kontami umożliwia jednoczesne publikowanie i promowanie na ponad 10 profilach społecznościowych z inteligentną ochroną przed banami. Zautomatyzowane planowanie i zarządzanie kalendarzem treści. Platforma generuje treści o wysokiej konwersji dostosowane do targetowania TikTok, Instagram, Facebook, LinkedIn. Wbudowana analityka śledzi wydajność na wszystkich kontach. Cennik: Starter 49 USD/mies (3 konta, 50 postów/filmów AI), Business 149 USD/mies (10 kont, 200 postów/filmów, zaawansowana analityka), Enterprise 499+ USD/mies (nieograniczona liczba kont, dostęp API, white-label). Grupa docelowa: agencje marketingowe (zarządzanie wieloma klientami), MŚP (skalowanie obecności w mediach społecznościowych), marki e-commerce (automatyzacja promocji produktów), influencerzy (wzmocnienie zasięgu przez multi-accounting).',
        uk: 'NovaStorm AI (наразі на стадії концепції/планування) - універсальна платформа автоматизації маркетингу, яка усуває рутинні завдання з контенту. Основні функції: AI-генерація контенту створює рекламні відео, пости для соцмереж та оптимізовані хештеги за хвилини. Система мультиаккаунтингу дозволяє одночасно публікувати та просувати контент через 10+ соціальних профілів з розумним захистом від банів. Автоматизоване планування та управління контент-календарем. Платформа генерує висококонверсійний контент для таргетингу в TikTok, Instagram, Facebook, LinkedIn. Вбудована аналітика відстежує ефективність по всіх акаунтах. Ціни: Starter $49/міс (3 акаунти, 50 AI-постів/відео), Business $149/міс (10 акаунтів, 200 постів/відео, розширена аналітика), Enterprise $499+/міс (безліміт акаунтів, API-доступ, white-label). Цільова аудиторія: маркетингові агенції (управління клієнтами), МСП (масштабування присутності в соцмережах), e-commerce бренди (автоматизація просування товарів), інфлюенсери (посилення охоплення через мультиаккаунтинг).',
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
        en: 'Project currently in Pre-Seed phase (concept/planning). First large-scale project for 3-person founding team. Vision: all-in-one marketing automation platform eliminating routine content tasks for marketers. MVP development timeline: Q4 2025 (AI content generation, 3-account management, TikTok/Instagram focus). Public launch: Mid 2026. Year 1 (2H 2026) projections: 100-175 paying customers (50 Starter @ $49/mo, 15 Business @ $149/mo, 1-2 Enterprise @ $499/mo), $32-47K revenue. Year 2 (2027): 330 paying customers (250 Starter, 75 Business, 5 Enterprise), $311K revenue. Year 3 (2028): 812 paying (600 Starter, 200 Business, 12 Enterprise), $785K revenue. Conservative projections based on: $40-60 CAC via content marketing + paid ads, 12-15% free-to-paid conversion, 70-75% gross margin (AI processing costs), 4-6% monthly churn, avg 18-month customer lifetime. Target markets: marketing agencies (30%), SMBs (40%), e-commerce (20%), influencers (10%). Roadmap: Q4 2025 MVP completion, Mid 2026 public launch, 2027 advanced analytics + API access, 2028+ global scale (mobile apps, white-label solutions).',
        ru: 'Проект в настоящее время на стадии Pre-Seed (концепция/планирование). Первый крупномасштабный проект команды из 3 основателей. Видение: универсальная платформа автоматизации маркетинга, устраняющая рутинные задачи по контенту для маркетологов. Сроки разработки MVP: Q4 2025 (AI-генерация контента, управление 3 аккаунтами, фокус на TikTok/Instagram). Публичный запуск: Середина 2026. Прогнозы Год 1 (2H 2026): 100-175 платящих клиентов (50 Starter @ $49/мес, 15 Business @ $149/мес, 1-2 Enterprise @ $499/мес), $32-47K выручки. Год 2 (2027): 330 платящих клиентов (250 Starter, 75 Business, 5 Enterprise), $311K выручки. Год 3 (2028): 812 платящих (600 Starter, 200 Business, 12 Enterprise), $785K выручки. Консервативные прогнозы основаны на: $40-60 CAC через контент-маркетинг + платную рекламу, 12-15% конверсия бесплатных в платных, 70-75% валовая маржа (затраты на AI-обработку), 4-6% месячный отток, средний lifetime клиента 18 месяцев. Целевые рынки: маркетинговые агенства (30%), МСБ (40%), e-commerce (20%), инфлюенсеры (10%). Дорожная карта: Q4 2025 завершение MVP, Середина 2026 публичный запуск, 2027 расширенная аналитика + API-доступ, 2028+ глобальный масштаб (мобильные приложения, white-label решения).',
        be: 'Праект у цяперашні час на стадыі Pre-Seed (канцэпцыя/планаванне). Першы маштабны праект каманды з 3 заснавальнікаў. Бачанне: універсальная платформа аўтаматызацыі маркетынгу, якая ліквідуе рутынныя задачы па кантэнту для маркетолагаў. Тэрміны распрацоўкі MVP: Q4 2025 (AI-генерацыя кантэнту, кіраванне 3 акаўнтамі, фокус на TikTok/Instagram). Публічны запуск: Сярэдзіна 2026. Прагнозы Год 1 (2H 2026): 100-175 плацяжных кліентаў (50 Starter @ $49/мес, 15 Business @ $149/мес, 1-2 Enterprise @ $499/мес), $32-47K выручкі. Год 2 (2027): 330 плацяжных кліентаў (250 Starter, 75 Business, 5 Enterprise), $311K выручкі. Год 3 (2028): 812 плацяжных (600 Starter, 200 Business, 12 Enterprise), $785K выручкі. Кансерватыўныя прагнозы заснаваны на: $40-60 CAC праз кантэнт-маркетынг + платную рэкламу, 12-15% канверсія бясплатных у платных, 70-75% валавая маржа (выдаткі на AI-апрацоўку), 4-6% месячны адток, сярэдні lifetime кліента 18 месяцаў. Мэтавыя рынкі: маркетынгавыя агенцтвы (30%), МСБ (40%), e-commerce (20%), інфлюенсеры (10%). Дарожная карта: Q4 2025 завяршэнне MVP, Сярэдзіна 2026 публічны запуск, 2027 пашыраная аналітыка + API-доступ, 2028+ глабальны маштаб (мабільныя прыкладанні, white-label рашэнні).',
        pl: 'Projekt obecnie w fazie Pre-Seed (koncepcja/planowanie). Pierwszy projekt na dużą skalę dla 3-osobowego zespołu założycielskiego. Wizja: kompleksowa platforma automatyzacji marketingu eliminująca rutynowe zadania związane z treścią dla marketerów. Harmonogram rozwoju MVP: Q4 2025 (generowanie treści AI, zarządzanie 3 kontami, fokus na TikTok/Instagram). Publiczne uruchomienie: Połowa 2026. Prognozy Rok 1 (2H 2026): 100-175 płacących klientów (50 Starter @ 49 USD/mies, 15 Business @ 149 USD/mies, 1-2 Enterprise @ 499 USD/mies), 32-47 tys. USD przychodów. Rok 2 (2027): 330 płacących klientów (250 Starter, 75 Business, 5 Enterprise), 311 tys. USD przychodów. Rok 3 (2028): 812 płacących (600 Starter, 200 Business, 12 Enterprise), 785 tys. USD przychodów. Konserwatywne prognozy oparte na: 40-60 USD CAC przez content marketing + płatne reklamy, 12-15% konwersja bezpłatnych na płatne, 70-75% marża brutto (koszty przetwarzania AI), 4-6% miesięczny churn, średni lifetime klienta 18 miesięcy. Rynki docelowe: agencje marketingowe (30%), MŚP (40%), e-commerce (20%), influencerzy (10%). Plan działania: Q4 2025 ukończenie MVP, Połowa 2026 publiczne uruchomienie, 2027 zaawansowana analityka + dostęp API, 2028+ globalny zasięg (aplikacje mobilne, rozwiązania white-label).',
        uk: 'Проєкт наразі на стадії Pre-Seed (концепція/планування). Перший великомасштабний проект команди з 3 засновників. Бачення: універсальна платформа автоматизації маркетингу, яка усуває рутинні завдання з контенту для маркетологів. Терміни розробки MVP: Q4 2025 (AI-генерація контенту, управління 3 акаунтами, фокус на TikTok/Instagram). Публічний запуск: Середина 2026. Прогнози Рік 1 (2H 2026): 100-175 платних клієнтів (50 Starter @ $49/міс, 15 Business @ $149/міс, 1-2 Enterprise @ $499/міс), $32-47K виручки. Рік 2 (2027): 330 платних клієнтів (250 Starter, 75 Business, 5 Enterprise), $311K виручки. Рік 3 (2028): 812 платних (600 Starter, 200 Business, 12 Enterprise), $785K виручки. Консервативні прогнози засновані на: $40-60 CAC через контент-маркетинг + платну рекламу, 12-15% конверсія безкоштовних у платні, 70-75% валова маржа (витрати на AI-обробку), 4-6% місячний відтік, середній lifetime клієнта 18 місяців. Цільові ринки: маркетингові агенції (30%), МСП (40%), e-commerce (20%), інфлюенсери (10%). Дорожня карта: Q4 2025 завершення MVP, Середина 2026 публічний запуск, 2027 розширена аналітика + API-доступ, 2028+ глобальний масштаб (мобільні застосунки, white-label рішення).',
      },
      request: {
        round: {
          en: 'Pre-Seed',
          ru: 'Pre-Seed',
          be: 'Pre-Seed',
          pl: 'Pre-Seed',
          uk: 'Pre-Seed',
        },
        amount: {
          en: '$200K - $300K',
          ru: '$200K - $300K',
          be: '$200K - $300K',
          pl: '$200K - $300K',
          uk: '$200K - $300K',
        },
      },
      contact: {
        email: 'wayworldhelp@gmail.com',
        telegram: '@mieo196',
        linkedin: '',
      },
    },
    status: 'in-development',
    featured: true,
    publishedAt: '2025-10-08T00:00:00Z',
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
    techStack: ['.Net 9.0','Next.js 14', 'Azure OpenAI', 'TypeScript', 'PostgreSQL', 'Circle CI', 'Digital Ocean', 'Docker', 'Bunny.net CDN', 'React Native'],
    thumbnail: {
      src: '/images/projects/foodreceipts/thumbnail.png',
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
        en: 'MVP in active development by 3-person founding team. First large-scale project for the team. Core AI recipe extraction functionality completed. Planning integrations with Lisek, Uber Eats Poland, and Bolt Food (negotiations not started). Revenue model: commission per grocery order (15-20%) + premium subscriptions. Projected timeline: Q1 2025 beta launch with 50-100 early adopters, Q2-Q3 2025 product refinement (300-500 users, $5-10K revenue from early premium users), Q4 2025 Polish market expansion (1,500-3,000 users, $45-75K revenue). Year 2 (2026): 8,000-12,000 users, $450-750K revenue (commission $320-550K from 25K-40K orders + subscriptions $130-200K from 600-1,000 premium users @ $18-25/mo). Year 3 (2027): 25K-40K users, $1.4M-$2.2M revenue. Conservative projections based on: 3-5 orders/user/month, $40-60 avg order value, 15-18% commission, 8-10% premium conversion rate, $25-35 CAC via content marketing.',
        ru: 'MVP в активной разработке командой из 3 основателей. Первый крупномасштабный проект для команды. Основной функционал AI-извлечения рецептов завершен. Планируются интеграции с Lisek, Uber Eats Poland и Bolt Food (переговоры не начаты). Модель дохода: комиссия за заказ продуктов (15-20%) + премиум подписки. Планируемый график: Q1 2025 бета-запуск с 50-100 ранними пользователями, Q2-Q3 2025 доработка продукта (300-500 пользователей, $5-10K выручки от ранних премиум пользователей), Q4 2025 расширение на польском рынке (1,500-3,000 пользователей, $45-75K выручки). Год 2 (2026): 8,000-12,000 пользователей, $450-750K выручки (комиссия $320-550K от 25K-40K заказов + подписки $130-200K от 600-1,000 премиум пользователей @ $18-25/мес). Год 3 (2027): 25K-40K пользователей, $1.4M-$2.2M выручки. Консервативные прогнозы основаны на: 3-5 заказов/пользователь/месяц, $40-60 средний чек, 15-18% комиссия, 8-10% конверсия в премиум, $25-35 CAC через контент-маркетинг.',
        be: 'MVP у актыўнай распрацоўцы камандай з 3 заснавальнікаў. Першы маштабны праект для каманды. Асноўны функцыянал AI-здабычы рэцэптаў завершаны. Плануюцца інтэграцыі з Lisek, Uber Eats Poland і Bolt Food (перамовы не пачаты). Мадэль даходу: камісія за замову прадуктаў (15-20%) + прэміум падпіскі. Планаваны графік: Q1 2025 бета-запуск з 50-100 ранімі карыстальнікамі, Q2-Q3 2025 дапрацоўка прадукту (300-500 карыстальнікаў, $5-10K выручкі ад ранніх прэміум карыстальнікаў), Q4 2025 пашырэнне на польскім рынку (1,500-3,000 карыстальнікаў, $45-75K выручкі). Год 2 (2026): 8,000-12,000 карыстальнікаў, $450-750K выручкі (камісія $320-550K ад 25K-40K замоў + падпіскі $130-200K ад 600-1,000 прэміум карыстальнікаў @ $18-25/мес). Год 3 (2027): 25K-40K карыстальнікаў, $1.4M-$2.2M выручкі. Кансерватыўныя прагнозы заснаваны на: 3-5 замоў/карыстальнік/месяц, $40-60 сярэдні чэк, 15-18% камісія, 8-10% канверсія ў прэміум, $25-35 CAC праз кантэнт-маркетынг.',
        pl: 'MVP w aktywnym rozwoju przez 3-osobowy zespół założycielski. Pierwszy projekt na dużą skalę dla zespołu. Podstawowa funkcjonalność AI do wyodrębniania przepisów ukończona. Planowane integracje z Lisek, Uber Eats Poland i Bolt Food (negocjacje nierozpoczęte). Model przychodów: prowizja za zamówienie spożywcze (15-20%) + subskrypcje premium. Przewidywany harmonogram: Q1 2025 uruchomienie beta z 50-100 wczesnymi użytkownikami, Q2-Q3 2025 udoskonalenie produktu (300-500 użytkowników, 5-10 tys. USD przychodów od wczesnych użytkowników premium), Q4 2025 ekspansja na rynku polskim (1,500-3,000 użytkowników, 45-75 tys. USD przychodów). Rok 2 (2026): 8,000-12,000 użytkowników, 450-750 tys. USD przychodów (prowizja 320-550 tys. USD od 25K-40K zamówień + subskrypcje 130-200 tys. USD od 600-1,000 użytkowników premium @ 18-25 USD/mies). Rok 3 (2027): 25K-40K użytkowników, 1.4-2.2 mln USD przychodów. Konserwatywne prognozy oparte na: 3-5 zamówień/użytkownik/miesiąc, 40-60 USD średnia wartość zamówienia, 15-18% prowizja, 8-10% współczynnik konwersji premium, 25-35 USD CAC przez content marketing.',
        uk: 'MVP в активній розробці командою з 3 засновників. Перший великомасштабний проект для команди. Основний функціонал AI-витягування рецептів завершено. Плануються інтеграції з Lisek, Uber Eats Poland та Bolt Food (переговори не розпочато). Модель доходу: комісія за замовлення продуктів (15-20%) + преміум підписки. Плановий графік: Q1 2025 бета-запуск з 50-100 ранніми користувачами, Q2-Q3 2025 доопрацювання продукту (300-500 користувачів, $5-10K виручки від ранніх преміум користувачів), Q4 2025 розширення на польському ринку (1,500-3,000 користувачів, $45-75K виручки). Рік 2 (2026): 8,000-12,000 користувачів, $450-750K виручки (комісія $320-550K від 25K-40K замовлень + підписки $130-200K від 600-1,000 преміум користувачів @ $18-25/міс). Рік 3 (2027): 25K-40K користувачів, $1.4M-$2.2M виручки. Консервативні прогнози засновані на: 3-5 замовлень/користувач/місяць, $40-60 середній чек, 15-18% комісія, 8-10% конверсія в преміум, $25-35 CAC через контент-маркетинг.',
      },
      request: {
        round: {
          en: 'Pre-Seed',
          ru: 'Pre-Seed',
          be: 'Pre-Seed',
          pl: 'Pre-Seed',
          uk: 'Pre-Seed',
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
            email: 'wayworldhelp@gmail.com',
            telegram: '@mieo196',
            linkedin: '',
        },
    },
    status: 'in-development',
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
    techStack: ['.Net 9.0','Next.js 14', 'Azure OpenAI', 'TypeScript', 'PostgreSQL', 'Circle CI', 'Digital Ocean', 'Docker', 'Bunny.net CDN'],
    thumbnail: {
      src: '/images/projects/astrologia-guru/thumbnail.png',
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
        en: 'Platform launched October 2025 for Polish market. First commercial project for 3-person founding team. Core AI reading engine completed with 4 service types: love horoscopes, annual tarot, partner compatibility, natal charts. Currently pre-marketing phase with no paid advertising yet. Building initial SEO presence through blog content. 2026 targets: 1,200-2,500 paying customers, $25-55K revenue (avg $22-25/reading, conservative 3-5% conversion). 2027 targets: 7,500-12,000 customers, $150-250K revenue with subscription model launch (one-time readings $105-180K + subscriptions $45-70K from 500-700 subscribers @ $9.99/mo). Projections based on bootstrapped growth: organic SEO traffic, minimal paid ads ($10-20 CAC), 15-20% repeat purchase rate, 5-8% subscription conversion. Roadmap: Q1-Q2 2026 start paid marketing + SEO optimization, Q3-Q4 2026 mobile apps + subscription model ($9.99/mo), 2027 multi-language expansion (RU/EN/UK/BE), 2028+ white-label API. Revenue model: paid one-time readings + subscription (2027) + API licensing (2028+).',
        ru: 'Платформа запущена в октябре 2025 для польского рынка. Первый коммерческий проект команды из 3 основателей. Основной AI-движок чтения завершен с 4 типами услуг: любовные гороскопы, годовое таро, совместимость партнеров, натальные карты. В настоящее время пре-маркетинговая фаза без платной рекламы. Строим начальное SEO-присутствие через блог-контент. Цели 2026: 1,200-2,500 платящих клиентов, $25-55K выручки (средний $22-25/чтение, консервативно 3-5% конверсия). Цели 2027: 7,500-12,000 клиентов, $150-250K выручки с запуском модели подписки (разовые чтения $105-180K + подписки $45-70K от 500-700 подписчиков @ $9.99/мес). Прогнозы основаны на bootstrapped росте: органический SEO-трафик, минимальная платная реклама ($10-20 CAC), 15-20% повторных покупок, 5-8% конверсия в подписки. Дорожная карта: Q1-Q2 2026 старт платного маркетинга + SEO-оптимизация, Q3-Q4 2026 мобильные приложения + модель подписки ($9.99/мес), 2027 многоязычное расширение (RU/EN/UK/BE), 2028+ white-label API. Модель дохода: платные разовые чтения + подписка (2027) + лицензирование API (2028+).',
        be: 'Платформа запушчана ў кастрычніку 2025 для польскага рынку. Першы камерцыйны праект каманды з 3 заснавальнікаў. Асноўны AI-рухавік чытання завершаны з 4 тыпамі паслуг: каханыя гараскопы, гадавое тара, сумяшчальнасць партнёраў, натальныя карты. У цяперашні час прэ-маркетынгавая фаза без платнай рэкламы. Будуем пачатковае SEO-прысутнасць праз блог-кантэнт. Мэты 2026: 1,200-2,500 плацяжных кліентаў, $25-55K выручкі (сярэдні $22-25/чытанне, кансерватыўна 3-5% канверсія). Мэты 2027: 7,500-12,000 кліентаў, $150-250K выручкі з запускам мадэлі падпіскі (разовыя чытанні $105-180K + падпіскі $45-70K ад 500-700 падпісчыкаў @ $9.99/мес). Прагнозы заснаваны на bootstrapped росце: арганічны SEO-трафік, мінімальная платная рэклама ($10-20 CAC), 15-20% паўторных пакупак, 5-8% канверсія ў падпіскі. Дарожная карта: Q1-Q2 2026 старт платнага маркетынгу + SEO-аптымізацыя, Q3-Q4 2026 мабільныя прыкладанні + мадэль падпіскі ($9.99/мес), 2027 шматмоўнае пашырэнне (RU/EN/UK/BE), 2028+ white-label API. Мадэль даходу: платныя разовыя чытанні + падпіска (2027) + ліцэнзаванне API (2028+).',
        pl: 'Platforma uruchomiona w październiku 2025 r. dla rynku polskiego. Pierwszy projekt komercyjny dla 3-osobowego zespołu założycielskiego. Podstawowy silnik czytania AI ukończony z 4 typami usług: horoskopy miłosne, roczny tarot, kompatybilność partnerów, karty urodzenia. Obecnie faza przed-marketingowa bez płatnej reklamy. Budowanie początkowej obecności SEO poprzez treści blogowe. Cele 2026: 1,200-2,500 płacących klientów, 25-55 tys. USD przychodów (średnio 22-25 USD/czytanie, konserwatywnie 3-5% konwersja). Cele 2027: 7,500-12,000 klientów, 150-250 tys. USD przychodów z uruchomieniem modelu subskrypcyjnego (jednorazowe czytania 105-180 tys. USD + subskrypcje 45-70 tys. USD od 500-700 subskrybentów @ 9.99 USD/mies). Prognozy oparte na wzroście bootstrapped: organiczny ruch SEO, minimalne płatne reklamy ($10-20 CAC), 15-20% wskaźnik powtórnych zakupów, 5-8% konwersja subskrypcji. Plan działania: Q1-Q2 2026 start płatnego marketingu + optymalizacja SEO, Q3-Q4 2026 aplikacje mobilne + model subskrypcyjny ($9.99/mies), 2027 ekspansja wielojęzyczna (RU/EN/UK/BE), 2028+ white-label API. Model przychodów: płatne jednorazowe czytania + subskrypcja (2027) + licencjonowanie API (2028+).',
        uk: 'Платформа запущена в жовтні 2025 для польського ринку. Перший комерційний проект команди з 3 засновників. Основний AI-двигун читання завершено з 4 типами послуг: любовні гороскопи, річне таро, сумісність партнерів, натальні карти. Наразі пре-маркетингова фаза без платної реклами. Будуємо початкову SEO-присутність через блог-контент. Цілі 2026: 1,200-2,500 платних клієнтів, $25-55K виручки (середній $22-25/читання, консервативно 3-5% конверсія). Цілі 2027: 7,500-12,000 клієнтів, $150-250K виручки з запуском моделі підписки (разові читання $105-180K + підписки $45-70K від 500-700 підписників @ $9.99/міс). Прогнози засновані на bootstrapped зростанні: органічний SEO-трафік, мінімальна платна реклама ($10-20 CAC), 15-20% повторних покупок, 5-8% конверсія підписок. Дорожня карта: Q1-Q2 2026 старт платного маркетингу + SEO-оптимізація, Q3-Q4 2026 мобільні застосунки + модель підписки ($9.99/міс), 2027 багатомовне розширення (RU/EN/UK/BE), 2028+ white-label API. Модель доходу: платні разові читання + підписка (2027) + ліцензування API (2028+).',
      },
      request: {
        round: {
          en: 'Pre-Seed',
          ru: 'Pre-Seed',
          be: 'Pre-Seed',
          pl: 'Pre-Seed',
          uk: 'Pre-Seed',
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
            email: 'wayworldhelp@gmail.com',
            telegram: '@mieo196',
            linkedin: '',
        },
    },
    status: 'active',
    featured: true,
    publishedAt: '2024-12-01T00:00:00Z',
    updatedAt: '2025-10-08T00:00:00Z',
  },
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
    techStack: ['.Net 9.0','Next.js 14', 'Azure OpenAI', 'TypeScript', 'PostgreSQL', 'Circle CI', 'Digital Ocean', 'Docker', 'Bunny.net CDN'],
    thumbnail: {
      src: '/images/projects/checktruth/thumbnail.png',
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
        en: 'TikTok verification platform operational since Dec 2024. First large-scale project for 3-person founding team. Core features completed: audio transcription (6 languages), claim identification, multi-source fact-checking. 2025 targets: 35K users, $55-85K revenue (display ads $15-25K + API $40-60K from 5-8 enterprise clients). 2026 targets: 150K users, 25-35 API clients, $600-900K revenue (ads $240-360K + API $360-540K). Projections based on 30% organic user growth, 85% ad fill rate, $2.50-3.50 CPM, API pricing $2,000-3,500/mo. Roadmap: Q1-Q3 2025 multi-platform expansion (Instagram, YouTube, Twitter/X, Facebook), Q4 2025 enterprise API beta, 2026 API v1.0 + mobile apps + strategic partnerships. Revenue model: freemium (ad-supported free tools for individuals, premium API for enterprises).',
        ru: 'Платформа проверки TikTok работает с декабря 2024. Первый крупномасштабный проект для команды из 3 основателей. Основные функции завершены: транскрипция аудио (6 языков), выявление утверждений, проверка фактов из нескольких источников. Цели 2025: 35K пользователей, $55-85K выручки (медийная реклама $15-25K + API $40-60K от 5-8 корпоративных клиентов). Цели 2026: 150K пользователей, 25-35 API-клиентов, $600-900K выручки (реклама $240-360K + API $360-540K). Прогнозы основаны на 30% органическом росте, 85% заполнении рекламы, $2.50-3.50 CPM, ценообразовании API $2,000-3,500/мес. Дорожная карта: Q1-Q3 2025 мультиплатформенная экспансия (Instagram, YouTube, Twitter/X, Facebook), Q4 2025 бета корпоративного API, 2026 API v1.0 + мобильные приложения + стратегические партнерства. Модель дохода: freemium (бесплатные инструменты с рекламой для частных лиц, премиум API для предприятий).',
        be: 'Платформа праверкі TikTok працуе з снежня 2024. Першы маштабны праект для каманды з 3 заснавальнікаў. Асноўныя функцыі завершаны: транскрыпцыя аўдыё (6 моў), выяўленне сцвярджэнняў, праверка фактаў з некалькіх крыніц. Мэты 2025: 35K карыстальнікаў, $55-85K выручкі (медыйная рэклама $15-25K + API $40-60K ад 5-8 карпаратыўных кліентаў). Мэты 2026: 150K карыстальнікаў, 25-35 API-кліентаў, $600-900K выручкі (рэклама $240-360K + API $360-540K). Прагнозы заснаваны на 30% арганічным росце, 85% запаўненні рэкламы, $2.50-3.50 CPM, цэнаўтварэнні API $2,000-3,500/мес. Дарожная карта: Q1-Q3 2025 мультыплатформенная экспансія (Instagram, YouTube, Twitter/X, Facebook), Q4 2025 бета карпаратыўнага API, 2026 API v1.0 + мабільныя прыкладанні + стратэгічныя партнёрствы. Мадэль даходу: freemium (бясплатныя інструменты з рэкламай для прыватных асоб, прэміум API для прадпрыемстваў).',
        pl: 'Platforma weryfikacji TikTok działa od grudnia 2024 r. Pierwszy projekt na dużą skalę dla 3-osobowego zespołu założycielskiego. Podstawowe funkcje ukończone: transkrypcja audio (6 języków), identyfikacja twierdzeń, sprawdzanie faktów z wielu źródeł. Cele 2025: 35K użytkowników, $55-85K przychodów (reklamy displayowe $15-25K + API $40-60K od 5-8 klientów korporacyjnych). Cele 2026: 150K użytkowników, 25-35 klientów API, $600-900K przychodów (reklamy $240-360K + API $360-540K). Prognozy oparte na 30% organicznym wzroście, 85% zapełnieniu reklam, $2.50-3.50 CPM, cenie API $2,000-3,500/mies. Plan działania: Q1-Q3 2025 ekspansja wieloplatformowa (Instagram, YouTube, Twitter/X, Facebook), Q4 2025 beta API dla firm, 2026 API v1.0 + aplikacje mobilne + partnerstwa strategiczne. Model przychodów: freemium (darmowe narzędzia z reklamami dla użytkowników indywidualnych, premium API dla firm).',
        uk: 'Платформа перевірки TikTok працює з грудня 2024. Перший великомасштабний проект для команди з 3 засновників. Основні функції завершено: транскрипція аудіо (6 мов), виявлення тверджень, перевірка фактів з декількох джерел. Цілі 2025: 35K користувачів, $55-85K виручки (медійна реклама $15-25K + API $40-60K від 5-8 корпоративних клієнтів). Цілі 2026: 150K користувачів, 25-35 API-клієнтів, $600-900K виручки (реклама $240-360K + API $360-540K). Прогнози засновані на 30% органічному зростанні, 85% заповненні реклами, $2.50-3.50 CPM, ціноутворенні API $2,000-3,500/міс. Дорожня карта: Q1-Q3 2025 мультиплатформена експансія (Instagram, YouTube, Twitter/X, Facebook), Q4 2025 бета корпоративного API, 2026 API v1.0 + мобільні застосунки + стратегічні партнерства. Модель доходу: freemium (безкоштовні інструменти з рекламою для приватних осіб, преміум API для підприємств).',
      },
      request: {
        round: {
          en: 'Pre-Seed',
          ru: 'Pre-Seed',
          be: 'Pre-Seed',
          pl: 'Pre-Seed',
          uk: 'Pre-Seed',
        },
        amount: {
          en: '$200K - $300K',
          ru: '$200K - $300K',
          be: '$200K - $300K',
          pl: '$200K - $300K',
          uk: '$200K - $300K',
        },
      },
        contact: {
            email: 'wayworldhelp@gmail.com',
            telegram: '@mieo196',
            linkedin: '',
        },
    },
    status: 'in-development',
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
