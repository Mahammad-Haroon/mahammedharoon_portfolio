import React from 'react';
import { Award } from 'lucide-react';
import Section from './Section.jsx';
import { certifications } from '../data.js';

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" intro="Courses and simulations behind the tools I use.">
      <ul className="grid gap-x-10 sm:grid-cols-2">
        {certifications.map((c) => (
          <li key={c.name} className="reveal flex items-start gap-4 border-t border-line py-5">
            <Award size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <p className="font-medium leading-snug">{c.name}</p>
              {c.issuer && <p className="mt-1 text-sm text-muted">{c.issuer}</p>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
