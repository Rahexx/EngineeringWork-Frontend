import './sass/main.scss';
import { gsap } from 'gsap';

const burger = document.querySelector('.burger');
const icon = document.querySelector('.fa-bars');
const nav = document.querySelector('.navigation');

const openNav = (width) => {
  icon.classList.remove('fa-bars');
  icon.classList.add('fa-times');
  burger.classList.add('active');
  gsap.to('.navigation', { x: width, duration: 1 });
};

const closeNav = () => {
  icon.classList.remove('fa-times');
  icon.classList.add('fa-bars');
  burger.classList.remove('active');
  nav.style.left = '-100vw';
  gsap.to('.navigation', { x: 0, duration: 1 });
};

burger.addEventListener('click', () => {
  const pageWidth = document.body.offsetWidth;

  if (burger.classList.contains('active')) {
    closeNav();
    return;
  }
  openNav(pageWidth);
});
