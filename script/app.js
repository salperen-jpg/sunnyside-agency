const btn = document.getElementById('toggle');
const navMenu = document.getElementById('nav-menu');
btn.addEventListener('click', () => {
  if (navMenu.classList.contains('show')) {
    navMenu.classList.remove('show');
  } else {
    navMenu.classList.add('show');
  }
});
