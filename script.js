// Smooth scroll (optional anchor links)
document.querySelectorAll('nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && href.startsWith('#')) {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
  }
});

// Form validation
const form = document.forms['contactForm'];
if (form) {
  form.addEventListener('submit', e => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all fields before submitting.');
    }
  });
}

// Button animation
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.05)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});
