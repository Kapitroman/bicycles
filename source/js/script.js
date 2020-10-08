'use strict';

(function () {
  var mainNav = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  mainNav.classList.remove('main-nav--nojs');
  mainNav.classList.remove('main-nav--opened');
  mainNav.classList.add('main-nav--closed');

  navToggle.addEventListener('click', function () {
    if (mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
    } else {
      mainNav.classList.remove('main-nav--opened');
      mainNav.classList.add('main-nav--closed');
    }
  });
})();

(function () {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map('map', {
      center: [59.93862518, 30.32290403],
      zoom: 16,
      controls: []
    },
    {suppressMapOpenBlock: true});
  }
})();
