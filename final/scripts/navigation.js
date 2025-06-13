// Responsive nav menu toggle
const menuBtn = document.getElementById('menu');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
