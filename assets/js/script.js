// Mobile Nav Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.navbar ul');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));




// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => preloader.style.opacity = '0', 500);
  setTimeout(() => preloader.style.display = 'none', 1000);
});




// Parallax Effect
window.addEventListener('scroll', () => {
  const bg = document.querySelector('.hero-bg');
  const scrollY = window.scrollY;
  bg.style.transform = `translateY(${scrollY * 0.4}px)`;
});




// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  reveals.forEach(reveal => {
    const revealTop = reveal.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();



// Hero fade out on scroll
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrollY = window.scrollY;
  const opacity = Math.max(1 - scrollY / 400, 0);
  hero.style.opacity = opacity;
});







// Smooth Scroll Offset (accounts for fixed header)
const navLinksSmooth = document.querySelectorAll('.navbar a[href^="#"]');
const headerHeight = document.querySelector('.main-header').offsetHeight;

navLinksSmooth.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const targetPosition = targetSection.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    navLinks.classList.remove('active'); // close mobile menu on click
  });
});
