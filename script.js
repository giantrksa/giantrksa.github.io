// ==========================================
// MODERN AI EXPERT PORTFOLIO - JAVASCRIPT
// Dr. Gian Antariksa
// ==========================================

document.addEventListener('DOMContentLoaded', function() {

    // ==========================================
    // NAVIGATION
    // ==========================================
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(4, 4, 4, 0.95)';
            navbar.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.55)';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.85)';
            navbar.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.35)';
        }
    });

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                }
            }
        });
    });

    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================
    // HERO STATS COUNTER ANIMATION
    // ==========================================
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');

    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    };

    // Intersection Observer for stats animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                animateCounter(entry.target);
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statsObserver.observe(stat));

    // ==========================================
    // PUBLICATIONS FILTER
    // ==========================================
    const pubFilterBtns = document.querySelectorAll('.publications-filter .filter-btn');
    const publicationCards = document.querySelectorAll('.publication-card');

    pubFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            pubFilterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterYear = btn.getAttribute('data-year');

            publicationCards.forEach(card => {
                const cardYear = card.getAttribute('data-year');

                if (filterYear === 'all' || cardYear === filterYear) {
                    card.style.display = 'grid';
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ==========================================
    // INTERACTIVE PROJECTS SHOWCASE
    // ==========================================
    const projectTabs = document.querySelectorAll('.projects-tabs .tab-btn');
    const projectShowcaseItems = document.querySelectorAll('.project-showcase-item');

    projectTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            projectTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            const category = tab.getAttribute('data-category');

            projectShowcaseItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (itemCategory === category) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        });
    });

    // ==========================================
    // SCROLL REVEAL ANIMATIONS
    // ==========================================
    const revealElements = document.querySelectorAll(`
        .section-header,
        .about-main,
        .about-highlights,
        .timeline-item,
        .experience-card,
        .publication-card,
        .skill-category-card,
        .award-card,
        .contact-card
    `);

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease-out';
        revealObserver.observe(element);
    });

    // ==========================================
    // PARALLAX EFFECT FOR HERO
    // ==========================================
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');

        if (heroBackground && scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // ==========================================
    // TYPING EFFECT FOR HERO TITLE (OPTIONAL)
    // ==========================================
    const heroGradientText = document.querySelector('.hero-title .gradient-text');
    if (heroGradientText) {
        const text = heroGradientText.textContent;
        heroGradientText.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroGradientText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // ==========================================
    // GAUGE ANIMATION FOR PROJECT DEMO
    // ==========================================
    const gaugeFills = document.querySelectorAll('.gauge-fill');

    const gaugeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        });
    }, { threshold: 0.5 });

    gaugeFills.forEach(gauge => gaugeObserver.observe(gauge));

    // ==========================================
    // FLOATING CARDS ANIMATION
    // ==========================================
    const floatingCards = document.querySelectorAll('.floating-card');

    floatingCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.5}s`;
    });

    // ==========================================
    // SKILL TAG HOVER EFFECT
    // ==========================================
    const skillTags = document.querySelectorAll('.skill-tag');

    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ==========================================
    // TIMELINE ITEM HOVER EFFECT
    // ==========================================
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const marker = this.querySelector('.marker-dot');
            if (marker) {
                marker.style.transform = 'translateX(-50%) scale(1.5)';
                marker.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.6)';
            }
        });

        item.addEventListener('mouseleave', function() {
            const marker = this.querySelector('.marker-dot');
            if (marker) {
                marker.style.transform = 'translateX(-50%) scale(1)';
                marker.style.boxShadow = 'none';
            }
        });
    });

    // ==========================================
    // COPY EMAIL ON CLICK
    // ==========================================
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const email = this.textContent;

            // Try to copy to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    // Show tooltip
                    const tooltip = document.createElement('div');
                    tooltip.textContent = 'Email copied!';
                    tooltip.style.cssText = `
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: rgba(16, 185, 129, 0.9);
                        color: white;
                        padding: 1rem 2rem;
                        border-radius: 0.5rem;
                        font-weight: 600;
                        z-index: 10000;
                        animation: fadeInOut 2s ease;
                    `;

                    document.body.appendChild(tooltip);

                    setTimeout(() => {
                        tooltip.remove();
                    }, 2000);
                });
            }
        });
    });

    // Add fadeInOut animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0%, 100% { opacity: 0; }
            10%, 90% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // ==========================================
    // ENHANCED CARD INTERACTIONS
    // ==========================================
    const cards = document.querySelectorAll(`
        .experience-card,
        .publication-card,
        .skill-category-card,
        .award-card,
        .contact-card,
        .highlight-card
    `);

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // ==========================================
    // LOAD MORE PUBLICATIONS (OPTIONAL)
    // ==========================================
    const initialPublicationsToShow = 5;
    const allPublications = Array.from(publicationCards);

    if (allPublications.length > initialPublicationsToShow) {
        // Initially hide publications beyond the limit
        allPublications.forEach((pub, index) => {
            if (index >= initialPublicationsToShow) {
                pub.style.display = 'none';
                pub.classList.add('hidden-initially');
            }
        });

        // Create "Load More" button
        const loadMoreBtn = document.createElement('button');
        loadMoreBtn.textContent = 'Load More Publications';
        loadMoreBtn.className = 'btn btn-secondary';
        loadMoreBtn.style.cssText = `
            display: block;
            margin: 2rem auto 0;
        `;

        const publicationsList = document.querySelector('.publications-list');
        if (publicationsList && publicationsList.parentElement) {
            publicationsList.parentElement.insertBefore(loadMoreBtn, publicationsList.nextSibling);
        }

        loadMoreBtn.addEventListener('click', function() {
            const hiddenPubs = document.querySelectorAll('.publication-card.hidden-initially');
            hiddenPubs.forEach(pub => {
                pub.style.display = 'grid';
                pub.classList.remove('hidden-initially');
                pub.style.animation = 'fadeInUp 0.5s ease';
            });
            this.style.display = 'none';
        });
    }

    // ==========================================
    // PERFORMANCE OPTIMIZATION
    // ==========================================

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ==========================================
    // DARK MODE TOGGLE (OPTIONAL ENHANCEMENT)
    // ==========================================
    /*
    const createDarkModeToggle = () => {
        const toggle = document.createElement('button');
        toggle.innerHTML = '🌙';
        toggle.className = 'dark-mode-toggle';
        toggle.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--primary-color);
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 1000;
            box-shadow: var(--shadow-lg);
            transition: all 0.3s ease;
        `;

        document.body.appendChild(toggle);

        toggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            toggle.innerHTML = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
        });
    };

    // Uncomment to enable dark mode toggle
    // createDarkModeToggle();
    */

    // ==========================================
    // CONSOLE LOG
    // ==========================================
    console.log('%c👨‍💻 Dr. Gian Antariksa - AI Expert & Data Scientist',
                'font-size: 20px; font-weight: bold; color: #3b82f6;');
    console.log('%c🚀 Portfolio website loaded successfully!',
                'font-size: 14px; color: #10b981;');
    console.log('%c📧 Contact: gian.antariksa@gmail.com',
                'font-size: 12px; color: #94a3b8;');

});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
