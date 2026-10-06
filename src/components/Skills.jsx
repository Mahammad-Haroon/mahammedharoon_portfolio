import React from 'react';
import Section from './Section.jsx';
import { skillGroups } from '../data.js';

export default function Skills() {
  return (
    <Section
      id="skills"
      tone="tint"
      title="Skills"
      intro="The tools I use day to day, grouped by the kind of work they support."
    >
      <div className="divide-y divide-line border-y border-line">
        {skillGroups.map((g) => (
          <div key={g.title} className="reveal grid gap-4 py-6 md:grid-cols-[16rem_1fr] md:gap-10">
            <h3 className="text-base font-semibold">{g.title}</h3>
            <ul className="flex flex-wrap gap-2" aria-label={`${g.title} skills`}>
              {g.items.map((item) => (
                <li key={item} className="chip bg-bg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
