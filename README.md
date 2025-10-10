# Pink-Black Team Landing — Next.js Web Application

Современный одностраничный лэндинг для команды Pink-Black Team с неоновым розово-черным дизайном, фокусом на AI-проекты и привлечение инвесторов.

## 🚀 Быстрый старт 

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для production
npm run build

# Запуск production сервера
npm start
```

Dev-сервер доступен по адресу: **http://localhost:3000**

## ✨ Возможности

### 🌍 Интернационализация
- **5 локалей**: English, Русский, Беларуская, Polski, Українська
- Автоопределение языка браузера
- Переключатель языков в навигации
- SEO оптимизация с hreflang тегами

### 🎨 Неоновый дизайн
- Розово-черная цветовая схема
- CSS-токены для всех цветов и размеров
- Неоновые эффекты свечения (glow effects)
- Адаптивность для всех устройств (320px+)

### 🎬 Анимации
- **Reveal-on-scroll**: IntersectionObserver анимации
- **Параллакс эффекты**: многослойные параллаксы
- **3D карточки**: tilt эффект при наведении
- **Анимированная сетка**: динамический Canvas фон
- **Плавный скролл**: к якорным ссылкам
- Полная поддержка `prefers-reduced-motion`

### 📱 Мобильная адаптация
- Гамбургер-меню с плавной анимацией
- Адаптивная сетка для всех секций
- Touch-friendly интерфейс
- Backdrop для модального меню

### ♿ Доступность
- WCAG AA совместимость
- Контрастные цвета
- Фокус-стили для клавиатурной навигации
- ARIA-метки и семантическая разметка
- Screen reader поддержка

### ⚡ Производительность
- Lazy loading изображений
- SVG заглушки вместо реальных картинок
- Оптимизированные анимации (transform/opacity)
- Throttling для scroll/resize событий
- Next.js автоматическая оптимизация

## 📂 Структура проекта

```
src/web/
├── app/
│   ├── layout.tsx          # Root layout с провайдерами
│   ├── page.tsx            # Главная страница
│   └── globals.css         # Глобальные стили и токены
├── components/
│   ├── Hero.tsx            # Главный экран
│   ├── About.tsx           # О команде
│   ├── Projects.tsx        # Проекты
│   ├── Team.tsx            # Команда
│   ├── Invest.tsx          # Инвестиции
│   ├── Contact.tsx         # Контакты
│   ├── Footer.tsx          # Подвал
│   ├── Navigation.tsx      # Навигация
│   ├── LanguageSwitcher.tsx
│   ├── Reveal.tsx          # Reveal анимации
│   ├── ParallaxLayer.tsx   # Параллакс слои
│   ├── Card3D.tsx          # 3D карточки
│   ├── AnimatedGrid.tsx    # Анимированная сетка
│   ├── Avatar.tsx          # Аватары с градиентами
│   ├── Loading.tsx         # Спиннер загрузки
│   └── SkeletonLoader.tsx  # Skeleton screens
├── hooks/
│   ├── useReveal.tsx       # IntersectionObserver
│   ├── useParallax.tsx     # Параллакс эффекты
│   ├── useSmoothScroll.tsx # Плавный скролл
│   └── useSEO.tsx          # Динамические метатеги
├── i18n/
│   ├── index.tsx           # i18n провайдер и хуки
│   └── locales/
│       ├── en.json
│       ├── ru.json
│       ├── be.json
│       ├── pl.json
│       └── uk.json
└── public/
    └── images/             # Статические изображения
```

## 🎨 Секции лэндинга

1. **Hero** — главный экран с CTA и статистикой
2. **About** — описание команды и миссия
3. **Projects** — портфолио AI-проектов (3-5 карточек)
4. **Team** — профили участников команды (3-7 человек)
5. **Invest** — призыв к инвестициям с CTA
6. **Contact** — форма обратной связи
7. **Footer** — навигация и copyright

## 🔧 Технологии

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **CSS Modules** + глобальные стили
- **IntersectionObserver API**
- **Canvas API** для анимаций
- **Web Animations API**

## 🌈 CSS Токены

Проект использует систему CSS-переменных для консистентности:

- Цвета: `--color-primary`, `--color-secondary`, etc.
- Размеры: `--space-sm`, `--space-md`, etc.
- Типографика: `--font-size-*`, `--font-weight-*`
- Радиусы: `--radius-sm`, `--radius-md`, etc.
- Эффекты: `--glow-primary`, `--glow-soft`, etc.

## 🎯 Производительность

### Оптимизации:
- ✅ Transform/opacity анимации (GPU-accelerated)
- ✅ RequestAnimationFrame для плавных анимаций
- ✅ Throttling для scroll/resize событий
- ✅ Lazy loading для всех изображений
- ✅ SVG заглушки (data URLs)
- ✅ CSS-only анимации где возможно
- ✅ Will-change для критичных элементов

### Цели Lighthouse:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

## 🌐 SEO

- Динамические title/description по локали
- hreflang теги для всех языков
- Open Graph метатеги
- Семантическая HTML разметка
- Structured data (будет добавлено)

## 📱 Поддерживаемые браузеры

- Chrome/Edge (последние 2 версии)
- Firefox (последние 2 версии)
- Safari (последние 2 версии)
- iOS Safari 12+
- Android Chrome 80+

## 🚧 Roadmap

- [ ] Интеграция с CMS для контента
- [ ] Реальная форма отправки в Contact
- [ ] A/B тестирование CTA кнопок
- [ ] Analytics интеграция
- [ ] Темная/светлая тема (опционально)
- [ ] Больше анимаций (частицы, волны)
- [ ] PWA поддержка

## 📄 Лицензия

© 2025 Pink-Black Team. Все права защищены.
