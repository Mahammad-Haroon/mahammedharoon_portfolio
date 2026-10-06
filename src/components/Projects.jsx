import React, { useMemo, useState } from 'react';
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react';
import Section from './Section.jsx';
import { projects, projectFilters } from '../data.js';
import { withPlaceholders } from '../lib/text.jsx';
import { track } from '../lib/analytics.js';

function ProjectCard({ p }) {
  const showMedia = p.image || p.showImage;
  return (
    <article className="fade-in flex flex-col overflow-hidden rounded-xl border border-line bg-surface">
      {showMedia &&
        (p.image ? (
          <img
            src={p.image}
            alt={`Screenshot of ${p.title}`}
            width="640"
            height="360"
            loading="lazy"
            decoding="async"
            className="aspect-video w-full border-b border-line object-cover"
          />
        ) : (
          <div
            className="flex aspect-video w-full items-center justify-center gap-2 border-b border-dashed border-accent/50 bg-accent-soft text-sm text-accent"
            role="img"
            aria-label="Screenshot placeholder"
          >
            <ImageIcon size={18} aria-hidden="true" />
            [PLACEHOLDER: screenshot]
          </div>
        ))}

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-muted">{p.subtitle || p.category}</p>
        <h3 className="mt-1 text-lg font-semibold leading-snug tracking-tight">{withPlaceholders(p.title)}</h3>

        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
          {p.tags.map((t) => (
            <li key={t} className="chip bg-bg">
              {withPlaceholders(t)}
            </li>
          ))}
        </ul>

        <dl className="mt-5 space-y-3 text-sm leading-relaxed">
          <div>
            <dt className="font-semibold">Problem</dt>
            <dd className="text-muted">{withPlaceholders(p.problem)}</dd>
          </div>
          <div>
            <dt className="font-semibold">Approach</dt>
            <dd className="text-muted">{withPlaceholders(p.approach)}</dd>
          </div>
          <div>
            <dt className="font-semibold text-accent">Result</dt>
            <dd className="font-medium">{withPlaceholders(p.result)}</dd>
          </div>
        </dl>

        {(p.live || p.github) && (
          <div className="mt-6 flex flex-wrap gap-2 pt-1">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary !px-4 !py-2"
                onClick={() => track('project_link_click', { project: p.title, type: 'live' })}
              >
                <ExternalLink size={15} aria-hidden="true" />
                Live
                <span className="sr-only">: {p.title}</span>
              </a>
            )}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary !px-4 !py-2"
                onClick={() => track('project_link_click', { project: p.title, type: 'github' })}
              >
                <Github size={15} aria-hidden="true" />
                GitHub
                <span className="sr-only">: {p.title}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <Section
      id="projects"
      tone="tint"
      title="Projects"
      intro="Analytics work with measurable results, plus client websites built through OceaneX."
    >
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {projectFilters.map((f) => {
          const on = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={on}
              onClick={() => {
                setFilter(f);
                track('project_filter', { filter: f });
              }}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                on
                  ? 'border-accent bg-accent text-on-accent'
                  : 'border-line bg-bg text-ink hover:border-accent hover:text-accent'
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" aria-live="polite">
        {visible.length ? (
          visible.map((p) => <ProjectCard key={p.title} p={p} />)
        ) : (
          <p className="text-muted">No projects in this category yet.</p>
        )}
      </div>
    </Section>
  );
}
