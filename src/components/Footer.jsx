import React from 'react';
import { site } from '../data.js';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-start justify-between gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {site.name}. {site.location}.
        </p>
        <a href="#top" className="font-medium text-ink hover:text-accent">
          Back to top
        </a>
      </div>
    </footer>
  );
}
