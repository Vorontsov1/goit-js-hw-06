const textInput = document.querySelector('#text');
const typeRange = document.querySelector('#font-size-control');

typeRange.addEventListener('input', (event) => {
    textInput.style.fontSize = event.currentTarget.value +'px';
});
