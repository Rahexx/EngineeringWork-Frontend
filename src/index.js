import './sass/main.scss';

const burger = document.querySelector('.burger');
const icon = document.querySelector('.fa-bars');
const nav = document.querySelector('.navigation');

burger.addEventListener('click', () => {

    if(burger.classList.contains('active')){
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        burger.classList.remove('active');
        nav.style.left = '-100vw';
        return;
    }

    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
    burger.classList.add('active');
    nav.style.left = '0';
})
