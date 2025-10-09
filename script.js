// Alternar menu no celular
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.style.display = expanded ? 'none' : 'block';
  });
}

// Mostrar borda de foco quando usa Tab
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') document.body.classList.add('show-focus');
});
