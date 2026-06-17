// ============================================================
// UI / INTERACTIONS — entry module
// Renders content from data.js, then wires up behaviour.
// ============================================================
import { renderAll } from "./render.js";

// --- small utilities ----------------------------------------
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function throttle(fn, limit = 100) {
  let waiting = false;
  return (...args) => {
    if (waiting) return;
    fn(...args);
    waiting = true;
    setTimeout(() => (waiting = false), limit);
  };
}

// --- navigation: scroll state + scroll-spy ------------------
function initNavigation() {
  const navbar = $(".navbar");
  const navLinks = $$(".nav-link");
  const sections = $$("section[id]");

  const onScroll = () => {
    const scrolled = window.scrollY > 100;
    if (navbar) navbar.classList.toggle("is-scrolled", scrolled);

    let current = "";
    for (const section of sections) {
      if (window.scrollY >= section.offsetTop - 150) current = section.id;
    }
    navLinks.forEach((link) =>
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`)
    );
  };

  window.addEventListener("scroll", throttle(onScroll, 100), { passive: true });
  onScroll();
}

// --- mobile menu + smooth scroll ----------------------------
function initMobileMenu() {
  const hamburger = $(".hamburger");
  const navMenu = $(".nav-menu");
  if (!hamburger || !navMenu) return;

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  navMenu.addEventListener("click", (e) => {
    const link = e.target.closest(".nav-link");
    if (!link) return;
    const href = link.getAttribute("href");
    if (href?.startsWith("#")) {
      const target = $(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
      }
    }
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
}

// --- animated stat counters ---------------------------------
function initCounters() {
  const animate = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || "";
    const steps = 60;
    let current = 0;
    const tick = () => {
      current += target / steps;
      if (current < target) {
        el.textContent = Math.ceil(current);
        requestAnimationFrame(tick);
      } else {
        el.textContent = `${target}${suffix}`;
      }
    };
    tick();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !entry.target.dataset.done) {
          entry.target.dataset.done = "1";
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.5 }
  );

  $$(".stat-number[data-target]").forEach((el) => observer.observe(el));
}

// --- filter / tab groups (delegated) ------------------------
function initToggleGroup(groupSel, btnSel, onSelect) {
  const group = $(groupSel);
  if (!group) return;
  group.addEventListener("click", (e) => {
    const btn = e.target.closest(btnSel);
    if (!btn) return;
    $$(btnSel, group).forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    onSelect(btn);
  });
}

function initPublicationFilter() {
  initToggleGroup(".publications-filter", ".filter-btn", (btn) => {
    const year = btn.dataset.year;
    $$(".publication-card").forEach((card) => {
      const show = year === "all" || card.dataset.year === year;
      card.style.display = show ? "grid" : "none";
      if (show) card.style.animation = "fadeInUp 0.5s ease";
    });
  });
}

function initProjectTabs() {
  initToggleGroup(".projects-tabs", ".tab-btn", (btn) => {
    const category = btn.dataset.category;
    $$(".project-showcase-item").forEach((item) =>
      item.classList.toggle("active", item.dataset.category === category)
    );
  });
}

// --- experience expand/collapse (delegated) -----------------
function initExperienceToggles() {
  const grid = $(".experience-grid");
  if (!grid) return;
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".exp-toggle");
    if (!btn) return;
    const details = btn.parentElement.querySelector(".exp-details");
    if (!details) return;
    const opening = details.hidden;
    details.hidden = !opening;
    btn.classList.toggle("active", opening);
    const text = btn.querySelector(".toggle-text");
    if (text) text.textContent = text.textContent.replace(/^(View|Hide)\b/, opening ? "Hide" : "View");
  });
}

// --- scroll reveal ------------------------------------------
function initScrollReveal() {
  const targets = $$(
    ".section-header, .about-main, .about-highlights, .timeline-item, .experience-card, " +
      ".publication-card, .skill-category-card, .award-card, .contact-card"
  );
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  targets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

// --- gauge fill animation -----------------------------------
function initGauges() {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const fill = entry.target;
        const width = fill.style.width;
        fill.style.width = "0%";
        requestAnimationFrame(() => (fill.style.width = width));
        observer.unobserve(fill);
      }
    },
    { threshold: 0.5 }
  );
  $$(".gauge-fill").forEach((el) => observer.observe(el));
}

// --- copy email on click ------------------------------------
function initEmailCopy() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="mailto:"]');
    if (!link || !navigator.clipboard) return;
    navigator.clipboard.writeText(link.textContent.trim()).then(() => {
      const toast = document.createElement("div");
      toast.className = "copy-toast";
      toast.textContent = "Email copied!";
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2000);
    });
  });
}

// --- boot ---------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderAll(); // generate content from data.js first

  initNavigation();
  initMobileMenu();
  initCounters();
  initPublicationFilter();
  initProjectTabs();
  initExperienceToggles();
  initScrollReveal();
  initGauges();
  initEmailCopy();

  console.log(
    "%c👨‍💻 Dr. Gian Antariksa — AI Expert & Data Scientist",
    "font-size:16px;font-weight:bold;color:#c29bff;"
  );
});
