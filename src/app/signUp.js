import './sass/main.scss';

const slidePage = document.querySelector('.signHolder__page--slidePage');
const firstNextBtn = document.querySelector('.signHolder__button--first');
const prevBtnSecond = document.querySelector('.previoutButton--1');
const nextBtnSecond = document.querySelector('.nextButton--1');
const prevBtnThird = document.querySelector('.previoutButton--2');
const nextBtnThird = document.querySelector('.nextButton--2');
const prevBtnFourth = document.querySelector('.previoutButton--3');
const progressText = document.querySelectorAll('.signHolder__stepTitle');
const progressSpan = document.querySelectorAll('.signHolder__bulletContent');
const progressCheck = document.querySelectorAll('.signHolder__check');
const bullet = document.querySelectorAll('.signHolder__bullet');
let current = 1;

const changeMargin = (value) => {
  slidePage.style.marginLeft = value;
};

function nextStep() {
  bullet[current - 1].classList.add('signHolder__bullet--active');
  progressText[current - 1].classList.add('signHolder__stepTitle--active');
  progressSpan[current - 1].classList.add('signHolder__bulletContent--active');
  progressCheck[current - 1].classList.add('signHolder__check--active');
  current++;
}

function prevStep() {
  bullet[current - 2].classList.remove('signHolder__bullet--active');
  progressText[current - 2].classList.remove('signHolder__stepTitle--active');
  progressSpan[current - 2].classList.remove('signHolder__bulletContent--active');
  progressCheck[current - 2].classList.remove('signHolder__check--active');
  current--;
}

firstNextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  changeMargin('-25%');
  nextStep();
});

nextBtnSecond.addEventListener('click', (e) => {
  e.preventDefault();
  changeMargin('-50%');
  nextStep();
});

nextBtnThird.addEventListener('click', (e) => {
  e.preventDefault();
  changeMargin('-75%');
  nextStep();
});

prevBtnSecond.addEventListener('click', (e) => {
  e.preventDefault();
  changeMargin('0%');
  prevStep();
});

prevBtnThird.addEventListener('click', (e) => {
  e.preventDefault();
  changeMargin('-25%');
  prevStep();
});

prevBtnFourth.addEventListener('click', (e) => {
  e.preventDefault();
  changeMargin('-50%');
  prevStep();
});
