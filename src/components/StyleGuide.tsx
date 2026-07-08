import Divider from './Divider';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

// ─── Цветовая схема: mobile = peach, desktop = accent, одинаково = accent/50 ─

// Lookup: высота (вертикальные), 1 unit = 4 px
const H_CLS: Record<number, string> = {
  16: 'h-4',
  32: 'h-8',
  40: 'h-10',
  48: 'h-12',
  64: 'h-16',
  80: 'h-20',
  128: 'h-32',
};
// Lookup: ширина (горизонтальные), 1:1
const W_CLS: Record<number, string> = {
  16: 'w-4',
  24: 'w-6',
  32: 'w-8',
};
// Lookup: gap, 1:1
const GAP_CLS: Record<number, string> = {
  0: 'gap-0',
  4: 'gap-1',
  8: 'gap-2',
  12: 'gap-3',
  16: 'gap-4',
  24: 'gap-6',
  32: 'gap-8',
  48: 'gap-12',
};

// ─── 01 · ЦВЕТА ──────────────────────────────────────────────────────────────
const COLORS = [
  { n: 'C01', name: 'bg-primary', bg: 'bg-bg-primary', hex: '#0e0f15', note: 'Фон страницы' },
  { n: 'C02', name: 'bg-secondary', bg: 'bg-bg-secondary', hex: '#1b1a2b', note: 'Фон секций' },
  { n: 'C03', name: 'surface', bg: 'bg-surface', hex: 'rgba(44,39,69,.4)', note: 'Карточки' },
  {
    n: 'C04',
    name: 'accent-primary',
    bg: 'bg-accent-primary',
    hex: '#c2659d',
    note: 'Главный акцент',
  },
  {
    n: 'C05',
    name: 'accent-secondary',
    bg: 'bg-accent-secondary',
    hex: '#8d4e79',
    note: 'Вторичный акцент',
  },
  {
    n: 'C06',
    name: 'accent-tertiary',
    bg: 'bg-accent-tertiary',
    hex: '#673968',
    note: 'Третичный акцент',
  },
  { n: 'C07', name: 'text-primary', bg: 'bg-text-primary', hex: '#e9d0c5', note: 'Основной текст' },
  { n: 'C08', name: 'text-muted', bg: 'bg-text-muted', hex: '#888092', note: 'Вторичный текст' },
  { n: 'C09', name: 'text-subtle', bg: 'bg-text-subtle', hex: '#575c71', note: 'Третичный текст' },
  { n: 'C10', name: 'peach', bg: 'bg-peach', hex: '#d2aa98', note: 'Тёплый акцент' },
  { n: 'C11', name: 'warm-gray', bg: 'bg-warm-gray', hex: '#b3816f', note: '⚠ не используется' },
  { n: 'C12', name: 'border', bg: 'bg-border', hex: 'rgba(194,101,157,.2)', note: 'Границы' },
];

// ─── 02 · ТИПОГРАФИКА ────────────────────────────────────────────────────────
const TYPE_ROLES = [
  {
    role: 'T01 · Display',
    className: t.display,
    color: 'text-accent-primary',
    sample: 'ИНТЕРФЕРЕНЦИЯ',
    where: 'Hero title',
  },
  {
    role: 'T01a · Display Small',
    className: t.displaySm,
    color: 'text-accent-primary',
    sample: 'ИНТЕРФЕРЕНЦИЯ',
    where: 'Footer brand',
  },
  {
    role: 'T02 · H2',
    className: t.h2,
    color: 'text-text-primary',
    sample: 'Заголовок секции',
    where: 'Section titles',
  },
  {
    role: 'T03 · H3',
    className: t.h3,
    color: 'text-text-primary',
    sample: 'Подзаголовок',
    where: 'Subsection titles',
  },
  {
    role: 'T04 · Highlight',
    className: t.highlight,
    color: 'text-text-primary',
    sample: 'ИКЦ, ул. Октябрьская, 17а',
    where: 'Card titles, accent values',
  },
  {
    role: 'T05 · Body Primary',
    className: t.bodyPrimary,
    color: 'text-text-primary',
    sample: 'Основной текст. Когда две когерентных волны накладываются…',
    where: 'Main paragraphs',
  },
  {
    role: 'T06 · Body Secondary',
    className: t.bodySecondary,
    color: 'text-text-muted',
    sample: 'Вторичный текст. Этот феномен лежит в основе квантовой механики…',
    where: 'Secondary paragraphs',
  },
  {
    role: 'T07 · Caption',
    className: t.caption,
    color: 'text-text-subtle',
    sample: 'Примечание или техническая деталь.',
    where: 'Notes, formulas, hints',
  },
  {
    role: 'T08 · Label',
    className: t.label,
    color: 'text-text-muted',
    sample: '16 мая 2026 · Калуга · 19:00',
    where: 'Meta, section tags, scroll',
  },
  {
    role: 'T09 · Badge',
    className: t.badge,
    color: 'text-accent-primary',
    sample: 'Режиссёр · Драматург',
    where: 'Roles, categories, tags',
  },
  {
    role: 'T10 · Button',
    className: t.button,
    color: 'text-accent-primary',
    sample: 'Заказать показ',
    where: 'CTAs',
  },
  {
    role: 'T11 · Quote',
    className: t.quote,
    color: 'text-peach',
    sample: '«Коллективное внимание — как волновая функция…»',
    where: 'Blockquotes, flavour text',
  },
  {
    role: 'T12 · Number',
    className: t.number,
    color: 'text-accent-primary/40',
    sample: '01',
    where: 'Decorative numbers',
  },
  {
    role: 'T13 · Nav Link',
    className: t.navLink,
    color: 'text-text-muted',
    sample: 'Программа',
    where: 'Desktop nav, footer links',
  },
  {
    role: 'T14 · Nav Link Large',
    className: t.navLinkLarge,
    color: 'text-text-primary',
    sample: 'Лаборатория',
    where: 'Mobile nav, accordion titles',
  },
  {
    role: 'T15 · Event Date',
    className: t.eventDate,
    color: 'text-peach',
    sample: '16 мая 2026 · Калуга · 19:00',
    where: 'Hero date / venue',
  },
];

// ─── 03-V · Вертикальные ─────────────────────────────────────────────────────
// mobPx / deskPx — реальные CSS-пиксели. Где разные — peach(mob) + accent(desk).
const VERTICAL = [
  {
    n: 'V01',
    role: 'section',
    desc: 'py-20 md:py-32',
    mobPx: 80,
    deskPx: 128,
    where: 'Основные секции',
  },
  {
    n: 'V02',
    role: 'sectionCompact',
    desc: 'py-8 md:py-10',
    mobPx: 32,
    deskPx: 40,
    where: 'Компактные секции',
  },
  {
    n: 'V03',
    role: 'footerPadding',
    desc: 'py-12 md:py-16',
    mobPx: 48,
    deskPx: 64,
    where: 'Футер',
  },
  { n: 'V04', role: 'mbSm', desc: 'mb-4', mobPx: 16, deskPx: 16, where: 'После тега / заголовка' },
  { n: 'V05', role: 'mbMd', desc: 'mb-8', mobPx: 32, deskPx: 32, where: 'Между блоками' },
  { n: 'V06', role: 'mbLg', desc: 'mb-12', mobPx: 48, deskPx: 48, where: 'Крупный блок' },
  { n: 'V07', role: 'divider', desc: 'my-8 md:my-12', mobPx: 32, deskPx: 48, where: 'Divider' },
  { n: 'V08', role: 'stack', desc: 'space-y-4', mobPx: 16, deskPx: 16, where: 'Вертикальный стек' },
  {
    n: 'V09',
    role: 'footerBar',
    desc: 'pt-8',
    mobPx: 32,
    deskPx: 32,
    where: 'Нижняя строка футера',
  },
  {
    n: 'V10',
    role: 'photoStripPadding',
    desc: 'pb-4',
    mobPx: 16,
    deskPx: 16,
    where: 'Нижний отступ фотоленты',
  },
];

// ─── 03-H · Горизонтальные ───────────────────────────────────────────────────
const HORIZONTAL = [
  {
    n: 'H01',
    role: 'container',
    desc: 'px-4 md:px-8',
    mobPx: 16,
    deskPx: 32,
    where: 'Контейнер контента',
  },
  { n: 'H02', role: 'containerWide', desc: 'px-4 md:px-6', mobPx: 16, deskPx: 24, where: 'Хедер' },
];

// ─── 03-U · Универсальные gap ────────────────────────────────────────────────
// gapPx = mobile, deskGapPx = desktop. Где разные — два демо-блока с цветами.
const GAPS = [
  {
    n: 'U00',
    role: 'gapTight',
    desc: 'gap-1',
    gapPx: 4,
    deskGapPx: 4,
    mob: '4px',
    desk: '4px',
    where: 'Метка → значение',
  },
  {
    n: 'U01',
    role: 'gapInline',
    desc: 'gap-2',
    gapPx: 8,
    deskGapPx: 8,
    mob: '8px',
    desk: '8px',
    where: 'Иконка + подпись',
  },
  {
    n: 'U02',
    role: 'gapSm',
    desc: 'gap-3',
    gapPx: 12,
    deskGapPx: 12,
    mob: '12px',
    desk: '12px',
    where: 'Кнопки, иконки',
  },
  {
    n: 'U03',
    role: 'gapMd',
    desc: 'gap-4',
    gapPx: 16,
    deskGapPx: 16,
    mob: '16px',
    desk: '16px',
    where: 'Карточки, flex-ряды',
  },
  {
    n: 'U04',
    role: 'gapLg',
    desc: 'gap-8',
    gapPx: 32,
    deskGapPx: 32,
    mob: '32px',
    desk: '32px',
    where: 'Крупные группы',
  },
  {
    n: 'U05',
    role: 'gapMdLg',
    desc: 'gap-4 md:gap-6',
    gapPx: 16,
    deskGapPx: 24,
    mob: '16px',
    desk: '24px',
    where: 'Responsive md→lg',
  },
  {
    n: 'U06',
    role: 'gapLgXl',
    desc: 'gap-8 md:gap-12',
    gapPx: 32,
    deskGapPx: 48,
    mob: '32px',
    desk: '48px',
    where: 'Responsive lg→xl',
  },
  {
    n: 'U07',
    role: 'timelineGap',
    desc: 'gap-6 md:gap-0',
    gapPx: 24,
    deskGapPx: 0,
    mob: '24px',
    desk: '0px',
    where: 'Таймлайн (исчезает md+)',
  },
  {
    n: 'U08',
    role: 'footerBarGap',
    desc: 'gap-2 sm:gap-6',
    gapPx: 8,
    deskGapPx: 24,
    mob: '8px',
    desk: '24px',
    where: 'Нижняя строка',
  },
];

// ─── 03-U · Универсальные padding ────────────────────────────────────────────
// padding = mobile CSS, deskPadding = desktop CSS. Где разные — два демо.
const PADDINGS = [
  {
    n: 'U09',
    role: 'cardSm',
    desc: 'p-4',
    padding: '16px',
    deskPadding: '16px',
    label: '16px',
    where: 'Мелкие карточки, Accordion',
  },
  {
    n: 'U10',
    role: 'card',
    desc: 'p-5',
    padding: '20px',
    deskPadding: '20px',
    label: '20px',
    where: 'Стандартные карточки',
  },
  {
    n: 'U11',
    role: 'cardLg',
    desc: 'p-6 md:p-8',
    padding: '24px',
    deskPadding: '32px',
    label: '24/32px',
    where: 'Крупные карточки, Hero',
  },
  {
    n: 'U12',
    role: 'buttonPadding',
    desc: 'px-6 py-3 md:px-8',
    padding: '12px 24px',
    deskPadding: '12px 32px',
    label: 'v12 h24/32',
    where: 'Кнопки',
  },
  {
    n: 'U13',
    role: 'accordionPadding',
    desc: 'px-4 pb-4 md:px-5',
    padding: '0 16px 16px',
    deskPadding: '0 20px 20px',
    label: '↓16 h16/20',
    where: 'Аккордеон',
  },
  {
    n: 'U14',
    role: 'partnerCard',
    desc: 'px-4 py-3',
    padding: '12px 16px',
    deskPadding: '12px 16px',
    label: 'v12 h16px',
    where: 'Партнёры',
  },
  {
    n: 'U15',
    role: 'heroInner',
    desc: 'px-6 pt-24 pb-12',
    padding: '8px 24px',
    deskPadding: '8px 24px',
    label: 'pt=96px↑',
    where: 'Hero inner (pt-24 вне масштаба)',
  },
];

// ─────────────────────────────────────────────────────────────────────────────

function Legend() {
  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-1 mb-3`}>
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 bg-peach/55 shrink-0" />
        <span className={`${t.label} text-peach/70`}>mobile</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 bg-accent-primary/65 shrink-0" />
        <span className={`${t.label} text-accent-primary`}>desktop</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 bg-accent-primary/50 shrink-0" />
        <span className={`${t.label} text-text-subtle/40`}>одинаково на всех</span>
      </div>
    </div>
  );
}

export default function StyleGuide() {
  return (
    <section className="mt-14 py-10 bg-bg-primary border-b-2 border-dashed border-accent-primary/30">
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        {/* Заголовок */}
        <div className="mb-10">
          <h2 className={`${t.h2} text-accent-primary mb-1`}>Style Guide</h2>
          <p className={`${t.caption} text-text-muted`}>
            dev only — 12 цветов · 16 типо-ролей · 27 отступов · 1:1 · peach=mob / accent=desk
          </p>
        </div>

        {/* ══════════════════════════════════════════════
            01 · ЦВЕТА — 12 токенов
        ══════════════════════════════════════════════ */}
        <div className="mb-10">
          <p className={`${t.label} text-text-muted mb-4`}>01 · Цвета — 12 токенов</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px border border-border bg-border">
            {COLORS.map((c) => (
              <div key={c.n} className="flex flex-col bg-bg-secondary">
                <div className={`${c.bg} aspect-square`} />
                <div className="p-2 space-y-0.5">
                  <p className={`${t.label} text-accent-primary/60`}>{c.n}</p>
                  <p className={`${t.label} text-text-subtle`}>{c.name}</p>
                  <p className={`${t.label} text-text-subtle/50`}>{c.hex}</p>
                  <p className={`${t.label} text-text-subtle/40`}>{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ══════════════════════════════════════════════
            02 · ТИПОГРАФИКА — 16 ролей
        ══════════════════════════════════════════════ */}
        <div className="my-10">
          <p className={`${t.label} text-text-muted mb-6`}>02 · Типографика — 16 ролей</p>
          <div className="space-y-5">
            {TYPE_ROLES.map((item) => (
              <div
                key={item.role}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
              >
                <span className={`${t.label} text-text-subtle w-36 shrink-0`}>{item.role}</span>
                <div className="flex-1 min-w-0">
                  <p className={`${item.className} ${item.color}`}>{item.sample}</p>
                  <p className={`${t.caption} text-text-subtle/40 mt-0.5`}>
                    {item.className.replace(/font-mono /g, '')}
                    {' · '}
                    <span className="text-text-subtle/30">{item.where}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ══════════════════════════════════════════════
            03 · ОТСТУПЫ — 27 ролей · 1:1
        ══════════════════════════════════════════════ */}
        <div className="my-10">
          <p className={`${t.label} text-text-muted mb-6`}>03 · Отступы — 28 ролей · 1:1</p>

          {/* ── 03-V · Вертикальные (10) ─────────────── */}
          <p className={`${t.label} text-text-subtle mb-2`}>
            03-V · Вертикальные — py / mb / my / pt / pb / space-y — 10 ролей
          </p>
          <p className={`${t.label} text-text-subtle/30 mb-2`}>
            высота бара = реальный px · h-32 контейнер = 128px
          </p>
          <Legend />

          {/* Bar chart: h-32 = 128px вмещает V01 desktop 1:1 */}
          <div className="flex items-end h-32 gap-1 border-b border-accent-primary/20 mb-1">
            {VERTICAL.map((item) => {
              const resp = item.mobPx !== item.deskPx;
              return (
                <div key={item.n} className="flex-1 flex gap-px items-end">
                  {resp ? (
                    <>
                      <div className={`flex-1 bg-peach/55 ${H_CLS[item.mobPx] ?? 'h-4'}`} />
                      <div
                        className={`flex-1 bg-accent-primary/65 ${H_CLS[item.deskPx] ?? 'h-4'}`}
                      />
                    </>
                  ) : (
                    <div className={`flex-1 bg-accent-primary/50 ${H_CLS[item.deskPx] ?? 'h-4'}`} />
                  )}
                </div>
              );
            })}
          </div>
          {/* Метки */}
          <div className="flex gap-1 mb-4">
            {VERTICAL.map((item) => (
              <p key={item.n} className={`${t.label} text-accent-primary/40 flex-1 text-center`}>
                {item.n}
              </p>
            ))}
          </div>

          {/* Таблица: мобильные значения выделены peach, десктоп — accent */}
          <div className="space-y-1 mb-10">
            {VERTICAL.map((item) => {
              const resp = item.mobPx !== item.deskPx;
              return (
                <div key={item.n} className="flex gap-3 items-baseline">
                  <span className={`${t.label} text-accent-primary/50 w-8 shrink-0`}>{item.n}</span>
                  <span className={`${t.label} text-text-subtle w-36 shrink-0`}>{item.role}</span>
                  <span className={`${t.caption} text-text-subtle/40 font-mono w-36 shrink-0`}>
                    {item.desc}
                  </span>
                  <span
                    className={`${t.label} w-12 shrink-0 ${resp ? 'text-peach/70' : 'text-text-subtle/40'}`}
                  >
                    {item.mobPx}px
                  </span>
                  <span
                    className={`${t.label} w-16 shrink-0 ${resp ? 'text-accent-primary' : 'text-text-subtle/40'}`}
                  >
                    {resp ? `→ ${item.deskPx}px` : '—'}
                  </span>
                  <span className={`${t.caption} text-text-subtle/30 hidden sm:block`}>
                    {item.where}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ── 03-H · Горизонтальные (2) ────────────── */}
          <p className={`${t.label} text-text-subtle mb-2`}>03-H · Горизонтальные — px — 2 роли</p>
          <p className={`${t.label} text-text-subtle/30 mb-2`}>
            ширина бара = реальный px · h-3 = 12px высота
          </p>
          <Legend />
          <div className="space-y-4 mb-10">
            {HORIZONTAL.map((item) => {
              const resp = item.mobPx !== item.deskPx;
              return (
                <div key={item.n} className="flex items-start gap-3">
                  <span className={`${t.label} text-accent-primary/50 w-8 shrink-0 mt-0.5`}>
                    {item.n}
                  </span>
                  <span className={`${t.label} text-text-subtle w-32 shrink-0 mt-0.5`}>
                    {item.role}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`${t.label} text-text-subtle/30 w-8`}>mob</span>
                      <div
                        className={`h-3 ${resp ? 'bg-peach/55' : 'bg-accent-primary/50'} ${W_CLS[item.mobPx] ?? 'w-4'}`}
                      />
                      <span
                        className={`${t.label} ${resp ? 'text-peach/70' : 'text-text-subtle/40'}`}
                      >
                        {item.mobPx}px
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`${t.label} text-text-subtle/30 w-8`}>desk</span>
                      <div
                        className={`h-3 ${resp ? 'bg-accent-primary/65' : 'bg-accent-primary/50'} ${W_CLS[item.deskPx] ?? 'w-8'}`}
                      />
                      <span
                        className={`${t.label} ${resp ? 'text-accent-primary' : 'text-text-subtle/40'}`}
                      >
                        {item.deskPx}px
                      </span>
                    </div>
                    <span className={`${t.caption} text-text-subtle/30 font-mono`}>
                      {item.desc} · {item.where}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── 03-U · Gap (8) ───────────────────────── */}
          <p className={`${t.label} text-text-subtle mb-2`}>03-U · Универсальные gap — 9 ролей</p>
          <p className={`${t.label} text-text-subtle/30 mb-2`}>
            квадраты 14×14px · зазор = реальный px · где responsive — два демо
          </p>
          <Legend />
          <div className="space-y-3 mb-8">
            {GAPS.map((item) => {
              const resp = item.gapPx !== item.deskGapPx;
              return (
                <div key={item.n} className="flex items-center gap-3">
                  <span className={`${t.label} text-accent-primary/50 w-8 shrink-0`}>{item.n}</span>
                  <span className={`${t.label} text-text-subtle w-28 shrink-0`}>{item.role}</span>
                  {/* демо-блок(и) */}
                  <div className="flex items-end gap-3 shrink-0">
                    {/* mob */}
                    <div className="flex flex-col items-center gap-0.5">
                      <div className={`flex ${GAP_CLS[item.gapPx] ?? 'gap-3'}`}>
                        <div
                          className={`w-3.5 h-3.5 ${resp ? 'bg-peach/55' : 'bg-accent-primary/50'}`}
                        />
                        <div
                          className={`w-3.5 h-3.5 ${resp ? 'bg-peach/55' : 'bg-accent-primary/50'}`}
                        />
                      </div>
                      <span
                        className={`${t.label} ${resp ? 'text-peach/70' : 'text-text-subtle/40'}`}
                      >
                        {item.mob}
                      </span>
                    </div>
                    {/* desk — только если отличается */}
                    {resp && (
                      <div className="flex flex-col items-center gap-0.5">
                        <div className={`flex ${GAP_CLS[item.deskGapPx] ?? 'gap-3'}`}>
                          <div className="w-3.5 h-3.5 bg-accent-primary/65" />
                          <div className="w-3.5 h-3.5 bg-accent-primary/65" />
                        </div>
                        <span className={`${t.label} text-accent-primary`}>{item.desk}</span>
                      </div>
                    )}
                  </div>
                  <span className={`${t.caption} text-text-subtle/30 font-mono hidden sm:block`}>
                    {item.desc}
                  </span>
                  <span className={`${t.caption} text-text-subtle/25 hidden md:block`}>
                    {item.where}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ── 03-U · Padding (7) ───────────────────── */}
          <p className={`${t.label} text-text-subtle mb-2`}>
            03-U · Универсальные padding — 7 ролей
          </p>
          <p className={`${t.label} text-text-subtle/30 mb-2`}>
            рамка = внешний край · квадрат 10px = контент · где responsive — два демо
          </p>
          <Legend />
          <div className="space-y-3">
            {PADDINGS.map((item) => {
              const resp = item.padding !== item.deskPadding;
              return (
                <div key={item.n} className="flex items-center gap-3">
                  <span className={`${t.label} text-accent-primary/50 w-8 shrink-0`}>{item.n}</span>
                  <span className={`${t.label} text-text-subtle w-32 shrink-0`}>{item.role}</span>
                  {/* демо-блок(и) */}
                  <div className="flex items-end gap-3 shrink-0">
                    {/* mob */}
                    <div className="flex flex-col items-center gap-0.5">
                      <div
                        className={`border ${resp ? 'border-peach/40' : 'border-accent-primary/30'}`}
                        style={{ padding: item.padding }}
                      >
                        <div
                          className={resp ? 'bg-peach/45' : 'bg-accent-primary/35'}
                          style={{ width: 10, height: 10 }}
                        />
                      </div>
                      {resp && <span className={`${t.label} text-peach/70`}>mob</span>}
                    </div>
                    {/* desk — только если отличается */}
                    {resp && (
                      <div className="flex flex-col items-center gap-0.5">
                        <div
                          className="border border-accent-primary/40"
                          style={{ padding: item.deskPadding }}
                        >
                          <div className="bg-accent-primary/55" style={{ width: 10, height: 10 }} />
                        </div>
                        <span className={`${t.label} text-accent-primary`}>desk</span>
                      </div>
                    )}
                  </div>
                  <span className={`${t.label} text-text-subtle/40 w-20 shrink-0`}>
                    {item.label}
                  </span>
                  <span className={`${t.caption} text-text-subtle/30 font-mono hidden sm:block`}>
                    {item.desc}
                  </span>
                  <span className={`${t.caption} text-text-subtle/25 hidden md:block`}>
                    {item.where}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
