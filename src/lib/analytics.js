/**
 * Analytics helper.
 * - Set VITE_GTM_ID (GTM-XXXXXXX) to load Google Tag Manager, OR
 * - set VITE_GA4_ID (G-XXXXXXXXXX) to load GA4 directly.
 * With neither set, nothing loads and track() is a safe no-op (events are
 * still pushed to window.dataLayer so you can inspect them in dev tools).
 */
const GTM_ID = import.meta.env.VITE_GTM_ID;
const GA4_ID = import.meta.env.VITE_GA4_ID;

function loadScript(src) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

export function initAnalytics() {
  window.dataLayer = window.dataLayer || [];

  if (GTM_ID) {
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    loadScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`);
    return;
  }

  if (GA4_ID) {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID);
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`);
  }
}

/**
 * Send a custom event.
 * In GTM: create a Custom Event trigger matching the event name, and a GA4 Event tag.
 */
export function track(eventName, params = {}) {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else {
    window.dataLayer.push({ event: eventName, ...params });
  }
}
