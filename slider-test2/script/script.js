var swiper = new Swiper(".slider-content", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1230: {
            slidesPerView: 4,
        },
    },
  });