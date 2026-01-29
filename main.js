const menu = document.querySelector('button');
const konten = document.querySelector('.navbar-konten');
menu.addEventListener('click', () => {
    konten.classList.toggle('active');
  });
  
  
  const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);