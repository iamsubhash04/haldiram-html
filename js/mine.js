//===HEADER MOBILE MENU==========
(function () {
  init();

  var g_containerInViewport;
  function init() {
    setStickyContainersSize();
    bindEvents();
  }

  function bindEvents() {
    window.addEventListener("wheel", wheelHandler);
  }

  function setStickyContainersSize() {
    document
      .querySelectorAll(".sticky-container")
      .forEach(function (container) {
        const stikyContainerHeight =
          container.querySelector("main").scrollWidth;
        container.setAttribute(
          "style",
          "height: " + stikyContainerHeight + "px"
        );
      });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
  }

  function wheelHandler(evt) {
    const containerInViewPort = Array.from(
      document.querySelectorAll(".sticky-container")
    ).filter(function (container) {
      return isElementInViewport(container);
    })[0];

    if (!containerInViewPort) {
      return;
    }

    var isPlaceHolderBelowTop =
      containerInViewPort.offsetTop < document.documentElement.scrollTop;
    var isPlaceHolderBelowBottom =
      containerInViewPort.offsetTop + containerInViewPort.offsetHeight >
      document.documentElement.scrollTop;
    let g_canScrollHorizontally =
      isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

    if (g_canScrollHorizontally) {
      containerInViewPort.querySelector("main").scrollLeft += evt.deltaY;
    }
  }
})();


  //===SCROLL DIV
  $(document).ready(function() {
    var scrollTrigger= $("*[scroll-trigger]");
    scrollTrigger.bind('click', function(e) {
        e.preventDefault(); 
        var _this = $(this); 
        var triggerAttr = _this.attr('scroll-trigger'); 
        var scrollTarget = $('*[scroll-target='+triggerAttr+']');  
  
    $('html, body').stop().animate({
        scrollTop: scrollTarget.offset().top - 0
    }, 600 );
        return false;
    });   
  });


// ------Mobile menu scroll---------------
    document.addEventListener('DOMContentLoaded', function () {
      function closeMobileNav() {
        var closeBtn = document.getElementById('close-btn');
        var menuBtn = document.getElementById('menu-btn');
        if (closeBtn) {
          closeBtn.checked = true;
        } else if (menuBtn) {
          menuBtn.checked = false;
        }
      }

      function isMobileMenuVisible() {
        var menuLabel = document.querySelector('label.btn.menu-btn');
        if (!menuLabel) return false;
        return window.getComputedStyle(menuLabel).display !== 'none';
      }
      var triggers = document.querySelectorAll('[scroll-trigger]');
      triggers.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();

          var triggerAttr = el.getAttribute('scroll-trigger');
          var target = null;
          if (triggerAttr) {
            target = document.querySelector('[scroll-target="' + triggerAttr + '"]');
          }

          if (!target) {
            var href = el.getAttribute('href');
            if (href && href.startsWith('#')) {
              target = document.querySelector(href);
            }
          }

          if (target) {
            var top = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: top, behavior: 'smooth' });
          }

          if (isMobileMenuVisible()) {
            closeMobileNav();
          }
        });
      });
    });
// -------Mobile menu scroll2--------------
    document.addEventListener('DOMContentLoaded', function () {
      const menuBtn = document.getElementById('menu-btn');
      const closeBtn = document.getElementById('close-btn');
      const navLinks = document.querySelectorAll('.nav-links li a[scroll-trigger]');
      function closeMobileMenu() {
        if (closeBtn) {
          closeBtn.checked = true; 
        }
        if (menuBtn) {
          menuBtn.checked = false; 
        }
      }

      navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const triggerAttr = this.getAttribute('scroll-trigger');
          let target = document.querySelector('[scroll-target="' + triggerAttr + '"]');

          if (!target) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
              target = document.querySelector(href);
            }
          }

          if (target) {
            const top = target.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: top, behavior: 'smooth' });
          }
          closeMobileMenu();
        });
      });
    });

// ===HOME BANNER SWIPER==========
var swiper1 = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});


// ===SWIPER ACTIVE DOTS==========
 document.querySelector('.swiper-pagination').addEventListener('click', function (e) {
  if (e.target.classList.contains('swiper-pagination-bullet')) {
    const index = parseInt(e.target.getAttribute('data-index'));
    swiper.slideTo(index);
  }
});


