const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', onInputBlur);

function onInputBlur(event) { 
  (Number(inputElement.dataset.length) === event.currentTarget.value.length)
    ? inputElement.classList.add('valid')
    : inputElement.classList.add('invalid')
}

