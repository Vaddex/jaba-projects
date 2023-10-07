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
