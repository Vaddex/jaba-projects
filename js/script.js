"use strict";
// !Завжди використовуй суворий режим.

// const consoleLoginInput = confirm('Будьте обережні, велика жаба стежить за тобою!');
// console.log(consoleLoginInput);

// const nickname = 'vladoosik';
// const consoleFavoriteToadInput = prompt('Хто твоя улюблена жаба', `${nickname}`);
// console.log(typeof consoleFavoriteToadInput);

// ! Взаємодія з користувачем
// const message = 'Toads site is nice';
// console.log(message);

// const mainQuestion = confirm('Do you love toads&');
// console.log(mainQuestion);

// const userName = 'vladoosik';
// console.log('Hello ' , userName);

// ! Методи Number.parseInt() і Number.parseFloat()
// const randomNumber = '124.748eik55';
// console.log(typeof (randomNumber));
// console.log(Number.parseInt(randomNumber)); //124
// console.log(Number.parseFloat(randomNumber)); //124.748

// ! Перевірка на число
// const randomNumber2 = Number('not a number'); //NaN
// console.log(Number.isNaN(randomNumber2)); // true

// ! Додавання чисел з рухомою крапкою (комою)
// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

// ! Метод typeof
// let randString = '29pull45back';
// let undefined;
// let example = false;
// console.log(typeof(example)); //boolean
// console.log(typeof(undefined)); // undefined
// console.log(typeof(randString)); // string
// randString = 43;
// console.log(typeof (randString)); // nuber
// randString = NaN;
// console.log(typeof (randString)); // nuber
// randString = null;
// console.log(typeof (randString)); // object

// ! Метод Math
// let value = 5;
// value += 10;
// console.log(value);

// console.log(Math.floor(1.1)); // 1
// console.log(Math.ceil(1.1)); // 2
// console.log(Math.round(2.6)); // 3
// console.log(Math.max(11, 12, 16, 25, 48, 21, 54)); // 54
// console.log(Math.min(11, 12, 16, 25, 48, 21, 54)); // 11
// console.log(Math.pow(3, 4)); // 81

// ! Конкатенація рядків
// const message = 'Toads ' + 'is ' + 'cool';
// console.log(message); // 'Toads is cool'
// console.log(1 + '2'); // '12'
// console.log(1 + '2' + 4); // '124'
// console.log(1 + 2 + '4'); // '34'

// ! Шаблонні рядки
// const userName = 'vladoosik';
// const userId = 47;
// const greeting = 'Welcome ' + userName + ', your personal ID is ' + userId + '!';
// console.log(greeting);

// or

// const greeting = `Welcome ${userName}, your personal ID is ${userId}!`
// console.log(greeting);

// ! Властивості і методи рядків
// ? Властивість length
// const message = 'Hello my dear friend';
// console.log(message.length); // 20
// console.log('do you have some Melyakom?'.length); // 26

// ! Методи toLowerCase() і toUpperCase()
// const sampleText = 'The weather today is really wet';
// console.log(sampleText); // The weather today is really wet
// console.log(sampleText.toLowerCase()); // the weather today is really wet
// console.log(sampleText.toUpperCase()); // THE WEATHER TODAY IS REALLY WET

// const brandName = 'SAMSUNG';
// const userInput = 'sAmsUng';
// console.log(userInput); // sAmsUng
// console.log(brandName === userInput); // false
// const normaliseInput = userInput.toUpperCase();
// console.log(normaliseInput); // SAMSUNG
// console.log(brandName === normaliseInput); // true

// ! Метод indexOf()
// const message = 'Do you speak toads?';
// console.log(message.indexOf('sp')); // 7
// console.log(message.indexOf('can')); // -1

// ! Метод includes()
// const statusOfToad = 'Жива жаба';
// console.log(statusOfToad.includes('Ж')); // true
// console.log(statusOfToad.includes('в')); // true
// console.log(statusOfToad.includes('В')); // false
// console.log(statusOfToad.includes('жива')); // false

// ! Метод endsWith()
// const userFileName = 'script.js';
// console.log(userFileName.endsWith('.js')); // true
// console.log(userFileName.endsWith('.css')); // false

// ! Методи replace() і replaceAll()
// const userFileName = 'script.js';
// console.log(userFileName.replace('.js', '.css')); // script.css
// const userFilesName = 'index.html, style.html, script.html';
// console.log(userFilesName); // index.html, style.html, script.html
// const fileChanger = userFilesName.replaceAll('.html', '.js');
// console.log(fileChanger); // index.js, style.js, script.js

// ! Метод slice()
// const toadName = 'ставкова жаба';
// console.log(toadName.slice(0, 4)); // став
// console.log(toadName.slice(6, 11)); // ва жа
// console.log(toadName.slice(0, toadName.length)); // ставкова жаба
// console.log(toadName.slice(6, toadName.length)); // ва жаба

// ! Логічні оператори
// ? Логічне «І»
// const age = 26;
// console.log(age > 20 && age < 30); // true && true -> true
// console.log(age < 20 && age > 30); // false && false -> false
// console.log(age > 20 && age > 30); // true && false -> false

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log('' && 'object'); // false && true -> ''
// console.log('object' && ''); // true && false -> ''
// console.log('object' && 'function'); // true && true -> 'function'
// console.log('function' && 'object'); // true && true -> 'object'

// ? Логічне «АБО»
// const age = 26;
// console.log(age < 30 || age > 40); // true || false -> true
// console.log(age < 10 || age > 20); // false || true -> true
// console.log(age <10 || age >40); // false || false -> false

// ? Логічне «НЕ»
// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // .!3 -> !true -> false
// console.log(!"Frog"); // .!Frog -> !true -> false
// const isOline = true;
// console.log(isOline); // true
// const isNotOnline = !isOline;
// console.log(isNotOnline); // false

// ! Розгалуження
// ? Інструкція if
// let cost = 0;
// const subscription = 'Pro';
// if (subscription === 'Pro') {
//     cost = 100;
// }
// console.log(cost); // 100

// let cost = 0;
// const subscription = 'Free';
// if (subscription === 'Pro') {
//     cost = 100;
// }
// console.log(cost); // 0

// ? Інструкція if...else
// let cost = 0;
// const subscription = 'Free'
// if (subscription ===  'Pro') {
//     cost = 100;
// } else {
//     cost = 0;
// }
// console.log(cost); // 0

// let cost = 0;
// const subscription = 'Pro';
// if (subscription === 'Pro') {
//     cost = 100;
// } else {
//     cost = 0;
// }
// console.log(cost); // 100

// ? Інструкція else...if
// let cost;
// const subscription = 'Premium';
// if (subscription === 'Free') {
//     cost = 0;
// } else if (subscription === 'Pro') {
//     cost = 100;
// } else if (subscription === 'Premium') {
//     cost = 500;
// }
// console.log(cost); //500

// ? Тернарний оператор
// let type;
// const age = 26;
// if (age >= 26) {
//     type = 'adult';
// } else {
//     type = 'child'
// }
// console.log(type); //adult

// or

// const age = 26;
// const type = age >= 26 ? 'adult' : 'child';
// console.log(type); // adult

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;
// if (num1 > num2) {
//     biggerNumber = num1;
// } else {
//     biggerNumber = num2;
// }
// console.log(biggerNumber); // 10

// or

// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;
// console.log(biggerNumber); // 10

// ? Інструкція switch
// let cost;
// const subscription = 'Premium';
// switch (subscription) {
//     case 'Free':
//         cost = 0;
//         break;
//     case 'Pro':
//         cost = 100;
//         break;
//     case 'Premium':
//         cost = 500;
//         break
//     default:
//         console.log('Invalid subscription type');
// }
// console.log(cost); // 500

// ? variable scope
// const value = 5;
// if (true) {
//     console.log('Block scope ', value); // 5
// }
// console.log('Global scope ', value); // 5

// if (true) {
//     const value = 5;
//     console.log('Block scope ', value); // 5
// }
// console.log('Global scope ', value); // ReferenceError: value is not defined

// ! Цикли
// ? Цикл while
// let counter = 0;
// while (counter < 10) {
//     console.log('counter ', counter);
//     counter += 1;
// }

// let clientCounter = 0;
// const maxClient = 25;
// while (clientCounter < maxClient) {
//     console.log(clientCounter);
//     clientCounter += 1;
// }

// ? Цикл do...while
// let password = '';
// do {
//     password = prompt('Enter your password longer than 4 characters', '')
// } while (password.length < 5);
//     console.log('Entered password ', password);

// ? Цикл for
// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
// }

// const target = 3;
// let sum = 0;
// for (let i = 0; i <= target; i += 1) {
//     sum += i;
// }
// console.log(sum);

// const max = 10;
// for (let i = 0; i > max; i += 1) {
//     console.log(`${max} % ${i} = `, max % i);
// }

// ? Оператор break
// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
//     if (i === 3) {
//         console.log('We find nuber 3. The cycle stop');
//         break;
//     }
// }
// console.log('Log after cycle');

// ? Оператор continue
// const number = 10;
// for (let i = 0; i < number; i += 1) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log('Непарне і: ', i);
// }