import { gsap } from 'gsap';

const switcher = document.querySelectorAll('.listInfo__switch');
const deleteSettlementBtn = document.querySelectorAll(
  '.listSettlements__delete',
);
const changeStatusFaultBtn = document.querySelectorAll('.listFaults__change');
const deleteLandLordBtn = document.querySelectorAll('.listRooms__btn--delete');
const addRoomBtn = document.querySelector('.listInfo__add--room');
const addFaultBtn = document.querySelector('.listInfo__add--fault');
const addAgreementBtn = document.querySelector('.listInfo__add--agreement');
const addSettlementBtn = document.querySelector('.listInfo__add--settlement');
const addUserRoomBtn = document.querySelector('.listRooms__btn--add');
const addRoomExit = document.querySelector('.addRoom__exit');
const addFaultExit = document.querySelector('.addFault__exit');
const addAgreementExit = document.querySelector('.addAgreement__exit');
const addSettlementExit = document.querySelector('.addSettlement__exit');
const addUserRoomExit = document.querySelector('.addUserRoom__exit');
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

const openAddRoom = (item, multiplyHeight = 0.03) => {
  const pageWidth = document.body.offsetWidth;
  const pageHeight = document.body.offsetHeight;

  if (pageWidth < 1024) {
    gsap.to(item, { x: pageWidth, duration: 1 });
  } else if (pageWidth < 1200) {
    gsap.to(item, { y: pageHeight * multiplyHeight, duration: 0.1 });
    gsap.to(item, { x: pageWidth * 0.75, duration: 1, delay: 0.1 });
  } else {
    gsap.to(item, { y: pageHeight * multiplyHeight, duration: 0.1 });
    gsap.to(item, { x: pageWidth * 0.66, duration: 1, delay: 0.1 });
  }
};

const closeAddForm = (item) => gsap.to(item, { x: 0, duration: 1 });

const deleteLandLord = (e) => {
  const previousBrother = e.target.previousElementSibling;

  previousBrother.textContent = 'Nie ma nikogo przypisanego do pokoju';
  e.target.textContent = 'Dodaj do pokoju';

  previousBrother.classList.add('listRooms__login--empty');
  e.target.classList.remove('listRooms__btn--delete');
  e.target.classList.add('listRooms__btn--add');

  e.target.addEventListener('click', () => {
    openAddRoom('.addUserRoom', 0.015);
  });
};

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

addRoomBtn.addEventListener('click', () => {
  openAddRoom('.addRoom');
});

addFaultBtn.addEventListener('click', () => {
  openAddRoom('.addFault');
});

addAgreementBtn.addEventListener('click', () => {
  openAddRoom('.addAgreement');
});

addSettlementBtn.addEventListener('click', () => {
  openAddRoom('.addSettlement');
});

addUserRoomBtn.addEventListener('click', () => {
  openAddRoom('.addUserRoom', 0.015);
});

addRoomExit.addEventListener('click', () => {
  closeAddForm('.addRoom');
});

addFaultExit.addEventListener('click', () => {
  closeAddForm('.addFault');
});

addAgreementExit.addEventListener('click', () => {
  closeAddForm('.addAgreement');
});

addSettlementExit.addEventListener('click', () => {
  closeAddForm('.addSettlement');
});

addUserRoomExit.addEventListener('click', () => {
  closeAddForm('.addUserRoom');
});
