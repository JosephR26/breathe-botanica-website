// Simple navigation toggle handler
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      // collapse mobile menu when a link is clicked
      if (toggle) toggle.checked = false;
    });
  });
});