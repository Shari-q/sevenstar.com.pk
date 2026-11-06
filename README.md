# Seven Star Group of Companies — Premium Website Redesign

This is the complete redesigned website for **Seven Star Group of Companies** (`sevenstar.com.pk`), inspired by the luxury aesthetic of **Al Rauf Group** (`alraufgroup.com`).

---

## How to Run (Kaise Chalayein)

### Method 1: Double-Click (Asaan Tareeqa)
Double-click **`run-website.bat`** to build the site and open it directly in your browser. You can also open **`index.html`** after building.

### Method 2: Via Terminal / Command Prompt
```bash
# 1. Is folder me terminal open karein:
cd "C:\Users\PC\Desktop\seven-star-group"

# 2. Build the site for direct opening:
npm run build

# 3. Open index.html in your browser.
```

### Development Server (Optional)
```bash
npm run dev
```

## Deploy to GitHub Pages

The GitHub Actions workflow builds and publishes the `dist` directory whenever changes are pushed to `main`. In the repository's **Settings → Pages**, set the build and deployment source to **GitHub Actions**. The production build uses the repository's `/sevenstar.com.pk/` path and hash-based routes so pages work when hosted under that project URL.

---

## All 18 Pages Included

1. **Home (`/`)** — Cinematic hero banner, live PEC Category C-A marquee, 7 business divisions, portfolio filter, property calculator, awards, leadership.
2. **About Seven Star (`/about`)** — 25-year heritage, PEC C-A credentials, mission, vision, values, state awards.
3. **Leadership & Vision (`/leadership`)** — CEO Engr. Muhammad Rizwan, official message, executive board.
4. **Services Overview (`/services`)** — Turnkey construction, infrastructure, PEC contracting.
5. **Construction Division (`/services/construction`)** — Hospitals, university campuses, public buildings.
6. **Infrastructure & Civil Works (`/services/infrastructure`)** — 200+ km highways, 180m Khokhran bridge, water schemes.
7. **Government Projects (`/services/government-projects`)** — Category C-A (No Limit) registration with C&W, PP&H, LG&RD.
8. **Real Estate Portfolio (`/real-estate`)** — Twin cities luxury high-rise developments.
9. **Seven Star Heights (`/projects/seven-star-heights`)** — Bahria Town executive residences, layouts, amenities.
10. **Seven Star Mall & Residency (`/projects/seven-star-mall-residency`)** — Main GT Road DHA Phase-II Islamabad.
11. **Completed Projects (`/projects/completed`)** — Searchable catalog of 400+ delivered projects.
12. **Ongoing Projects (`/projects/ongoing`)** — Active high-rise, highway, and hospital contracts.
13. **Project Details (`/projects/:id`)** — Dynamic technical spec sheet for each project.
14. **Petroleum & LPG Operations (`/divisions/petroleum-lpg`)** — Terminals, filling stations, LPG bulk distribution.
15. **Machinery & Equipment Fleet (`/divisions/machinery-equipment`)** — 160 T/H Jatlan asphalt plant & 500+ heavy fleet.
16. **Seven Star UK Division (`/divisions/seven-star-uk`)** — UK residential housing & overseas investor gateway.
17. **Residential Development (`/divisions/residential-development`)** — Master colony planning & turnkey villas.
18. **Contact Us (`/contact`)** — Mirpur HQ, Islamabad DHA II, Rawalpindi Bahria Town, UK, with interactive contact form.

---

## Key Assets & Tech Stack
- **Framework**: Vite + React 18 + Tailwind CSS + Lucide Icons + React Router DOM
- **Branding**: Official Seven Star Group logos, original project imagery, awards, and certifications.
- **Design Inspiration**: Al Rauf Group (navy/gold luxury palette, Albert Sans typography, glass marquee ticker, project cards).
