# Gian Antariksa — Portfolio (GitHub Pages)

Live at **https://giantrksa.github.io**

This repository deploys **one cohesive portfolio in two connected layers**:

| Layer | Path | What it is |
|-------|------|------------|
| **3D landing** | `/` (`index.html`) | Interactive Three.js "drivable car" experience. Compiled bundle in `assets/`. |
| **Detail page** | `/portfolio/` | Full scrolling CV: education, experience, publications, skills, projects, awards, contact. |

The two are linked both ways:
- The 3D landing shows an **"Enter Full Portfolio →"** button (and the in-world ABOUT box) that opens `/portfolio/`.
- The detail page has a **"← 3D Experience"** link back to `/`.

---

## Editing content

**You almost never touch HTML.** All text on the detail page comes from a single file:

```
portfolio/js/data.js   ← edit this to change any content
```

One publication = one object, one job = one object. The page is generated from these objects at load time.

```
portfolio/
├── index.html          # slim shell: static hero/about + empty section mounts
├── css/
│   ├── base.css        # variables, reset, typography, buttons, utilities
│   ├── layout.css      # navbar, hero, section headers, footer, responsive
│   └── components.css  # cards, timeline, tags, metrics, etc.
├── img/                # photos (e.g. GIAN_VIEW_move.jpeg)
├── resume/             # downloadable CV PDFs
└── js/
    ├── data.js         # ⭐ ALL content (edit here)
    ├── render.js       # turns data.js into DOM (rarely edited)
    └── ui.js           # interactions: nav, scroll-spy, filters, toggles, counters
```

### Common edits
- **Add a publication** → add an object to the `publications` array in `data.js`.
- **Add a job** → add an object to the `experience` array (add a `projects` array for an expandable details panel).
- **Change a stat** → edit the `stats` array (hero counters read from it).
- **Add a skill group** → add an object to the `skills` array.

---

## The 3D landing (`/`)

The root experience is a **compiled build** (`assets/index-*.js` / `.css`). It is not edited directly here — it is the production output of a separate Three.js/Vite project (Cannon.js physics, GSAP, Howler.js audio). To change the 3D world itself, rebuild from that source project and replace the files in `assets/`, `models/`, `draco/`, and `sounds/`.

The editable parts of the landing are `index.html` (metadata, overlay text, the "Enter Full Portfolio" CTA) and `favicon/site.webmanifest`.

**Controls:** Arrow keys / WASD to drive · E / F / Enter to interact · swipe on mobile.

---

## Deployment

GitHub Pages serves this repo as-is (static). `.nojekyll` disables Jekyll processing so folders like `assets/` and `draco/` are published untouched. No build step runs on push.

## Contact
- **Email:** gian.antariksa@gmail.com
- **LinkedIn:** [linkedin.com/in/antrks](https://linkedin.com/in/antrks)
- **GitHub:** [github.com/giantrksa](https://github.com/giantrksa)
- **Google Scholar:** [200+ citations](https://scholar.google.com/citations?user=5BawrcEAAAAJ)

© 2026 Gian Antariksa. All rights reserved.
