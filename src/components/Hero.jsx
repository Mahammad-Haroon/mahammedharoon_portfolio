import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { heroResults, site } from '../data.js';
import { track } from '../lib/analytics.js';

const socials = [
  { label: 'LinkedIn', href: site.linkedin, Icon: Linkedin, external: true },
  { label: 'GitHub', href: site.github, Icon: Github, external: true },
  { label: 'Email', href: `mailto:${site.email}`, Icon: Mail },
];

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="container-page grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <div>
          <p className="hero-in inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {site.availability}
          </p>

          <h1 className="hero-in mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl" style={{ animationDelay: '60ms' }}>
            {site.name}
          </h1>

          <p className="hero-in mt-5 max-w-2xl text-lg font-medium text-ink sm:text-xl" style={{ animationDelay: '120ms' }}>
            {site.headline}
          </p>

          <p className="hero-in mt-3 text-2xl font-semibold tracking-tight text-accent sm:text-3xl" style={{ animationDelay: '180ms' }}>
            {site.tagline}
          </p>

          <p className="hero-in mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg" style={{ animationDelay: '240ms' }}>
            {site.heroSummary}
          </p>

          <div className="hero-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: '300ms' }}>
            <a href="#projects" className="btn btn-primary" onClick={() => track('cta_click', { cta: 'view_projects', location: 'hero' })}>
              View Projects
            </a>
            <a
              href={site.resume}
              download
              className="btn btn-secondary"
              onClick={() => track('resume_download', { location: 'hero' })}
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <ul className="hero-in mt-8 flex gap-3" style={{ animationDelay: '360ms' }} aria-label="Social links">
            {socials.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="icon-btn"
                  aria-label={label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  onClick={() => track('social_click', { network: label.toLowerCase(), location: 'hero' })}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Results panel: the numbers a hiring manager cares about, up front */}
        <aside className="hero-in rounded-2xl border border-line bg-surface p-6 sm:p-8" style={{ animationDelay: '200ms' }} aria-labelledby="results-title">
          <h2 id="results-title" className="text-base font-semibold">
            Results so far
          </h2>
          <dl className="mt-6 divide-y divide-line">
            {heroResults.map((r) => (
              <div key={r.label} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-muted">{r.label}</dt>
                  <dd className="text-3xl font-bold tracking-tight tabular-nums">{r.value}</dd>
                </div>
                {r.meter !== undefined && (
                  <div className="mt-3 h-1.5 w-full rounded-full bg-accent-soft" aria-hidden="true">
                    <div className="meter-fill h-full rounded-full bg-accent" style={{ width: `${r.meter}%` }} />
                  </div>
                )}
                <p className="mt-2 text-xs text-muted">{r.context}</p>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
