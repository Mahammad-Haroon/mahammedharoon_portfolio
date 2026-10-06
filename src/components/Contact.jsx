import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Section from './Section.jsx';
import { site } from '../data.js';
import { track } from '../lib/analytics.js';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

const details = [
  { Icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { Icon: Phone, label: 'Phone', value: site.phone, href: site.phoneHref },
  { Icon: Linkedin, label: 'LinkedIn', value: site.linkedinLabel, href: site.linkedin, external: true },
  { Icon: Github, label: 'GitHub', value: site.githubLabel, href: site.github, external: true },
  { Icon: MapPin, label: 'Location', value: site.location },
];

const inputClass =
  'mt-2 w-full rounded-lg border border-line bg-bg px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-accent';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('company')) return; // honeypot: bots fill this, people never see it

    setStatus('sending');
    setError('');

    // No form service configured yet: fall back to the visitor's email app.
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`);
      const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`);
      track('form_submit', { form: 'contact', method: 'mailto' });
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus('idle');
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error('Request failed');
      track('form_submit', { form: 'contact', method: 'formspree' });
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
      setError(`The message was not sent. Try again, or email ${site.email} directly.`);
    }
  }

  return (
    <Section
      id="contact"
      title="Let's talk"
      intro="Hiring for a Data Analyst, Business Analyst or Project Manager role, or need a website, SEO or analytics set up? Send a message and I'll reply within a couple of days."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <ul className="reveal space-y-5">
          {details.map(({ Icon, label, value, href, external }) => (
            <li key={label} className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon size={18} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-muted">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="break-words font-medium hover:text-accent"
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    onClick={() => track('contact_click', { method: label.toLowerCase() })}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-medium">{value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <form onSubmit={onSubmit} className="reveal rounded-2xl border border-line bg-surface p-6 sm:p-8" noValidate={false}>
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium">Your name</label>
              <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">Your email</label>
              <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">What do you need?</label>
              <textarea id="message" name="message" rows="5" required className={`${inputClass} resize-y`} />
            </div>

            {/* Honeypot */}
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            <div aria-live="polite" className="min-h-[1.5rem] text-sm">
              {status === 'success' && (
                <p className="font-medium text-accent">Message sent. I'll get back to you soon.</p>
              )}
              {status === 'error' && <p className="font-medium text-red-600 dark:text-red-400">{error}</p>}
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}
