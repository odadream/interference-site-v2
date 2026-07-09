import type { ReactNode } from 'react';

export type I18nString = { ru: string; en: string };
export type I18nNode = { ru: ReactNode; en: ReactNode };

const extLink = (href: string, label: string) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-accent-primary hover:underline"
  >
    {label}
  </a>
);

// ---------------------------------------------------------------------------
// SHARED SECTION HEADINGS
// ---------------------------------------------------------------------------

export interface SectionHeading {
  tag: I18nString; // small label in SectionTag
  titleA: I18nString; // peach part
  titleB: I18nString; // primary part
  intro?: I18nNode;
}

export const headings: Record<string, SectionHeading> = {
  gallery: {
    tag: { ru: 'Фотографии', en: 'Photography' },
    titleA: { ru: 'Как это', en: 'How it' },
    titleB: { ru: 'было', en: 'was' },
    intro: {
      ru: 'Премьера 16 мая 2026, ИКЦ, Калуга. Фотографии — Юлия Дударева. Нажмите на кадр, чтобы рассмотреть его на весь экран.',
      en: 'Premiere on 16 May 2026, ICC, Kaluga. Photography by Yulia Dudareva. Click any frame to view it fullscreen.',
    },
  },
  about: {
    tag: { ru: 'О спектакле', en: 'About' },
    titleA: { ru: 'Интерференция', en: 'Interference' },
    titleB: { ru: 'реальностей', en: 'of Realities' },
  },
  program: {
    tag: { ru: 'Структура', en: 'Structure' },
    titleA: { ru: 'Пять', en: 'Five' },
    titleB: { ru: 'фаз', en: 'Phases' },
    intro: {
      ru: (
        <>
          Так спектакль прошёл 16 мая 2026 в {extLink('https://www.icc40.ru/', 'ИКЦ')}, Калуга — и
          так он устроен: структура фаз фиксирована, а их содержание рождается заново на каждом
          показе вместе с залом.
        </>
      ),
      en: (
        <>
          This is how the performance unfolded on 16 May 2026 at{' '}
          {extLink('https://www.icc40.ru/', 'ICC')}, Kaluga — and how it is built: the sequence of
          phases is fixed, while their content is born anew at every show together with the
          audience.
        </>
      ),
    },
  },
  context: {
    tag: { ru: 'Контекст', en: 'Context' },
    titleA: { ru: 'Теория', en: 'Theory' },
    titleB: { ru: 'и источники', en: '& Sources' },
    intro: {
      ru: 'Спектакль стоит на пересечении квантовой физики, русского театра модерна и нейронауки. Ни одно из этих имён здесь не декорация — каждое задаёт рабочую координату, в которой мы строили действие. Ниже — то, что мы закладывали в постановку.',
      en: 'The performance stands at the intersection of quantum physics, early-20th-century Russian theatre and neuroscience. None of these names is decoration here — each sets a working coordinate we built the action within. Below is what we embedded in the piece.',
    },
  },
  interference: {
    tag: { ru: 'Лаборатория', en: 'Laboratory' },
    titleA: { ru: 'Интерференция', en: 'Interference' },
    titleB: { ru: 'волн', en: 'of Waves' },
  },
  backstage: {
    tag: { ru: 'Кухня', en: 'Backstage' },
    titleA: { ru: 'Как собирался', en: 'How it was' },
    titleB: { ru: 'спектакль', en: 'made' },
  },
  faq: {
    tag: { ru: 'Вопросы и ответы', en: 'Q & A' },
    titleA: { ru: 'Что', en: 'What is' },
    titleB: { ru: 'полезно знать', en: 'good to know' },
  },
  authors: {
    tag: { ru: 'Титры', en: 'Credits' },
    titleA: { ru: 'Кто сделал', en: 'Who made' },
    titleB: { ru: 'спектакль', en: 'the show' },
    intro: {
      ru: 'Спектакль создан командой, для которой границы между наукой, технологией и искусством стёрты намеренно. И зрители — полноправные соисполнители.',
      en: 'The performance was created by a team that deliberately erases the borders between science, technology and art. And the audience are full co-performers.',
    },
  },
  institutions: {
    tag: { ru: 'Институциям', en: 'For Institutions' },
    titleA: { ru: 'Заказать', en: 'Book' },
    titleB: { ru: 'показ', en: 'a show' },
  },
  chronicle: {
    tag: { ru: 'Хроника', en: 'Chronicle' },
    titleA: { ru: 'История', en: 'History of' },
    titleB: { ru: 'произведения', en: 'the work' },
  },
};

// ---------------------------------------------------------------------------
// ABOUT
// ---------------------------------------------------------------------------

export const showDescription: I18nString = {
  ru: '«Интерференция реальностей» — нейроспектакль-импровизация и живой эксперимент научного искусства. Премьера состоялась 16 мая 2026 года на открытии XIV Циолковского Феста в Калуге: спектакль был создан вместе со зрителями в реальном времени — и в таком виде не повторится уже никогда.',
  en: '“Interference of Realities” is an improvised neuro-performance and a live experiment in science-art. It premiered on 16 May 2026, opening the 14th Tsiolkovsky Fest in Kaluga: the piece was built together with the audience in real time — and in that exact form it will never happen again.',
};

export const showLead: I18nString = {
  ru: 'На сцене действуют две системы отражения. Внешняя — компьютерное зрение считывает движение танцовщиков по навигационным маркерам, встроенным в костюм. Внутренняя — ЭЭГ-гиперсканирование двенадцати участников: танцовщиков и зрителей. На экране рождается виртуальная сцена: частицы, исходящие от объектов-двойников, и линии нейросинхронизации — видимые связи между людьми, вошедшими в общее состояние.',
  en: 'Two mirroring systems run on stage. The outer one — computer vision — tracks the dancers through navigation markers built into their costumes. The inner one — EEG hyperscanning of twelve participants, dancers and spectators alike. A virtual stage is born on screen: particles emitted by the twin-objects, and lines of neural synchronisation — visible bonds between people who have entered a shared state.',
};

export const showQuestion: I18nString = {
  ru: 'Мы не называем эти отражения цифровыми двойниками. Это параллельная реальность, где альтер-эго живут по своим законам и лишь иногда откликаются на то, что происходит здесь. Две реальности сходятся и расходятся, и зритель никогда не знает точно, в какой момент — он может только наблюдать и интерпретировать. А наблюдение уже есть взаимодействие: ты смотришь на сцену, и сцена смотрит на тебя.',
  en: 'We do not call these reflections digital twins. It is a parallel reality, where the alter-egos live by their own laws and only sometimes echo what happens here. The two realities converge and diverge, and the spectator never quite knows when — one can only watch and interpret. And watching is already interaction: you look at the stage, and the stage looks back at you.',
};

export interface Layer {
  number: string;
  title: I18nString;
  description: I18nNode;
}

export const layers: Layer[] = [
  {
    number: '01',
    title: { ru: 'Физический слой', en: 'Physical layer' },
    description: {
      ru: (
        <>
          Тела, звук и движение в пространстве {extLink('https://www.icc40.ru/', 'ИКЦ')}. Без
          физического присутствия не существует ни события, ни его восприятия.
        </>
      ),
      en: (
        <>
          Bodies, sound and movement in the space of {extLink('https://www.icc40.ru/', 'ICC')}.
          Without physical presence there is neither the event nor its perception.
        </>
      ),
    },
  },
  {
    number: '02',
    title: { ru: 'Внутренний слой', en: 'Inner layer' },
    description: {
      ru: 'Внутренние состояния участников: паттерны внимания, уровень возбуждения, нейрофизиологические реакции. ЭЭГ регистрирует ритмы мозга — альфа, бета, гамма — каждый из которых отражает своё состояние: расслабление, концентрацию, вовлечённость. Считываются в реальном времени и становятся сценическим материалом.',
      en: 'The inner states of the participants: patterns of attention, level of arousal, neurophysiological responses. EEG registers the brain rhythms — alpha, beta, gamma — each reflecting a state of its own: relaxation, focus, engagement. Read in real time, they become stage material.',
    },
  },
  {
    number: '03',
    title: { ru: 'Воображаемый слой', en: 'Imaginary layer' },
    description: {
      ru: 'То, что возникает между участниками, когда физическое и внутреннее накладываются друг на друга. Интерференция — не метафора, а механизм.',
      en: 'What arises between the participants when the physical and the inner overlap. Interference here is not a metaphor but a mechanism.',
    },
  },
];

export const conceptQuote: { text: I18nString; source: I18nNode } = {
  text: {
    ru: 'Это спектакль о спектакле: мы показываем бэкстейдж сборки сценической вселенной — волшебного мира, который рождается, когда зритель отдаёт ему своё внимание. А внимание — всегда двустороннее взаимодействие.',
    en: 'This is a performance about performance: we show the backstage of assembling a scenic universe — the magical world that comes into being when a spectator gives it their attention. And attention is always a two-way interaction.',
  },
  source: {
    ru: <>Из рефлексии после премьеры / {extLink('https://odadream.art/', 'ODA.dream')} / 2026</>,
    en: <>After-premiere reflection / {extLink('https://odadream.art/', 'ODA.dream')} / 2026</>,
  },
};

export const aboutCtaNote: I18nString = {
  ru: 'Премьера состоялась. Спектакль готов к гастролям — следующий показ может пройти на вашей площадке.',
  en: 'The premiere has happened. The show is tour-ready — the next performance could take place at your venue.',
};

export const aboutCtaLabel: I18nString = {
  ru: 'Обсудить показ',
  en: 'Discuss a show',
};

// ---------------------------------------------------------------------------
// PROGRAM (five phases)
// ---------------------------------------------------------------------------

export interface ProgramItem {
  time: I18nString;
  title: I18nString;
  description: I18nString;
  /** Optional film still from the recording, shown beside the phase */
  still?: { src: string; alt: I18nString };
}

export const programTimeline: ProgramItem[] = [
  {
    time: { ru: 'Фаза 01', en: 'Phase 01' },
    title: { ru: 'Загрузка', en: 'Boot-up' },
    description: {
      ru: 'Заставка-скринсейвер в духе «Матрицы» — отсылка к гипотезе вычислимого мира. Артисты, неотличимые от публики, проявляются в зрительном зале и выходят на сцену, «включая» и «выключая» танец. Под верхней одеждой — крупные навигационные маркеры: публичное предъявление себя системе, желание быть считанным, понятым, оцифрованным.',
      en: 'A screensaver-style intro in the spirit of “The Matrix” — a nod to the hypothesis of a computable world. Performers, indistinguishable from the audience, surface in the auditorium and move onto the stage, switching their dance on and off. Under their outer clothes — large navigation markers: a public offering of oneself to the system, a wish to be read, understood, digitised.',
    },
    still: {
      src: '/stills/boot-screensaver.webp',
      alt: {
        ru: 'Загрузка: тёмный зал, на экране — скринсейвер в духе «Матрицы»',
        en: 'Boot-up: a dark hall, a Matrix-style screensaver on the screen',
      },
    },
  },
  {
    time: { ru: 'Фаза 02', en: 'Phase 02' },
    title: { ru: 'Калибровка', en: 'Calibration' },
    description: {
      ru: 'Восемь строгих фигур — линия, пары, диагонали, клин. На экране-зазеркалье выстраиваются те же фигуры: реальный и виртуальный миры принудительно синхронизируются, и зритель учится читать связь между ними.',
      en: 'Eight strict formations — line, pairs, diagonals, wedge. On the mirror-screen the same figures assemble: the real and the virtual worlds are forcibly synchronised, and the spectator learns to read the link between them.',
    },
    still: {
      src: '/stills/calibration-square.webp',
      alt: {
        ru: 'Калибровка: квадрат из артистов на сцене и тот же квадрат на экране-зазеркалье',
        en: 'Calibration: a square of performers on stage and the same square on the mirror screen',
      },
    },
  },
  {
    time: { ru: 'Фаза 03', en: 'Phase 03' },
    title: { ru: 'Теория', en: 'Theory' },
    description: {
      ru: 'Восемь сольных эпизодов: свет, звук, тело, мозг, технологии, волны, реальность, драматургия. Голос спектакля описывает сам язык постановки, а танцовщик переводит слова в пластику. Рядом работает переводчик русского жестового языка — ещё одна форма трансформации информации.',
      en: 'Eight solo episodes: light, sound, body, brain, technology, waves, reality, dramaturgy. The voice of the performance describes the very language of the piece, while a dancer translates the words into movement. A Russian sign-language interpreter works alongside — one more form of transforming information.',
    },
    still: {
      src: '/stills/interference.webp',
      alt: {
        ru: 'Соло на фоне экрана с инфографикой «Явления волн» — в списке буквально значится интерференция',
        en: 'A solo against the “Wave phenomena” infographic screen — interference is literally on the list',
      },
    },
  },
  {
    time: { ru: 'Фаза 04', en: 'Phase 04' },
    title: { ru: 'Практика', en: 'Practice' },
    description: {
      ru: 'Зал вместе с труппой собирает мини-спектакль из пяти сцен по законам драматургии: темы, истории, музыка, свет и роли выбираются здесь и сейчас. Композитор и художник по свету строят партитуру в реальном времени, а в эксперименте четвёртой сцены продолжение выбирает «мозг зала» — по данным нейрогарнитур. В финале весь созданный спектакль воспроизводится целиком.',
      en: 'Together with the company, the audience assembles a mini-performance of five scenes by the laws of dramaturgy: themes, stories, music, light and roles are chosen here and now. The composer and the lighting designer build the score in real time, and in the experiment of the fourth scene the continuation is chosen by “the brain of the room” — from the neuro-headset data. In the finale the whole assembled performance is played back in full.',
    },
    still: {
      src: '/stills/headsets-olya.webp',
      alt: {
        ru: 'Зрителям-участникам надевают нейрогарнитуры перед экспериментом четвёртой сцены',
        en: 'Audience volunteers are fitted with neuro-headsets before the fourth-scene experiment',
      },
    },
  },
  {
    time: { ru: 'Фаза 05', en: 'Phase 05' },
    title: { ru: 'Рефлексия', en: 'Reflection' },
    description: {
      ru: 'Открытый разговор со зрителями: вопросы, пояснения, комментарии к увиденному. Интеграция пережитого опыта — обязательная часть спектакля.',
      en: 'An open conversation with the audience: questions, explanations, comments on what was seen. Integrating the lived experience is an obligatory part of the show.',
    },
    still: {
      src: '/stills/audience-waving.webp',
      alt: {
        ru: 'Зал в зелёном свете, зрители с поднятыми руками — совместное действие',
        en: 'The hall in green light, spectators with raised arms — a shared action',
      },
    },
  },
];

// ---------------------------------------------------------------------------
// CONTEXT — philosophy & sources
// ---------------------------------------------------------------------------

export interface ContextItem {
  id: string;
  title: I18nString;
  content: I18nNode;
}

export const contextItems: ContextItem[] = [
  {
    id: 'observer',
    title: {
      ru: 'Наблюдатель и наблюдаемое',
      en: 'The observer and the observed',
    },
    content: {
      ru: (
        <>
          Главная ось спектакля — акт наблюдения. В квантовой механике наблюдение не пассивно: оно
          изменяет систему, которую измеряет. Мы переносим этот вопрос в театр. С первых минут
          артисты сидят среди зрителей и растворяются в зале, размывая границу субъекта и объекта. У
          спектакля есть образ: когда ты смотришь в глаз кита — огромного, как бездна, — самое
          животрепещущее в том, что бездна смотрит и разглядывает тебя в ответ. Так и на сцене:
          зритель смотрит на актёров, а актёры смотрят на зрителя. Внимание — не улица с
          односторонним движением, а взаимодействие.
        </>
      ),
      en: (
        <>
          The central axis of the piece is the act of observation. In quantum mechanics, observation
          is not passive: it changes the system it measures. We carry that question into theatre.
          From the first minutes the performers sit among the spectators and dissolve into the room,
          blurring the line between subject and object. The show holds an image: when you look into
          the eye of a whale — vast as an abyss — the most alive thing is that the abyss looks back
          and studies you. So too on stage: the spectator watches the performers, and the performers
          watch the spectator. Attention is not a one-way street but an interaction.
        </>
      ),
    },
  },
  {
    id: 'everett',
    title: {
      ru: 'Эверетт, Менский и множественность реальностей',
      en: 'Everett, Mensky and the multiplicity of realities',
    },
    content: {
      ru: (
        <>
          Название и логика спектакля опираются на многомировую интерпретацию квантовой механики{' '}
          {extLink(
            'https://ru.wikipedia.org/wiki/%D0%AD%D0%B2%D0%B5%D1%80%D0%B5%D1%82%D1%82,_%D0%A5%D1%8C%D1%8E',
            'Хью Эверетта III'
          )}{' '}
          (1957) и на работы физика{' '}
          {extLink(
            'https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9,_%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB_%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B8%D1%87',
            'Михаила Менского'
          )}{' '}
          о связи сознания и квантового измерения. Возможные состояния мира сосуществуют в
          суперпозиции; наблюдение «выбирает» одно из них. Спектакль превращает это в драматургию:
          история существует во множестве вариантов, и коллективный выбор зала — какую тему, музыку,
          роль, финал — каждый раз склоняет её к одной из реальностей.
        </>
      ),
      en: (
        <>
          The title and logic of the piece draw on the many-worlds interpretation of quantum
          mechanics by{' '}
          {extLink('https://en.wikipedia.org/wiki/Hugh_Everett_III', 'Hugh Everett III')} (1957) and
          on the work of physicist{' '}
          {extLink('https://en.wikipedia.org/wiki/Michael_Mensky', 'Michael Mensky')} on the link
          between consciousness and quantum measurement. The possible states of the world coexist in
          superposition; observation “selects” one of them. The performance turns this into
          dramaturgy: the story exists in many variants, and the collective choice of the room —
          which theme, music, role, ending — tilts it toward one of the realities every time.
        </>
      ),
    },
  },
  {
    id: 'mht',
    title: {
      ru: 'МХТ и Первая студия: правда и «зерно»',
      en: 'MAT and the First Studio: truth and the “seed”',
    },
    content: {
      ru: (
        <>
          Художественно спектакль наследует русскому театру модерна. Московский Художественный театр
          (1898,{' '}
          {extLink(
            'https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D0%BD%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D0%BA%D0%B8%D0%B9,_%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B8%D1%87',
            'Станиславский'
          )}{' '}
          и Немирович-Данченко) искал правду переживания и правду действия. У Немировича-Данченко
          есть понятие «зерна» — эмоционального ядра спектакля и роли, без которого теряется
          цельность. В импровизации это «зерно» задаётся не написанным сюжетом, а рамками правил и
          ритмом поочерёдных ходов зрителя и танцора — именно они держат целостность вечера.
        </>
      ),
      en: (
        <>
          Artistically the piece inherits from early-20th-century Russian theatre. The Moscow Art
          Theatre (1898,{' '}
          {extLink('https://en.wikipedia.org/wiki/Konstantin_Stanislavski', 'Stanislavski')} and
          Nemirovich-Danchenko) searched for the truth of experience and the truth of action.
          Nemirovich-Danchenko has the notion of the “seed” — the emotional core of a production and
          a role, without which wholeness is lost. In improvisation this “seed” is set not by a
          written plot but by the frame of rules and the rhythm of alternating moves between
          spectator and dancer — and it is they that hold the evening together.
        </>
      ),
    },
  },
  {
    id: 'chekhov',
    title: {
      ru: 'Михаил Чехов: воображаемая реальность',
      en: 'Michael Chekhov: imagined reality',
    },
    content: {
      ru: (
        <>
          {extLink(
            'https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%85%D0%BE%D0%B2,_%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%B8%D1%87',
            'Михаил Чехов'
          )}
          , ученик Станиславского по Первой студии МХТ, развил собственный метод: художественный
          образ рождается через воображение и «психологический жест», а не через слияние с личной
          травмой. Актёр как бы наблюдает персонаж во внешнем воображении — отсюда бережность к
          психике исполнителя. Рождение мира в моменте, через образ и тело, без заранее
          закреплённого текста — это чеховская логика. Танцор, получая импульс от зрителя, работает
          в режиме «образ на расстоянии»: современная пластическая импровизация, созвучная этой
          традиции.
        </>
      ),
      en: (
        <>
          {extLink('https://en.wikipedia.org/wiki/Michael_Chekhov', 'Michael Chekhov')}, a pupil of
          Stanislavski at the Moscow Art Theatre First Studio, developed a method of his own: the
          artistic image is born through imagination and the “psychological gesture”, not through
          merging with personal trauma. The actor, as it were, observes the character in an outer
          imagination — hence a care for the performer’s psyche. A world born in the moment, through
          image and body, without a fixed text, is Chekhovian logic. Receiving an impulse from the
          spectator, the dancer works in an “image at a distance” mode: contemporary movement
          improvisation, in tune with that tradition.
        </>
      ),
    },
  },
  {
    id: 'evreinov',
    title: {
      ru: 'Николай Евреинов: зритель как со-творец',
      en: 'Nikolai Evreinov: the spectator as co-creator',
    },
    content: {
      ru: (
        <>
          {extLink(
            'https://ru.wikipedia.org/wiki/%D0%95%D0%B2%D1%80%D0%B5%D0%B8%D0%BD%D0%BE%D0%B2,_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%B8%D1%87',
            'Николай Евреинов'
          )}{' '}
          в теории монодрамы рассматривал внешний спектакль как выражение внутреннего спектакля
          зрителя: сцена показывает не только сюжет, а поле восприятия и внутренних процессов.
          Зритель не пассивный наблюдатель ремесла, а активный со-творец смысла. У Евреинова этот
          «внутренний спектакль» оставался невидимым — мы пытаемся его материализовать: поочерёдные
          ходы зала и танцора формализуют со-творчество, а линии нейросинхронизации и когерентности
          делают коллективное поле наблюдаемым.
        </>
      ),
      en: (
        <>
          {extLink('https://en.wikipedia.org/wiki/Nikolai_Evreinov', 'Nikolai Evreinov')}, in his
          theory of monodrama, treated the outer performance as an expression of the spectator’s
          inner performance: the stage shows not only a plot but a field of perception and inner
          process. The spectator is not a passive observer of craft but an active co-creator of
          meaning. For Evreinov this “inner performance” stayed invisible — we try to materialise
          it: the alternating moves of room and dancer formalise co-authorship, while the lines of
          neural synchronisation and coherence make the collective field observable.
        </>
      ),
    },
  },
  {
    id: 'parallel',
    title: {
      ru: 'Параллельная реальность, а не двойник',
      en: 'A parallel reality, not a twin',
    },
    content: {
      ru: (
        <>
          Мы намеренно не называем виртуальный слой «точным цифровым двойником». Объекты на экране —
          скорее альтер-эго, живущие по своим законам: испускают и притягивают частицы, реагируют на
          движение и звук, и лишь иногда напрямую отражают то, что происходит в зале. Две реальности
          — физическая и математически-абстрактная — то синхронизируются, то расходятся. Зритель не
          знает точно, в какой момент связь становится буквальной, — он может только предполагать и
          достраивать. Эта неопределённость и есть художественный сюжет: интерференция как наложение
          миров, которое не сводится ни к одному из них.
        </>
      ),
      en: (
        <>
          We deliberately avoid calling the virtual layer an “exact digital twin”. The objects on
          screen are rather alter-egos living by their own laws: they emit and attract particles,
          respond to movement and sound, and only sometimes mirror directly what happens in the
          room. The two realities — the physical and the mathematically abstract — now synchronise,
          now drift apart. The spectator never quite knows when the link becomes literal — one can
          only guess and complete it. That uncertainty is the artistic plot itself: interference as
          an overlay of worlds that reduces to neither.
        </>
      ),
    },
  },
  {
    id: 'hyperscanning',
    title: {
      ru: 'Гиперсканирование и коллективное поле',
      en: 'Hyperscanning and the collective field',
    },
    content: {
      ru: (
        <>
          Один и тот же слой в спектакле называется тремя словами: ЭЭГ (сырые ритмы мозга),
          гиперсканирование (одновременный съём данных с группы) и коллективный биофидбек (замыкание
          состояния группы на драматургию и визуал). Когда ЭЭГ подключена, между людьми на
          виртуальной сцене чертятся линии — параметр нейросинхронизации: показатель того, что двое
          или больше вошли в одно состояние. Цвет линии кодирует мозговой ритм — например, голубой
          для альфы, зелёный для беты. Так невидимая связь между людьми становится наблюдаемой. Идея
          созвучна мысли нейрофизиолога{' '}
          {extLink(
            'https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BF%D0%BB%D0%B0%D0%BD,_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%AF%D0%BA%D0%BE%D0%B2%D0%BB%D0%B5%D0%B2%D0%B8%D1%87',
            'Александра Каплана'
          )}{' '}
          о том, что воспринимаемая реальность — это реконструкция, которую мозг строит сам.
        </>
      ),
      en: (
        <>
          One and the same layer goes by three names in the show: EEG (raw brain rhythms),
          hyperscanning (simultaneous data capture across a group) and collective biofeedback
          (closing the group’s state back onto dramaturgy and visuals). When EEG is connected, lines
          are drawn between people on the virtual stage — the neural-synchronisation parameter: an
          index that two or more have entered a shared state. The colour of a line encodes the brain
          rhythm — say, blue for alpha, green for beta. An invisible bond between people becomes
          observable. The idea echoes neuroscientist{' '}
          {extLink('https://en.wikipedia.org/wiki/Alexander_Kaplan', 'Alexander Kaplan')}
          ’s thought that perceived reality is a reconstruction the brain builds on its own.
        </>
      ),
    },
  },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export const faqItems: ContextItem[] = [
  {
    id: 'what-is',
    title: { ru: 'Что такое нейроспектакль?', en: 'What is a neuro-performance?' },
    content: {
      ru: 'Это спектакль, в котором нейротехнологии считывают состояние зрителей — внимание, возбуждение, нейрофизиологические паттерны — и передают их в медиасистему. ЭЭГ фиксирует ритмы мозга от дельты до гаммы, каждый из которых отражает своё состояние. Эти данные в реальном времени влияют на сценографию, звук и действие.',
      en: 'It is a performance in which neurotechnology reads the audience’s state — attention, arousal, neurophysiological patterns — and feeds it into the media system. EEG captures brain rhythms from delta to gamma, each reflecting a distinct state. In real time these data shape the scenography, the sound and the action.',
    },
  },
  {
    id: 'knowledge',
    title: { ru: 'Нужно ли что-то знать заранее?', en: 'Do I need any prior knowledge?' },
    content: {
      ru: 'Нет. Никакой специальной подготовки не требуется. Приходите такими, какие вы есть — спектакль строится на вашем живом присутствии, а не на знаниях.',
      en: 'No. No special preparation is required. Come as you are — the performance is built on your live presence, not on knowledge.',
    },
  },
  {
    id: 'headsets',
    title: { ru: 'Как работают нейрогарнитуры?', en: 'How do the neuro-headsets work?' },
    content: {
      ru: (
        <>
          Мы используем {extLink('https://neiry.ru', 'Neiry Headband')} — портативные
          ЭЭГ-устройства. Электроды касаются кожи головы и считывают электрическую активность мозга.
          Это безынвазивно, безопасно и не вызывает дискомфорта.
        </>
      ),
      en: (
        <>
          We use the {extLink('https://neiry.ru', 'Neiry Headband')} — portable EEG devices.
          Electrodes touch the scalp and read the brain’s electrical activity. It is non-invasive,
          safe and causes no discomfort.
        </>
      ),
    },
  },
  {
    id: 'safety',
    title: { ru: 'Это безопасно?', en: 'Is it safe?' },
    content: {
      ru: 'Да. ЭЭГ — это пассивное считывание электрической активности, которую мозг сам излучает. Устройства ничего не передают в мозг, а только принимают сигнал. Это та же технология, что используется в медицине десятилетиями.',
      en: 'Yes. EEG is a passive reading of the electrical activity the brain itself emits. The devices send nothing into the brain; they only receive the signal. It is the same technology used in medicine for decades.',
    },
  },
  {
    id: 'duration',
    title: { ru: 'Сколько длится спектакль?', en: 'How long is the performance?' },
    content: {
      ru: 'Основное действие — около 50 минут без антракта. После него — открытый разговор со зрителями: обязательная часть спектакля, но её продолжительность заранее не фиксирована.',
      en: 'The main action runs about 50 minutes without an interval. It is followed by an open conversation with the audience: an obligatory part of the show, though its length is not fixed in advance.',
    },
  },
  {
    id: 'children',
    title: { ru: 'Можно ли прийти с детьми?', en: 'Can I come with children?' },
    content: {
      ru: 'Возрастное ограничение — 12+. Спектакль рассчитан на внимательного взрослого зрителя, готового к непредсказуемому опыту. Детям младше 12 лет может быть сложно удерживать фокус в течение всего действия.',
      en: 'The age rating is 12+. The performance is meant for an attentive adult viewer ready for an unpredictable experience. Children under 12 may find it hard to hold focus throughout.',
    },
  },
  {
    id: 'mocap',
    title: {
      ru: 'Что такое трекинг движения в спектакле?',
      en: 'What is the motion tracking in the show?',
    },
    content: {
      ru: 'Компьютерное зрение фиксирует траектории движения танцовщиков по навигационным маркерам на костюмах. В связке с ЭЭГ-данными это создаёт двухканальную систему: внешнее движение тел и внутренние состояния участников вместе управляют виртуальной сценой. Оба потока обрабатываются в реальном времени.',
      en: 'Computer vision captures the dancers’ trajectories via navigation markers on their costumes. Combined with the EEG data, this makes a two-channel system: the outer movement of bodies and the inner states of participants together drive the virtual stage. Both streams are processed in real time.',
    },
  },
];

export const faqIntro: I18nNode = {
  ru: (
    <>
      Если вы не нашли ответ на свой вопрос — {extLink('mailto:hi@odadream.art', 'hi@odadream.art')}
      .
    </>
  ),
  en: (
    <>
      If you didn’t find the answer to your question —{' '}
      {extLink('mailto:hi@odadream.art', 'hi@odadream.art')}.
    </>
  ),
};

// ---------------------------------------------------------------------------
// CREDITS (full titres)
// ---------------------------------------------------------------------------

export interface CreditGroup {
  role: I18nString;
  names: I18nString[];
}

export const creditsGroups: CreditGroup[] = [
  {
    role: { ru: 'Авторы идеи', en: 'Concept & idea' },
    names: [
      { ru: 'ODA.dream® — Ольга и Далер Арабовы', en: 'ODA.dream® — Olga and Daler Arabov' },
      { ru: 'Ксения Голыжбина', en: 'Ksenia Golyzhbina' },
    ],
  },
  {
    role: { ru: 'Хореограф-постановщик', en: 'Choreographer-director' },
    names: [{ ru: 'Ксения Голыжбина', en: 'Ksenia Golyzhbina' }],
  },
  {
    role: { ru: 'Пластическая разработка', en: 'Movement development' },
    names: [
      { ru: 'Ксения Голыжбина совместно с труппой', en: 'Ksenia Golyzhbina with the company' },
    ],
  },
  {
    role: { ru: 'Структура и драматургия', en: 'Structure & dramaturgy' },
    names: [
      { ru: 'Ксения Голыжбина', en: 'Ksenia Golyzhbina' },
      { ru: 'Ольга Арабова', en: 'Olga Arabova' },
      { ru: 'Артём Савин', en: 'Artem Savin' },
    ],
  },
  {
    role: { ru: 'Рефлексия · коучинг · фасилитация', en: 'Reflection · coaching · facilitation' },
    names: [
      { ru: 'Ольга Арабова', en: 'Olga Arabova' },
      { ru: 'Ксения Голыжбина', en: 'Ksenia Golyzhbina' },
    ],
  },
  {
    role: {
      ru: 'Исполнительный продюсер · худрук «Циолковский фест»',
      en: 'Executive producer · Tsiolkovsky Fest artistic director',
    },
    names: [{ ru: 'Анна Сенатова', en: 'Anna Senatova' }],
  },
  {
    role: { ru: 'Продюсер', en: 'Producer' },
    names: [{ ru: 'Далер Арабов', en: 'Daler Arabov' }],
  },
  {
    role: { ru: 'Композитор · live-set · sound-design', en: 'Composer · live-set · sound design' },
    names: [{ ru: 'Александр Шестернин', en: 'Alexander Shesternin' }],
  },
  {
    role: { ru: 'Художник по свету', en: 'Lighting designer' },
    names: [{ ru: 'Аркадий Лаврентьев', en: 'Arkady Lavrentyev' }],
  },
  {
    role: { ru: 'Звукорежиссёр', en: 'Sound engineer' },
    names: [{ ru: 'Александр Рощин', en: 'Alexander Roshchin' }],
  },
  {
    role: { ru: 'Голос спектакля', en: 'Voice of the performance' },
    names: [{ ru: 'Кирилл Бессонов', en: 'Kirill Bessonov' }],
  },
  {
    role: { ru: 'Ведущая', en: 'Host' },
    names: [{ ru: 'Виолетта Савельева', en: 'Violetta Savelyeva' }],
  },
  {
    role: {
      ru: 'Техническая реализация · визуал · афиша · сайт · тексты голоса',
      en: 'Technical realisation · visuals · poster · website · voice texts',
    },
    names: [
      {
        ru: 'Далер Арабов совместно с ИИ-ассистентами',
        en: 'Daler Arabov with AI assistants',
      },
    ],
  },
  {
    role: { ru: 'Тифлокомментатор', en: 'Audio description' },
    names: [{ ru: 'Дарья Казаку', en: 'Darya Kazaku' }],
  },
  {
    role: { ru: 'Переводчик русского жестового языка', en: 'Russian sign-language interpreter' },
    names: [{ ru: 'Александр Казаку', en: 'Alexander Kazaku' }],
  },
  {
    role: { ru: 'Оператор-постановщик · монтаж', en: 'Director of photography · editing' },
    names: [{ ru: 'Алексей Шмелёв', en: 'Alexey Shmelev' }],
  },
  {
    role: { ru: 'Фотограф', en: 'Photographer' },
    names: [{ ru: 'Юлия Дударева', en: 'Yulia Dudareva' }],
  },
  {
    role: { ru: 'Видеоинженер', en: 'Video engineer' },
    names: [{ ru: 'Влад Зуев', en: 'Vlad Zuev' }],
  },
  {
    role: { ru: 'Технологический партнёр', en: 'Technology partner' },
    names: [
      {
        ru: 'Группа компаний Neiry — Александр Дымов',
        en: 'Neiry group of companies — Alexander Dymov',
      },
    ],
  },
  {
    role: { ru: 'Предоставленное оборудование', en: 'Equipment provided by' },
    names: [
      { ru: 'Антон Романовский', en: 'Anton Romanovsky' },
      { ru: 'Кирилл Малышев', en: 'Kirill Malyshev' },
    ],
  },
  {
    role: { ru: 'ИИ-ассистенты', en: 'AI assistants' },
    names: [
      { ru: 'ChatGPT', en: 'ChatGPT' },
      { ru: 'Claude', en: 'Claude' },
      { ru: 'Cursor', en: 'Cursor' },
      { ru: 'Kimi', en: 'Kimi' },
    ],
  },
  {
    role: {
      ru: 'Творческий союз художников России (ТСХР)',
      en: 'Russian Union of Artists (TSKhR)',
    },
    names: [{ ru: 'Ирина Арнаут', en: 'Irina Arnaut' }],
  },
  {
    role: { ru: 'Особая благодарность', en: 'Special thanks' },
    names: [{ ru: 'Олег Хузин', en: 'Oleg Khuzin' }],
  },
];

export const ensembleTitle: I18nString = {
  ru: 'Исполнители и соавторы пластического языка · Инновационный театр балета ИКЦ',
  en: 'Performers & co-authors of the movement language · Innovative Ballet Theatre, ICC',
};

export const ensembleNames: I18nString[] = [
  { ru: 'Артур Микоян', en: 'Artur Mikoyan' },
  { ru: 'Екатерина Афанасьева', en: 'Ekaterina Afanasyeva' },
  { ru: 'Дмитрий Данилов', en: 'Dmitry Danilov' },
  { ru: 'Полина Каверина', en: 'Polina Kaverina' },
  { ru: 'Антон Кузнецов', en: 'Anton Kuznetsov' },
  { ru: 'Дарья Каменская', en: 'Darya Kamenskaya' },
  { ru: 'Артём Савин', en: 'Artem Savin' },
  { ru: 'Артём Самойлов', en: 'Artem Samoylov' },
  { ru: 'София Карташова', en: 'Sofia Kartashova' },
  { ru: 'Ирина Якухнова', en: 'Irina Yakukhnova' },
  { ru: 'Вадим Лавренцов', en: 'Vadim Lavrentsov' },
  { ru: 'Виолетта Савельева', en: 'Violetta Savelyeva' },
];

export const audienceCredit: I18nString = {
  ru: 'Зрители — соисполнители спектакля',
  en: 'The audience — co-performers of the show',
};

// ---------------------------------------------------------------------------
// VENUE & FESTIVAL
// ---------------------------------------------------------------------------

export const venueBlock = {
  venueLabel: { ru: 'Площадка', en: 'Venue' } as I18nString,
  venueName: {
    ru: <>{extLink('https://www.icc40.ru/', 'ИКЦ')} — Инновационный культурный центр</>,
    en: <>{extLink('https://www.icc40.ru/', 'ICC')} — Innovative Cultural Centre</>,
  } as I18nNode,
  address: { ru: 'Калуга, ул. Октябрьская, 17а', en: 'Kaluga, Oktyabrskaya St. 17a' } as I18nString,
  festivalLabel: { ru: 'Фестиваль', en: 'Festival' } as I18nString,
  festivalName: {
    ru: (
      <>
        XIV Фестиваль современного искусства «
        {extLink('https://t-fest.online/', 'Циолковский Фест')}»
      </>
    ),
    en: (
      <>14th Contemporary Art Festival “{extLink('https://t-fest.online/', 'Tsiolkovsky Fest')}”</>
    ),
  } as I18nNode,
  festivalDates: { ru: '16–23 мая 2026', en: '16–23 May 2026' } as I18nString,
  artisticDirector: {
    ru: 'Художественный руководитель: Анна Сенатова',
    en: 'Artistic director: Anna Senatova',
  } as I18nString,
};

// ---------------------------------------------------------------------------
// PARTNERS & ORGANIZERS (Authors section logo rows)
// ---------------------------------------------------------------------------

export interface Partner {
  name: string;
  note?: I18nString;
  href?: string;
  logo?: string;
}

export interface Organizer {
  name: I18nString;
  shortName: string;
  href?: string;
  logo?: string;
}

export const organizersLabel: I18nString = { ru: 'Организаторы', en: 'Organisers' };
export const partnersLabel: I18nString = { ru: 'Партнёры', en: 'Partners' };

export const partners: Partner[] = [
  {
    name: 'Neiry',
    note: {
      ru: 'технологический партнёр — лидер в области нейротехнологий',
      en: 'technology partner — a leader in neurotechnology',
    },
    href: 'https://neiry.ru',
    logo: '/partners/NEIRY.svg',
  },
  {
    name: 'ТСХР',
    note: {
      ru: 'Творческий союз художников России',
      en: 'Russian Union of Artists',
    },
    href: 'https://tcxp.ru/',
    logo: '/partners/TSHR.svg',
  },
];

export const organizers: Organizer[] = [
  {
    name: {
      ru: 'Министерство культуры и туризма Калужской области',
      en: 'Ministry of Culture and Tourism of the Kaluga Region',
    },
    shortName: 'Минкульт КО',
    href: 'https://vk.com/min_kult_ko',
    logo: '/partners/MINKULT_KO.svg',
  },
  {
    name: {
      ru: 'Инновационный культурный центр, Калуга',
      en: 'Innovative Cultural Centre, Kaluga',
    },
    shortName: 'ИКЦ',
    href: 'https://www.icc40.ru/',
    logo: '/partners/IKC.svg',
  },
  {
    name: {
      ru: 'Инновационный театр балета при ИКЦ',
      en: 'Innovative Ballet Theatre at the ICC',
    },
    shortName: 'ИТБ',
    href: 'https://www.icc40.ru/collectives/innovatsionnyy-teatr-baleta',
    logo: '/partners/ITB.svg',
  },
  {
    name: {
      ru: 'XIV Фестиваль современного искусства, тема года — «Горизонты»',
      en: '14th Contemporary Art Festival, this year’s theme — “Horizons”',
    },
    shortName: 'Циолковский Фест',
    href: 'https://t-fest.online/',
    logo: '/partners/TSIALKOV.svg',
  },
  {
    name: {
      ru: 'Творческий дуэт Ольги и Далера Арабовых',
      en: 'The creative duo of Olga and Daler Arabov',
    },
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
      en: '“Practice” phase · dance against the virtual stage: particles and system interface',
    },
    size: 'featured',
  },
  {
    src: '/photos/premiere/theory-reality.webp',
    alt: {
      ru: 'Фаза «Теория» · эпизод «Реальность»: соло на фоне карты уровней реальности',
      en: '“Theory” phase · “Reality” episode: a solo against the reality-levels map',
    },
    size: 'portrait',
  },
  {
    src: '/photos/premiere/theory-waves.webp',
    alt: {
      ru: 'Фаза «Теория» · эпизод «Волны»: восприятие как волновой процесс',
      en: '“Theory” phase · “Waves” episode: perception as a wave process',
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
      en: 'Finale · neural-synchronisation lines between audience and dancers',
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
      en: 'Scene 4 · a red light score, silhouettes in backlight',
    },
    size: 'wide',
  },
  {
    src: '/photos/premiere/bows.webp',
    alt: {
      ru: 'Поклоны · труппа и постановщики; на экране — кадры спектакля',
      en: 'Bows · the company and the creators; performance footage on screen',
    },
    size: 'landscape',
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

export const backstageIntro: I18nString = {
  ru: 'Месяц постановки: методология драматургии, физика процесса, нейрофизиология и философия природы реальности. Двенадцать нейрогарнитур Neiry, live-состав — композитор и художник по свету, работающие в реальном времени, — и труппа, готовившаяся к многовариантности событий, к которой невозможно подготовиться до конца.',
  en: 'A month of staging: dramaturgy methodology, the physics of the process, neurophysiology and the philosophy of the nature of reality. Twelve Neiry headsets, a live crew — a composer and a lighting designer working in real time — and a company preparing for a multiplicity of outcomes that no one can fully prepare for.',
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
      en: '“Twelve living streams of consciousness woven into the action on stage. Over this year we went deep into dramaturgy methodology, the physics of the process, neurophysiology and the philosophy of reality and consciousness. Not to tell about it — to show it.”',
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
      en: '“We are all preparing for a multiplicity of outcomes! But the paradox is that you cannot fully prepare — every new rehearsal surfaces new scenarios. Which reality will meet us at the performance itself?”',
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
    label: { ru: 'Конференция «КОД провинции»', en: '“Code of the Province” conference' },
    description: {
      ru: 'Рождение идеи коллаборации ODA.dream × Neiry на стыке нейронауки и перформанса.',
      en: 'The ODA.dream × Neiry collaboration is born at the intersection of neuroscience and performance.',
    },
    type: 'origin',
    link: 'https://odadream.art/',
    isPrehistory: true,
  },
  {
    year: '2025',
    label: { ru: 'Закрытая лаборатория', en: 'Closed laboratory' },
    description: {
      ru: 'Первые эксперименты с ЭЭГ и коллективным вниманием. Вошла в документальный фильм.',
      en: 'First experiments with EEG and collective attention. Featured in a documentary film.',
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
      en: 'The first public performance. 13th Tsiolkovsky Fest, Kaluga.',
    },
    type: 'show',
    link: 'https://odadream.art/',
    isPrehistory: true,
  },
  {
    year: '16 мая 2026 / 16 May 2026',
    label: { ru: 'Интерференция — премьера', en: 'Interference — world premiere' },
    description: {
      ru: 'Спектакль открыл XIV Циолковский Фест (ИКЦ, Калуга) при полной системе: ЭЭГ-гиперсканирование ×12, трекинг танцовщиков, live-свет и live-звук, тифлокомментарий и перевод на РЖЯ.',
      en: 'The performance opened the 14th Tsiolkovsky Fest (ICC, Kaluga) with the full system running: EEG hyperscanning ×12, dancer tracking, live light and sound, audio description and sign-language interpretation.',
    },
    type: 'show',
  },
  {
    year: 'Лето 2026 / Summer 2026',
    label: { ru: '«Золотая Маска» — заявка', en: 'Golden Mask — submission' },
    description: {
      ru: 'Подача на Российскую национальную театральную премию: конкурс спектаклей балета, номинация «Современный танец» (сезон 2025–2026).',
      en: 'Submission to the Russian National Theatre Award: ballet competition, Contemporary Dance nomination (2025–2026 season).',
    },
    type: 'award',
  },
];

export const chronicleIntro: I18nString = {
  ru: 'От зарождения идеи до публичных показов и признания.',
  en: 'From the birth of the idea to public performances and recognition.',
};

export const chronicleContinues: I18nString = {
  ru: 'История продолжается…',
  en: 'The history continues…',
};

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export interface InstitutionFormat {
  number: string;
  title: I18nString;
  description: I18nString;
}

export const institutionsPitch: I18nString = {
  ru: '«Интерференция реальностей» — готовый к гастролям иммерсивный нейроспектакль. Технология, команда и производственный пакет позволяют адаптировать показ под площадку партнёра в течение нескольких недель.',
  en: '“Interference of Realities” is a tour-ready immersive neuro-performance. The technology, team and production package allow the show to be adapted to a partner venue within a few weeks.',
};

export const institutionFormats: InstitutionFormat[] = [
  {
    number: '01',
    title: { ru: 'Корпоративные события', en: 'Corporate events' },
    description: {
      ru: 'Внутренние и внешние мероприятия компаний — от стратегических сессий до презентаций для клиентов. Спектакль создаёт незабываемый опыт коллективного взаимодействия.',
      en: 'Internal and external corporate events — from strategy sessions to client presentations. The show creates an unforgettable experience of collective interaction.',
    },
  },
  {
    number: '02',
    title: { ru: 'Государственные фестивали и биеннале', en: 'State festivals & biennials' },
    description: {
      ru: 'Фестивали современного искусства, культурные биеннале, региональные программы. Опыт участия в Циолковском Фесте (Минкульт КО) и работа с институтом театра балета.',
      en: 'Contemporary art festivals, cultural biennials, regional programmes. Experience at the Tsiolkovsky Fest (Kaluga Ministry of Culture) and work with a ballet theatre institution.',
    },
  },
  {
    number: '03',
    title: { ru: 'Международные площадки', en: 'International venues' },
    description: {
      ru: 'Музеи, арт-центры, медиа-фестивали. Готовим документацию для Ars Electronica и аналогичных платформ. Возможна адаптация под международный контекст.',
      en: 'Museums, art centres, media festivals. We are preparing documentation for Ars Electronica and similar platforms. Adaptation to an international context is possible.',
    },
  },
];

export const institutionsTechSpecs: I18nString = {
  ru: 'Технические требования: зал от 50 м², затемнение, аудиосистема. Нейрогарнитуры — до 30 зрителей одновременно. Монтаж — 1 день. Команда — 6–8 человек.',
  en: 'Technical requirements: a hall from 50 m², blackout, an audio system. Neuro-headsets for up to 30 spectators at once. Setup — 1 day. Team — 6–8 people.',
};

export const institutionsTechLabel: I18nString = {
  ru: 'Технические требования:',
  en: 'Technical requirements:',
};

export const institutionsCTA: I18nString = { ru: 'Обсудить показ', en: 'Discuss a show' };

export const institutionsArchiveNote: I18nString = {
  ru: 'Полная многокамерная запись премьеры и пакет документации — для площадок, коллекционеров и музеев по запросу.',
  en: 'The full multi-camera recording of the premiere and a documentation package are available to venues, collectors and museums on request.',
};

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------

export const heroFestivalLine: I18nString = {
  ru: 'XIV Фестиваль современного искусства',
  en: '14th Contemporary Art Festival',
};

export const heroFestivalName: I18nString = {
  ru: '«Циолковский Фест»',
  en: 'Tsiolkovsky Fest',
};

export const heroFormat: I18nString = {
  ru: 'Нейроспектакль · импровизация · эксперимент',
  en: 'Neuro-performance · improvisation · experiment',
};

export const heroPremiereBadge: I18nString = {
  ru: 'Спектакль состоялся',
  en: 'Performance completed',
};

export const heroPremiereDate: I18nString = {
  ru: '16 мая 2026 · Калуга',
  en: '16 May 2026 · Kaluga',
};

export const heroQuote: I18nString = {
  ru: '«Что если спектакль полностью рождается только в момент, когда вы направляете на него внимание?»',
  en: '“What if a performance only fully comes into being the moment you turn your attention to it?”',
};

export const heroCTAPrimary: I18nString = { ru: 'Заказать показ', en: 'Book a show' };
export const heroCTASecondary: I18nString = { ru: 'Как это было', en: 'See how it was' };
export const heroScroll: I18nString = { ru: 'Листайте', en: 'Scroll' };

// ---------------------------------------------------------------------------
// FOOTER
// ---------------------------------------------------------------------------

export const footerTagline: I18nString = {
  ru: 'Нейроспектакль-импровизация на стыке науки, технологий и перформанса.',
  en: 'An improvised neuro-performance at the crossroads of science, technology and performance.',
};

export const footerNav: { id: string; label: I18nString }[] = [
  { id: 'gallery', label: { ru: 'Фото', en: 'Photos' } },
  { id: 'about', label: { ru: 'О спектакле', en: 'About' } },
  { id: 'program', label: { ru: 'Пять фаз', en: 'Five phases' } },
  { id: 'context', label: { ru: 'Теория', en: 'Theory' } },
  { id: 'faq', label: { ru: 'FAQ', en: 'FAQ' } },
  { id: 'authors', label: { ru: 'Титры', en: 'Credits' } },
  { id: 'institutions', label: { ru: 'Институциям', en: 'For institutions' } },
  { id: 'chronicle', label: { ru: 'Хроника', en: 'Chronicle' } },
];

export const footerLabels = {
  navigation: { ru: 'Навигация', en: 'Navigation' } as I18nString,
  contacts: { ru: 'Контакты', en: 'Contacts' } as I18nString,
  festival: { ru: 'Фестиваль', en: 'Festival' } as I18nString,
  venue: { ru: 'Площадка', en: 'Venue' } as I18nString,
  site: { ru: 'Сайт', en: 'Website' } as I18nString,
  bookShow: { ru: 'Заказать показ →', en: 'Book a show →' } as I18nString,
  rights: { ru: 'Все права защищены.', en: 'All rights reserved.' } as I18nString,
  sourceCode: { ru: 'Исходный код на GitHub', en: 'Source code on GitHub' } as I18nString,
  premiereLine: {
    ru: 'Премьера · 16 мая 2026 · ИКЦ, Калуга',
    en: 'Premiere · 16 May 2026 · ICC, Kaluga',
  } as I18nString,
};

export const menuAria = {
  open: { ru: 'Открыть меню', en: 'Open menu' } as I18nString,
  close: { ru: 'Закрыть меню', en: 'Close menu' } as I18nString,
};

// ---------------------------------------------------------------------------
// TRAILER
// ---------------------------------------------------------------------------

/** Local web-optimised copy served from the repo (34 MB, 1080p). */
export const TRAILER_LOCAL_SRC = '/video/interference-trailer-2026.mp4';
/** Fill in after uploading to the platforms (see press/trailer/descriptions.md
    in the event repo) — external buttons appear automatically once non-empty. */
export const TRAILER_YOUTUBE_URL = '';
export const TRAILER_VK_URL = '';

export const trailerLabels = {
  watch: { ru: 'Смотреть трейлер', en: 'Watch the trailer' } as I18nString,
  title: { ru: 'Трейлер · 1:24', en: 'Trailer · 1:24' } as I18nString,
  youtube: { ru: 'Смотреть на YouTube', en: 'Watch on YouTube' } as I18nString,
  vk: { ru: 'Смотреть в VK Видео', en: 'Watch on VK Video' } as I18nString,
  close: { ru: 'Закрыть', en: 'Close' } as I18nString,
};

// ---------------------------------------------------------------------------
// FILM STILLS & CINEMATIC DIVIDERS (frames from the premiere recording)
// ---------------------------------------------------------------------------

export interface CinematicDividerData {
  image: string;
  quote: I18nString;
  attribution: I18nString;
}

export const dividerWave: CinematicDividerData = {
  image: '/stills/human-wave.webp',
  quote: {
    ru: 'И тогда человек — это тоже волна',
    en: 'And then a human being is also a wave',
  },
  attribution: {
    ru: 'голос спектакля · фаза «Теория»',
    en: 'voice of the performance · Theory phase',
  },
};

export const dividerReality: CinematicDividerData = {
  image: '/stills/finale-warm.webp',
  quote: {
    ru: 'Возможно, реальность — это не фиксированная сцена, а непрерывный процесс совместного создания мира',
    en: 'Perhaps reality is not a fixed stage, but a continuous process of co-creating the world',
  },
  attribution: {
    ru: 'голос спектакля · финал',
    en: 'voice of the performance · finale',
  },
};

export const institutionsStill = {
  src: '/stills/laser-cones.webp',
  alt: {
    ru: 'Лазерные конусы над сценой, силуэты зрителей на переднем плане — система в полной сборке',
    en: 'Laser cones over the stage, spectator silhouettes in the foreground — the system at full power',
  } as I18nString,
  caption: {
    ru: 'Сцена 5 · нейросинхронизация зала и танцовщиков в реальном времени',
    en: 'Scene 5 · real-time neuro-synchronisation of the audience and the dancers',
  } as I18nString,
};

// ---------------------------------------------------------------------------
// THEORY POSTERS — the on-stage infographics (projected during the Theory phase)
// ---------------------------------------------------------------------------

export interface TheoryPoster {
  src: string;
  title: I18nString;
}

export const theoryPosters: TheoryPoster[] = [
  { src: '/theory-posters/01_light.webp', title: { ru: 'Свет', en: 'Light' } },
  { src: '/theory-posters/02_sound.webp', title: { ru: 'Звук', en: 'Sound' } },
  { src: '/theory-posters/03_dance.webp', title: { ru: 'Тело · танец', en: 'Body · dance' } },
  { src: '/theory-posters/04_brain.webp', title: { ru: 'Мозг и ЭЭГ', en: 'Brain & EEG' } },
  { src: '/theory-posters/05_technology.webp', title: { ru: 'Технологии', en: 'Technology' } },
  { src: '/theory-posters/06_waves.webp', title: { ru: 'Волны', en: 'Waves' } },
  { src: '/theory-posters/07_reality.webp', title: { ru: 'Реальность', en: 'Reality' } },
  { src: '/theory-posters/08_dramaturgy.webp', title: { ru: 'Драматургия', en: 'Dramaturgy' } },
];

export const theoryPostersBlock = {
  title: { ru: 'Инфографика со сцены', en: 'The on-stage infographics' } as I18nString,
  intro: {
    ru: 'Восемь плакатов, которые проецировались на экран во время фазы «Теория», — по одному на каждый эпизод. Нажмите, чтобы рассмотреть.',
    en: 'Eight posters projected on screen during the Theory phase — one per episode. Click to explore.',
  } as I18nString,
};

// ---------------------------------------------------------------------------
// HERO VIDEO LOOPS — one is picked at random per visit (Kinopoisk-style cover
// that changes between visits). All are short verified-continuous scenes.
// ---------------------------------------------------------------------------

export const HERO_LOOPS: string[] = [
  '/video/loop-dawn.mp4',
  '/video/loop-human-wave.mp4',
  '/video/loop-red-peak.mp4',
  '/video/loop-hands-lasers.mp4',
  '/video/loop-finale-warm.mp4',
  '/video/loop-solo-beams.mp4',
];

export const dividerStory: CinematicDividerData = {
  image: '/stills/audience-waving.webp',
  quote: {
    ru: 'Сегодня мы попробуем создать историю не из фактов, а из состояний',
    en: 'Today we will try to create a story not out of facts, but out of states',
  },
  attribution: {
    ru: 'ведущая — залу · фаза «Практика»',
    en: 'the host to the audience · Practice phase',
  },
};
