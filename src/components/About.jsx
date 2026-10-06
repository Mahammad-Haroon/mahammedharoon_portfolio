import React from 'react';
import Section from './Section.jsx';
import { about, site } from '../data.js';
import { useCountUp } from '../lib/hooks.js';

function Stat({ end, decimals = 0, suffix = '', label }) {
  const [ref, value] = useCountUp(end, decimals);
  return (
    <div role="listitem" className="px-4 py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0">
      <p className="text-4xl font-bold tracking-tight tabular-nums sm:text-5xl" ref={ref}>
        <span aria-hidden="true">
          {value}
          {suffix}
        </span>
        <span className="sr-only">
          {end}
          {suffix}
        </span>
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" title="About me" tone="tint">
      <div className="grid gap-12 lg:grid-cols-[18rem_1fr] lg:gap-16">
        <div className="reveal">
          {site.photo ? (
            <img
              src={site.photo}
              alt={site.photoAlt}
              width="480"
              height="480"
              loading="lazy"
              decoding="async"
              className="aspect-square w-full max-w-xs rounded-2xl border border-line object-cover"
            />
          ) : (
            <div
              role="img"
              aria-label={`Initials of ${site.name}`}
              className="flex aspect-square w-full max-w-xs items-center justify-center rounded-2xl border border-line bg-accent-soft text-7xl font-bold tracking-tight text-accent"
            >
              MH
            </div>
          )}
        </div>

        <div className="reveal">
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <h3 className="mt-10 text-lg font-semibold">Education</h3>
          <ul className="mt-3 max-w-2xl divide-y divide-line border-y border-line">
            {about.education.map((e) => (
              <li key={e.degree} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <div>
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-sm text-muted">{e.school}</p>
                </div>
                <p className="text-sm font-semibold text-accent">{e.score}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div role="list" className="reveal mt-14 grid grid-cols-2 divide-x divide-y divide-line border-t border-line sm:grid-cols-4 sm:divide-y-0" aria-label="Key numbers">
        {about.stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </Section>
  );
}
