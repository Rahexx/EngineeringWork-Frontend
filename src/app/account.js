import { gsap } from 'gsap';

const switcher = document.querySelectorAll('.listInfo__switch');
const deleteSettlement = document.querySelectorAll('.listSettlements__delete');

const openList = (e) => {
  const parent = e.target.parentElement;
  const parentHeight =
    document.body.offsetWidth < 1200
      ? parent.offsetHeight * 2
      : parent.offsetHeight * 4;
  const listLength = parent.lastChild.children.length;
  const heightItem = parent.lastChild.children[0].offsetHeight;

  const tl = gsap.timeline();
  tl.to(parent, {
    height: `${listLength * heightItem + parentHeight}px`,
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

[...switcher].map((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.dataset.switch == 'false') {
      openList(e);
    } else {
      closeList(e);
    }
  });
});

[...deleteSettlement].map((item) => {
  item.addEventListener('click', (e) => {
    const parent = e.target.parentElement.parentElement;
    const pageWidth = document.body.offsetWidth;

    // gsap.to(parent, { scale: 0, duration: 0.3 });

    const tl = gsap.timeline();
    tl.to(parent, { x: pageWidth, duration: 1 })
      .to(parent, {
        height: 0,
        margin: 0,
        padding: 0,
        duration: 0.5,
      })
      .to(parent, { display: 'none' });
  });
});
