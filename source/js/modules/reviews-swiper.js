export const initReviewsSlider = () => {
  const swiperWrapper = document.querySelector('[data-reviews-swiper]');
  const buttonPrev = document.querySelector('[data-reviews-swiper-btn-prev]');
  const buttonNext = document.querySelector('[data-reviews-swiper-btn-next]');

  return new window.Swiper(swiperWrapper, {
    slidesPerView: 1,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
