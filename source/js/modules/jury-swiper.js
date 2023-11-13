export const initJurySlider = () => {
  const swiperWrapper = document.querySelector('[jury-swiper]');
  const buttonPrev = document.querySelector('[jury-swiper-btn-prev]');
  const buttonNext = document.querySelector('[jury-swiper-btn-next]');

  return new window.Swiper(swiperWrapper, {
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
        initialSlide: 2,
      },
      // when window width is >= 1366px
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 3,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
