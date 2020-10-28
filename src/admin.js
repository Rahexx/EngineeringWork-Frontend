import Pagination from './app/Pagination';
import { gsap } from 'gsap';

const items = document.querySelectorAll('[data-value="download"]');
const main = document.querySelector('.adminPanel__listUser');
const detailsBtn = document.querySelectorAll('.adminPanel__button--details');
const detailsInfo = document.querySelector('.popUp--details');
const detailsBurger = document.querySelector('.burger--details')
const pagination = new Pagination([...items]);

pagination.createPagination(main);

function closeDetails(){
    detailsBurger.removeEventListener('click', closeDetails);
    gsap.to('.popUp--details' , {left: '-100vw', duration: 1});
    detailsBurger.style.display = 'none';
}

function showDetails(){
    const pageWidth = document.body.offsetWidth;
    detailsInfo.style.display = 'block';

    gsap.to('.popUp--details' , {left: 0, duration: 1});

    setTimeout(() => {
        detailsBurger.style.display = 'flex';
        detailsBurger.addEventListener('click', closeDetails);
    }, 900);
}

[...detailsBtn].map((item) => item.addEventListener('click', showDetails));