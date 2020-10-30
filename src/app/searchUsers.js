import Pagination from './Pagination';

const items = document.querySelectorAll('[data-value="download"]');
const main = document.querySelector('.users__list');
const pagination = new Pagination([...items]);

pagination.createPagination(main);