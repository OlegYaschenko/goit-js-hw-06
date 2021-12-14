const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const ingredientsItemArr = ingredients.map(ingredient => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('item');
  ingredientsEl.textContent = ingredient;
  return ingredientsEl;
})
ingredientsListEl.append(...ingredientsItemArr);

console.log(ingredientsListEl);