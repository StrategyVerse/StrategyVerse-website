/* ============================================
   StrategyVerse — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar scroll effect ---
  const navbar = document.querySelector('.navbar');
  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // --- Mobile menu toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll reveal animations ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Active nav link highlighting ---
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    // Resolve the href to an absolute path for comparison
    const resolved = new URL(href, window.location.href).pathname;
    // Exact match, or both point to the site root
    if (resolved === path || resolved === path + '/' || resolved + '/' === path) {
      link.classList.add('active');
    }
  });

  // --- Contact form handling ---
  // Form uses FormSubmit.co to email submissions to founder@strategyverse.in
  // The form's action attribute handles the submission; JS provides UX feedback
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.style.background = '#27ae60';
      btn.style.borderColor = '#27ae60';
    });
  }

  // --- Testimonials auto-sliding carousel ---
  const carousel = document.querySelector('.testimonials-carousel');
  if (carousel) {
    const track = carousel.querySelector('.testimonials-track');
    const slides = Array.from(track.querySelectorAll('.testimonial-slide'));
    const dotsContainer = carousel.querySelector('.carousel-dots');
    let currentIndex = 0;
    let interval;
    let isPaused = false;

    // Determine visible slides based on screen width
    function getVisibleCount() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }

    function getMaxIndex() {
      return Math.max(0, slides.length - getVisibleCount());
    }

    // Create dots
    function createDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      const max = getMaxIndex();
      for (let i = 0; i <= max; i++) {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      }
    }

    function updateDots() {
      if (!dotsContainer) return;
      dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    function goTo(index) {
      const max = getMaxIndex();
      currentIndex = Math.min(Math.max(0, index), max);
      const slideWidth = 100 / getVisibleCount();
      track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
      updateDots();
    }

    function next() {
      if (currentIndex >= getMaxIndex()) {
        goTo(0);
      } else {
        goTo(currentIndex + 1);
      }
    }

    function startAutoSlide() {
      stopAutoSlide();
      interval = setInterval(() => {
        if (!isPaused) next();
      }, 5500);
    }

    function stopAutoSlide() {
      if (interval) clearInterval(interval);
    }

    // Pause on hover, resume on leave
    carousel.addEventListener('mouseenter', () => { isPaused = true; });
    carousel.addEventListener('mouseleave', () => { isPaused = false; });

    // Touch support
    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      isPaused = true;
    }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? goTo(currentIndex + 1) : goTo(currentIndex - 1);
      }
      isPaused = false;
    }, { passive: true });

    // Init
    createDots();
    startAutoSlide();

    // Recalc on resize
    window.addEventListener('resize', () => {
      createDots();
      goTo(Math.min(currentIndex, getMaxIndex()));
    });
  }

  // --- Coverage marquee: duplicate items for seamless loop ---
  const coverageTrack = document.querySelector('.coverage-track');
  if (coverageTrack) {
    const items = coverageTrack.innerHTML;
    coverageTrack.innerHTML = items + items;
  }
});
