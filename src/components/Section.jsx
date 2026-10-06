import React from 'react';

export default function Section({ id, title, intro, children, tone = 'plain' }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`section-pad ${tone === 'tint' ? 'border-y border-line bg-surface' : ''}`}
    >
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <h2 id={`${id}-title`} className="h2">
            {title}
          </h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
