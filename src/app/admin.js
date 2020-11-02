import { gsap } from 'gsap';
import Pagination from './Pagination';

const items = document.querySelectorAll('[data-value="download"]');
const main = document.querySelector('.adminPanel__listUser');
const detailsBtn = document.querySelectorAll('.adminPanel__button--details');
const detailsInfo = document.querySelector('.popUp--details');
const detailsBurger = document.querySelector('.burger--details');
const editBtn = document.querySelectorAll('.adminPanel__button--edit');
const editInfo = document.querySelector('.popUp--edit');
const editBurger = document.querySelector('.burger--edit');
const pagination = new Pagination([...items]);

pagination.createPagination(main);

function closeDetails() {
  detailsBurger.removeEventListener('click', closeDetails);
  gsap.to('.popUp--details', { left: '-100vw', duration: 1 });
  detailsBurger.style.display = 'none';
}

function showDetails() {
  const pageWidth = document.body.offsetWidth;
  detailsInfo.style.display = 'block';

  if (pageWidth < 1024) {
    gsap.to('.popUp--details', { left: 0, duration: 1 });
  } else {
    gsap.to('.popUp--details', { left: pageWidth / 2, duration: 1 });
  }

  setTimeout(() => {
    detailsBurger.style.display = 'flex';
    detailsBurger.addEventListener('click', closeDetails);
  }, 900);
}

function closeEdit() {
  editInfo.removeEventListener('click', closeDetails);
  gsap.to('.popUp--edit', { left: '-100vw', duration: 1 });
  editBurger.style.display = 'none';
}

function showEditForm() {
  const pageWidth = document.body.offsetWidth;
  editInfo.style.display = 'block';

  if (pageWidth < 1024) {
    gsap.to('.popUp--edit', { left: 0, duration: 1 });
  } else {
    gsap.to('.popUp--edit', { left: pageWidth / 2, duration: 1 });
  }

  setTimeout(() => {
    editBurger.style.display = 'flex';
    editBurger.addEventListener('click', closeEdit);
  }, 900);
}

[...detailsBtn].map((item) => item.addEventListener('click', showDetails));
[...editBtn].map((item) => item.addEventListener('click', showEditForm));
