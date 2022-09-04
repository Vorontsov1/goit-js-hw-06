const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
      ingredientItem.classList.add("item");
  return ingredientItem;
}); 
document.querySelector("#ingredients").append(...ingredientsEl);




















