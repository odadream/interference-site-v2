import SectionTag from '../components/SectionTag';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import {
  headings,
  creditsGroups,
  ensembleTitle,
  ensembleNames,
  audienceCredit,
  venueBlock,
  organizers,
  partners,
  organizersLabel,
  partnersLabel,
} from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

const BASE = import.meta.env.BASE_URL;

export default function Authors() {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();
  const h = headings.authors;

  return (
    <section ref={revealRef} id="authors" className={`${s.section} bg-bg-primary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <SectionTag number="08">{h.tag[lang]}</SectionTag>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-peach">{h.titleA[lang]}</span>{' '}
          <span className="text-text-primary">{h.titleB[lang]}</span>
        </h2>

        <p className={`${t.bodySecondary} text-text-muted ${s.mbLg} max-w-2xl`}>
          {h.intro?.[lang]}
        </p>

        {/* Credits list */}
        <div className={`border border-border bg-bg-secondary ${s.mbLg}`}>
          <div className="divide-y divide-border">
            {creditsGroups.map((group) => (
              <div
                key={group.role.ru}
                className={`grid grid-cols-1 md:grid-cols-[minmax(0,15rem)_1fr] gap-1 md:gap-6 ${s.cardSm}`}
              >
                <span className={`${t.label} text-accent-primary md:text-right pt-0.5`}>
                  {group.role[lang]}
                </span>
                <div className="flex flex-col gap-0.5">
                  {group.names.map((name) => (
                    <span key={name} className={`${t.bodySecondary} text-text-primary`}>
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ensemble */}
        <div className={`${s.cardLg} border border-border bg-bg-secondary ${s.mbLg}`}>
          <span className={`${t.badge} text-accent-primary mb-3 block`}>{ensembleTitle[lang]}</span>
          <div className={`flex flex-wrap gap-x-6 gap-y-1`}>
            {ensembleNames.map((name) => (
              <span key={name} className={`${t.bodySecondary} text-text-primary`}>
                {name}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="relative flex h-[5px] w-[5px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-accent-primary" />
              <span className="relative inline-flex rounded-full h-[5px] w-[5px] bg-accent-primary" />
            </span>
            <span className={`${t.badge} text-peach`}>{audienceCredit[lang]}</span>
          </div>
        </div>

        {/* Venue & Festival */}
        <div
          className={`${s.cardLg} border border-accent-primary/30 bg-accent-primary/5 ${s.mbLg}`}
        >
          <div className={`grid grid-cols-1 md:grid-cols-2 ${s.gapMd6}`}>
            <div>
              <span className={`${t.badge} text-accent-primary mb-2 block`}>
                {venueBlock.venueLabel[lang]}
              </span>
              <h3 className={`${t.highlight} text-text-primary mb-1`}>
                {venueBlock.venueName[lang]}
              </h3>
              <p className={`${t.caption} text-text-muted`}>{venueBlock.address[lang]}</p>
            </div>
            <div>
              <span className={`${t.badge} text-accent-primary mb-2 block`}>
                {venueBlock.festivalLabel[lang]}
              </span>
              <h3 className={`${t.highlight} text-text-primary mb-1`}>
                {venueBlock.festivalName[lang]}
              </h3>
              <p className={`${t.caption} text-text-muted`}>{venueBlock.festivalDates[lang]}</p>
              <p className={`${t.caption} text-text-muted mt-2`}>
                {venueBlock.artisticDirector[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Organizers */}
        <div className={s.mbLg}>
          <h3 className={`${t.badge} text-text-muted ${s.mbMd}`}>{organizersLabel[lang]}</h3>
          <div className={`flex flex-wrap ${s.gapSm}`}>
            {organizers.map((org) => (
              <a
                key={org.shortName}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center ${s.gapSm} ${s.partnerCard} border border-border bg-bg-secondary hover:border-accent-primary/40 transition-colors min-w-[180px]`}
              >
                {org.logo && (
                  <img
                    src={`${BASE}${org.logo.slice(1)}`}
                    alt={org.shortName}
                    loading="lazy"
                    className="h-7 md:h-9 w-auto max-w-[52px] object-contain shrink-0"
                  />
                )}
                <div>
                  <span className={`${t.highlight} text-text-primary block`}>{org.shortName}</span>
                  <span className={`${t.label} text-text-muted mt-1 block`}>{org.name[lang]}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <h3 className={`${t.badge} text-text-muted ${s.mbSm}`}>{partnersLabel[lang]}</h3>
          <div className={`flex flex-wrap ${s.gapSm}`}>
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center ${s.gapSm} ${s.partnerCard} border border-border bg-bg-secondary hover:border-accent-secondary/40 transition-colors min-w-[180px]`}
              >
                {partner.logo && (
                  <img
                    src={`${BASE}${partner.logo.slice(1)}`}
                    alt={partner.name}
                    loading="lazy"
                    className="h-7 md:h-9 w-auto max-w-[52px] object-contain shrink-0"
                  />
                )}
                <div>
                  <span className={`${t.highlight} text-text-primary block`}>{partner.name}</span>
                  {partner.note && (
                    <span className={`${t.label} text-text-muted mt-1 block`}>
                      {partner.note[lang]}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
