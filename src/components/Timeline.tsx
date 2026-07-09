import { useState } from 'react';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

import type { ReactNode } from 'react';

const BASE = import.meta.env.BASE_URL;

interface TimelineItem {
  time: string;
  title: string;
  description: ReactNode;
  still?: { src: string; alt: string };
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-border -translate-x-1/2 md:-translate-x-1/2" />

      <div className={`${s.stack} md:space-y-12`}>
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isActive = index === activeIndex;

          return (
            <div
              key={item.time}
              className={`relative flex items-start ${s.timelineGap} ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Dot */}
              <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 z-10">
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-accent-primary shadow-[0_0_8px_rgba(194,101,157,0.6)] scale-125'
                      : 'bg-accent-secondary/60'
                  }`}
                />
              </div>

              {/* Content */}
              <div
                className={`pl-10 md:pl-0 md:w-[calc(50%-2rem)] ${
                  isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                }`}
              >
                <div className={`flex flex-col ${s.gapTight}`}>
                  <span className={`${t.highlight} text-accent-primary`}>{item.time}</span>
                  <h4 className={`${t.highlight} uppercase tracking-wide text-text-primary`}>
                    {item.title}
                  </h4>
                  <div className={`${t.caption} text-text-muted`}>{item.description}</div>

                  {/* Film still — mobile: inline under the text */}
                  {item.still && (
                    <figure className="mt-3 md:hidden border border-border overflow-hidden">
                      <img
                        src={`${BASE}${item.still.src.slice(1)}`}
                        alt={item.still.alt}
                        loading="lazy"
                        className="w-full h-auto saturate-[0.9]"
                      />
                    </figure>
                  )}
                </div>
              </div>

              {/* Film still — desktop: fills the opposite column */}
              {item.still && (
                <div
                  className={`hidden md:block md:w-[calc(50%-2rem)] ${
                    isLeft ? 'md:pl-8' : 'md:pr-8'
                  }`}
                >
                  <figure
                    className={`border overflow-hidden transition-all duration-500 ${
                      isActive ? 'border-accent-primary/50' : 'border-border'
                    }`}
                  >
                    <img
                      src={`${BASE}${item.still.src.slice(1)}`}
                      alt={item.still.alt}
                      loading="lazy"
                      className={`w-full h-auto transition-all duration-500 ${
                        isActive ? 'saturate-100' : 'saturate-[0.7] opacity-80'
                      }`}
                    />
                  </figure>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
