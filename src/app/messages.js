import '../sass/main.scss';
import { gsap } from 'gsap';


const users = document.querySelectorAll('.userList__item');
const usersIcon = document.querySelector('.chat__users');

[...users].map((item) => {
    item.addEventListener('click', () => {
        gsap.to('.chat', { x: 0, duration: 1 });
    })
})

usersIcon.addEventListener('click', () => {
        const width = document.body.offsetWidth;
        gsap.to('.chat', { x: width, duration: 1 });
    })
