// ============================================================
// RENDER LAYER — builds section DOM from data.js
// You normally never edit this file; edit data.js instead.
// ============================================================
import {
  stats, education, experience, publications, scholarUrl,
  skills, projectCategories, projects, awards, contacts,
} from "./data.js";

// --- helpers ------------------------------------------------
const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const mount = (id, html) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
};

const chevron = `<svg class="toggle-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor"><path d="M6 8l4 4 4-4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// --- hero stats (numbers come from data, animated by ui.js) -
function renderStats() {
  mount(
    "hero-stats",
    stats
      .map(
        (s) => `
        <div class="stat-item">
          <span class="stat-number" data-target="${s.value}" data-suffix="${s.suffix || ""}">0</span>
          <span class="stat-label">${esc(s.label)}</span>
        </div>`
      )
      .join("")
  );
}

// --- education timeline -------------------------------------
function renderEducation() {
  mount(
    "education-timeline",
    education
      .map(
        (e) => `
      <div class="timeline-item">
        <div class="timeline-marker"><div class="marker-ring"></div><div class="marker-dot"></div></div>
        <div class="timeline-content">
          <div class="timeline-badge ${e.badgeClass}">${esc(e.badge)}</div>
          <div class="timeline-period">${esc(e.period)}</div>
          <h3>${esc(e.degree)}</h3>
          <h4>${esc(e.school)}</h4>
          <p class="gpa">${esc(e.gpa)}</p>
          <div class="timeline-details">
            ${e.details.map((d) => `<p><strong>${esc(d.label)}:</strong> ${esc(d.text)}</p>`).join("")}
            <p><strong>Key Courses:</strong></p>
            <ul>${e.courses.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
          </div>
        </div>
      </div>`
      )
      .join("")
  );
}

// --- experience grid ----------------------------------------
function renderExperience() {
  const projectBlock = (job) => {
    if (!job.projects) return "";
    const items = job.projects
      .map(
        (p) => `
        <div class="project-item">
          <strong>${esc(p.title)}</strong>
          ${p.body
            .map((b) => `<p>${b.label ? `<strong>${esc(b.label)}:</strong> ` : ""}${esc(b.text)}</p>`)
            .join("")}
          ${p.impact ? `<span class="impact">Impact: ${esc(p.impact)}</span>` : ""}
        </div>`
      )
      .join("");
    return `
      <button class="exp-toggle" type="button">
        <span class="toggle-text">View ${esc(job.toggleLabel || "Details")}</span>${chevron}
      </button>
      <div class="exp-projects exp-details" hidden>
        <h5>${esc(job.toggleLabel || "Details")}:</h5>
        ${items}
      </div>`;
  };

  mount(
    "experience-grid",
    experience
      .map(
        (job) => `
      <div class="experience-card${job.current ? " current" : ""}">
        <div class="exp-header">
          <div class="exp-icon">${job.icon}</div>
          <div class="exp-meta">
            <h3>${esc(job.title)}</h3>
            <h4>${esc(job.org)}</h4>
            <span class="exp-period">${esc(job.period)}</span>
            ${job.badge ? `<span class="exp-badge">${esc(job.badge)}</span>` : ""}
          </div>
        </div>
        <p class="exp-summary">${esc(job.summary)}</p>
        <div class="exp-highlights">
          ${(job.highlights || []).map((h) => `<div class="highlight-badge">${h}</div>`).join("")}
        </div>
        ${projectBlock(job)}
      </div>`
      )
      .join("")
  );
}

// --- publications (filter + list) ---------------------------
function renderPublications() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  mount(
    "publications-filter",
    `<button class="filter-btn active" data-year="all">All Years</button>` +
      years.map((y) => `<button class="filter-btn" data-year="${y}">${y}</button>`).join("")
  );

  mount(
    "publications-list",
    publications
      .map(
        (p) => `
      <div class="publication-card" data-year="${p.year}">
        <div class="pub-year">${p.year}</div>
        <div class="pub-content">
          <h3>${esc(p.title)}</h3>
          <p class="pub-authors">${p.authors}</p>
          <p class="pub-venue">${esc(p.venue)}</p>
          <div class="pub-tags">${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          ${
            p.url
              ? `<a href="${p.url}" class="pub-link" target="_blank" rel="noopener">View Publication →</a>`
              : ""
          }
        </div>
      </div>`
      )
      .join("")
  );

  mount(
    "publications-cta",
    `<p>See complete publication list on</p>
     <a href="${scholarUrl}" target="_blank" rel="noopener" class="btn btn-secondary">Google Scholar →</a>`
  );
}

// --- skills -------------------------------------------------
function renderSkills() {
  mount(
    "skills-showcase",
    skills
      .map(
        (cat) => `
      <div class="skill-category-card">
        <div class="skill-cat-header">
          <div class="skill-cat-icon">${cat.icon}</div>
          <h3>${esc(cat.title)}</h3>
        </div>
        <div class="skill-tags-grid">
          ${cat.tags.map((t) => `<span class="skill-tag">${esc(t)}</span>`).join("")}
        </div>
      </div>`
      )
      .join("")
  );
}

// --- interactive projects (tabs + showcase) -----------------
const VISUALS = {
  bars: `<svg width="200" height="200" viewBox="0 0 200 200"><rect x="20" y="40" width="30" height="120" fill="#3b82f6" opacity="0.8"/><rect x="60" y="60" width="30" height="100" fill="#8b5cf6" opacity="0.8"/><rect x="100" y="30" width="30" height="130" fill="#ec4899" opacity="0.8"/><rect x="140" y="70" width="30" height="90" fill="#10b981" opacity="0.8"/></svg>`,
  chat: `<div class="chat-message user">Query: Tell me about...</div><div class="chat-message bot">Based on the documents...</div>`,
  detect: `<svg width="200" height="200" viewBox="0 0 200 200"><rect x="40" y="40" width="120" height="80" fill="none" stroke="#3b82f6" stroke-width="3"/><rect x="60" y="70" width="80" height="50" fill="none" stroke="#ec4899" stroke-width="2"/><circle cx="100" cy="100" r="5" fill="#10b981"/></svg>`,
  gauge: `<div class="gauge"><div class="gauge-fill" style="width: 75%"></div></div><div class="status-text">System Optimal</div>`,
};

function renderProjects() {
  mount(
    "projects-tabs",
    projectCategories
      .map(
        (c, i) =>
          `<button class="tab-btn${i === 0 ? " active" : ""}" data-category="${c.id}">${esc(c.label)}</button>`
      )
      .join("")
  );

  const demoClass = { chat: " chat-demo", gauge: " industrial-demo" };
  mount(
    "projects-showcase",
    projects
      .map((p, i) => {
        const v = p.visual.type;
        return `
      <div class="project-showcase-item${i === 0 ? " active" : ""}" data-category="${p.category}">
        <div class="project-visual">
          <div class="project-demo">
            <div class="demo-placeholder${demoClass[v] || ""}">${VISUALS[v] || ""}</div>
          </div>
        </div>
        <div class="project-info">
          <h3>${esc(p.title)}</h3>
          ${p.desc.map((d) => `<p class="project-desc">${d}</p>`).join("")}
          <div class="project-metrics">
            ${p.metrics
              .map(
                (m) =>
                  `<div class="metric"><span class="metric-value">${esc(m.value)}</span><span class="metric-label">${esc(m.label)}</span></div>`
              )
              .join("")}
          </div>
          <div class="project-tech">${p.tech.map((t) => `<span class="tech-tag">${esc(t)}</span>`).join("")}</div>
        </div>
      </div>`;
      })
      .join("")
  );
}

// --- awards -------------------------------------------------
function renderAwards() {
  mount(
    "awards-grid",
    awards
      .map(
        (a) => `
      <div class="award-card ${a.cls}">
        <div class="award-medal">${a.medal}</div>
        <h3>${esc(a.title)}</h3>
        <p>${esc(a.org)}</p>
        <span class="award-desc">${esc(a.desc)}</span>
        <span class="award-year">${esc(a.year)}</span>
      </div>`
      )
      .join("")
  );
}

// --- contact ------------------------------------------------
const CONTACT_ICONS = {
  email: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  linkedin: `<svg width="24" height="24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  github: `<svg width="24" height="24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  phone: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
};

function renderContact() {
  mount(
    "contact-grid",
    contacts
      .map((c) => {
        const body = c.numbers
          ? `<div class="phone-numbers">${c.numbers
              .map((n) => `<a href="${n.href}">${esc(n.text)}</a>`)
              .join("")}</div>`
          : `<a href="${c.href}"${c.type !== "email" ? ' target="_blank" rel="noopener"' : ""}>${esc(c.text)}</a>`;
        return `
      <div class="contact-card">
        <div class="contact-icon">${CONTACT_ICONS[c.type] || ""}</div>
        <h3>${esc(c.title)}</h3>
        ${body}
      </div>`;
      })
      .join("")
  );
}

export function renderAll() {
  renderStats();
  renderEducation();
  renderExperience();
  renderPublications();
  renderSkills();
  renderProjects();
  renderAwards();
  renderContact();
}
