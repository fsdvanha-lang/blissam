# ✦ BLISSAM // Avant-Garde Streetwear Experience & Digital Flagship

SITE - blissam.ru

<div align="center">


[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Sharp](https://img.shields.io/badge/Sharp-Asset_Pipeline-99CC00?style=for-the-badge&logo=node.js&logoColor=white)](https://sharp.pixelplumbing.com/)
[![Oxlint](https://img.shields.io/badge/Oxlint-Blazing_Fast-orange?style=for-the-badge)](https://oxc.rs/)

*Разработано в рамках парадигмы **AI-First Engineering**: от обратного инжиниринга каталога и программной колористики ассетов до создания бескомпромиссного Dark Luxury UX и глубокой интеграции с Telegram Conversational Commerce.*

[Демонстрация](#демонстрация-и-архитектура) • [Что было проделано (AI-First)](#что-было-проделано-ai-first-engineering) • [Стек технологий](#стек-технологий) • [Архитектура](#структура-проекта) • [Запуск](#локальный-запуск)

</div>

---

## О проекте

**BLISSAM** - концептуальный бренд лимитированной одежды и аксессуаров ручной работы (сатин, винтажный деним, натуральная кожа и мех). 

Цель проекта - создать бескомпромиссный цифровой экспириенс, передающий атмосферу темного авангарда и разрушающий шаблоны типовых интернет-магазинов, сохранив при этом **мгновенную конверсию в заказ через Telegram** и высочайшие показатели производительности (Core Web Vitals).

---

## Что было проделано (AI-First Engineering)

Проект спроектирован и реализован по методологии **AI-First Developer**, где искусственный интеллект выступает мультипликатором скорости, архитектурного качества и автоматизации рутины на всех этапах жизненного цикла продукта.

### 1. Архитектурное проектирование и Rapid Prototyping
- **Сквозная разработка в рекордные сроки**: Проектирование дизайн-системы, компонентной архитектуры и интерактивных сценариев с использованием AI-агентов (Antigravity IDE / LLM pair-programming).
- **Dark Luxury Brutalism UI**: Синтез типографики (`Syne`, `Space Grotesk`, `JetBrains Mono`, `Inter`), микро-сеток, глубоких монохромных градиентов (`#0B0B0B`) и акцентного оранжевого неона.
- **Интерактивный микро-UX на Framer Motion**:
  - Кастомный реактивный курсор (`CustomCursor.tsx`) с распознаванием контекста hover-состояний (магнитный эффект к кнопкам, увеличение на медиа, инверсия цвета).
  - Сбалансированный брендовый прелоадер (`Preloader.tsx`) с плавной анимацией появления.
  - Модальная галерея изделия (`ProductModal.tsx`) с поддержкой свайпов, масштабирования превью и интерактивным селектором размеров.
  - Индикатор глубины скролла (`ScrollProgress.tsx`) и плавающий шорткат заказа (`FloatingTelegram.tsx`).

### 2. Реверс-инжиниринг и автоматизация каталога (Data Pipeline)
- **Автоматический парсинг исходных данных**: Написаны кастомные Node.js скрипты для разбора сырого HTML и извлечения `window.__preloadedState__` из профиля бренда.
- **Генерация типизированных моделей данных**: Автоматическое преобразование спарсенных сущностей в строгие TypeScript-типы (`Product`, `Category`, `Price`, `Media`) в `src/data/products.ts` без ручного переноса контента.

### 3. Автоматизированный конвейер графики (Computer Vision & Sharp)
Реализован набор серверных скриптов в каталоге `scripts/` для автоматической подготовки медиа:
- **`scripts/optimize-images.mjs`**: Пакетная конвертация исходных JPEG/PNG в оптимизированный формат WebP с контролем качества и сжатием без визуальных потерь.
- **`scripts/tone_images.cjs`**: Программная тонокоррекция и цветокоррекция фотографий (колоризация, сведение теней и бликов) под единый холодный кинематографичный стиль бренда.
- **`scripts/prepare_hero_about.cjs`**: Автоматическое кадрирование, наложение виньеток и подготовка широкоформатных hero-баннеров.
- **`scripts/update-product-webp.mjs`**: Автоматизированный рефакторинг путей к ассетам в кодовой базе.

### 4. Conversational Commerce Funnel (Telegram Deep Linking)
- Полный отказ от громоздкой корзины в пользу **бесшовной коммуникации с брендом**:
  - `getTelegramOrderUrl(productName, size)`: Формирует прямую ссылку в Telegram с предзаполненным персонализированным сообщением на русском языке с указанием артикула и выбранного размера.
  - `getTelegramRestockUrl(productName)`: Отдельный сценарий для изделий со статусом «Sold Out» с возможностью запросить ресток или индивидуальный пошив в ателье.
- Интеграция событий сбора аналитики (Yandex Metrika goals: просмотр товара, клик по заказу, переход в соцсети).

### 5. Экстремальная оптимизация производительности & Core Web Vitals
- **LCP (Largest Contentful Paint)**: Preload главного баннера `<link rel="preload" as="image" fetchpriority="high">`.
- **Zero CLS (Cumulative Layout Shift)**: Фиксированные соотношения сторон изображений, скелетоны и плавный переход прелоадера.
- **Ультра-быстрый линтинг**: Внедрение **Oxlint** (Rust-based линтер, время проверки всей кодовой базы — **86 миллисекунд**).
- **Размер сборки**: Оптимизированный gzip JS-бандл всего ~121 kB при богатом наборе анимаций.

### 6. Search Engine Optimization (SEO) & Микроразметка
- Полный граф **Schema.org JSON-LD**:
  - `ClothingStore` (информация о бренде, валюта, способы оплаты, социальные сети).
  - `WebSite` и `ItemList`.
  - Отдельные сущности `Product` + `Offer` для каждой модели каталога (цена, наличие, артикул, фото).
- Полноценные теги Open Graph и Twitter Cards для привлекательных сниппетов в Telegram, VK и мессенджерах.

---

## Стек технологий

| Категория | Технологии |
| :--- | :--- |
| **Core Framework** | React 19, TypeScript (Strict Mode), Vite 8 |
| **Styling & Design System** | Tailwind CSS 3.4, PostCSS, Autoprefixer, clsx, tailwind-merge |
| **Motion & Interactivity** | Framer Motion 12, Lucide React Icons |
| **Asset Automation** | Sharp (WebP batch pipeline, tone grading, vignetting) |
| **Code Quality & CI** | Oxlint (Next-gen Rust Linter), TypeScript Compiler (`tsc -b`) |
| **SEO & Microformats** | Schema.org JSON-LD, OpenGraph, Canonical URLs, Semantic HTML5 |

---

## Структура проекта

```text
blissamlanding/
├── public/
│   ├── images/
│   │   ├── hero/            # Оптимизированные WebP-баннеры первого экрана
│   │   ├── about/           # Медиа-материалы блока манифеста
│   │   └── products/        # Обработанные каталожные фото изделий (toned WebP)
├── scripts/                 # Автоматизированный AI-пайплайн обработки контента
│   ├── optimize-images.mjs  # Пакетное сжатие в WebP через Sharp
│   ├── tone_images.cjs      # Программный грейдинг и стилизация фото
│   ├── prepare_hero_about.cjs # Сборка композиционных баннеров
│   ├── update-product-webp.mjs # Автоматизация ссылок на ассеты
│   └── validate-seo.mjs     # Валидатор мета-тегов и микроразметки
├── src/
│   ├── components/          # Модульные React-компоненты
│   │   ├── Header.tsx       # Навигация с динамическим размытием
│   │   ├── Hero.tsx         # Главный экран с акцентным заявлением
│   │   ├── Collection.tsx   # Каталог с фильтрацией по категориям
│   │   ├── ProductCard.tsx  # Карточка с ховер-эффектами и бейджами
│   │   ├── ProductModal.tsx # Модальный просмотр, выбор размера, deep link
│   │   ├── Lookbook.tsx     # Горизонтальная визуальная галерея
│   │   ├── Manifesto.tsx    # Идеология бренда
│   │   ├── MadeDifferent.tsx# Особенности мастерской и материалов
│   │   ├── CustomCursor.tsx # Адаптивный магнитный курсор
│   │   ├── Preloader.tsx    # Брендовый экран загрузки
│   │   ├── TelegramCTA.tsx  # Конверсионный блок перехода в Telegram
│   │   ├── FloatingTelegram.tsx # Плавающая кнопка связи
│   │   └── Footer.tsx       # Подвал со ссылками и копирайтом
│   ├── config/
│   │   └── site.ts          # Единый конфигуратор ссылок, Telegram и метаданных
│   ├── data/
│   │   └── products.ts      # Типизированный каталог изделий
│   ├── types/               # TypeScript интерфейсы
│   ├── utils/               # Вспомогательные утилиты и хелперы
│   ├── App.tsx              # Корневой компонент страницы
│   └── main.tsx             # Точка входа приложения
├── index.html               # SEO-оптимизированный HTML с JSON-LD и Preload
├── tailwind.config.js       # Кастомные токены, шрифты и цвета
└── package.json             # Зависимости и скрипты сборки
```

---

## Локальный запуск

1. **Клонируйте репозиторий**:
   ```bash
   git clone https://github.com/<YOUR-USERNAME>/blissam-landing.git
   cd blissam-landing
   ```

2. **Установите зависимости**:
   ```bash
   npm install
   ```

3. **Запустите сервер разработки**:
   ```bash
   npm run dev
   ```
   Приложение будет доступно по адресу `http://localhost:5173`.

4. **Проверка качества кода**:
   ```bash
   npm run lint     # Сверхбыстрая проверка через Oxlint
   npm run build    # Проверка типов TypeScript и production-сборка
   ```

5. **Запуск конвейера оптимизации изображений**:
   ```bash
   node scripts/optimize-images.mjs
   ```

---

## Результаты и метрики

- **PageSpeed & Core Web Vitals**: Зеленая зона по Performance, Accessibility, Best Practices и SEO.
- **Скорость отклика**: Мгновенный отклик интерактивных элементов, zero layout shift при загрузке.
- **Конверсия**: Прямой переход покупателя в Telegram с сформированным заказом в 1 клик.
- **Производительность разработки**: Сокращение времени создания полнофункционального e-commerce лендинга с кастомным пайплайном ассетов в разы благодаря AI-first подходу.

---
