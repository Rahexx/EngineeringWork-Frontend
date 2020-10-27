import Pagination from './app/Pagination';

console.log('Wbiłem');
const items = document.querySelectorAll('[data-value="download"]');
const main = document.querySelector('.adminPanel__listUser');

const pagination = new Pagination([...items]);

pagination.createPagination(main);