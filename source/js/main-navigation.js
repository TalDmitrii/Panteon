'use strict';

(function useNavigation () {
  var mainNavigation = document.querySelector('.main-navigation');
  var siteNavigation = mainNavigation.querySelector('.site-navigation');
  var mainNavigationToggle = mainNavigation.querySelector('.main-navigation__toggle');

  siteNavigation.classList.add('visually-hidden');

  mainNavigationToggle.addEventListener('click', function () {
    var navigationClasses = siteNavigation.className.split(' ');
    var navigationVisibility;

    navigationClasses.forEach(function (navigationClass) {
      if (navigationClass === 'visually-hidden') {
        navigationVisibility += 'false';
      }
    });

    if (navigationVisibility) {
      siteNavigation.classList.remove('visually-hidden');
      window.addEventListener('keydown', onEscCloseNavigation);
    } else {
        siteNavigation.classList.add('visually-hidden');
    }
  });

  function onEscCloseNavigation (evt) {
    if (evt.keyCode === 27) {
      siteNavigation.classList.add('visually-hidden');
    }
  }
})();