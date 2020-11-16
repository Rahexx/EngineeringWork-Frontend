import { gsap } from 'gsap';
import Pagination from './Pagination';

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
const addUserRoomBtn = document.querySelectorAll('.listRooms__btn--add');
const addRoomExit = document.querySelector('.addRoom__exit');
const addFaultExit = document.querySelector('.addFault__exit');
const addAgreementExit = document.querySelector('.addAgreement__exit');
const addSettlementExit = document.querySelector('.addSettlement__exit');
const addUserRoomExit = document.querySelector('.addUserRoom__exit');
const faultStatus = ['Naprawione', 'W trakcie'];
const listRoom = document.querySelector('.listRooms');
const listFaults = document.querySelector('.listFaults');
const listAgreements = document.querySelector('.listAgreements');
const listSettlements = document.querySelector('.listSettlements');
const listRoomItem = document.querySelectorAll('.listRooms__item');
const listFaultsItem = document.querySelectorAll('.listFaults__item');
const listAgreementsItem = document.querySelectorAll('.listAgreements__item');
const listSettlementsItem = document.querySelectorAll('.listSettlements__item');
const paginationRoom = new Pagination([...listRoomItem], false, 3);
const paginationFaults = new Pagination([...listFaultsItem], false, 3);
const paginationAgreements = new Pagination([...listAgreementsItem], false, 3);
const paginationSettlements = new Pagination(
  [...listSettlementsItem],
  false,
  3,
);

paginationRoom.createPagination(listRoom);
paginationFaults.createPagination(listFaults);
paginationAgreements.createPagination(listAgreements);
paginationSettlements.createPagination(listSettlements);

const getChild = (children) => {
  let child;

  for (let i = 0; i < children.length; i++) {
    if (children[i].offsetHeight > 0) {
      child = children[i];
      break;
    }
  }

  return child;
};

const countChildren = (children) => {
  let childrenNumber = 0;

  for (let i = 0; i < children.length; i++) {
    if (children[i].classList.contains('pagination')) {
      break;
    }

    if (children[i].offsetHeight > 0) {
      childrenNumber++;
    }
  }

  return childrenNumber;
};

const closeList = (item, isRotate = true) => {
  item.dataset.switch = 'false';
  const parent = item.parentElement;
  const tl = gsap.timeline();

  if (isRotate) {
    tl.to(parent, {
      height: '8vh',
      duration: 1,
    }).to(item, { rotate: 360, duration: 0.3 });
  } else {
    gsap.to(parent, {
      height: '8vh',
      duration: 1,
    });
  }
};

const changePage = (item) => {
  const parent = item.parentElement;
  const grandParent = parent.parentElement;
  const secondPreviousBrother =
    grandParent.previousElementSibling.previousElementSibling;

  closeList(secondPreviousBrother);

  setTimeout(() => {
    openList(secondPreviousBrother);
  }, 1100);
};

const openList = (item) => {
  const parent = item.parentElement;
  const { children } = parent.lastChild;
  const child = getChild(children);
  const listLength = countChildren(children);
  const lastChild = children[children.length - 1];
  const heightItem = child.offsetHeight;
  const marginItem = window.getComputedStyle(child).marginTop;
  const marginItemValue = marginItem.slice(0, marginItem.length - 2);
  let paginationHeight = 0;

  if (lastChild.classList.contains('pagination')) {
    paginationHeight = lastChild.offsetHeight * 2;

    // add to pagination event to close nad open list

    if (paginationHeight > 0) {
      [...lastChild.children].map((paginationItem) => {
        paginationItem.addEventListener('click', () => {
          changePage(paginationItem);
        });
      });
    }
  }

  const tl = gsap.timeline();
  tl.to(parent, {
    height: `${
      parent.offsetHeight +
      listLength * heightItem +
      listLength * (marginItemValue * 1.5) +
      paginationHeight
    }px`,
    duration: 1,
  }).to(item, { rotate: 180, duration: 0.3 });
  item.dataset.switch = 'true';
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

  setTimeout(() => {
    closeList(parent.parentElement, false);
  }, 1500);

  setTimeout(() => {
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

const openAddRoom = (item) => {
  const pageWidth = document.body.offsetWidth;
  const pageHeight = window.innerHeight;

  if (pageWidth < 1024) {
    gsap.to(item, { x: pageWidth, duration: 1 });
  } else if (pageWidth < 1200) {
    gsap.to(item, { y: (pageHeight / 100) * 7.5, duration: 0.1 });
    gsap.to(item, { x: pageWidth * 0.75, duration: 1, delay: 0.1 });
  } else {
    gsap.to(item, { y: (pageHeight / 100) * 7.5, duration: 0.1 });
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
    openAddRoom('.addUserRoom');
  });
};

[...switcher].map((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.dataset.switch == 'false') {
      openList(e.target);
    } else {
      closeList(e.target);
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

[...addUserRoomBtn].map((item) => {
  item.addEventListener('click', () => {
    openAddRoom('.addUserRoom', 0.015);
  });
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
