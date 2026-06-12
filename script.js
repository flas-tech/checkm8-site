// Theme toggle
(function () {
  const t = document.querySelector('[data-theme-toggle]'),
    r = document.documentElement;
  let d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  if (r.getAttribute('data-theme')) d = r.getAttribute('data-theme');
  const sun = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  const moon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  function paint() { r.setAttribute('data-theme', d); if (t) { t.innerHTML = d === 'dark' ? sun : moon; t.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode'); } }
  paint();
  t && t.addEventListener('click', () => { d = d === 'dark' ? 'light' : 'dark'; paint(); });
})();

// Sticky header shadow
(function () {
  const h = document.getElementById('header');
  const onScroll = () => h.classList.toggle('header--scrolled', window.scrollY > 8);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
})();

// Reveal on scroll
(function () {
  const els = document.querySelectorAll('.section, .strip, .cta');
  els.forEach(el => el.classList.add('reveal'));
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
  els.forEach(el => io.observe(el));
})();

// Year
document.getElementById('year').textContent = new Date().getFullYear();
