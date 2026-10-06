import React from 'react';

/** Highlights any [PLACEHOLDER: ...] markers so unfinished content is easy to spot. */
export function withPlaceholders(text = '') {
  const parts = String(text).split(/(\[PLACEHOLDER[^\]]*\])/g);
  return parts.map((part, i) =>
    part.startsWith('[PLACEHOLDER') ? (
      <span key={i} className="placeholder-mark">
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}
