// search

var nonClose = false;


document.querySelector(".search-btn-open").addEventListener("click", function () {
  document.querySelector(".input").classList.add("input__active");
  this.classList.add("active");
  nonClose = true;
});
document.querySelector('.input-search').addEventListener('click', function () {
  nonClose = true;
});

document.body.addEventListener('click', (e) => {
  if (document.querySelector('.input').classList.contains('input__active') && !nonClose) {
    document.querySelector('.input').classList.remove('input__active')
    document.querySelector(".search-btn-open").classList.remove('active')
  }
  if (nonClose) {
    nonClose = false;
  }
});
document.body.addEventListener('keydown', (e) => {
  if (e.code == 'Escape') {
    document.querySelector('.input').classList.remove('input__active')
    document.querySelector(".search-btn-open").classList.remove('active')
  }
})

// modal

document.querySelector(".entery-btn-open").addEventListener("click", function () {
  document.querySelector(".modal-block").classList.add("modal-block-active");
  this.classList.add("active");
});

document.querySelector('.modal-btn-closer').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.modal-block').classList.remove('modal-block-active')
});


document.querySelector(".header__special-block").addEventListener("click", function () {
  document.querySelector(".header__broadcast").classList.add("header__broadcast-active");
  this.classList.add("active");
  nonClose = true;
});

document.querySelector('.header__special-block').addEventListener('click', function () {
  document.querySelector('.header__broadcast').classList.add('header__broadcast-active')
  document.querySelector('.header__special-block').classList.toggle('header__special-block-active')
});


//play-icon

let click = document.querySelectorAll('.play-click')
let play = document.querySelector('.play-btn')
let pause = document.querySelector('.pause-btn')

click.forEach(el => {
  let playBtn = el.querySelector('.play-btn')
  let pauseBtn = el.querySelector('.pause-btn')

  el.addEventListener('click', function () {
    if (pauseBtn.classList.contains('hidden') && playBtn.classList.contains('visible')) {
      playBtn.classList.remove('visible')
      playBtn.classList.add('hidden')
      pauseBtn.classList.remove('hidden')
      pauseBtn.classList.add('visible')
    }
    else {
      pauseBtn.classList.remove('visible')
      pauseBtn.classList.add('hidden')
      playBtn.classList.remove('hidden')
      playBtn.classList.add('visible')
    }
  })
});


// burger
let burger = document.querySelector('.burger')
let menu = document.querySelector('.header__nav')
let menuIteams = document.querySelectorAll('.top-links')
let closer = document.querySelector('.burger-closer')

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger-active');
    menu.classList.toggle('header__nav-active');
    document.body.classList.toggle('stop-scroll');
  });

menuIteams.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger-active');
    menu.classList.remove('header__nav-active');
    document.body.classList.remove('stop-scroll');
  })
});

closer.addEventListener('click',
  function () {
    burger.classList.remove('burger-active');
    menu.classList.remove('header__nav-active');
    document.body.classList.remove('stop-scroll');
  });


// select

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  searchChoices: false,
  placeholder: true,
  itemSelectText: '',
});

//accordion

$(function () {
  $('.accordion').accordion();
});


// swiper

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 15,
  breakpoints: {
    748: {
      slidesPerView: 2,
      spaceBetween: 26,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1711: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

});

// tab


let tabsBtn = document.querySelectorAll('.tabs-nav-btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('tabs-nav-btn-active')
    });
    e.currentTarget.classList.add('tabs-nav-btn-active');

    tabsItem.forEach(function (element) {
      element.classList.remove('tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// validation

const validation = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
  errorLabelCssClass: 'is-label-invalid',

  focusInvalidField: true,
  lockForm: true,
  tooltip: {
    position: 'top',
  }
});
validation.addField('#name', [
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Ошибка',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Ошибка',
  },
  {
    rule: 'required',
    errorMessage: 'Ошибка',
  },
  {
    rule: 'customRegexp',
    value: '[a-zA-Zа-яА-Я]',
    errorMessage: 'Ошибка',
  }
])

  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Ошибка',
    },
    {
      rule: 'email',
      errorMessage: 'Ошибка',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);
    document.getElementById("form").submit();
  });


//podcasts more
let btnMore = document.querySelector('.podcasts__link-more');
let podcastsList = document.querySelectorAll('.podcasts__card-more');

btnMore.addEventListener('click', () => {
  podcastsList.forEach(el => { el.classList.add('podcasts__card-more-active') });
  btnMore.closest('.podcasts__link-more').classList.add('podcasts__link-hidden');
});
