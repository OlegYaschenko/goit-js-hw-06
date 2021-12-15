const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', onInputBlur);

function onInputBlur(event) { 
  if (Number(inputElement.dataset.length) === event.currentTarget.value.length) {
    inputElement.classList.add('valid');
  } else { 
    inputElement.classList.add('invalid');
  }
}

