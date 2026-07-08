import type { ReactNode } from 'react';

export type I18nString = { ru: string; en: string };

export interface Layer {
  number: string;
  title: string;
  description: ReactNode;
}

export interface ProgramItem {
  time: string;
  title: string;
  description: ReactNode;
}

export interface ContextItem {
  id: string;
  title: string;
  content: ReactNode;
}

export interface HistoryItem {
  date: string;
  event: ReactNode;
}

export interface TeamMember {
  name: ReactNode;
  role: string;
  description: ReactNode;
}

export interface Partner {
  name: string;
  note?: string;
  href?: string;
  logo?: string;
}

export interface Organizer {
  name: string;
  shortName: string;
  href?: string;
  logo?: string;
}

export const showDescription =
  '«Интерференция реальностей» — нейроспектакль-импровизация и живой эксперимент научного искусства. Премьера состоялась 16 мая 2026 года на открытии XIV Циолковского Феста в Калуге: спектакль был создан вместе со зрителями в реальном времени — и в таком виде не повторится уже никогда.';

export const showLead =
  'На сцене действуют две системы отражения. Внешняя — компьютерное зрение считывает движение танцовщиков по навигационным маркерам, встроенным в костюм. Внутренняя — ЭЭГ-гиперсканирование двенадцати участников: танцовщиков и зрителей. На экране рождается виртуальная сцена: частицы, исходящие от объектов-двойников, и линии нейросинхронизации — видимые связи между людьми, вошедшими в общее состояние.';

export const showQuestion =
  'Мы не называем эти отражения цифровыми двойниками. Это параллельная реальность, где альтер-эго живут по своим законам и лишь иногда откликаются на то, что происходит здесь. Две реальности сходятся и расходятся, и зритель никогда не знает точно, в какой момент — он может только наблюдать и интерпретировать. А наблюдение уже есть взаимодействие: ты смотришь на сцену, и сцена смотрит на тебя.';

export const layers: Layer[] = [
  {
    number: '01',
    title: 'Физический слой',
    description: (
      <>
        Тела, звук и движение в пространстве{' '}
        <a
          href="https://www.icc40.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:underline"
        >
          ИКЦ
        </a>
        . Без физического присутствия не существует ни события, ни его восприятия.
      </>
    ),
  },
  {
    number: '02',
    title: 'Внутренний слой',
    description:
      'Внутренние состояния участников: паттерны внимания, уровень возбуждения, нейрофизиологические реакции. ЭЭГ регистрирует ритмы мозга — альфа, бета, гамма — каждый из которых отражает своё состояние: расслабление, концентрацию, вовлечённость. Считываются в реальном времени и становятся сценическим материалом.',
  },
  {
    number: '03',
    title: 'Воображаемый слой',
    description:
      'То, что возникает между участниками, когда физическое и внутреннее накладываются друг на друга. Интерференция — не метафора, а механизм.',
  },
];

export const conceptQuote = {
  text: 'Это спектакль о спектакле: мы показываем бэкстейдж сборки сценической вселенной — волшебного мира, который рождается, когда зритель отдаёт ему своё внимание. А внимание — всегда двустороннее взаимодействие.',
  source: (
    <>
      Из рефлексии после премьеры /{' '}
      <a
        href="https://odadream.art/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-primary hover:underline"
      >
        ODA.dream
      </a>{' '}
      / 2026
    </>
  ),
};

export const programTimeline: ProgramItem[] = [
  {
    time: 'Фаза 01',
    title: 'Загрузка',
    description:
      'Заставка-скринсейвер в духе «Матрицы» — отсылка к гипотезе вычислимого мира. Артисты, неотличимые от публики, проявляются в зрительном зале и выходят на сцену, «включая» и «выключая» танец. Под верхней одеждой — крупные навигационные маркеры: публичное предъявление себя системе, желание быть считанным, понятым, оцифрованным.',
  },
  {
    time: 'Фаза 02',
    title: 'Калибровка',
    description:
      'Восемь строгих фигур — линия, пары, диагонали, клин. На экране-зазеркалье выстраиваются те же фигуры: реальный и виртуальный миры принудительно синхронизируются, и зритель учится читать связь между ними.',
  },
  {
    time: 'Фаза 03',
    title: 'Теория',
    description:
      'Восемь сольных эпизодов: свет, звук, тело, мозг, технологии, волны, реальность, драматургия. Голос спектакля описывает сам язык постановки, а танцовщик переводит слова в пластику. Рядом работает переводчик русского жестового языка — ещё одна форма трансформации информации.',
  },
  {
    time: 'Фаза 04',
    title: 'Практика',
    description:
      'Зал вместе с труппой собирает мини-спектакль из пяти сцен по законам драматургии: темы, истории, музыка, свет и роли выбираются здесь и сейчас. Композитор и художник по свету строят партитуру в реальном времени, а в эксперименте четвёртой сцены продолжение выбирает «мозг зала» — по данным нейрогарнитур. В финале весь созданный спектакль воспроизводится целиком.',
  },
  {
    time: 'Фаза 05',
    title: 'Рефлексия',
    description:
      'Открытый разговор со зрителями: вопросы, пояснения, комментарии к увиденному. Интеграция пережитого опыта — обязательная часть спектакля.',
  },
];

export const contextItems: ContextItem[] = [
  {
    id: 'everett',
    title: 'Эверетт, Менский и множественность реальностей',
    content: (
      <>
        Спектакль вдохновлён многомировой интерпретацией{' '}
        <a
          href="https://ru.wikipedia.org/wiki/%D0%AD%D0%B2%D0%B5%D1%80%D0%B5%D1%82%D1%82,_%D0%A5%D1%8C%D1%8E"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:underline"
        >
          Хью Эверетта III
        </a>{' '}
        (1957) и работами{' '}
        <a
          href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9,_%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB_%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B8%D1%87"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:underline"
        >
          Михаила Менского
        </a>{' '}
        о сознании и квантовых измерениях. В квантовой механике акт наблюдения изменяет систему. Мы
        переносим этот вопрос в театр: меняет ли присутствие зрителя то, что происходит на сцене?
      </>
    ),
  },
  {
    id: 'stanislavsky',
    title: 'Театральная линия: Станиславский и Евреинов',
    content: (
      <>
        <a
          href="https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D0%BD%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D0%BA%D0%B8%D0%B9,_%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B8%D1%87"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:underline"
        >
          Константин Станиславский
        </a>{' '}
        искал подлинное переживание актёра, которое делает воплощение убедительным.{' '}
        <a
          href="https://ru.wikipedia.org/wiki/%D0%95%D0%B2%D1%80%D0%B5%D0%B8%D0%BD%D0%BE%D0%B2,_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%B8%D1%87"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:underline"
        >
          Николай Евреинов
        </a>{' '}
        рассматривал зрителя как участника, который достраивает реальность в своём восприятии.
        Спектакль соединяет эти две линии: актёр и зритель участвуют в создании события наравне.
      </>
    ),
  },
  {
    id: 'neiry',
    title: 'Технологический партнёр: Neiry',
    content: (
      <>
        Группа компаний{' '}
        <a
          href="https://neiry.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:underline"
        >
          Neiry
        </a>{' '}
        — технологический партнёр спектакля. Нейрогарнитуры{' '}
        <a
          href="https://neiry.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:underline"
        >
          Neiry Headband Pro
        </a>{' '}
        считывают электрическую активность мозга через кожу головы, регистрируя ритмы: от медленной
        дельты (1–4 Гц) до быстрой гаммы (30–100 Гц). Эти данные в реальном времени передаются в
        медиасистему спектакля и влияют на сценографию, звук и поведение актёров.
      </>
    ),
  },
  {
    id: 'history',
    title: 'История проекта',
    content: (
      <>
        2024 — конференция «КОД провинции», рождение идеи коллаборации{' '}
        <a
          href="https://odadream.art/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:underline"
        >
          ODA.dream
        </a>{' '}
        × Neiry. 2025 — закрытая лаборатория, первые ЭЭГ-эксперименты; «Проект Шрёдингер» на XIII
        Циолковском Фесте. Зима 2026 — интеграция нейроинтерфейсов{' '}
        <a
          href="https://neiry.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:underline"
        >
          Neiry
        </a>{' '}
        и разработка «Интерференции реальностей». 16 мая 2026 — мировая премьера на XIV{' '}
        <a
          href="https://t-fest.online/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:underline"
        >
          Циолковском Фесте
        </a>
        , ИКЦ, Калуга.
      </>
    ),
  },
  {
    id: 'now',
    title: 'Зачем это сейчас',
    content:
      'Спектакль предлагает рассматривать коллективное внимание и синхронизацию как ресурс. Не утверждение — опыт. Не ответ — вопрос.',
  },
];

export const projectHistory: HistoryItem[] = [
  { date: '2024', event: 'Конференция «КОД провинции» — рождение идеи' },
  { date: '2025', event: 'Закрытая лаборатория; «Проект Шрёдингер», XIII Циолковский Фест' },
  { date: 'Зима 2026', event: 'Разработка «Интерференции», интеграция Neiry' },
  { date: '16 мая 2026', event: 'Мировая премьера / XIV Циолковский Фест, ИКЦ, Калуга' },
];

export const faqItems: ContextItem[] = [
  {
    id: 'what-is',
    title: 'Что такое нейроспектакль?',
    content:
      'Это спектакль, в котором нейротехнологии считывают состояние зрителей — внимание, возбуждение, нейрофизиологические паттерны — и передают их в медиасистему. ЭЭГ фиксирует ритмы мозга от дельты до гаммы, каждый из которых отражает своё состояние. Эти данные в реальном времени влияют на сценографию, звук и действие.',
  },
  {
    id: 'knowledge',
    title: 'Нужно ли что-то знать заранее?',
    content:
      'Нет. Никакой специальной подготовки не требуется. Приходите такими, какие вы есть — спектакль строится на вашем живом присутствии, а не на знаниях.',
  },
  {
    id: 'headsets',
    title: 'Как работают нейрогарнитуры?',
    content: (
      <>
        Мы используем{' '}
        <a
          href="https://neiry.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:underline"
        >
          Neiry Headband Pro
        </a>{' '}
        — портативные ЭЭГ-устройства. Электроды касаются кожи головы и считывают электрическую
        активность мозга. Это безинвазивно, безопасно и не вызывает дискомфорта.
      </>
    ),
  },
  {
    id: 'safety',
    title: 'Это безопасно?',
    content:
      'Да. ЭЭГ — это пассивное считывание электрической активности, которую мозг сам излучает. Устройства ничего не передают в мозг, а только принимают сигнал. Это та же технология, что используется в медицине десятилетиями.',
  },
  {
    id: 'duration',
    title: 'Сколько длится спектакль?',
    content:
      'Основное действие — около 50 минут без антракта. После него — открытый разговор со зрителями: обязательная часть спектакля, но её продолжительность заранее не фиксирована.',
  },
  {
    id: 'children',
    title: 'Можно ли прийти с детьми?',
    content:
      'Возрастное ограничение — 12+. Спектакль рассчитан на внимательного взрослого зрителя, готового к непредсказуемому опыту. Детям младше 12 лет может быть сложно удерживать фокус в течение всего действия.',
  },
  {
    id: 'mocap',
    title: 'Что такое MoCap и как он задействован в спектакле?',
    content:
      'Motion Capture фиксирует траектории движения танцовщиков в пространстве. В связке с ЭЭГ-данными зрителей это создаёт двухканальную систему обратной связи: внутренние состояния аудитории влияют на сценографию, а движение тел актёров — на звук. Оба потока данных обрабатываются в реальном времени.',
  },
  {
    id: 'booking',
    title: 'Как организовать показ?',
    content: (
      <>
        Спектакль готов к гастролям. Монтаж — 1 день, площадка от 50 м² с затемнением и
        аудиосистемой. Команда 6–8 человек, нейрогарнитуры на 30 зрителей. Напишите нам на{' '}
        <a
          href="mailto:hi@odadream.art?subject=Show inquiry / Запрос на показ"
          className="text-accent-primary hover:underline"
        >
          hi@odadream.art
        </a>{' '}
        или в{' '}
        <a
          href="https://t.me/odadream_info"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:underline"
        >
          Telegram
        </a>{' '}
        — обсудим формат и даты.
      </>
    ),
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'ODA.dream',
    role: 'Авторы идеи',
    description:
      'Ольга и Далер Арабовы. Художественное объединение, работающее на стыке науки, технологий и перформанса.',
  },
  {
    name: 'Ксения Голыжбина',
    role: 'Автор идеи, хореограф-постановщик',
    description: '',
  },
  {
    name: 'Анна Сенатова',
    role: 'Художественный руководитель фестиваля, продюсер спектакля',
    description: '',
  },
  {
    name: 'Танцовщики ИТБ',
    role: 'Авторы идеи, исполнители',
    description: (
      <>
        Инновационный Театр Балета при{' '}
        <a
          href="https://www.icc40.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:underline"
        >
          ИКЦ
        </a>
        , Калуга — тела, через которые проходит вся система.
      </>
    ),
  },
  {
    name: 'Александр Шестернин',
    role: 'Композитор / live-set',
    description: '',
  },
  {
    name: 'Аркадий Лаврентьев',
    role: 'Художник по свету',
    description: '',
  },
];

export const performers = 'Танцовщики Инновационного Театра Балета, зрители с нейрогарнитурами';

export const venueInfo = {
  name: (
    <>
      <a
        href="https://www.icc40.ru/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-primary hover:underline"
      >
        ИКЦ
      </a>{' '}
      — Инновационный культурный центр
    </>
  ),
  address: 'Калуга, ул. Октябрьская, 17а',
  festival: (
    <>
      XIV Фестиваль Современного Искусства «
      <a
        href="https://t-fest.online/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-primary hover:underline"
      >
        Циолковский Фест
      </a>
      »
    </>
  ),
  festivalDates: '16–23 мая 2026',
  artisticDirector: 'Анна Сенатова',
  coordinator: 'Дарья Казаку',
};

export const partners: Partner[] = [
  {
    name: 'Neiry',
    note: 'технологический партнёр — лидер в области разработки и применения нейротехнологий',
    href: 'https://neiry.ru',
    logo: '/partners/NEIRY.svg',
  },
  {
    name: 'ТСХР',
    note: 'Творческий союз художников России',
    href: 'https://tcxp.ru/',
    logo: '/partners/TSHR.svg',
  },
];

export const organizers: Organizer[] = [
  {
    name: 'Министерство культуры и туризма Калужской области',
    shortName: 'Минкульт КО',
    href: 'https://vk.com/min_kult_ko',
    logo: '/partners/MINKULT_KO.svg',
  },
  {
    name: 'Инновационный культурный центр и Инновационный театр балета',
    shortName: 'ИКЦ и ИТБ',
    href: 'https://www.icc40.ru/',
    logo: '/partners/IKC.svg',
  },
  {
    name: 'Тема этого года — «Горизонты»',
    shortName: 'XIV Фестиваль современного искусства «Циолковский Фест»',
    href: 'https://t-fest.online/',
    logo: '/partners/TSIALKOV.svg',
  },
  {
    name: 'Творческий дуэт Ольги и Далера Арабовых',
    shortName: 'ODA.dream',
    href: 'https://odadream.art/',
    logo: '/partners/ODA.svg',
  },
];

// ---------------------------------------------------------------------------
// PHOTO GALLERY
// ---------------------------------------------------------------------------

export interface GalleryPhoto {
  src: string;
  alt: I18nString;
  size: 'featured' | 'landscape' | 'portrait' | 'small' | 'wide';
}

// Премьера 16.05.2026, ИКЦ, Калуга · фотограф — Юлия Дударева
export const galleryPhotos: GalleryPhoto[] = [
  {
    src: '/photos/premiere/scene4-comp1.webp',
    alt: {
      ru: 'Фаза «Практика» · танец на фоне виртуальной сцены: частицы и интерфейс системы',
      en: '"Practice" phase · dance against the virtual stage: particles and system interface',
    },
    size: 'featured',
  },
  {
    src: '/photos/premiere/theory-reality.webp',
    alt: {
      ru: 'Фаза «Теория» · эпизод «Реальность»: соло на фоне карты уровней реальности',
      en: '"Theory" phase · "Reality" episode: solo against the reality-levels map',
    },
    size: 'portrait',
  },
  {
    src: '/photos/premiere/theory-waves.webp',
    alt: {
      ru: 'Фаза «Теория» · эпизод «Волны»: восприятие как волновой процесс',
      en: '"Theory" phase · "Waves" episode: perception as a wave process',
    },
    size: 'portrait',
  },
  {
    src: '/photos/premiere/headsets.webp',
    alt: {
      ru: 'Эксперимент · зрителям надевают нейрогарнитуры Neiry',
      en: 'Experiment · fitting Neiry EEG headsets on the audience',
    },
    size: 'small',
  },
  {
    src: '/photos/premiere/audience-mic.webp',
    alt: {
      ru: 'Со-авторство · зритель предлагает историю для следующей сцены',
      en: 'Co-authorship · a spectator offers a story for the next scene',
    },
    size: 'small',
  },
  {
    src: '/photos/premiere/scene5-final.webp',
    alt: {
      ru: 'Финал · линии нейросинхронизации между зрителями и танцовщиками',
      en: 'Finale · neural synchronisation lines between audience and dancers',
    },
    size: 'landscape',
  },
  {
    src: '/photos/premiere/scene2-play.webp',
    alt: {
      ru: 'Сцена 2 · на экране — пультовая: свет и звук собираются live',
      en: 'Scene 2 · on screen — the control desks: light and sound assembled live',
    },
    size: 'landscape',
  },
  {
    src: '/photos/premiere/scene4-comp2.webp',
    alt: {
      ru: 'Сцена 4 · красная световая партитура, силуэты в контровом свете',
      en: 'Scene 4 · red light score, silhouettes in backlight',
    },
    size: 'landscape',
  },
  {
    src: '/photos/premiere/bows.webp',
    alt: {
      ru: 'Поклоны · труппа и постановщики; на экране — кадры спектакля',
      en: 'Bows · the company and creators; performance footage on screen',
    },
    size: 'wide',
  },
];

// ---------------------------------------------------------------------------
// BACKSTAGE («Кухня»)
// ---------------------------------------------------------------------------

export interface BackstagePhoto {
  src: string;
  alt: I18nString;
  orientation: 'landscape' | 'portrait';
}

export interface BackstageQuote {
  text: I18nString;
  source: I18nString;
  href: string;
}

export const backstageTitle: I18nString = {
  ru: 'Кухня',
  en: 'Backstage',
};

export const backstageIntro: I18nString = {
  ru: 'Месяц постановки: методология драматургии, физика процесса, нейрофизиология и философия природы реальности. Двенадцать нейрогарнитур Neiry, live-состав — композитор и художник по свету, работающие в реальном времени, — и труппа, готовившаяся к многовариантности событий, к которой невозможно подготовиться до конца.',
  en: 'A month of staging: dramaturgy methodology, process physics, neurophysiology and the philosophy of the nature of reality. Twelve Neiry EEG headsets, a live crew — a composer and a light artist working in real time — and a company preparing for a multiplicity of outcomes that no one can fully prepare for.',
};

export const backstagePhotos: BackstagePhoto[] = [
  {
    src: '/photos/kitchen/rehearsal-plan.webp',
    alt: {
      ru: 'Репетиция финала: поэтапный план на проекторе',
      en: 'Final rehearsal: the stage-by-stage plan projected',
    },
    orientation: 'landscape',
  },
  {
    src: '/photos/kitchen/score-mapping.webp',
    alt: {
      ru: 'Разметка партитуры сцен: история, свет, музыка, роли',
      en: 'Mapping the scene score: story, light, music, roles',
    },
    orientation: 'portrait',
  },
  {
    src: '/photos/kitchen/writing-floor.webp',
    alt: {
      ru: 'Труппа записывает сценарии на полу репетиционного зала',
      en: 'The company writes scenarios on the studio floor',
    },
    orientation: 'landscape',
  },
  {
    src: '/photos/kitchen/tech-desk.webp',
    alt: {
      ru: 'Стол техконтура: двенадцать нейрогарнитур Neiry перед настройкой',
      en: 'The tech desk: twelve Neiry headsets before setup',
    },
    orientation: 'portrait',
  },
];

export const backstageQuotes: BackstageQuote[] = [
  {
    text: {
      ru: '«Двенадцать живых потоков сознания, вплетённых в действие на сцене. За этот год мы углубились в методологию драматургии, физику процесса, нейрофизиологию и философию природы реальности и сознания. Не для того, чтобы рассказать об этом, — для того, чтобы показать».',
      en: '"Twelve living streams of consciousness woven into the action on stage. Over this year we went deep into dramaturgy methodology, process physics, neurophysiology and the philosophy of reality and consciousness. Not to tell about it — to show it."',
    },
    source: {
      ru: 'Из анонса постановки · Telegram, апрель 2026',
      en: 'From the production announcement · Telegram, April 2026',
    },
    href: 'https://t.me/odadream/739',
  },
  {
    text: {
      ru: '«Мы все готовимся к многовариантности событий! Но парадокс в том, что до конца подготовиться к этому невозможно — с каждой новой репетицией всплывают всё новые сценарии. Какая реальность встретит нас на самом спектакле?»',
      en: '"We are all preparing for a multiplicity of outcomes! But the paradox is that you cannot fully prepare — every new rehearsal surfaces new scenarios. Which reality will meet us at the performance itself?"',
    },
    source: {
      ru: 'Из репетиционного дневника · Telegram, май 2026',
      en: 'From the rehearsal diary · Telegram, May 2026',
    },
    href: 'https://t.me/odadream/746',
  },
];

export const backstageLinkLabel: I18nString = {
  ru: 'Читать пост в Telegram →',
  en: 'Read the post on Telegram →',
};

// ---------------------------------------------------------------------------
// CHRONICLE
// ---------------------------------------------------------------------------

export interface ChronicleEvent {
  year: string;
  label: I18nString;
  description: I18nString;
  type: 'origin' | 'show' | 'award';
  link?: string;
  isPrehistory?: boolean;
}

export const chronicleEvents: ChronicleEvent[] = [
  {
    year: '2024',
    label: { ru: 'Конференция «КОД провинции»', en: '"Code of Province" Conference' },
    description: {
      ru: 'Рождение идеи коллаборации ODA Dream × Neiry на стыке нейронауки и перформанса.',
      en: 'Birth of the ODA Dream × Neiry collaboration idea at the intersection of neuroscience and performance.',
    },
    type: 'origin',
    link: 'https://odadream.art/',
    isPrehistory: true,
  },
  {
    year: '2025',
    label: { ru: 'Закрытая лаборатория', en: 'Closed Laboratory' },
    description: {
      ru: 'Первые эксперименты с ЭЭГ и коллективным вниманием. Вошла в документальный фильм.',
      en: 'First EEG and collective attention experiments. Featured in a documentary film.',
    },
    type: 'origin',
    link: 'https://odadream.art/',
    isPrehistory: true,
  },
  {
    year: '2025',
    label: { ru: 'Проект Шрёдингер', en: 'Project Schrödinger' },
    description: {
      ru: 'Первый публичный спектакль. XIII Циолковский Фест, Калуга.',
      en: 'First public performance. XIII Tsiolkovsky Fest, Kaluga.',
    },
    type: 'show',
    link: 'https://odadream.art/',
    isPrehistory: true,
  },
  {
    year: 'Апрель 2026 / April 2026',
    label: { ru: 'Интерференция — Анонс', en: 'Interference — Announcement' },
    description: {
      ru: 'Открытие сайта, старт регистрации на XIV Циолковский Фест.',
      en: 'Site launch, registration opens for XIV Tsiolkovsky Fest.',
    },
    type: 'show',
    link: 'https://kaluga-2026.interference.odadream.art',
  },
  {
    year: '16 мая 2026 / May 16, 2026',
    label: { ru: 'Интерференция — Премьера', en: 'Interference — World Premiere' },
    description: {
      ru: 'Спектакль открыл XIV Циолковский Фест (ИКЦ, Калуга) и состоялся при полной системе: ЭЭГ-гиперсканирование ×12, трекинг танцовщиков, live-свет и live-звук, тифлокомментарий и перевод на РЖЯ.',
      en: 'The performance opened the XIV Tsiolkovsky Fest (ICC, Kaluga) with the full system running: EEG hyperscanning ×12, dancer tracking, live light and sound, audio description and sign language interpretation.',
    },
    type: 'show',
  },
  {
    year: 'Лето 2026 / Summer 2026',
    label: { ru: '«Золотая Маска» — заявка', en: 'Golden Mask — Submission' },
    description: {
      ru: 'Подача на Российскую национальную театральную премию: конкурс спектаклей балета, номинация «Современный танец» (сезон 2025–2026).',
      en: 'Submission to the Russian National Theatre Award: ballet competition, Contemporary Dance nomination (2025–2026 season).',
    },
    type: 'award',
  },
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export interface InstitutionFormat {
  number: string;
  title: I18nString;
  description: I18nString;
}

export const institutionsHeadline: I18nString = {
  ru: 'Для институций',
  en: 'For Institutions',
};

export const institutionsPitch: I18nString = {
  ru: '«Интерференция реальностей» — готовый к гастролям иммерсивный нейроспектакль. Технология, команда и производственный пакет позволяют адаптировать показ под площадку партнёра в течение нескольких недель.',
  en: '"Interference of Realities" is a tour-ready immersive neuro-performance. The technology, team, and production package allow adaptation to a partner venue within a few weeks.',
};

export const institutionFormats: InstitutionFormat[] = [
  {
    number: '01',
    title: { ru: 'Корпоративные события', en: 'Corporate Events' },
    description: {
      ru: 'Внутренние и внешние мероприятия компаний — от стратегических сессий до презентаций для клиентов. Спектакль создаёт незабываемый опыт коллективного взаимодействия.',
      en: 'Internal and external corporate events — from strategic sessions to client presentations. The performance creates an unforgettable collective experience.',
    },
  },
  {
    number: '02',
    title: { ru: 'Государственные фестивали и биеннале', en: 'State Festivals & Biennales' },
    description: {
      ru: 'Фестивали современного искусства, культурные биеннале, региональные программы. Опыт участия в Циолковском Фесте (Минкульт КО) и работа с институтом театра балета.',
      en: 'Contemporary art festivals, cultural biennales, regional programmes. Experience at Tsiolkovsky Fest (Ministry of Culture) and collaboration with a ballet theatre institute.',
    },
  },
  {
    number: '03',
    title: { ru: 'Международные площадки', en: 'International Venues' },
    description: {
      ru: 'Музеи, арт-центры, медиа-фестивали. Готовим документацию для Ars Electronica и аналогичных платформ. Возможна адаптация под международный контекст.',
      en: 'Museums, art centres, media festivals. Preparing documentation for Ars Electronica and similar platforms. Adaptation to international context is possible.',
    },
  },
];

export const institutionsTechSpecs: I18nString = {
  ru: 'Технические требования: зал от 50 м², затемнение, аудиосистема. Нейрогарнитуры — до 30 зрителей одновременно. Монтаж — 1 день. Команда — 6–8 человек.',
  en: 'Technical requirements: venue from 50 m², blackout, audio system. EEG headsets — up to 30 simultaneous audience members. Setup — 1 day. Team — 6–8 people.',
};

export const institutionsCTA: I18nString = {
  ru: 'Обсудить показ',
  en: 'Discuss a Show',
};

// ---------------------------------------------------------------------------
// HERO (bilingual strings for post-premiere mode)
// ---------------------------------------------------------------------------

export const heroFormat: I18nString = {
  ru: 'Нейроспектакль · Импровизация · Эксперимент',
  en: 'Neuro-performance · Improvisation · Experiment',
};

export const heroPremiereBadge: I18nString = {
  ru: 'Спектакль состоялся · 16 мая 2026 · Калуга',
  en: 'Performance completed · May 16, 2026 · Kaluga',
};

export const heroQuote: I18nString = {
  ru: '«Что если спектакль полностью рождается только в момент, когда вы направляете на него внимание?»',
  en: '"What if a performance only fully comes into being in the moment you direct your attention to it?"',
};

export const heroCTAPrimary: I18nString = {
  ru: 'Заказать показ',
  en: 'Book a Show',
};

export const heroCTASecondary: I18nString = {
  ru: 'Как это было',
  en: 'See how it was',
};

// ---------------------------------------------------------------------------
// MEDIA (bilingual)
// ---------------------------------------------------------------------------

export const mediaTitle: I18nString = {
  ru: 'Медиа',
  en: 'Media',
};

export const mediaSubtitle: I18nString = {
  ru: 'Документация перформанса',
  en: 'Performance Documentation',
};

export const mediaDescription: I18nString = {
  ru: 'Фото, видео и архивные материалы с премьеры 16 мая 2026. Полная запись — для коллекционеров и музеев.',
  en: 'Photos, video and archival materials from the May 16, 2026 premiere. Full recording — for collectors and museums.',
};
