// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold: 0.1});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Active nav
window.addEventListener('scroll', () => {
  const sections = ['about','technology','products','applications','global','contact'];
  const scrollY = window.pageYOffset;
  sections.forEach(id => {
    const el = document.getElementById(id);
    if(!el) return;
    if(el.offsetTop - 100 <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.style.color = a.getAttribute('href') === '#'+id ? '#02C39A' : 'rgba(255,255,255,0.6)';
      });
    }
  });
});

// Smooth scroll helper
function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
