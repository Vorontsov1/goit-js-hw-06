const bodyRef = document.querySelector('body');
const btnElem = document.querySelector('.change-color');
const spanText = document.querySelector('.color');
btnElem.addEventListener('click', onChangeColor);

function onChangeColor() {
  const changeColor = getRandomHexColor();
  bodyRef.style.background = changeColor;
  spanText.textContent = changeColor;
  console.log(changeColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
