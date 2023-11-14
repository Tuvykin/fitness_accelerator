const ANIMATION_DELAY = 450;

const gymVideoSRC = 'https://www.youtube.com/embed/9TZXsZItgdw?si=UbuakXrvJ-3MeEgS?feature=oembed&autoplay=1&controls=0&showinfo=0&modestbranding=1';
const videoWrapper = document.querySelector('[data-wrapper-video]');
const posterWrapper = videoWrapper.querySelector('[data-poster]');
const posterButton = videoWrapper.querySelector('[data-poster-button]');
const videoIframe = videoWrapper.querySelector('[data-gym-iframe]');

function onClickVideoButton() {
  posterWrapper.classList.add('poster__wrapper--hidden');
  videoIframe.src = gymVideoSRC;

  setTimeout(() => {
    posterWrapper.classList.add('poster__wrapper--del');
  }, ANIMATION_DELAY);
}

const setGymVideo = () => {
  posterButton.addEventListener('click', onClickVideoButton);
};

export {setGymVideo};
