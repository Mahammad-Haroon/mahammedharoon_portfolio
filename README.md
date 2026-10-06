# Mahammad Haroon: portfolio

React + Vite + Tailwind CSS single-page portfolio. All content is in **`src/data.js`**.

## Project structure

```
portfolio/
├── index.html              Meta tags, Open Graph, JSON-LD Person schema, theme bootstrap
├── public/
│   ├── favicon.svg
│   ├── robots.txt          Update the domain
│   ├── sitemap.xml         Update the domain
│   └── (add) Mahammad-Haroon-Resume.pdf, og-image.png, profile.jpg, projects/
├── src/
│   ├── data.js             EDIT THIS: all text, projects, skills, links
│   ├── main.jsx            Entry; loads analytics after page load
│   ├── App.jsx
│   ├── index.css           Colour tokens (light + dark), base styles
│   ├── lib/
│   │   ├── analytics.js    GTM / GA4 loader + track() helper
│   │   ├── hooks.js        Theme, scroll reveal, active nav, count-up
│   │   └── text.jsx        Highlights [PLACEHOLDER] markers
│   └── components/         Navbar, Hero, About, Services, Skills, Experience,
│                           Projects, Certifications, Contact, Footer
├── .env.example
├── tailwind.config.js
├── vercel.json / netlify.toml
└── CONTENT_CHECKLIST.md    What you still need to supply
```

## Run locally

```bash
npm install
cp .env.example .env     # then fill in the IDs
npm run dev              # http://localhost:5173
npm run build            # outputs to dist/
npm run preview          # test the production build
```

## Change the accent colour

Edit the `--accent`, `--accent-soft` and `--on-accent` values (light and `.dark`) in `src/index.css`. Values are RGB triplets. Keep text contrast at 4.5:1 or better.

## Contact form (Formspree)

1. Create a free form at https://formspree.io and copy the ID from the endpoint (`https://formspree.io/f/XXXXXXXX`).
2. Set `VITE_FORMSPREE_ID=XXXXXXXX` in `.env` and in your host's environment variables.

Until it is set, submitting opens the visitor's email app with the message pre-filled. The form includes a honeypot field against spam bots. To use EmailJS instead, replace the `fetch` call in `src/components/Contact.jsx`.

## Analytics and event tracking

Set **either** `VITE_GTM_ID` (recommended) **or** `VITE_GA4_ID`. The scripts load after the page finishes loading, so they do not hurt your Lighthouse score.

Events sent by the site:

| Event | Fired when | Parameters |
|---|---|---|
| `cta_click` | "View Projects" clicked | `cta`, `location` |
| `resume_download` | "Download Resume" clicked | `location` |
| `form_submit` | Contact form sent | `form`, `method` |
| `contact_click` | Email, phone, LinkedIn or GitHub link clicked | `method` |
| `social_click` | Hero social icon clicked | `network`, `location` |
| `project_link_click` | Live or GitHub button clicked | `project`, `type` |
| `project_filter` | Project filter changed | `filter` |

**With GTM:** create a Custom Event trigger for each event name above, and a GA4 Event tag that uses the same name. Mark `form_submit` and `resume_download` as key events in GA4.
**With direct GA4:** events are sent automatically via `gtag`. Mark `form_submit` and `resume_download` as key events in GA4.

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. Go to vercel.com, **Add New, Project**, import the repo. Framework preset: **Vite** (auto-detected).
3. Add the environment variables from `.env.example` under **Settings, Environment Variables**.
4. Deploy. Every push to `main` redeploys.

## Deploy to Netlify

1. Push to GitHub, then **Add new site, Import an existing project** on netlify.com.
2. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).
3. Add the environment variables under **Site configuration, Environment variables**, then deploy.

## Custom domain

1. Buy a domain, then in Vercel (**Settings, Domains**) or Netlify (**Domain management**) add it.
2. At your registrar, add the DNS records the host shows (usually an `A` record for the root domain and a `CNAME` for `www`). HTTPS is issued automatically.
3. Replace `YOUR-DOMAIN.com` in `index.html`, `public/sitemap.xml` and `public/robots.txt`, then redeploy.

## After launch (SEO)

1. Verify the site in **Google Search Console** and submit `https://your-domain.com/sitemap.xml`.
2. Test the preview with the LinkedIn Post Inspector and the Rich Results Test (for the Person schema).
3. Run Lighthouse in Chrome on the deployed URL. Add real photos as optimised WebP/JPEG at the displayed size.
4. Add your portfolio URL to your LinkedIn, GitHub profile and Google Business Profile.
