# Content you still need to supply

Search `src/data.js` for `PLACEHOLDER`. Placeholders are highlighted on the live page too.

## Must do before going live
- [ ] **Resume PDF**: save as `public/Mahammad-Haroon-Resume.pdf` (the Download Resume button points here)
- [ ] **Domain**: replace `YOUR-DOMAIN.com` in `index.html` (canonical, og:url, og:image, twitter:image, JSON-LD url), `public/sitemap.xml` and `public/robots.txt`
- [ ] **Open Graph image**: 1200x630 PNG saved as `public/og-image.png`
- [ ] **Formspree form ID** in `.env` (`VITE_FORMSPREE_ID`) so the contact form sends without opening the visitor's email app
- [ ] **GTM container ID** (`VITE_GTM_ID`) or **GA4 ID** (`VITE_GA4_ID`) in `.env` and in your host's environment variables
- [ ] **Confirm the OceaneX start year** (you wrote 2024/2025; the timeline shows "2024/25 – Present")

## Strongly recommended
- [ ] **Profile photo** to `public/profile.jpg`, then set `photo` in `data.js` (square, at least 480x480)
- [ ] **Project links**: add `live` and `github` URLs for each project
- [ ] **Project screenshots** in `public/projects/`, then set `image` on each project
- [ ] **Project details** for: Exploratory Data Analysis (problem, result), HR Analytics (result), E-Commerce Sales (problem, result)
- [ ] **Three client cards**: replace the Web, WordPress and SEO placeholders with real projects, stack, outcome and screenshot (client permission first)
- [ ] **Certificate links** (optional): add a `url` field and a link in `Certifications.jsx`
- [ ] **Issuer for IBM SPSS Modeler** certificate (left blank)

## Not yet included (add when you have them)
- [ ] Testimonials from OceaneX clients or Kalvium colleagues (with permission)
- [ ] A short case study or blog post per flagship project (helps SEO)
