import Pagination from './app/Pagination';

const items = document.querySelectorAll('[data-value="download"]');
const main = document.querySelector('.searchRooms__list');
const pagination = new Pagination([...items], true);

document.addEventListener('resize' , () => {
    pagination.createPagination(main);
});
