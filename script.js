
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => { if (toggle) toggle.checked = false; });
  });
});
