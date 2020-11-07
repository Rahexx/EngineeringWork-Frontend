import { gsap } from 'gsap';

const switcher = document.querySelectorAll('.listInfo__switch');
const deleteSettlementBtn = document.querySelectorAll(
  '.listSettlements__delete',
);
const changeStatusFaultBtn = document.querySelectorAll('.listFaults__change');
const deleteLandLordBtn = document.querySelectorAll('.listRooms__btn--delete');
const addRoomBtn = document.querySelector('.listInfo__add--room');
const addRoomExit = document.querySelector('.addRoom__exit');
const faultStatus = ['Naprawione', 'W trakcie'];

const openList = (e) => {
  const parent = e.target.parentElement;
  const child = parent.lastChild.children[0];
  const listLength = parent.lastChild.children.length;
  const heightItem = child.offsetHeight;
  const marginItem = window.getComputedStyle(child).marginTop;
  const marginItemValue = marginItem.slice(0, marginItem.length - 2);

  const tl = gsap.timeline();
  tl.to(parent, {
    height: `${
      parent.offsetHeight +
      listLength * heightItem +
      listLength * (marginItemValue * 1.5)
    }px`,
    duration: 1,
  }).to(e.target, { rotate: 180, duration: 0.3 });
  e.target.dataset.switch = 'true';
};

const closeList = (e) => {
  const parent = e.target.parentElement;
  const tl = gsap.timeline();
  tl.to(parent, {
    height: '8vh',
    duration: 1,
  }).to(e.target, { rotate: 360, duration: 0.3 });
  e.target.dataset.switch = 'false';
};

const deleteSettlement = (e) => {
  const parent = e.target.parentElement.parentElement;
  const pageWidth = document.body.offsetWidth;
  parent.style.minHeight = '0';

  const tl = gsap.timeline();
  tl.to(parent, { x: pageWidth, duration: 1 })
    .to(parent, {
      height: 0,
      margin: 0,
      padding: 0,
      duration: 0.5,
    })
    .to(parent, { display: 'none' });

  setInterval(() => {
    parent.remove();
  }, 1500);
};

const changeStatusFault = (e) => {
  const previousBrother = e.target.previousElementSibling;
  const indexArray = faultStatus.indexOf(previousBrother.textContent);

  if (indexArray === 1) {
    previousBrother.textContent = faultStatus[0];
  } else {
    previousBrother.textContent = faultStatus[1];
  }
};

const deleteLandLord = (e) => {
  const previousBrother = e.target.previousElementSibling;
  previousBrother.textContent = 'Nie ma nikogo przypisanego do pokoju';
  previousBrother.classList.add('listRooms__login--empty');
  e.target.classList.remove('listRooms__btn--delete');
  e.target.classList.add('listRooms__btn--add');
};

const openAddRoom = () => {
  const pageWidth = document.body.offsetWidth;

  gsap.to('.addRoom', { x: pageWidth, duration: 1 });
};

const closeAddRoom = () => gsap.to('.addRoom', { x: 0, duration: 1 });

[...switcher].map((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.dataset.switch == 'false') {
      openList(e);
    } else {
      closeList(e);
    }
  });
});

[...deleteSettlementBtn].map((item) => {
  item.addEventListener('click', (e) => {
    deleteSettlement(e);
  });
});

[...changeStatusFaultBtn].map((item) => {
  item.addEventListener('click', (e) => {
    changeStatusFault(e);
  });
});

[...deleteLandLordBtn].map((item) => {
  item.addEventListener('click', (e) => {
    deleteLandLord(e);
  });
});

addRoomBtn.addEventListener('click', openAddRoom);

addRoomExit.addEventListener('click', closeAddRoom);
