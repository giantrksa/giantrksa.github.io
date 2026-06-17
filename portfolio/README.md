# Dr. Gian Antariksa — Detail Portfolio Page

The full scrolling CV linked from the 3D landing at the repo root. Professional portfolio
covering AI, Data Science, and Machine Learning.

## Single source of truth: `js/data.js`

Every section is generated from structured data — **edit `js/data.js` to change content**,
no HTML editing required.

```
portfolio/
├── index.html          # slim shell (static hero/about + empty section mounts)
├── css/
│   ├── base.css        # variables, reset, typography, buttons, utilities
│   ├── layout.css      # navbar, hero, section headers, footer, responsive
│   └── components.css  # cards, timeline, tags, metrics, etc.
├── img/                # photos (GIAN_VIEW_move.jpeg)
├── resume/             # downloadable CV PDFs
└── js/
    ├── data.js         # ⭐ ALL content lives here
    ├── render.js       # builds section DOM from data.js
    └── ui.js           # interactions (entry module): nav, scroll-spy,
                        #   filters, tabs, expandable cards, counters
```

### How it works
`index.html` loads `js/ui.js` as an ES module. On `DOMContentLoaded` it calls
`renderAll()` (from `render.js`), which reads the exported objects in `data.js` and
injects markup into the empty `#…` mount points, then wires up the interactions.

The hero and About sections are kept as static HTML for fast first paint and SEO;
all repeating lists (education, experience, publications, skills, projects, awards,
contact) are data-driven.

## Sections
Home · About · Education · Experience · Publications · Skills · Projects · Awards · Contact

## Local preview
ES modules require an HTTP server (not `file://`). Serve from the **repo root** so the
links between the 3D landing (`/`) and this page (`/portfolio/`) resolve:

```bash
# from the repository root
python3 -m http.server 8000
# 3D landing:   http://localhost:8000/
# this page:    http://localhost:8000/portfolio/
```

## Contact
- **Email:** gian.antariksa@gmail.com
- **LinkedIn:** [linkedin.com/in/antrks](https://linkedin.com/in/antrks)
- **GitHub:** [github.com/giantrksa](https://github.com/giantrksa)

© 2026 Gian Antariksa. All rights reserved.
