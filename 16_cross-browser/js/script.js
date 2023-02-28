let search__button = document.querySelector('.search-header__btn');
let closed__btn = document.querySelector('.search-closed__btn');
let search__form = document.querySelector('.search__form')


search__button.addEventListener('click', function () {
  search__form.classList.add('active');
  search__button.classList.add('hidden');
})

closed__btn.addEventListener('click', function () {
  search__form.classList.remove('active');
  search__button.classList.remove('hidden');
})

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');
let btn = document.getElementById('shift__menu');


burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
})


burger.addEventListener('click', () => {

    let n = 'true' === burger.getAttribute('aria-expanded');
    burger.setAttribute('aria-expanded', !n),
      n
        ? burger.setAttribute('aria-label', 'Открыть навигацию')
        : burger.setAttribute('aria-label', 'Закрыть навигацию');
  })


menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

    btn.ariaLabel = 'Открыть меню навигации';
  })
})


let swiper = new Swiper('.swiper', {

  centeredSlides: true,

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: 'Название слайда {{index}}'
  },
});


let tabsBtn = document.querySelectorAll('.tab__btn');
let tabsBlock = document.querySelectorAll('.how-we-work__block');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    tabsBtn.forEach(function (btn) { btn.classList.remove('tab__btn--active') });
    e.currentTarget.classList.add('tab__btn--active');

    tabsBlock.forEach(function (element) { element.classList.remove('how-we-work__block--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__block--active');
  })
})

new Accordion('.accordion');
