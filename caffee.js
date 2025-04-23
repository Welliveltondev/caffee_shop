const openMenuButton = document.querySelector('#menu-open-button');
const closeMenuButton = document.querySelector('#menu-close-button');
const navLinks = document.querySelectorAll('.nav-menu .nav-link');

openMenuButton.addEventListener('click', () => {
  document.body.classList.toggle("show-mobile-menu");
});

closeMenuButton.addEventListener('click', () => {
  document.body.classList.toggle("show-mobile-menu");
});

// closeMenuButton.addEventListener('click', () => closeMenuButton.click());

navLinks.forEach(link => {
  link.addEventListener('click', () => openMenuButton.click());
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    // Resposive breakpoints //
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }

});