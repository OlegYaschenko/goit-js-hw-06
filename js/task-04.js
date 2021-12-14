const counter = document.querySelector('#value');
let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener('click', decrementFn);
incrementButton.addEventListener('click', incrementFn);

function decrementFn() {
  counterValue -= 1
  return counter.textContent = counterValue;
};

function incrementFn() {
  counterValue += 1;
  return counter.textContent = counterValue;
};


