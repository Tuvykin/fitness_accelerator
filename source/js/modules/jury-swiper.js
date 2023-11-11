export const initJurySlider = (isLoop) => {
  const swiperWrapper = document.querySelector('[jury-swiper]');
  const buttonPrev = document.querySelector('[jury-swiper-btn-prev]');
  const buttonNext = document.querySelector('[jury-swiper-btn-next]');

  return new window.Swiper(swiperWrapper, {
    loop: isLoop,
    slidesPerView: 4,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1366: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
