

// * header login block
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

// * interactive section form use local storage save-point
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

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUsers(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  return fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=4&_sort=name"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUsers(users) {
  const markup = users
    .map((user) => {
      return `
          <li>
            <p><b>Name</b>: ${user.name}</p>
            <p><b>Email</b>: ${user.email}</p>
            <p><b>Company</b>: ${user.company.name}</p>
          </li>
      `;
    })
    .join("");
  userList.insertAdjacentHTML("beforeend", markup);
}



// const foo = async () => {
// 	console.log("Before await");

// 	const promiseValue = await new Promise(resolve => {
// 		setTimeout(() => resolve(5), 2000)
// 	});

// 	console.log("After await", promiseValue);
// };

// foo(); // через 2 секунди виведеться в консоль  "After await" 5


console.log("Before try...catch");

try {
  const result = 10 / 0;
  console.log(result); // Цей рядок не виконається через помилку
} catch (error) {
  // Обробимо помилку
  console.error(error.message);
}

console.log("After try...catch");