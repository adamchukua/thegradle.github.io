var place = document.querySelector('.page-main-slide'),
    header = document.querySelector('header'),
    toTop = document.querySelector('.button-top'),
    currentSlide = 2, // bc the first slide the user has already seen
    pageMain = document.querySelector('.page-main'),
    preloader = document.querySelector('.page-preloader'),
    pages = document.querySelectorAll('.page'),
    pageMain = document.querySelector('.page-main'),
    footer = document.querySelector('footer'),
    hamb = document.querySelector('.header-nav-mobile__hamb'),
    hambMenu = document.querySelector('.header-nav-mobile-menu'),
    hambMenuCheck = false,
    hambMenuLinks = document.querySelectorAll('.header-nav-mobile-menu-list__item');

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// Preloader
window.addEventListener('load', function() {
  setTimeout (function() {
    if (!preloader.classList.contains('page-preloader_done')) {
      preloader.classList.add('page-preloader_done');
      
      pageMain.style.display = "block";
      footer.style.display = "block";

      pages.forEach(function(item) {
        item.style.display = "block";
      });
    }
  }, 1000);
});

// Slider
setInterval(nextSlide, 3000);

function nextSlide() {
  if (currentSlide > 5) {
    currentSlide = 1;
  }

  if(navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
    place.style.backgroundImage = "url(img/slides/slide-" + currentSlide + ".jpg";
  } else {
    place.style.backgroundImage = "url(img/slides/slide-" + currentSlide + ".webp";
  }

  currentSlide++;
}

// Header background animation at scroll 
window.addEventListener('scroll', function() {
  if (pageYOffset >= 150) {
    header.style.background = "#2b2b2b";
  } else if (pageYOffset <= 150) {
    header.style.background = "none";
  }

  if (pageYOffset >= 300) {
    toTop.style.opacity = "1";
  } else if (pageYOffset <= 300) {
    toTop.style.opacity = "0";
  }
});


// Hamburger menu
hamb.addEventListener('click', function() {
  if (!hambMenuCheck) {
    hambMenuCheck = true;
    header.style.background = "#2b2b2b";
    hambMenu.style.display = "block";
  } else if (hambMenuCheck) {
    hambMenuCheck = false;
    hambMenu.style.display = "none";
  }
});

hambMenuLinks.forEach(function(item) {
  item.addEventListener('click', function() {
    hambMenu.style.display = "none";
    hambMenuCheck = false;
  });
});