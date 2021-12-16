function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color')
const spanTextEl = document.querySelector('.color');

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanTextEl.textContent = getRandomHexColor();
}

buttonChangeColor.addEventListener('click', changeColor);




