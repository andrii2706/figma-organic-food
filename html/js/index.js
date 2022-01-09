// for selected city
// const cities = [
//     {id: 1, name: 'Lviv'},
//     {id: 2, name: 'Dresden'},
//     {id: 3, name: 'Kyiv'},
//     {id: 4, name: 'Dnipro'},
//     {id: 5, name: 'Berlin'},
//     {id: 6, name: 'New-York'},
//     {id: 7, name: 'York'},
//     {id: 8, name: 'Las-Vegas'},
//     {id: 9, name: 'Chicago'},
//     {id: 10, name: 'Dallas'},
//     {id: 11, name: 'Paris'},
//     {id: 12, name: 'Rome'},
//     {id: 13, name: 'Stambull'},
// ]
//let optionForSelect = document.createElement("option")
// //         optionForSelect.innerText = city.name;
// //         optionForSelect.classList.add();
// //         formSelect.classList.add('selectInput')
// //         formSelect.append(optionForSelect);
// //         form.appendChild(formSelect);
// function SelectForForm() {
//     const form = document.querySelector("form");
//     const formSelect = document.createElement("select");
//     for (let city of cities) {
//
//     }
// }
//
// SelectForForm();




let isVisible =  false;

function showModal() {
    isVisible = !isVisible;
    const formShow = document.getElementById("register-form");
    formShow.style.visibility = isVisible ? 'visible' :  "hidden";
}

function onSubmit() {
    const firstName = document.getElementById("first-name");
    const secondName = document.getElementById('second-name');
    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const obj = [];
    obj.push({firstName: firstName.value, SecondName: secondName.value, Password: password.value, Email: email.value})
    // console.log(obj);

    localStorage.setItem('firstName', firstName.value );
    localStorage.setItem('secondName', secondName.value );
    localStorage.setItem('email', email.value );
    localStorage.setItem('password', password.value );
    alert('Your Form Submitted');

    const formHide = document.getElementById("register-form");
    formHide.style.display = 'none';
}
function stopDefAction(evt) {
    evt.preventDefault();
}
const form  = document.querySelector("form");
form.addEventListener('click', stopDefAction, false);


