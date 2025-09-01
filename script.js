// Toggle mobile nav (if needed)
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Scroll-to-top button
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.style.display = window.scrollY > 400 ? 'inline-block' : 'none';
});
toTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Project filter
const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.card');
buttons.forEach(btn => btn.addEventListener('click', () => {
  const filter = btn.dataset.filter;
  buttons.forEach(b => b.setAttribute('aria-pressed', 'false'));
  btn.setAttribute('aria-pressed', 'true');
  cards.forEach(card => {
    const show = filter === 'all' || card.dataset.tags.includes(filter);
    card.style.display = show ? '' : 'none';
  });
}));

// Contact form validation
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) {
    statusEl.textContent = "Please fill all fields.";
    statusEl.style.color = "red";
    return;
  }
  statusEl.textContent = "Thanks! Your message has been sent.";
  statusEl.style.color = "green";
  form.reset();
});
