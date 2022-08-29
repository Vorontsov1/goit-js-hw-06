const inputElem = document.querySelector("#validation-input");

inputElem.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === Number(inputElem.CDATA_SECTION_NODE.length)) {
        inputElem.classList.add('valid');
        inputElem.classList.remove('invalid');
    } else {
        inputElem.classList.add('invalid');
        inputElem.classList.remove('valid');
}
});