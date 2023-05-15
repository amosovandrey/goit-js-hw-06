const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

let ingredientsMarkup = ingredients.map(ingredient => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.textContent = ingredient;
  ingredientItemEl.classList = 'item';
  return ingredientItemEl;
});

console.dir(ingredientsMarkup);

ingredientsEl.append(...ingredientsMarkup);
