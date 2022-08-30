const form = document.querySelector('login-form');
form.addEventListener('submit', setSubmit);

function setSubmit(event) {
    event.preventDefault();
    const formElem = event.currentTarget.elements;
    const mail = formElem.email.value;
    const password = formElem.password.value;
    if (email.value === '' || password.value === '') {
      alert ('Все поля должны быть заполнены');
    }

    const formData = {
        mail,
        password ,
    };

    console.log(formData);

    event.currentTarget.reset();

}
