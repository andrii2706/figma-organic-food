function showModal() {
    const formShow = document.getElementById("register-form");
    formShow.style.visibility = 'visible';
}

const obj = [];
let i = 0;

function onSubmit() {
    const firstName = document.getElementById("first-name");
    const secondName = document.getElementById('second-name');
    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const id = i++;
    obj.push({
        id: i,
        firstName: firstName.value,
        SecondName: secondName.value,
        Password: password.value,
        Email: email.value
    })
    console.log(obj);

    localStorage.setItem('id', id);
    localStorage.setItem('firstName', firstName.value);
    localStorage.setItem('secondName', secondName.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    alert('Your Form Submitted');

    const formHide = document.getElementById("register-form");
    formHide.style.visibility = 'hidden';
}

function stopDefAction(evt) {
    evt.preventDefault();
}

const form = document.querySelector("form");
form.addEventListener('click', stopDefAction, false);


