function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color')

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

buttonChangeColor.addEventListener('click', changeColor);




