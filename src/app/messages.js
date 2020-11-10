import '../sass/main.scss';
import { gsap } from 'gsap';
import Pagination from './Pagination';

const users = document.querySelectorAll('.userList__item');
const usersIcon = document.querySelector('.chat__users');
const userList = document.querySelector('.userList');
const userListItem = document.querySelectorAll('.userList__item');
const paginationUser = new Pagination([...userListItem], true, 6);

paginationUser.createPagination(userList);

[...users].map((item) => {
  item.addEventListener('click', () => {
    const width = document.body.offsetWidth;
    gsap.to('.chat', { x: width, duration: 1 });
  });
});

usersIcon.addEventListener('click', () => {
  const width = document.body.offsetWidth;
  gsap.to('.chat', { x: `-${width}`, duration: 1 });
});
