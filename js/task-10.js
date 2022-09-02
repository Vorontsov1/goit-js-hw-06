const refs = {
  input: document.querySelector('#controls input'),
  createButtonElem: document.querySelector('[data-create]'),
  destroyButtonElem: document.querySelector('[data-destroy]'),
  wrapper: document.querySelector('#boxes')
};
const createBoxes = () => {
  refs.wrapper.textContent = "";
  const amount = Number(refs.input.value);
  const items = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.background = getRandomHexColor();
    div.style.width = i * 10 + 20 + "px";
    div.style.height = i * 10 + 20 + "px";

    items.push(div);
  }
  refs.wrapper.append(...items);
};

refs.createButtonElem.addEventListener('click', createBoxes);
refs.destroyButtonElem.addEventListener('click', deleteBoxes);


function deleteBoxes() {
  refs.wrapper.textContent = '';
  refs.input.value = '';
  amount = 0;
}

boxes.style.displey = 'flex';
boxes.style.listStyle = 'none';
boxes.style.flexWrap = 'wrap';



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
