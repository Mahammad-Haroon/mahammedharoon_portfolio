import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/inter';
import './index.css';
import App from './App.jsx';
import { initAnalytics } from './lib/analytics.js';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Load analytics after the page is interactive so it never blocks rendering.
if (document.readyState === 'complete') {
  setTimeout(initAnalytics, 0);
} else {
  window.addEventListener('load', () => setTimeout(initAnalytics, 0), { once: true });
}
