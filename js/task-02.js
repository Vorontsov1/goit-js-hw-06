const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientEl = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
      ingredientItem.classList.add("item");
  return ingredientItem;
}); 
document.querySelector("#ingredients").append(...ingredientEl);




















// const ingredientsEl = ingredients.map((ingredient) => {
//   const ingredientItem = document.createElement("li");
//   ingredientItem.classList.add("item");
//   ingredientItem.textContent = ingredient;
//   return ingredientItem;
// });

// document.querySelector("#ingredients").append(...ingredientsEl);


