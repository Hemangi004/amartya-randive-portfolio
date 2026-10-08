/**
 * AMARTYA RANDIVE — INDUSTRIAL ENGINEERING PORTFOLIO
 * Main Interactions & Engineering Micro-features
 */

document.addEventListener('DOMContentLoaded', () => {
  // Navigation elements
  const siteNav = document.getElementById('siteNav');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  const sections = document.querySelectorAll('section[id]');

  // Sticky Navigation Header on scroll
  const handleScroll = () => {
    if (window.scrollY > 40) {
      siteNav.classList.add('scrolled');
    } else {
      siteNav.classList.remove('scrolled');
    }

    // Active Section Tracking
    let currentId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Menu Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.innerHTML = isOpen
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });
  }

  // Toast notification for clipboard copies
  const toast = document.getElementById('toastNotice');
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  // Clipboard copy for contact details
  const copyBtns = document.querySelectorAll('[data-copy]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        }).catch(() => {
          showToast(`Direct copy: ${textToCopy}`);
        });
      } else {
        showToast(`Contact: ${textToCopy}`);
      }
    });
  });

  // Number Counter Animation for Metrics
  const metricCounters = document.querySelectorAll('[data-counter]');
  let animatedCounters = false;

  const animateCounters = () => {
    metricCounters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-counter'));
      const isFloat = counter.getAttribute('data-counter').includes('.');
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      
      let current = 0;
      const step = target / 35;
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          counter.textContent = `${prefix}${isFloat ? target.toFixed(1) : Math.round(target)}${suffix}`;
          clearInterval(timer);
        } else {
          counter.textContent = `${prefix}${isFloat ? current.toFixed(1) : Math.round(current)}${suffix}`;
        }
      }, 30);
    });
  };

  // Observe snapshot section for counter triggering
  const snapshotSection = document.getElementById('snapshot');
  if (snapshotSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedCounters) {
          animatedCounters = true;
          animateCounters();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(snapshotSection);
  } else {
    animateCounters();
  }
});

