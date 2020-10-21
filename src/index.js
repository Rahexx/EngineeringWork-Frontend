import './sass/main.scss';
import { gsap } from 'gsap';

const burger = document.querySelector('.burger');
const icon = document.querySelector('.fa-bars');
const nav = document.querySelector('.navigation');

const fixedNavigation = () => {
  if(!nav.classList.contains('navigation--fixed')){
    nav.classList.add('navigation--fixed');
  }
}

const unFixedNavigation = () => {
  if(nav.classList.contains('navigation--fixed')){
    nav.classList.remove('navigation--fixed');
  }
}

const changeNavigation = () => {
  if(window.pageYOffset > window.innerHeight / 2){
    fixedNavigation();
  }else{
    unFixedNavigation();
  }
}

const showReason = () => {
  const windowHeight = window.innerHeight;
  const scrollOffset = window.pageYOffset;
  const element = [...document.querySelectorAll('.mainInfo__reason')];
  const offsetTopElement = element.map((item) => {
    return item.offsetTop;
  });

  for(let i=0; i< element.length; i++){
      if(scrollOffset > offsetTopElement[i] - (windowHeight / 1.2)){
      gsap.to(element[i], { x: 0, duration: .75 });
      }
  }
}

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

window.addEventListener('scroll', () => {
  showReason();

  if(window.innerWidth > 1024){
    changeNavigation();
  }

});
