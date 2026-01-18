const menu = document.querySelector('button');
const konten = document.querySelector('.navbar-konten');
menu.addEventListener('click', () => {
    konten.classList.toggle('active');
  });