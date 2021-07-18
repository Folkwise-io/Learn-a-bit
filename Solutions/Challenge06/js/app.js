window.addEventListener('load', () => {
  const body = document.querySelector('body');
  const loadingScreen = document.querySelector('.loadingScreen');
  loadingScreen.style.opacity = '0';
  window.setTimeout(() => {
    body.classList.remove('loading');
  }, 500);
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar__menu');
const navLink = document.querySelectorAll('.navbar__link');

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}
