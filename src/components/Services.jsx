import React from 'react';
import Section from './Section.jsx';
import { services } from '../data.js';

export default function Services() {
  return (
    <Section
      id="services"
      title="How I can help"
      intro="Hire me full time as an analyst or project manager, or bring me in for a freelance project."
    >
      <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {services.map((s) => (
          <li key={s.title} className="reveal border-t-2 border-accent pt-5">
            <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
            <p className="mt-4 text-sm text-ink">
              <span className="font-medium">Tools: </span>
              <span className="text-muted">{s.tools}</span>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
