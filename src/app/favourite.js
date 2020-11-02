import { gsap } from 'gsap';
import Pagination from './Pagination';

const items = document.querySelectorAll('[data-value="download"]');
const main = document.querySelector('.favourites__list');
const hearts = document.querySelectorAll('.favourites__heart');
const pagination = new Pagination([...items]);

pagination.createPagination(main);

[...hearts].map((item) => {
  item.addEventListener('click', (e) => {
    const parent = e.target.parentNode;
    const pageWidth = document.body.offsetWidth;
    const brother = parent.nextSibling;

    const tl = gsap.timeline();
    tl.to(parent, { x: pageWidth, duration: 1 });
    tl.to(parent, {
      height: 0, margin: 0, padding: 0, duration: 0.5,
    });
    tl.to(brother, { marginTop: 0, duration: 0.5 });
  });
});
