import React from 'react';
import Section from './Section.jsx';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative ml-2 border-l border-line">
        {experience.map((job) => (
          <li key={job.org} className="reveal relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <span
              className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg"
              aria-hidden="true"
            />
            <p className="text-sm font-medium text-accent">{job.period}</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">{job.role}</h3>
            <p className="text-muted">
              {job.org}, {job.place}
            </p>
            <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed marker:text-accent">
              {job.points.map((p) => (
                <li key={p} className="text-muted">
                  <span className="text-ink">{p}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
