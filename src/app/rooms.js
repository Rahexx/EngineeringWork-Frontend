import Pagination from './Pagination';

const items = document.querySelectorAll('[data-value="download"]');
const main = document.querySelector('.searchRooms__list');
const hearts = document.querySelectorAll('.searchRooms__heart');
const pagination = new Pagination([...items], true);

pagination.createPagination(main);

function changeHeart(item) {
  if (item.classList.contains('far')) {
    item.classList.remove('far');
    item.classList.add('fas');
  } else {
    item.classList.add('far');
    item.classList.remove('fas');
  }
}

document.addEventListener('resize', () => {
  pagination.createPagination(main);
});

[...hearts].map((item) => {
  item.addEventListener('click', () => {
    changeHeart(item);
  });
});
