const buttons = document.querySelectorAll('.subscription__button');
const cards = document.querySelector('.cards');
const textBlock = cards.querySelectorAll('.cards__text');
const priceBlock = cards.querySelectorAll('.cards__price');


const subscriptionButtons = [{
  button: buttons[0],
  prices: [5000, 1700, 2700],
},
{
  button: buttons[1],
  prices: [30000, 10200, 16200],
},
{
  button: buttons[2],
  prices: [60000, 20400, 32400],
}
];

function setActiveButton(btn) {
  buttons.forEach((button) => button.classList.remove('subscription__button--current'));
  btn.classList.add('subscription__button--current');
}

const setSubscriptionPrice = ({button, prices}) => {
  button.addEventListener('click', () => {
    prices.forEach((price, i) => {
      priceBlock[i].textContent = price;
      textBlock[i].textContent = price;
    });
    setActiveButton(button);
  });
};

const setSubscription = () => {
  subscriptionButtons.forEach(setSubscriptionPrice);
};

export {setSubscription};
