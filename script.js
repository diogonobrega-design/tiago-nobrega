document.querySelectorAll('.yr').forEach(el => el.textContent = new Date().getFullYear());

// reveal on scroll
const io = 'IntersectionObserver' in window
  ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' })
  : null;
document.querySelectorAll('.rv').forEach(el => io ? io.observe(el) : el.classList.add('in'));

// lightbox
const lb = document.getElementById('lb');
if (lb) {
  const lbi = lb.querySelector('img');
  document.querySelectorAll('.project figure img').forEach(img => {
    if (img.closest('.p-logo')) return;
    img.addEventListener('click', () => {
      lbi.src = img.src; lbi.alt = img.alt;
      lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });
  const close = () => { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; };
  lb.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}
