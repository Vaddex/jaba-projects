'use strict';

// * headder login block
const form = document.querySelector('.login-form');
form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;

    //   const data = {
    //     email: email.value,
    //     password: password.value,
    //   };
    //   console.log(data);

    // ? or we can do it with another method
    const formData = new FormData(evt.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);

    evt.currentTarget.reset();
}

// * hero png toad animation
const clickMe = document.querySelector('.toad-move');
const toad = document.querySelector('.hero-fourth-toad');
const toadBack = document.querySelector('.toad-back-btn');

clickMe.addEventListener('click', handlerClick);
let step = 0;

function handlerClick() {
    step += 100;
    toad.style.marginLeft = `${step}px`;
}

toadBack.addEventListener('click', toadBackBtn);
function toadBackBtn() {
    step -= 100;
    toad.style.marginLeft = `${step}px`;
}

// * interactive section form use local storage savepoint
const formInput = document.querySelector('.jeb-text-input')
const localStorageKey = 'teper ti podchinyaeshsya jabe'

formInput.addEventListener('input', formInputHandler)
formInput.addEventListener('submit', formSubmitHandler)

function formInputHandler (evt) {
    localStorage.setItem(localStorageKey, evt.target.value)
}

function formSubmitHandler(evt) {
    preventDefault();
    console.log(evt.target.elements.message.value);
    formInput.reset() 
}
