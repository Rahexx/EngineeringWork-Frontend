class Pagination {
  constructor(items, isSmallBlock = false, maximumNumber = 10) {
    this.items = items;
    this.numberItems = items.length;
    this.maximumNumber = maximumNumber;
    this.numberPages = this.numberItems / this.maximumNumber > 1
      ? Math.floor(this.numberItems / this.maximumNumber) + 1
      : this.numberItems / this.maximumNumber;
    this.activePage = 1;

    // special for list rooms because in mobile portrait is block, but the rest volumes is flex
    this.isSmallBlock = isSmallBlock;

    if (this.maximumNumber === this.numberItems) {
      this.numberPages -= 1;
    }
  }

  hideElements() {
    for (let i = 0; i < this.numberItems; i++) {
      this.items[i].style.display = 'none';
    }
  }

  showElements() {
    const from = this.activePage * this.maximumNumber - this.maximumNumber;
    const to = this.activePage * this.maximumNumber;

    for (let i = from; i < to; i++) {
      if (this.isSmallBlock && document.body.offsetWidth < 567) {
        this.items[i].style.display = 'block';
      } else {
        this.items[i].style.display = 'flex';
      }
      if (i === this.numberItems - 1) return;
    }
  }

  deleteActiveClas() {
    const list = [...document.querySelectorAll('.pagination__item')];
    for (let i = 0; i < list.length; i++) {
      if (list[i].classList.contains('pagination__item--active')) {
        list[i].classList.remove('pagination__item--active');
      }
    }
  }

  addEvent() {
    const list = [...document.querySelectorAll('.pagination__item')];

    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener('click', (e) => {
        this.activePage = Number(e.target.textContent);
        this.hideElements();
        this.showElements();
        this.deleteActiveClas();
        e.target.classList.add('pagination__item--active');
      });

      list[i].addEventListener('touch', (e) => {
        this.activePage = Number(e.target.textContent);
        this.hideElements();
        this.showElements();
        e.target.classList.add('pagination__item--active');
      });
    }
  }

  createPagination(parents) {
    if (this.numberPages < 1) return;

    const ul = document.createElement('ul');
    ul.classList.add('pagination');

    for (let i = 0; i < this.numberPages; i++) {
      const li = document.createElement('li');
      li.textContent = `${i + 1}`;
      li.classList.add('pagination__item');

      if (i === this.activePage - 1) {
        li.classList.add('pagination__item--active');
      }

      ul.appendChild(li);
    }

    this.hideElements();
    this.showElements();
    parents.appendChild(ul);
    this.addEvent();
  }
}

export default Pagination;
