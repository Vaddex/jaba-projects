'use strict';
// ! Завжди використовуй суворий режим.

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
// console.log(!'Frog'); // .!Frog -> !true -> false
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

// ! Масиви

// ? Перевизначення
// const clients = ['mango', 'kiwi', 'orange', 'agent 47'];
// clients[2] = 'lemon';
// console.log(clients); // [ 'mango', 'kiwi', 'lemon', 'agent 47' ];

// ? Довжина масиву
// const clients = ['mango', 'kiwi', 'orange', 'agent 47'];
// console.log(clients.length);     // 4

// ? Індекс останнього елемента
// const clients = ['mango', 'kiwi', 'orange', 'agent 47'];
// const clientsLastElement = clients.length - 1;
// console.log(clientsLastElement);    // 3
// console.log(clients[clientsLastElement]);   //agent 47

// ? Ітерація по масиву
// const clients = ['mango', 'kiwi', 'orange', 'agent 47'];
// for (let i = 0; i < clients.length; i += 1) {
//     console.log(clients[i]);
// }

// ? Цикл for...of
// const clients = ['Biba', 'Boba', '2', 'Ultramessershmith', 'Allallbama'];
// for (const client of clients) {
//     console.log(client);
// }

// ? Оператори break і continue
// const clients = ['Biba', 'Boba', '2', 'Ultramessershmith', 'Allallbama'];
// const clientNameToFind = 'Boba';
// let message;
// for (const clint of clients) {
//     if (clint === clientNameToFind) {
//         message = 'That person is exist';
//         break;
//     } else {
//         message = `That person doesn't exist`;
//     }
// }
// console.log(message);   // That person is exist

// const someNumbers = [1, 2, 5, 43, 3, 53, 653, 22, 86, 92];
// const threshold = 24;
// for (let i = 0; i < someNumbers.length; i += 1) {
//     if (someNumbers[i] < threshold) {
//         continue
//     }
//     console.log(`Number bigger than ${threshold}: ${someNumbers[i]}`);
// }

// ? Присвоєння за посиланням і за значенням
// let a = 5;
// let b = a;
// Присвоєння за значенням, в пам'яті буде створена ще одна комірка, в яку буде скопійоване значення 5
// console.log(a); // 5
// console.log(b); // 5
// a = 10;
// console.log(a); // 10
// console.log(b); // 5
// Значення b не змінилося, оскільки це окрема копія

// const a = ['Mango'];
// const b = a;
// console.log(a); // [ 'Mango' ]
// console.log(b); // [ 'Mango' ]
// Оскільки a - це масив, в b записується посилання на вже існуючий
// масив в пам'яті. Тепер a і b вказують на той самий масив.

// Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push('Kiwi');
// console.log(a); // [ 'Mango', 'Kiwi' ]
// console.log(b); // [ 'Mango', 'Kiwi' ]

// or
// b.push('Pineaple');
// console.log(a); // [ 'Mango', 'Kiwi', 'Pineaple' ]
// console.log(b); // [ 'Mango', 'Kiwi', 'Pineaple' ]

// ! Методи масиву

// ? Методи split() і join()
// * join(delimiter)
// const user = 'Mango';
// console.log(user.split('')); // [ 'M', 'a', 'n', 'g', 'o' ]
// const phrase = '9/11 was staged by the US government';
// console.log(phrase.split(' ')); // [ '9/11', 'was', 'staged', 'by', 'the', 'US', 'government' ]

// const user = [ 'M', 'a', 'n', 'g', 'o' ];
// console.log(user.join('')); // 'Mango'
// console.log(user.join(' ')); // 'M a n g o'
// console.log(user.join('-')); // 'M-a-n-g-o'

// ? Метод indexOf()
// const clients = ['mango', 'kiwi', 'orange', 'agent 47'];
// console.log(clients.indexOf('mango')); // 0
// console.log(clients.indexOf('orange')); // 2
// console.log(clients.indexOf('ma')); // -1

// ? Метод includes()
// const clients = ['mango', 'kiwi', 'orange', 'agent 47'];
// console.log(clients.includes('kiwi')); // true
// console.log(clients.includes('lemon')); // false

// const redFruits = ['apple', 'raspberry', 'cranberry', 'strawberry', 'chery', 'red ribes', 'merry', 'rose hip', 'rowanberry', 'pomegranate', 'watermelon'];
// const fruit = 'rowanberry';
// const hasFruit = redFruits.includes(fruit);
// if (hasFruit) {
//     console.log(`${fruit} is a red fruit`); // rowanberry is a red fruit
// } else {
//     console.log(`Are you stupid? It's not a red fruit`);
// }

// ? Методи push() і pop()
// const nubers = [];
// nubers.push(null);
// nubers.push(235);
// nubers.push('simple');
// nubers.push(NaN);
// nubers.push(5229);
// console.log(nubers); // [ null, 235, 'simple', NaN, 5229 ]

// const anotherNumbers = [21, 22, 523, 1];
// anotherNumbers.pop();
// console.log(anotherNumbers); // [ 21, 22, 523 ]
// const sus = [];
// console.log(sus.pop()); // undefined

// or
// console.log(anotherNumbers.pop()); // [ 21, 22, 523 ] 523 <= повертає те що вирізали

// ? Метод slice()
//* slice(begin, end)
// const random = [null, 235, 'simple', NaN, 5229];
// console.log(random.slice(1, 3)); // [ 235, 'simple' ]
// console.log(random.slice()); // [ null, 235, 'simple', NaN, 5229 ]
// console.log(random.slice(2)); // [ 'simple', NaN, 5229 ]
// console.log(random.slice(-2)); // [ NaN, 5229 ]

// ? Метод splice()
// * Видалення  splice(position, num)
// const scores = [1, 2, 3, 4, 5];
// const deletedScores = scores.splice(0, 3);
// console.log(scores); // [ 4, 5 ]
// console.log(deletedScores); // [ 1, 2, 3 ]

// * Додавання splice(position, 0, new_element_1, new_element_2, ...)
// const colors = ['red', 'green', 'purple'];
// colors.splice(2, 0, 'yellow', 'orange')
// console.log(colors); // [ 'red', 'green', 'yellow', 'orange', 'purple' ]

// * Заміна splice(position, num, new_element_1, new_element_2, ...)
// const colors = ['red', 'green', 'purple'];
// colors.splice(2, 1, 'pink', 'brown');
// console.log(colors); // [ 'red', 'green', 'pink', 'brown' ]

// ? Метод concat()
// const oldClients = ['mango', 'kiwi', 'orange', 'agent 47'];
// const newClients = ['raspberry', 'rowanberry', 'red ribe', 'pomegrenade', 'benjamin ladan'];
// const allClientsTogether = oldClients.concat(newClients);
// console.log(allClientsTogether);
//[
//   'mango',
//   'kiwi',
//   'orange',
//   'agent 47',
//   'raspberry',
//   'rowanberry',
//   'red ribe',
//   'pomegrenade',
//   'benjamin ladan'
// ]

// or
// const allClientsTogether = newClients.concat(oldClients);
// console.log(allClientsTogether);
// [
//   'raspberry',
//   'rowanberry',
//   'red ribe',
//   'pomegrenade',
//   'benjamin ladan',
//   'mango',
//   'kiwi',
//   'orange',
//   'agent 47'
// ]

// ! Функції

// ? Оголошення функції
// function multiply() {
// Тіло функції
//   console.log('Це лог на момент виклику функції multiply');
// }
// 2. Виклики функції multiply
// multiply(); // 'Це лог на момент виклику функції multiply'
// multiply(); // 'Це лог на момент виклику функції multiply'
// multiply(); // 'Це лог на момент виклику функції multiply'

// ? Параметри та аргументи
// function multiply(x, y, z) { // параметри
//     console.log(`Результат множення дорівнює ${x * y * z}`);
// }
// аргументи
// multiply(2, 3, 5); // Результат множення дорівнює 30
// multiply(4, 8, 12); // Результат множення дорівнює 384
// multiply(17, 6, 25); // Результат множення дорівнює 2550

// ? Повернення значення
// function multiply(x, y, z) {
// console.log('Код до return виконується звичайним чином');
// return x * y * z;
// console.log('Цей лог ніколи не виконається, він стоїть після return');
// }
// Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30
// result = multiply(4, 8, 12);
// console.log(result); // 384
// result = multiply(17, 6, 25);
// console.log(result); // 2550

// ? Порядок виконання коду
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }
// console.log('Лог до виклику функції multiply');
// multiply(2, 3, 5); // Результат множення дорівнює 30
// console.log('Лог після виклику функції multiply');

// Послідовність логів в консолі
// 'Лог до виклику функції multiply'
// 'Результат множення дорівнює 30'
// 'Лог після виклику функції multiply'

// ? Параметри за замовчуванням
// function count(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
//     for (let i = 0; i <= countTo; i += step) {
// console.log(i);
//     }
// }
// count(1, 5);
// count(2);
// count();

// ? Псевдомасив arguments
// function multiply() {
//     let total = 1;
//     for (const argument of arguments) {
//         total *= argument;
//     }
//     return total;
// }
// console.log(multiply(1, 2, 3,)); // 6
// console.log(multiply(1, 2, 3, 4)); // 24
// console.log(multiply(1, 2, 3, 4, 5)); // 120

// * Перетворення псевдомасиву
// function fn() {
// Змінна args буде містити повноцінний масив
//     const args = Array.from(arguments);
// }
// function fn(...args) {
// Змінна args буде містити повноцінний масив
// }

// ? Патерн «Раннє повернення»
// function withdraw(amount, balance) {
//     if (amount === 0) {
//         console.log('Для проведення операції введіть суму більшу за нуль');
//     } else if (amount > balance) {
//         console.log('Недостатньо коштів на рахунку');
//     } else {
//         console.log('Операція зняття коштів проведена успішно');
//     }
// }
// withdraw(0, 300); // Для проведення операції введіть суму більшу за нуль
// withdraw(500, 300); // Недостатньо коштів на рахунку
// withdraw(100, 300); // Операція зняття коштів проведена успішно

// function withdraw(amount, balance) {
// Якщо умова виконується, викликається console.log
// і вихід із функції. Код після тіла if не виконається.
// if (amount === 0) {
//     console.log('Для проведення операції введіть суму більшу за нуль');
//     return;
// }
// Якщо умова першого if не виконалась, його тіло пропускається
// та інтерпретатор доходе до другого if.
// Якщо умова виконується, викликається console.log і вихід із функції.
// Код, що знаходиться після тіла if, не виконається.
// if (amount > balance) {
//     console.log('Недостатньо коштів на рахунку');
//     return;
// }
// Якщо жоден із попередніх if не виконався,
// інтерпретатор доходить до цього коду і виконує його.
// console.log('Операція зняття коштів проведена');
// }
// withdraw(0, 300); // Для проведення операції введіть суму більшу за нуль
// withdraw(500, 300); // Недостатньо коштів на рахунку
// withdraw(100, 300); // Операція зняття коштів проведена

// ? Функціональний вираз
// * Оголошення функції (function declaration)
// function multiply(x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// * Функціональний вираз (function expression)
// const multiply = function(x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// ! Область видимості

// ? Глобальна область видимості
// const globalValue = 10;
// console.log(globalValue); // 10

// function foo() {
//     console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i += 1) {
//     console.log(globalValue); // 10
//     if (i === 2) {
//         console.log(globalValue); // 10
//     }
// }

// ? Блокова область видимості
// function foo() {
//     const a = 20;
//     console.log(a); // 20

//     for (let i = o; i < 5; i += 1) {
//         console.log(a); // 20
//     }
//     if (i === 2) {
//         console.log(a); // 20
//     }
// }
// ❌ Помилка! Змінна a - недоступна у глобальній області видимості
// console.log(a);

// for (let i = 0; i < 5; i += 1) {
// ❌ Помилка! Змінна a - недоступна в цій області видимості
//     console.log(a);
// }

// or
// for (let i = 0; i < 5; i += 1) {
//     const a = 20;
//     console.log(a); // 20
//     if (i === 2) {
//         const b = 30;
//         console.log(a); // 20
//         console.log(b); //30
//     }
//     if (i === 3) {
//         console.log(a); // 20
// ❌ Помилка! Змінна b - недоступна в цій області видимості
//         console.log(b);
//     }
// }

// ! Стек викликів
// function fnA() {
//     console.log('Лог всередині функції fnA до виклику fnB');
//     fnB();
//     console.log('Лог всередині функції fnA після виклику fnB');
// }
// function fnB() {
//     console.log('Лог всередині функції fnB');
// }

// console.log('Лог до виклику fnA');
// fnA();
// console.log('Лог після виклику fnA');

// ? Стек
// * Стек - структура даних, яка працює за принципом LIFO (Last-In-First-Out), тобто останнім прийшов - першим пішов. Останнє, що додається у стек, буде видалено з нього першим, - тому можна додати або видалити елементи тільки з верхівки стека.
// function bar() {
//     console.log('bar');
// }

// function baz() {
//     console.log('baz');
// }

// function foo() {
//     console.log('foo');
//     bar();
//     baz();
// }
// foo();

// foo
// bar
// baz

// ! practical tasks
// function getExtremeElements(array) {
//     const arraylength = array.length - 1;
//     const lastElements = array[arraylength];
//   let filetredarr = [array[0], lastElements];
//   return filetredarr;
// }
// getExtremeElements([1, 2, 3, 4, 5])
// getExtremeElements(['Earth', 'Mars', 'Venus'])
// getExtremeElements(['apple', 'peach', 'pear', 'banana'])

// function slugify(title) {
//   let toArr = title.t
//   let format = title.join('-');
//   let addingsymb = format.toLowerCase()
// return addingsymb;
// }
// slugify("Arrays for begginers");
// slugify("Arrays for begginers");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   return newArray.slice(0, maxLength);
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

// function calculateTotal(number) {
//   let sum = 0;
// for (let i = 1; i <= number; i += 1) {
// sum += i;
//   }
//   console.log(sum);
//   return sum;
// }
// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);

// function calculateTotalPrice(order) {
//   let total = 0;
// for (let i = 0; i < order.length; i += 1) {
//   total += order[i];
// }
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// function findLongestWord(string) {
//     let stringUnion = string.split(' ');
//     let lengthWord = stringUnion[0];
//     for (let i = 1; i < stringUnion.length; i += 1) {
//         if (stringUnion[i].length > lengthWord.length) {
//             lengthWord = stringUnion[i];
//         }
//     }
//     console.log(lengthWord);
//     return lengthWord
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for (let i = min; i <= max; i += 1)
//         numbers.push(i);
//     console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

// function filterArray(numbers, value) {
//     let compareWithOriginalNumber = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value)
//             compareWithOriginalNumber.push(numbers[i]);
//         console.log(compareWithOriginalNumber);
//     }
//     return compareWithOriginalNumber;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// function getCommonElements(array1, array2) {
//     let newArr = [];
//     for (let elements of array1) {
//         array2.includes(elements) ?
//         newArr.push(elements): 'false'
//     }
//     console.log(newArr);
//     return newArr;
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// function calculateTotalPrice(order) {
//   let total = 0;
//     for ( let accumulate of order) {
//        total += accumulate;
// }
//     console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     for (let someNum of numbers) {
//         if (someNum > value) {
//             filteredNumbers.push(someNum);
//         }
//     }
//     console.log(filteredNumbers);
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// function getEvenNumbers(start, end) {
//     let newArrr = [];
//     for (let i = start; i <= end; i += 1) {
//         if ( i % 2 === 0) {
//             newArrr.push(i);
//         }
//     }
//     console.log(newArrr);
//     return newArrr;
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//         number = i;
//         console.log(number);
//         return number;
//     }
//     }
// }
// findNumber(2, 6, 5);
// findNumber(8, 17, 3);
// findNumber(6, 9, 4);
// findNumber(16, 35, 7);

// function includes(array, value) {
//     for (let i = 0; i < array.length; i += 1) {
//         i = 'true' ? i === value : 'false'
//         return array.indexOf(value) >= 0;
//     }
// }
// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");

// ! Об'єкти
// Об'єкти дозволяють описати і згрупувати характеристики певної сутності - користувача, книги, продукту в магазині, чого завгодно. Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення (значення).

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// ? Звернення до вкладених властивостей
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // Об'єкт location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// ? Звернення до властивостей через квадратні дужки
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// ? Зміна значення властивості
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("драма");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// ? Додавання властивостей
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "lt"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'lt']

// ? Короткі властивості
// ❌
// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

// ✅
// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

// ? Обчислювальні властивості
// ❌
// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генрі Сибола";
// console.log(user.name); // 'Генрі Сибола'

// ✅
// const propName = "name";
// const user = {
//   age: 25,
// Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: "Генрі Сибола",
// };

// console.log(user.name); // 'Генрі Сибола'

// ! Методи об'єкта
// ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
// Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
// Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };
// Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");

// ❌ Слабкопозв'язані, незалежні сутності
// const books = [];
// function getBooks() {}
// function addBook() {}

// ? Доступ до властивостей об'єкта в методах
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };
// Перед крапкою знаходиться об'єкт bookShelf,
// тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// ! Перебирання об'єкта

// ? Цикл for...in
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
// Ключ
//   console.log(key);
// Значення властивості з таким ключем
//   console.log(book[key]);
// }

// ? Метод hasOwnProperty()
// * Метод Object.create(animal) створює і повертає новий об'єкт, зв'язуючи його з об'єктом animal. Тому можна отримати значення властивості legs, звернувшись до нього як dog.legs, хоча він відсутній в об'єкті dog - це невласна властивість з об'єкта animal.
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";
// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// ❌ Повертає true для всіх властивостей
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// ✅ Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
// Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }  // Якщо це невласна властивість - нічого не робимо
// }

// ? Метод Object.keys()
// * Вбудований клас Object має декілька корисних методів для роботи з об'єктами. Перший з них - це Object.keys(obj), який приймає об'єкт і повертає масив ключів його власних властивостей. Якщо об'єкт не має властивостей, метод поверне порожній масив.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// * Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати власні властивості об'єкта, і не використовуючи архаїчний цикл for...in з перевірками належності властивостей.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
// Ключ
//   console.log(key);
// Значення властивості
//   console.log(book[key]);
// }

// ? Метод Object.values()
// * Mетод Object.values(obj) повертає масив значень його власних властивостей. Якщо в об'єкті відсутні властивості, метод Object.values(obj) поверне порожній масив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]
// let total = 0;
// for (const value of values) {
//   total += value;
// }
// console.log(total); // 20

// ? Метод Object.entries()
// * Метод Object.entries(obj) повертає масив записів, кожен елемент якого, буде ще один масив з 2-х елементів: імені властивості і значення цієї властивості з об'єкта obj.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// ! Масив об'єктів
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
// Об'єкт книги
//   console.log(book);
// Назва
//   console.log(book.title);
// Автор
//   console.log(book.author);
// Рейтинг
//   console.log(book.rating);
// }

// let totalRating = 0;
// for (const book of books) {
//   totalRating += book.rating;
// }
// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

// ! Синтаксис spread і rest

// ? spread: передача аргументів
// * Операція ... (spread) дозволяє розподілити колекцію елементів (масив, рядок або об'єкт) в місце, в якому очікується набір окремих значень. Звичайно, існують деякі обмеження, наприклад, не можна розподілити масив в об'єкт і навпаки.

// const temps = [14, -4, 25, 8, 11];

// В консолі буде масив
// console.log(temps);
// ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// В консолі буде набір окремих чисел
// console.log(...temps);
// ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// ? spread: створення нового масиву
// * Операція ... (spread) дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий. Раніше для цього використовували методи slice() і concat(), але операція розподілу дозволяє зробити те саме у коротшій формі.

// const temps = [14, -4, 25, 8, 11];
// Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// ? spread: створення нового об'єкта
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// ? rest: збирання всіх аргументів функції
// * Операція ... (rest) дозволяє зібрати групу незалежних елементів у нову колекцію. Синтаксично - це близнюк операції розподілу, але відрізнити їх просто - розподіл - коли ... знаходиться у правій частині операції присвоювання, а збирання - коли ... знаходиться в її лівій частині.

// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// ? rest: збирання частини аргументів функції
// * Операція ... (rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна, оголосивши параметри до «збирання».

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// ? Деструктуризація об'єктів
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// Деструктуризуємо
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? "публічному" : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

// ? Значення за замовчуванням
// * Для того, щоб уникнути присвоєння undefined під час деструктуризації неіснуючих властивостей об'єкта, можна задати змінним значення за замовчуванням, які будуть присвоєні лише у тому випадку, якщо об'єкт не містить властивості з таким ім'ям.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480

// ? Зміна імені змінної
// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смішної людини",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

// ? Деструктуризація в циклах
// ❌
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// ✅
// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// ? Глибока деструктуризація
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// ? Деструктуризація масивів
// * Деструктуризоване присвоювання можна використовувати і для масивів, але з деякими особливостями.
//     Замість фігурних дужок {} використовуються квадратні [].
//     Змінним, зазначеним у квадратних дужках [], будуть послідовно присвоюватися значення елементів масиву.
// Наприклад, є масив кольорів, з якого потрібно отримати значення кожної складової кольору в окремих змінних.

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;
// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// ! Патерн «Об'єкт параметрів»
// * Якщо функція приймає більше двох-трьох аргументів, дуже просто заплутатись, в якій послідовності і що передавати. В результаті виходить дуже неочевидний код в місці її виклику.

// function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
// Робимо щось з параметрами
//   console.log(title);
//   console.log(numberOfPages);
// І так далі

// ❌ Що таке 736? Що таке 10283? Що таке true?
// doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

// * Патерн «Об'єкт параметрів» допомагає вирішити цю проблему, замінюючи набір параметрів всього одним об'єктом з іменованими властивостями.

// function doStuffWithBook(book) {
// Робимо щось з властивостями об'єкта
//   console.log(book.title);
//   console.log(book.numberOfPages);
// І так далі
// }

// * У такому випадку, під час її виклику передаємо один об'єкт з необхідними властивостями.

// ✅ Все зрозуміло
// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// * Ще один плюс у тому, що можна деструктуризувати об'єкт в параметрі book. Це можна зробити в тілі функції.

// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(numberOfPages);
// І так далі
// }

// * Або відразу в сигнатурі (підписі) функції - немає різниці.

// function doStuffWithBook({
//   title,
//   numberOfPages,
//   downloads,
//   rating,
//   isPublic,
// }) {
//   console.log(title);
//   console.log(numberOfPages);
// І так далі
// }

// ! practical tasks
// function countProps(object) {
//   let propCount = 0;
// for (let key in object) {
//   if (object.hasOwnProperty(key)) {
//       propCount += 1;
//   }
// }
//     console.log(propCount);
//     return propCount;
// }
// countProps({});
// countProps({ name: 'Mango', age: 2 });
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (let key of keys) {
//   values.push(apartment[key])
// }

// function countProps(object) {
//   let propCount = 0;
//   const allKeys = Object.keys(object)
//   for (const key of allKeys) {
//       propCount += 1;
//   }
//   return propCount;
// }
// countProps({});
// countProps({ name: 'Mango', age: 2 });
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const salary = Object.values(salaries);
//   for ( let key of salary) {
//     totalSalary += key
//     }
//     console.log(totalSalary);
//   return totalSalary;
// }
// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (let key of colors) {
//   hexColors.push(key.hex);
//   rgbColors.push(key.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//     let chosenProductPrice = null;
//     for (let key of products) {
//         if (productName === key.name) {
//             chosenProductPrice = key.price;
//             break
//         }
//     }
//     console.log(chosenProductPrice);
//     return chosenProductPrice;
// }
// getProductPrice('Radar');
// getProductPrice('Grip');
// getProductPrice('Scanner');
// getProductPrice('Droid');
// getProductPrice('Engine');

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//     let chosedNameArr = [];
//     for (let key of products) {
//         if (key[propName]) {
//             chosedNameArr.push(key[propName]);
//         }
//     }
//     console.log(chosedNameArr);
//     return chosedNameArr;
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
// let totalPrice = 0;
//   for (let key of products) {
//     if (key.name === productName) {
//         totalPrice = key.price * key.quantity;
//     }
//     }
//     console.log(totalPrice);
//     return totalPrice;
// }

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// * destructuring
// const {yesterday, today, tomorrow } = highTemperatures;
// * result
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//     yesterday,
//     today,
//     tomorrow,
// * adding a default value
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//  } = highTemperatures;
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const {
//     today: {
//         low: lowToday,
//         high: highToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         high: highTomorrow,
//         low: lowTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     },
// } = forecast;

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }

// ? Патерн «Об'єкт налаштувань»
// ❌
// function calculateMeanTemperature(forecast) {
//   const todayLow = forecast.today.low;
//   const todayHigh = forecast.today.high;
//   const tomorrowLow = forecast.tomorrow.low;
//   const tomorrowHigh = forecast.tomorrow.high;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// ✅
// function calculateMeanTemperature(forecast) {
//     const { today: { low: todayLow, high: todayHigh },
//         tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(bestScore);
// console.log(worstScore);

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = {...defaultSettings, ...overrideSettings};
// console.log(finalSettings);

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";

//     const total = {
//         category: 'General',
//         priority: 'Normal',
//         completed: false,
//     }
//     const result = { ...total, ...data };
//     return result;
// }

// function add(...args) {
//     let total = 0;
//     for (const key of args) {
//         total += key;
//     }
//     console.log(total);
//     return total;
// };
// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36)

// function addOverNum(first, ...args) {
//   let total = 0;

//     for (const arg of args) {
//         if (first < arg) {
//             total += arg;
//         }
//   }
// console.log(total);
//   return total;
// };
// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);

// Change code below this line
// function findMatches(arr, ...args) {
//     const matches = [];
//     for (let key of args) {
//         if (arr.includes(key)) {
//             matches.push(key);
//     }
//     }
//     console.log(matches);
//     return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);

// const bookShelf = {
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//         return "Returning all books";
//   },
//     addBook(bookName) {
//         return `Adding book ${bookName}`;
//   },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`
//   },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`
//   }
// };

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         const index = this.books.indexOf(oldName)
//         if (index !== -1) {
//             this.books[index] = newName;
//         }
//     },
//     getBooks() {
//         return this.books;
//     }
// };

// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     getPotions(potionName) {
//         this.potions.push(potionName);
//         return this.potions;
//     },
//     removePotion(potionName) {
//         const index = this.potions.indexOf(potionName)
//         this.potions.splice(index, 1);
//         return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//         const oldIndex = this.potions.indexOf(oldName);
//         this.potions.splice(oldIndex, 1, newName);
//     }
// };

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//     addPotion(newPotion) {
//         for (let key of this.potions) {
//             if (key.name === newPotion.name) {
//                  return `Error! Potion ${newPotion.name} is already in your inventory!`
//       }
//     }
//         this.potions.push(newPotion)
//         return this.potions;
//   },
//   removePotion(potionName) {
//       for (const key of this.potions) {
//           if (key.name === potionName) {
//               const potionIndex = this.potions.indexOf(key);
//               this.potions.splice(potionIndex, 1);
//           }
//       }
//       return `Potion ${potionName} is not in inventory!`;
//   },
//     updatePotionName(oldName, newName) {
//         const potionIndex = this.potions.indexOf(oldName);
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (this.potions[i].name === oldName) {
//                 this.potions[i].name = newName;
//             }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//   },
// };
// const potionIndex = this.potions.indexOf(oldName);

// ! Колбек-функції
// * Функції не відрізняються від чисел, рядків або масивів - це просто спеціальний тип даних (об'єкт вищого порядку), значення, яке можна зберігати у змінній або передавати у якості аргументу в іншу функцію.

// function greet(name) {
//   return `Ласкаво просимо ${name}.`;
// }
// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Манго")); // Ласкаво просимо Манго.
// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }

// * У першому лозі ми викликаємо функцію greet за допомогою круглих дужок, і в консоль виводиться результат її виконання. У другому лозі передається посилання на функцію, а не результат виклику (відсутні круглі дужки), тому в консоль виводиться її тіло. Це означає, що функцію можна присвоїти у змінну або передати як аргумент іншої функції.

// * Функція зворотного виклику (callback, колбек) - це функція, яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.
// * Функція вищого порядку (higher order function) - функція, яка приймає у якості параметрів інші функції або повертає функцію у якості результату.

// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }
// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }
// registerGuest("Манго", greet);

// * Ми передали посилання на функцію greet як аргумент, тому вона буде присвоєна в параметр callback і викликана всередині функції registerGuest за допомогою круглих дужок. Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.

// ? Інлайн колбеки
// * Якщо колбек-функція - маленька, і потрібна тільки для передачі аргументом, її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек. Така функція буде доступна тільки у якості значення параметра і більше ніде в коді.

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }
// // Передаємо інлайн функцію greet у якості колбека
// registerGuest("Манго", function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });
// // Передаємо інлайн функцію notify у якості колбека
// registerGuest("Полі", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

// ? Декілька колбеків
// * Функція може приймати будь-яку кількість колбеків. Наприклад, уявімо, що ми пишемо логіку прийняття дзвінків для телефону. Програма повинна увімкнути автовідповідач, якщо абонент - недоступний, або з'єднати дзвінок в іншому випадку. Доступність абонента будемо імітувати генератором випадкового числа, щоб між різними викликами функції можна було отримати різні результати.

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }
// processCall("Манго");

// * Проблема такого підходу полягає у тому, що функція processCall робить занадто багато і прив'язує перевірку доступності абонента до двох заздалегідь визначених дій. Що буде, якщо в майбутньому, замість автовідповідача, потрібно буде залишати голограму?
// * Ми могли б написати функцію таким чином, щоб вона повертала якесь значення, і потім за результатом її виконання, робити перевірки і виконувати потрібний код. Але перевірки не стосуються зовнішнього коду і будуть його засмічувати.
// * Виконаємо рефакторинг функції таким чином, щоб вона приймала два колбеки onAvailable і onNotAvailable, і викликала їх за умовою.

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }
//   onAvailable(recipient);
// }
// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }
// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }
// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }
// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

// * Колбеки застосовуються для обробки дій користувача на сторінці, на момент обробки запитів на сервер, виконання заздалегідь невідомих функцій тощо. У цьому і полягає їх суть - це функції, призначені для відкладеного виконання.

// ? Абстрагування повторення
// * Абстракція - приховування деталей реалізації. Дозволяє думати про задачі на вищому (абстрактному) рівні. Функції - це хороший спосіб побудови абстракцій.
// * Наприклад, скрипт виконує якусь дію певну кількість разів. З цією метою можна написати цикл for.

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// * Чи можемо ми абстрагувати «робити щось N разів» у якості функції? - так, напишемо функцію, яка викликає console.log() N разів.

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }
// repeatLog(5);

// * Але що робити, якщо ми хочемо виконати щось, крім логування чисел? Оскільки «робити щось» можна уявити функцією, а функції - це просто значення, ми можемо передати дію як аргумент.

// function printValue(value) {
//   console.log(value);
// }
// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }
// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаємо printValue як callback-функцію
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаємо prettyPrint як callback-функцію
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// ? Метод forEach
// * Метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією даних.

// array.forEach(function callback(element, index, array) {
//   // Тіло колбек-функції
// });

/*
    - Поелементо перебирає масив.
    - Викликає колбек-функцію для кожного елемента масиву.
    - Нічого не повертає.
*/
// * Аргументи колбек-функції - це значення поточного елемента element, його індекс index і власне вихідний масив array. Можна оголошувати тільки необхідні параметри, найчастіше - це елемент, головне не забувати про їх порядок.

// const numbers = [5, 10, 15, 20, 25];
// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }
// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// * Єдиним випадком, коли варто використовувати цикли for або for...of для перебирання масиву, - це задачі з перериванням виконання циклу. Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.

// ! Стрілочні функції
// * Стрілочні функції мають скорочений, лаконічніший синтаксис, що зменшує обсяг коду, особливо коли функція маленька або якщо вона використовується як колбек.
// * Усі стрілки створюються як функціональний вираз, і якщо функція - не анонімна, її необхідно присвоювати змінній.

// // Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }
// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// * Ключове слово function не використовується, замість цього відразу зазначається оголошення параметрів, після нього - символ => і тіло функції.

// * Якщо параметрів декілька, то вони перераховуються через кому в круглих дужках, між знаками дорівнює = і стрілкою =>.

// const add = (a, b, c) => {
//   return a + b + c;
// };

// * Якщо параметр один, його можна оголошувати без круглих дужок.

// const add = a => {
//   return a + 5;
// };

// * Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.

// const greet = () => {
//   console.log("Привіт!");
// };

// ? Неявне повернення
// * У стрілочної функції після символу => знаходиться її тіло. Існує два варіанти: з фігурними дужками і без них.

// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// * Якщо є фігурні дужки, і функція повинна повертати якесь значення, необхідно явно поставити return. Це називається явне повернення (explicit return). Такий синтаксис використовується у разі, якщо в тілі функції потрібно виконати ще якісь інструкції, крім повернення значення.

// const add = (a, b, c) => a + b + c;

// * Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>. Це називається неявне повернення (implicit return). У прикладі повернеться результат виразу додавання параметрів a, b і c.
// * Синтаксис неявного повернення суттєво скорочує «шум» оголошення функції з тілом і виразом, що повертається, але доречний тільки тоді, коли в тілі функції не потрібно виконувати жодних додаткових інструкцій, крім повернення значення.

// // До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }
// // Після
// const arrowAdd = (a, b, c) => a + b + c;

// ? Псевдомасив arguments
// * У стрілочних функцій немає локальної змінної arguments, що містить усі аргументи. Якщо необхідно зібрати всі аргументи в масив, використовується операція rest.

// const add = (...args) => {
//   console.log(args);
// };
// add(1, 2, 3); // [1, 2, 3]

// ? Стрілочні функції як колбеки
// * Анонімні стрілочні функції відмінно підходять як колбеки для перебираючих методів масиву завдяки коротшому синтаксису оголошення, особливо, якщо не потрібне тіло функції.

// const numbers = [5, 10, 15, 20, 25];
// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });
// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// * Стрілочну колбек-функцію також можна оголошувати окремо і передавати на неї посилання. Це варто робити, якщо одна функція використовується у декількох місцях програми або якщо вона громіздка.

// const numbers = [5, 10, 15, 20, 25];
// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };
// numbers.forEach(logMessage);

// ! Різновиди коду

// ? Імперативне програмування
// * Описує процес обчислення у вигляді заданої послідовності інструкцій, що змінюють стан програми. Опис того, як щось виконується.
// * Імперативний стиль програмування - це такий стиль, що надає машині набір детальних інструкцій для виконання задачі. Наприклад, цикл for, який надає точні вказівки для ітерації по індексам масиву.
// * Можна провести аналогію з рецептом приготування страви. Рецепт - це набір покрокових інструкцій для отримання бажаного результату.

// ? Декларативне програмування
// * Описує те, що ми хочемо отримати у підсумку, а не спосіб це зробити. Порядок виконання і спосіб досягнення - неважливі.
// * Коли ми пишемо HTML-код, то декларативно, за допомогою тегів та атрибутів, описуємо те, що хочемо отримати у підсумку. Браузер читає цей код і сам виконує всі необхідні операції для створення HTML-елементів і розміщення їх на сторінці.
// * Можна провести аналогію з меню ресторану. Це декларативний набір страв, які можна замовити, подробиці приготування і подачі яких приховані.
// * Декларативний опис задачі наочніше і легше формулюється. Ми кажемо, що хочемо зробити, викликаючи метод або функцію. Її реалізація, найімовірніше, використовує імперативний код, але він прихований всередині і не ускладнює розуміння основного коду.

// ? Імперативний vs декларативний
// * Розглянемо різницю підходів на прикладі базової операції фільтрації колекції. Напишемо код перебирання і фільтрації масиву чисел за певним критерієм.

// ? Імперативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }
// console.log(filteredNumbers); // [4, 5]

// * Метод filter() приховує в собі логіку перебирання колекції і викликає callback-функцію, яку ми йому передаємо для кожного елемента, повертаючи масив елементів, що відповідають критерію.

// ? Декларативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

// ! Чисті функції
// * Функція з побічними ефектами - це функція, яка в процесі виконання може змінювати або використовувати глобальні змінні, змінювати значення аргументів посилального типу, виконувати операції введення-виведення тощо.

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };
// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// * Функція dirtyMultiply(array, value) множить кожен елемент масиву array на число value. Вона змінює (мутує) вихідний масив за посиланням.
// * Чиста функція (pure function) - це функція, результат якої залежить тільки від значень переданих аргументів. За умови однакових аргументів вона завжди повертає один і той самий результат і не має побічних ефектів, тобто не змінює значення аргументів.
// * Напишемо реалізацію чистої функції множення елементів масиву, що повертає новий масив, не змінюючи вихідний.

// const pureMultiply = (array, value) => {
//   const newArray = [];
//   array.forEach(element => {
//     newArray.push(element * value);
//   });
//   return newArray;
// };
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);
// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// ! Перебираючі методи масиву
// * В JavaScript є методи масивів, що прийшли з функціональних мов. Більшість з них - це чисті функції. Вони створюють новий масив, заповнюють його, застосовуючи до значення кожного елемента зазначену колбек-функцію, після чого повертають цей новий масив.
// * Усі перебираючі методи масивів мають схожий синтаксис. Вихідний масив array, виклик методу method і callback-функція callback як аргумент методу.
// * array.method(callback[currentValue, index, array])
// * У більшості методів аргументами callback-функції є значення елемента currentValue (перший параметр), позиція елемента index (другий параметр) і сам вихідний масив array (третій параметр).

// array.method((item, idx, arr) => {
//   // логіка, яка буде застосовуватися на кожній ітерації
// });

// * Всі параметри, крім значення елемента item, - необов'язкові. Назви параметрів можуть бути будь-які, але є неофіційні домовленості.

// array.method(item => {
//   // логіка, яка буде застосовуватися на кожній ітерації
// });

// ? Метод map()

// * Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив, який і буде результатом виконання методу.

// array.map((element, index, array) => {
//   // Тіло колбек-функції
// });

/*
    -Поелементо перебирає оригінальний масив.
    -Не змінює оригінальний масив.
    -Результат роботи колбек-функції записується у новий масив.
    -Повертає новий масив однакової довжини.
*/

// * Його можна використовувати для того, щоб змінити кожен елемент масиву. Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію.

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

// // Оригінальний масив не змінився
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']

// * Використання анонімних стрілочних функцій з неявним поверненням суттєво скорочує «шум» оголошення колбек-функції, що робить код чистішим і простішим для сприйняття.

// * Масив об'єктів
// * Ми вже знаємо, що повсякденне завдання - це маніпуляція масивом об'єктів. Наприклад, отримати масив значень властивості з усіх об'єктів. У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
// const names = students.map(student => student.name);
// console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']

// * Використовуючи метод map(), ми можемо перебрати масив об'єктів, і в колбек-функції повернути значення властивості кожного з них.

// ? Метод flatMap()
// * Метод flatMap(callback) - аналогічний методу map(), але застосовується у випадках, коли результат - це багатовимірний масив, який необхідно «розгладити».

// array.flatMap((element, index, array) => {
//   // Тіло колбек-функції
// });

// * У масиві students зберігається список студентів зі списком предметів, які відвідує студент, у властивості courses. Кілька студентів можуть відвідувати один і той самий предмет. Необхідно скласти список всіх предметів, які відвідує ця група студентів, поки що, навіть повторюваних.

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// students.map(student => student.courses);
// // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

// students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// * Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив. Відмінність від map() у тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці (одна вкладеність). Цей розгладжений масив і є результатом роботи flatMap().

// ? Метод filter()
// * Метод filter(callback) використовується для єдиної операції - фільтрації масиву, тобто, коли необхідно вибрати більше одного елемента з колекції за певним критерієм.

// array.filter((element, index, array) => {
//   // Тіло колбек-функції
// });

/*
    -Не змінює оригінальний масив.
    -Поелементо перебирає оригінальний масив.
    -Повертає новий масив.
    -Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
    -Якщо колбек повернув true, елемент додається у масив, що повертається.
    -Якщо колбек повернув false, елемент не додається у масив, що повертається.
    -Якщо жоден елемент не задовольнив умову, повертає порожній масив.
*/

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригінальний масив не змінився
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// * Тобто метод filter викликає колбек-функцію для кожного елемента вихідного масиву і, якщо результат її виконання - true, додає поточний елемент у новий масив.

// ? Фільтрація унікальних елементів
// * Використовуючи метод filter(), можна виконати фільтрацію масиву таким чином, що у ньому залишаться тільки унікальні елементи. Цей прийом працює тільки з масивом примітивних значень - не об'єктів.
// * Повернемося до групи студентів і масиву усіх відвідуваних предметів, які ми отримали методом flatMap().

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// * У змінній allCourses зберігається масив усіх відвідуваних предметів, які можуть повторюватися. Завдання полягає у тому, щоб створити новий масив, в якому будуть тільки унікальні предмети, тобто без повторень.

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// * Використовуючи array.indexOf(course), виконуємо пошук першого збігу поточного елемента course і отримуємо його індекс в оригінальному масиві усіх курсів. В параметрі index зберігається індекс поточного елемента course, перебираючи масив методом filter.
// * Якщо результат indexOf() і значення index рівні - це унікальний елемент, тому що таке значення зустрічається в масиві вперше, і на поточній ітерації фільтр обробляє саме його.

// # Масив усіх курсів
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// * Для елемента 'математика' під індексом 0:
/*
    -indexOf() поверне 0, тому що шукає перший збіг.
    -Значення параметра index буде 0.
    -Вони рівні, а отже, це унікальний елемент.
*/
// * Для елемента 'математика' під індексом 3:
/*
    -indexOf() поверне 0, тому що шукає перший збіг.
    -Значення параметра index буде 3.
    -Вони не рівні, а отже, це повторюваний - не унікальний елемент.
*/

// * Масив об'єктів
// * Під час роботи з масивом об'єктів виконується фільтрація за значенням певної властивості. У підсумку, утворюється новий масив відфільтрованих об'єктів.
// * Наприклад, у нас є масив студентів з балами за тест. Необхідно відфільтрувати кращих (бал вище 80), гірших (бал нижче 50) і середніх студентів (бал від 50 до 80).

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

// ? Метод find()
// * Якщо метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову, то метод find(callback) дозволяє знайти і повернути перший відповідний елемент, після чого перебирання масиву припиняється. Тобто він шукає до першого збігу.

// array.find((element, index, array) => {
//   // Тіло колбек-функції
// });

/*
    -Не змінює оригінальний масив.
    -Поелементо перебирає оригінальний масив.
    -Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
    -Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, -метод повертає undefined.
*/

// * Метод find() використовується для одного завдання - пошуку елемента за унікальним значенням властивості. Наприклад, пошук користувача за поштою, автомобіля - за серійним номером, книги - за назвою тощо.

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find(option => option.label === "white"); // undefined

// ? Метод findIndex()
// * Метод findIndex(callback) - це сучасна заміна методу indexOf(). Дозволяє виконувати пошук за складнішими умовами, ніж просто рівність. Використовується як для пошуку у масиві примітивів, так і в масиві об'єктів.

// array.findIndex((element, index, array) => {
//   // Тіло колбек-функції
// });

/*
    -Не змінює оригінальний масив.
    -Поелементо перебирає оригінальний масив.
    -Повертає індекс першого елемента, що задовольняє умову, тобто, коли колбек повертає true.
    -Якщо жоден елемент не задовольняє умову, тобто для всіх елементів колбек повернув false, -метод повертає -1.
*/

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.findIndex(option => option.label === "blue"); // 2
// colorPickerOptions.findIndex(option => option.label === "pink"); // 3
// colorPickerOptions.findIndex(option => option.label === "white"); // -1

// ! Методи every() і some()
// ? Метод every()
// * Перевіряє, чи проходять всі елементи масиву тест колбек-функції. Повертає true або false.

// array.every((element, index, array) => {
//   // Тіло колбек-функції
// });

/*
    -Не змінює оригінальний масив.
    -Поелементо перебирає оригінальний масив.
    -Повертає true, якщо всі елементи масиву задовольняють умову.
    -Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
    -Перебирання масиву припиняється, якщо колбек повертає false.
*/

// // Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every(value => value >= 0); // true

// // Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

// * Метод some()
// * Перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.

// array.some((element, index, array) => {
//   // Тіло колбек-функції
// });

/*
    -Не змінює оригінальний масив.
    -Поелементо перебирає оригінальний масив.
    -Повертає true, якщо хоча б один елемент масиву задовольняє умову.
    -Повертає false, якщо жоден елемент масиву не задовольняє умову.
    -Перебирання масиву припиняється, якщо колбек повертає true.
*/

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Чи є хоча б один елемент, що менший нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// * Масив об'єктів
// * Під час роботи з масивом об'єктів перевіряється значення певної їх властивості. Наприклад, у нас є масив об'єктів фруктів, необхідно дізнатися, чи є фрукти в наявності та чи є в наявності хоча б якісь фрукти, тобто більше 0 штук.

// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// // every поверне true тільки, якщо усіх фруктів буде більше 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// // some поверне true, якщо хоча б одного фрукту буде більше 0 штук
// const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true

// ? Метод reduce()
// * Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату, як акумулятор. Трохи складніший за інші методи для засвоєння, але результат вартий того.

// array.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);

/*
    -Не змінює оригінальний масив.
    -Поелементо перебирає оригінальний масив.
    -Повертає все, що завгодно.
    -Робить все, що завгодно.
*/

// * Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);
// console.log(total); // 32

// * Перший параметр колбек-функції (previousValue) - це акумулятор, тобто проміжний результат. Значення, яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра на наступній ітерації.
// * Другим аргументом для reduce() можна передати необов'язкове початкове значення акумулятора - параметр initialValue.

/*
# Спочатку метод reduce() створює внутрішню змінну-акумулятор і
# присвоює їй значення параметра initialValue або першого елемента
# масиву, що перебирається, якщо initialValue не задане.
previousValue = 0
*/
/*
# Потім колбек-функція викликається для кожного елемента масиву. Поточне значення
# параметра previousValue - це те, що повернула колбек-функція на минулій ітерації.
Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32
*/

// * # Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
// * Результат - 32
// * Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до «одного». У повсякденних завданнях його застосування зводиться до роботи з числами.

// * Масив об'єктів
// * Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості. Наприклад, у нас є масив студентів з балами за тест. Необхідно отримати середній бал.

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
// const averageScore = totalScore / students.length;

// ? Просунутий reduce
// * Припустимо у нас є наступна задача: з масиву постів твіттера окремого користувача необхідно порахувати суму усіх лайків. Можна перебрати циклом for або forEach, кожне з цих рішень вимагатиме написання додаткового коду. А можна використовувати reduce.

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості likes
// // до акумулятора, початкове значення якого вкажемо 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes); // 32
// // Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
// // для підрахунку лайків з колекції
// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };
// console.log(countLikes(tweets)); // 32

// * Помітили властивість tags у кожного поста? Продовжуючи тему reduce, ми зберемо в масив усі теги, які зустрічаються в постах.

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості tags
// // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//   return allTags;
// }, []);
// console.log(tags);
// // Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// // для збирання тегів з колекції
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
//   }, []);
// console.log(getTags(tweets));

// * Після того, як ми зібрали всі теги з постів, добре б було порахувати кількість унікальних тегів в масиві. І знову reduce стане в пригоді.

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
//   }, []);
// const tags = getTags(tweets);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.
// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }
//   acc[tag] += 1;
//   return acc;
// };
// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});
// const tagCount = countTags(tags);
// console.log(tagCount);

// ? Метод sort()
// * Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.

/*
    -Сортує і змінює вихідний масив.
    -Повертає змінений масив, тобто посилання на відсортований вихідний.
    -За замовчуванням сортує за зростанням.
    -Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових -номерів у таблиці Unicode.
*/

// * Такий масив чисел буде відсортований за зростанням.

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// * Але, оскільки за замовчуванням значення приводяться до рядка, стандартне сортування чисел працює незвично. Тому, у наступній вправі ми розглянемо як задавати свій порядок сортування.

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

// * Масив рядків сортується за алфавітом.

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]

// * Водночас порядковий номер великих літер менший, ніж у малих.

// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// * Через те, що сортується вихідний масив, порушується принцип чистоти функцій і не можна зручно створити декілька похідних колекцій на основі вихідної. Наприклад, створити колекцію, відсортовану за зростанням, а іншу - за спаданням. Тому перед сортуванням роблять повну копію вихідного масиву і сортують вже її.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();
// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// ? Свій порядок сортування чисел
// * Для зазначення свого порядку сортування методу sort(compareFunction) потрібно передати колбек-функцію з двома параметрами. Це функція порівняння (compare function), порядок сортування залежить від її результату. Метод sort() буде викликати її для двох довільних елементів.

// массив.sort((a, b) => {
//   // Тіло колбек-функції
// });

/*
    a - перший елемент для порівняння.
    b - другий елемент для порівняння.
*/

// * Якщо виклик compareFunction(a, b) повертає будь-яке від'ємне значення, тобто a менше b, сортування поставить a перед b. Це сортування за зростанням.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// * Якщо виклик compareFunction(a, b) повертає будь-яке додатне значення більше нуля, тобто b більше a, сортування поставить b перед a. Це сортування за спаданням.

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// * Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними по відношенню один до одного, але відсортує їх по відношенню до всіх інших елементів. Але взагалі неважливо, що повертати, якщо їх взаємний порядок не має значення.

// ? Свій порядок сортування рядків
// * Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().

// firstString.localeCompare(secondString)

// * Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).

// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0

/*
    Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
    Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
    Якщо рядки однакові, повертається нуль.
*/

// * Це зручно використовувати для сортування рядків, оскільки метод sort() очікує такі самі значення від колбек-функції.

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']
// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

// * Сортування об'єктів
// * Під час роботи з масивом об'єктів, сортування виконується за числовим або рядковим значенням певної властивості. Наприклад, у нас є група студентів з балами за тест. Необхідно відсортувати масив об'єктів за зростанням і спаданням кількості балів, і за ім'ям студента.

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];
// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// ? Ланцюжки методів
// * У нас є масив об'єктів з іменами, балами і відвідуваними предметами кожного студента.

// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//   { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//   { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
// ];

// * Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест. З цією метою ми відсортуємо копію масиву методом sort(), після чого методом map() створимо масив значень властивості name з відсортованого масиву.

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);
// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

// * Проблема в тому, що у нас з'являються проміжні змінні після кожної операції, крім фінальної. Змінна sortedByAscendingScore - зайва і необхідна тільки для зберігання проміжного результату.
// * Позбутися таких «мертвих» змінних можна за допомогою групування викликів методів у ланцюжку. Кожний наступний метод буде виконуватися на основі результату роботи попереднього.

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);
// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

/*
    -Робимо копію вихідного масиву перед сортуванням.
    -На копії викликаємо метод sort().
    -До результату роботи методу sort() застосовуємо метод map().
    -Змінній names присвоюється результат роботи методу map().
*/

// * Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));
// console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']

/*
    -На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів.
    -До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних -елементів.
    -На результаті методу filter() викликаємо sort().
    -Змінній uniqueSortedCourses присвоюється результат роботи методу sort().
*/

// * Ланцюжок методів може бути довільної довжини, але, зазвичай, не більше 2-3 операцій. По-перше, перебираючі методи використовуються для порівняно простих операцій над колекцією. По-друге, виклик кожного наступного методу - це додаткове перебирання масиву, що за великої кількості, може позначитися на продуктивності.

// ! practical tasks
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// function makeMessage(pizzaName, callback) {
//     console.log(callback(pizzaName));
//     return callback(pizzaName);
// }
// makeMessage('Royal Grand', makePizza);
// makeMessage('Ultracheese', deliverPizza);

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });
// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`)
// });

// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//         if (!this.pizzas.includes(pizzaName)) {
//             console.log(onError(pizzaName));
//             return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//         }
//         console.log(onSuccess(pizzaName));
//         return onSuccess(pizzaName);
//   },
// };
// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// // Callback for onError
// function onOrderError(error) {
//     return `Error! ${error}`;
// }
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     orderedItems.forEach((number) => {
//         totalPrice += number;
//     });
//     console.log(totalPrice);
//     return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     numbers.forEach(element => {
//         if (element > value) {
//             filteredNumbers.push(element);
//         }
//     });
//     console.log(filteredNumbers);
//     return filteredNumbers;
// };
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
// //   for (let i = 0; i < firstArray.length; i += 1) {
// //     if (secondArray.includes(firstArray[i])) {
// //       commonElements.push(firstArray[i]);
// //     }
// //   }
//     firstArray.forEach(function (element) {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });
//     console.log(commonElements);
//     return commonElements;
// };
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
//     orderedItems.forEach((item) => {
//         totalPrice += item;
//     });
//     console.log(totalPrice);
//     return totalPrice;
// };
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });
//     console.log(filteredNumbers);
//     return filteredNumbers;
// };
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });
//     console.log(commonElements);
//     return commonElements;
// };
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// function changeEven (numbers, value) {
//     const newResultArray = [];
//     numbers.forEach(element => {
//         if (element % 2 === 0) {
//             newResultArray.push(element + value);
//         } else {
//             newResultArray.push(element);
//         }
//     });
//     console.log(newResultArray);
//     return newResultArray;
// };
// changeEven([1, 2, 3, 4, 5], 10);
// changeEven([2, 8, 3, 7, 4, 6], 10);
// changeEven([17, 24, 68, 31, 42], 100);
// changeEven([44, 13, 81, 92, 36, 54], 100);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const titles = books.map(bookElament => bookElament.title);
// console.log(titles);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter((genre, index, allGenres) => allGenres.indexOf(genre) === index);
// console.log(uniqueGenres);

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ];

// const getUsersWithEyeColor = (users, color) => {
//     const userEyesColors = users.filter(user => user.eyeColor === color)
//     console.log(userEyesColors);
//     return userEyesColors;
// };

// const getUsersWithAge = (users, minAge, maxAge) => {
//     const averAge = users.filter(({age}) => age >= minAge && age <= maxAge)
//     return averAge;
// };

// const getFriends = users => {
//     const friendsAllUsers = users.flatMap(user => user.friends)
//     const filteredFriends = friendsAllUsers.filter((friend, i, array) => friendsAllUsers.indexOf(friend) === i);
//     return filteredFriends;
// };

// const getActiveUsers = (users) =>
//     users.filter(user => user.isActive === true);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// const getUserWithEmail = (users, email) => {
//     return userWithThisEmail = users.find((user) => user.email === email);
// };

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(number => number % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(number => number % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 !== 0);

// const isEveryUserActive = (users) => {
//     const allUsers = users.every(user => user.isActive === true)
//     return allUsers;
// };

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(number => number % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(number => number % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 !== 0);

// const isAnyUserActive = users => {
//     const returnActiveUsers = users.some(user => user.isActive === true);
//     return returnActiveUsers;
// };

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// const totalPlayTime = playtimes.reduce((player, time) => {
//     return player + time
// });
// const averagePlayTime = totalPlayTime / playtimes.length;

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((firstValue, time) => {
//     const allPlayTime = time.playtime / time.gamesPlayed;
//     console.log(allPlayTime);
//     return firstValue + allPlayTime;
// }, 0);

// const calculateTotalBalance = (users) => users.reduce((totalValue, user) => {
//     return totalValue + user.balance}, 0);

// const getTotalFriendCount = (users) => users.reduce((totalFriendscount, user) =>
//     totalFriendscount + user.friends.length
// , 0);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(ascendingReleaseDates);
// const alphabeticalAuthors = [...authors].sort();
// console.log(alphabeticalAuthors);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// console.log(ascendingReleaseDates);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(descendingReleaseDates);

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(authorsInAlphabetOrder);
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInReversedOrder);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
// console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
// console.log(sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.log(sortedByAscendingRating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(sortedByDescentingRating);

// const sortByAscendingBalance = users => {
//     const sortedUsers = [...users].sort((a, b) => a.balance - b.balance);
//     return sortedUsers;
// };

// const sortByDescendingFriendCount = users => {
//     const sortedByCount = [...users].sort((a, b) => b.friends.length - a.friends.length);
//     return sortedByCount;
// };

// const sortByName = users => {
//     const sortedByName = [...users].sort((a, b) => a.name.localeCompare(b.name));
//     return sortedByName;
// };

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// const names = [...books]
//     .filter(user => user.rating > MIN_BOOK_RATING)
//     .map(user => user.author)
//     .sort((a, b) => a.localeCompare(b))
//     console.log(names);
//     return names;

// const getNamesSortedByFriendCount = users => {
//   const sortedByFriends = [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);
//   console.log(sortedByFriends);
//   return sortedByFriends;
// };

// const getSortedFriends = users => {
//     const uniqueFriends = [...users]
//         .flatMap(user => user.friends)
//         .filter((value, index, arr) => arr.indexOf(value) === index)
//         .sort((a, b) => a.localeCompare(b))
//     console.log(uniqueFriends);
//     return uniqueFriends;
// };

// const getTotalBalanceByGender = (users, gender) => {
//     const balanceOrientedByGender = [...users]
//         .filter(({ gender: selectYourGender }) => selectYourGender === gender)
//         .reduce((total, { balance }) => {
//             return total + balance
//         }, 0)
//     console.log(balanceOrientedByGender);
//     return balanceOrientedByGender;
// };

// ! Контекст виконання функції
// * Можна з упевненістю сказати, що ключове слово this - це одна з найзаплутаніших концепцій JavaScript на старті навчання. Новачки часто підставляють this методом наукового тику доти, доки скрипт не спрацює.
// * Контекст у JavaScript схожий на контекст у реченні:

/*
    Петя біжить швидко, тому що Петя намагається зловити поїзд.
    Петя біжить швидко, тому що він намагається зловити поїзд.
*/

// * Друге речення звучить лаконічніше. Підмет речення - Петя, і ми можемо сказати, що контекст речення - це Петя, тому що він у центрі уваги у цей конкретний час у реченні. Навіть займенник «хто» стосується Петі.
// * І точно так само об'єкт може бути поточним контекстом виконання функції.
// Петя біжить швидко, тому що Петя намагається зловити поїзд.
// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(petya.username);
//   },
// };
// petya.showName();

// * Звернення до властивостей об'єкта всередині методів, використовуючи ім'я самого об'єкта, - аналогічно використанню Петя, замість він.
// * Всередині функцій можна використовувати зарезервоване ключове слово this. Під час виконання функції, в this записується посилання на об'єкт, в контексті якого вона була викликана. Таким чином, в тілі функції ми можемо отримати доступ до властивостей і методів цього об'єкта.
// Петя біжить швидко, тому що він (this) намагається зловити поїзд.
// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(this.username);
//   },
// };
// petya.showName();

// * Розглянемо приклад з колекцією книг.

// const bookShelf = {
//   authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };
// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
// bookShelf.addAuthor("Лі Таніт");
// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]

// * Методи getAuthors і addAuthor - це функції (методи об'єкта), які викликаються в контексті об'єкта bookShelf. Під час їх виконання в this записується посилання на об'єкт bookShelf і ми можемо звернутися до його властивостей і методів.

// ? Правила визначення this
// * Необхідно засвоїти лише одне правило для визначення this - значення контексту всередині функції (не стрілочної) визначається не на момент її створення, а на момент виклику. Тобто значення this визначається тим, як викликається функція, а не де вона була оголошена.

// ? this у глобальній області видимості
// * У глобальній області видимості, якщо скрипт виконується не в суворому режимі, this посилається на об'єкт window. В суворому режимі значення this, в глобальній області видимості, буде undefined.

// function foo() {
//   console.log(this);
// }
// foo(); // window без "use strict" і undefined з "use strict"

// ? this в методі об'єкта
// * Якщо функція була викликана як метод об'єкта, то контекст буде посилатися на об'єкт, частиною якого є метод.

// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };
// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

// *Розглянемо складніший приклад для кращого розуміння.

/*
    Спочатку створимо функцію в глобальній області видимості і викличемо її.
    Після чого, присвоїмо її у властивість об'єкта і викличемо як метод цього об'єкта.
*/

// function showThis() {
//   console.log("this in showThis: ", this);
// }
// Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window

// const user = {
//   username: "Mango",
// };

// Записуємо посилання на функцію у властивість об'єкта
// Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// Викликаємо функцію в контексті об'єкта
// this буде вказувати на поточний об'єкт, в контексті
// якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// ? this в callback-функціях
// * Передаючи методи об'єкта як колбек-функції, контекст не зберігається. Колбек - це посилання на метод, яке присвоюється як значення параметра, що викликається без об'єкта.

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }
// makeMessage(customer.getFullName); // Буде помилка у виклику функції
// ? Цікаво
// * Вирішення цієї проблеми розглядається у секції про метод bind() і методи об'єкта.

// ? this у стрілочних функціях
// * Стрілочні функції не мають свого this. На відміну від звичайних функцій, змінити значення this всередині стрілки після її оголошення - неможливо.

// ? Цікаво
// * Контекст всередині стрілки визначається місцем її оголошення, а не виклику, і посилається на контекст батьківської функції.
// * Стрілочні функції також ігнорують наявність суворого режиму. Якщо стрілка запам'ятала глобальний контекст, то this в ній буде містити посилання на window, незалежно від того, чи виконується скрипт в суворому режимі.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// const user = {
//   username: "Mango",
// };
// user.showContext = showThis;
// user.showContext(); // this in showThis: window

// * Обмежуючи стрілочні функції постійним контекстом, JavaScript-рушії можуть краще їх оптимізувати, на відміну від звичайних функцій, значення this яких може бути змінено.
// * Приклад - непрактичний, але чудово показує як працює контекст для стрілок. Значення контексту береться з батьківської області видимості.

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрілки запам'ятовують контекст під час оголошення
//       // з батьківської області видимості
//       console.log("this in foo: ", this);
//     };
//     foo();
//     console.log("this in showThis: ", this);
//   },
// };
// hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}

// ! Методи функцій
// * Трапляються ситуації, коли функцію потрібно викликати в контексті об'єкта, при цьому функція не є його методом. Для цього у функцій є методи call, apply і bind.

// ?Метод call()
// * foo.call(obj, arg1, arg2, ...)
// * Метод call викличе функцію foo таким чином, що в this буде посилання на об'єкт obj, а також передасть аргументи arg1, arg2 тощо.

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }
// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };
// greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
// greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

// ? Метод apply
// * Метод apply - це аналог методу call за винятком того, що синтаксис передачі аргументів вимагає не перерахування, а масив, навіть якщо аргумент всього один.
// * foo.call(obj, arg1, arg2, ...)
// * foo.apply(obj, [arg1, arg2, ...])
// * Метод apply викличе функцію foo таким чином, що в this буде посилання на об'єкт obj, а також передасть елементи масиву як окремі аргументи arg1, arg2 тощо.

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }
// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };
// greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
// greetGuest.apply(poly, ["З прибуттям"]); // З прибуттям, Полі.

// ? Метод bind()
// * Методи call і apply викликають функцію «на місці», тобто відразу. Але у разі колбек-функцій, коли необхідно не відразу викликати функцію, а передати посилання на неї, причому з прив'язаним контекстом, використовується метод bind.
// * foo.bind(obj, arg1, arg2, ...)
// * Метод bind створює і повертає копію функції foo з прив'язаним контекстом obj і аргументами arg1, arg2 тощо. Утворюється копія функції, яку можна передати куди завгодно і викликати коли завгодно.

// function greet(clientName) {
//   return `${clientName}, ласкаво просимо в «${this.service}».`;
// }
// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."

// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."

// ? bind() і методи об'єкта
// * У разі передачі методів об'єкта як колбек-функцій, контекст не зберігається. Колбек - це посилання на метод, яка присвоюється як значення параметра, що викликається без об'єкта.

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }
// makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції

// * У суворому режимі, значення this в методі getFullName, викликаючи як колбек-функції callback(), буде undefined. Звертаючись до властивостей firstName і lastName, виникне помилка, оскільки undefined - це не об'єкт.
// * Метод bind використовується для прив'язування контексту, передаючи методи об'єкта як колбек-функції. Передамо колбеком не оригінальний метод getFullName, а його копію з прив'язаним контекстом об'єкту customer.
// ❌ Було
// makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції

// ✅ Стало
// makeMessage(customer.getFullName.bind(customer)); // Обробляємо заявку від Jacob Mercer.

// ! Об'єктно-орієнтоване програмування
// ? Процедурне програмування - набір не пов'язаних явно функцій і змінних для зберігання і обробки інформації. Цей підхід - простий і прямолінійний, і може використовуватись для задач, в яких немає тісно пов'язаних сутностей (даних і функцій для їх обробки).
// Розглянемо приклад процедурного коду, в якому є змінні і функція для підрахунку результату.

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;
// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };
// getWage(baseSalary, overtime, rate);

// ? Об'єктно-орієнтоване програмування (ООП) - методологія, яка описує програму як сукупність об'єктів, кожен з яких містить дані (властивості) і методи для взаємодії з ними.
// * Використовуємо ООП, зібравши дані в об'єкт employee.

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };
// console.log(employee.getWage());
// employee.getWage(); // 30200

// * За такого підходу у методі відсутні параметри, використовуються властивості об'єкта, які задаються на момент створення об'єкта і можуть так само змінюватися іншими методами. На виході отримуємо сутність з простим інтерфейсом, що зменшує складність програми.

// ? Цікаво
// * З ідеологічної точки зору, ООП - це підхід до програмування як до моделювання, що вирішує основне завдання - структурування інформації з точки зору керованості, що суттєво покращує контроль процесу моделювання.

// ? Сутності ООП
// * Уявіть собі, що ми проектуємо автомобіль. У нього буде двигун, чотири колеса, бензобак тощо. Автомобіль повинен мати можливість заводитися, збільшувати і зменшувати швидкість. Ми знаємо як взаємодіє двигун і колеса, тобто за якими законами взаємодіють різні частини машини.

// ! Клас
// * Ми описуємо всі запчастини, з яких складається автомобіль, тоді яким чином ці запчастини взаємодіють між собою і що повинен зробити водій, щоб автомобіль загальмував, увімкнулися фари тощо. Результатом нашої роботи буде певний ескіз (шаблон, схема). Ми тільки що розробили те, що в ООП називається класом.

// ? Клас - спосіб опису сутності, що визначає стан і поведінку, яка залежить від цього стану, а також правила для взаємодії з цією сутністю (контракт).
// * У нашому випадку, клас визначає сутність - автомобіль. Властивостями класу будуть двигун, колеса, фари тощо. Методами класу будуть дії: відкрити двері, завести двигун, збільшити швидкість тощо.

// ? Екземпляр
// * Ми спроектували креслення, та автомобілі, розроблені на підставі них, сходять з конвеєру. Кожен з них точно повторює креслення, усі системи взаємодіють саме так, як ми спроектували, але кожний автомобіль - унікальний. Вони всі мають номер кузова і двигуна, але всі номери різні, автомобілі розрізняються за кольором, оздобленням салону. Ці автомобілі - це екземпляри класу.
// * Екземпляр (об'єкт) - це окремий представник класу, який має конкретний стан і поведінку, що повністю визначається класом. Це те, що створено за кресленням, тобто на підставі опису з класу.
// * Простіше кажучи, об'єкт має конкретні значення властивостей і методи, що працюють з цими властивостями на основі правил, заданих в класі. У цьому прикладі, якщо клас - це якийсь абстрактний автомобіль на кресленні, то об'єкт - це конкретний автомобіль, що стоїть у нас під вікнами.

// ? Інтерфейс
// * Коли ми підходимо до автомата з кавою або сідаємо за кермо автомобіля, існує певний набір елементів управління, з якими ми можемо взаємодіяти.
// * Інтерфейс - це набір властивостей і методів класу, доступних для використання у роботі з екземпляром.
// * По суті, інтерфейс описує клас, чітко визначаючи усі можливі дії над ним. Хороший приклад інтерфейсу - панель приладів автомобіля, яка дозволяє викликати методи як-от збільшення швидкості, гальмування, повертання, перемикання передач, увімкнення фар тощо.
// * Описуючи інтерфейс класу, дуже важливо витримати баланс між гнучкістю і простотою. Клас з простим інтерфейсом буде легко використовувати, але будуть існувати завдання, які, за допомогою нього, буде складно вирішити.
// * Якщо інтерфейс буде гнучким, то, найімовірніше, він буде містити досить складні методи з великою кількістю параметрів, які будуть дозволяти робити дуже багато, але його використання буде пов'язане з великими труднощами і ризиком помилитися, переплутавши щось.

// ! Прототипне наслідування
// * ООП в JavaScript побудовано на прототипному наслідуванні. Об'єкти можна організувати у ланцюжки таким чином, щоб здійснювався автоматичний пошук властивості в іншому об'єкті, не знайденої в одному об'єкті. Сполучною ланкою виступає спеціальна прихована властивість [[Prototype]], яка в консолі браузера відображається як __proto__.

// ? Прототип об'єкта
// * Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj.

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";
// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

// * Об'єкт, на який вказує посилання в __proto__, називається прототипом. У нашому прикладі об'єкт animal - це прототип для об'єкта dog. Метод isPrototypeOf() перевіряє, чи є об'єкт animal прототипом для dog і чи повертає true або false.

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4

// * Звернення dog.name працює очевидним чином - повертає власну властивість name об'єкта dog. Звертаючись до dog.legs, інтерпретатор шукає властивість legs в об'єкті dog, не знаходить і продовжує пошук в об'єкті за посиланням з dog.__ proto__, тобто, у цьому випадку, в об'єкті animal - його прототипі.
// * Тобто прототип - це резервне сховище властивостей і методів об'єкта, автоматично використовується під час їх пошуку. Об'єкт, який виступає прототипом, може також мати свій прототип, наступний - свій, і так далі.
// * Пошук властивості виконується до першого збігу. Інтерпретатор шукає властивість за ім'ям в об'єкті, якщо не знаходить, то звертається до властивості __proto__, тобто переходить за посиланням до об'єкта-прототипу, а потім - до прототипу прототипу. Якщо інтерпретатор дійде до кінця ланцюжка і не знайде властивості з таким ім'ям, то поверне undefined.

// ? Цікаво
// * У специфікації властивість __proto__ позначена як [[Prototype]]. У цьому випадку важливі подвійні квадратні дужки, вони вказують на те, що це внутрішня, службова властивість.

// ? Метод hasOwnProperty()
// * Після того як ми дізналися про спосіб пошуку властивостей об'єкта, повинно бути зрозуміло, чому цикл for...in не розрізняє властивості об'єкта і його прототипу.

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;
// for (const key in dog) {
//   console.log(key); // barks, eats
// }

// * Саме тому ми використовуємо метод obj.hasOwnProperty(prop), який повертає true, якщо властивість prop належить об'єкту obj, а не його прототипу, інакше - false.

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;
// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;
//   console.log(key); // barks
// }

// * Метод Object.keys(obj) поверне масив тільки власних ключів об'єкта obj, тому, на практиці використовують саме його, а не for...in.

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;
// const dogKeys = Object.keys(dog);
// console.log(dogKeys); // ['barks']

// ! Класи
// *Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте, часто потрібно створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями і методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи - спеціальний синтаксис оголошення функції для створення об'єктів.

// ? Оголошення класу
// *Оголошення класу починається з ключового слова class, після якого стоїть ім'я класу і фігурні дужки - його тіло. Класи прийнято називати з великої літери, а у назві відображати тип об'єкта (іменника), що створюється.

// class User {
//   // Тіло класу
// }
// const mango = new User();
// console.log(mango); // {}
// const poly = new User();
// console.log(poly); // {}

// Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

// ? Цікаво
// * Метод побудови класу залежить від того, що вам потрібно. У нашому випадку, клас - це користувач, тому ми додамо в нього поля для імені та пошти.

// ? Конструктор класу
// * Для ініціалізації екземпляра в класі є метод constructor. Якщо він неоголошений, створюється конструктор за замовчуванням - порожня функція, яка не змінює екземпляр.

// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User("Манго", "mango@mail.com");
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }
// const poly = new User("Поли", "poly@mail.com");
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

// * Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.
// * Властивості name та email називаються публічними властивостями, тому що вони будуть власними властивостями об'єкта-екземпляра і до них можна буде отримати доступ, звернувшись через крапку.

// ? Об'єкт параметрів
// * Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта. Тому, до них також можна застосувати патерн «Об'єкт параметрів», передаючи один об'єкт з логічно іменованими властивостями, замість непов'язаного набору аргументів.

// class User {
//   // Деструктуризуємо об'єкт
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Манго", email: "mango@mail.com" }
// const poly = new User({
//   name: "Поли",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Поли", email: "poly@mail.com" }

// ? Методи класу
// * Для роботи з властивостями майбутнього екземпляра використовуються методи класу - функції, які будуть доступні екземпляру в його прототипі.

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }
//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// ? Приватні властивості
// * Інкапсуляція - це концепція, що дозволяє приховати внутрішні деталі класу. Користувач класу повинен отримувати доступ тільки до публічного інтерфейсу - набору публічних властивостей і методів класу.
// * В класах інкапсуляція реалізується приватними властивостями, доступ до яких можна отримати тільки всередині класу.
// * Припустимо, що пошта користувача повинна бути недоступною для прямої зміни зовні, тобто - приватною. Додаючи до імені властивості символ #, ми робимо її приватною. Оголошення приватної властивості до ініціалізації в конструкторі - обов'язкове.

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;
//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }
//   getEmail() {
//     return this.#email;
//   }
//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Виникне помилка, це приватна властивість

// * Методи класу також можуть бути приватними, тобто доступні тільки у тілі класу. Для цього, перед їхнім ім'ям необхідно поставити символ #.

// ? Геттери і сеттери
// * Геттери і сеттери - це коротший синтаксис оголошення методів для взаємодії з властивостями. Геттер і сеттер імітують звичайну публічну властивість класу, але дозволяють змінювати інші властивості зручнішим способом. Геттер виконується при спробі отримати значення властивості, а сеттер - при спробі його змінити.
// * Геттери і сеттери доречно використовувати для простих операцій читання і зміни значення властивостей, особливо приватних, як їх публічний інтерфейс. Для роботи з властивістю, яка зберігає масив або об'єкт, вони не підійдуть.

// class User {
//   #email;
//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }
//   // Геттер email
//   get email() {
//     return this.#email;
//   }
//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// * Ми оголосили геттер і сеттер email, поставивши перед ім'ям властивості ключові слова get і set. Всередині цих методів ми або повертаємо значення приватної властивості #email, або змінюємо її значення. Геттер і сеттер застосовуються в парі і повинні називатися однаково.

// const mango = new User({ name: "Манго", email: "mango@mail.com" });
// console.log(mango.email); // mango@mail.com
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com

// * Звертаючись до mango.email, викликається геттер get email() {...} і виконується його код. При спробі запису mango.email = "mango@supermail.com" викликається сеттер set email(newEmail) {...} і рядок "mango@supermail.com" буде значенням параметра newEmail.
// * Перевага в тому, що це методи, а значить, під час запису можна виконати додатковий код, наприклад, з будь-якими перевірками, на відміну від виконання цієї ж операції безпосередньо з властивістю.

// set email(newEmail) {
//   if(newEmail === "") {
//     console.error("Помилка! Пошта не може бути порожнім рядком!");
//     return;
//   }

//   this.#email = newEmail;
// }

// ? Статичні властивості
// * Крім публічних і приватних властивостей майбутнього екземпляра, в класі можна оголосити його власні властивості, доступні тільки класові, але не його екземплярам - статичні властивості (static). Вони корисні для зберігання інформації, що стосується класу.
// * Додамо класу користувача приватну властивість role - його роль, що визначає набір прав, наприклад, адміністратор, редактор, звичайний користувач тощо. Можливі ролі користувачів будемо зберігати як статичну властивість Roles - об'єкт з властивостями.
// * Статичні властивості оголошуються в тілі класу. Перед ім'ям властивості додається ключове слово static.

// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };
//   #email;
//   #role;
//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }
//   get role() {
//     return this.#role;
//   }
//   set role(newRole) {
//     this.#role = newRole;
//   }
// }
// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });
// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }
// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// * Статичні властивості також можуть бути приватними, тобто доступними тільки всередині класу. Для цього ім'я властивості повинно починатися з символу #, так само, як приватні властивості. Звернення до приватної статичної властивості за межами тіла класу викличе помилку.

// ? Статичні методи
// * У класі можна оголосити не тільки методи майбутнього екземпляра, а також методи, доступні тільки класу - статичні методи, які можуть бути як публічні, так і приватні. Синтаксис оголошення аналогічний статичним властивостям, за винятком того, що значенням буде метод.

// class User {
//   static #takenEmails = [];
//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }
//   #email;
//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }
// const mango = new User({ email: "mango@mail.com" });
// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));

// * Особливість статичних методів у тому, що під час їх виклику ключове слово this посилається на сам клас. Це означає, що статичний метод може отримати доступ до статичних властивостей класу, але не до властивостей екземпляра. Логічно, тому що статичні методи викликає сам клас, а не його екземпляри.

// ? Наслідування класів
// * Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості і методи іншого класу (батьківського).

// class Child extends Parent {
//   // ...
// }

// * У виразі class Child extends Parent дочірній клас Child наслідує (розширює) від батьківського класу Parent.

// * Це означає, що ми можемо оголосити базовий клас, який зберігає загальні характеристики і методи для групи похідних класів, які наслідують властивості і методи батьківського, але також додають свої унікальні.
// * Наприклад, у застосунку є користувачі з різними ролями - адміністратор, копірайтер, контент менеджер тощо. У кожного типу користувача є набір загальних характеристик, наприклад, пошта і пароль, але також є й унікальні.
// * Створивши незалежні класи для кожного типу користувача, ми отримаємо дублювання загальних властивостей і методів, і, якщо необхідно змінити, наприклад, назву властивості, доведеться проходити по усіх класах, а це незручно і вимагає багато часу.
// * Замість цього, можна створити загальний клас User, який буде зберігати набір загальних властивостей і методів, після чого, створити класи для кожного типу користувача, які наслідують цей набір від класу User. За потреби змінити щось спільне, достатньо буде змінити тільки код класу User.

// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }
// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// * Клас ContentEditor наслідує від класу User його конструктор, геттер і сеттер email, а також однойменну публічну властивість. Важливо пам'ятати, що приватні властивості і методи батьківського класу не наслідуються дочірнім класом.

// ? Конструктор дочірнього класу
// * Насамперед в конструкторі дочірнього класу необхідно викликати спеціальну функцію super(аргументи) - це псевдонім конструктора батьківського класу. В іншому випадку, при спробі звернутися до this в конструкторі дочірнього класу, виникне помилка. Під час виклику конструктора батьківського класу передаємо необхідні йому аргументи для ініціалізації властивостей.

// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Виклик конструктора батьківського класу User
//     super(email);
//     this.posts = posts;
//   }
// }
// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'

// ? Методи дочірнього класу
// * В дочірньому класі можна оголошувати методи, які будуть доступні тільки його екземплярам.
// * Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }
//   addPost(post) {
//     this.posts.push(post);
//   }
// }
// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']

// ! practical tasks
// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);
//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }
//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
// };
// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
// };

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };
// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;
// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     }
//     getPrice() {
//         return this.price;
//     }
//     changePrice(newPrice) {
//         this.price = newPrice;
//     }
// }

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(newItem) {
//         return this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         return this.items.splice(this.items.indexOf(itemToRemove), 1);
//     }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//       return this.value;
//   }
//   padEnd(str) {
//       this.value = this.value.concat(str);
//   }
//   padStart(str) {
//       this.value = str.concat(this.value);
//   }
//   padBoth(str) {
//       this.value = this.value.concat(str) && str.concat(this.value, str);
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// class Storage {
//     #items
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// class StringBuilder {
//     #value
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Car {
//     #brand;
//     #model;
//     #price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }
//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }
//   get model() {
//     return this.#model;
//   }
//   set model(newModel) {
//     this.#model = newModel;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// class Car {
//     static MAX_PRICE = 50000
//   #price;
//   constructor({ price }) {
//     this.#price = price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//       if (newPrice <= Car.MAX_PRICE) {
//           this.#price = newPrice;
//       }
//       return;
//   }
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000
// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//     static #MAX_PRICE = 50000;
//     static checkPrice(price) {
//         if (price <= this.#MAX_PRICE) {
//             return 'Success! Price is within acceptable limits';
//         }
//         return 'Error! Price exceeds the maximum';
//     }
//     constructor({ price }) {
//         this.price = price;
//     }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
// constructor(email) {
//     this.email = email;
// }
// get email() {
//     return this.email;
// }
// set email(newEmail) {
//     this.email = newEmail;
// }
// }
// class Admin extends User {
//   static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
// }

// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//     constructor({ email, accessLevel }) {
//         super(email);
//         accessLevel = accessLevel
//     }
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// }
// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// ! Об'єктна модель документа
// * Коли ми працюємо з браузером, доступний функціонал складається з декількох модулів, оскільки JavaScript не має інструментів для роботи з браузером.

// ? Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.
// * DOM - це відображення HTML - документа, деревоподібна структура, в якій кожен вузол - це JavaScript - об'єкт з властивостями і методами, що становить частину HTML-документа. Кожен елемент в документі, весь документ в цілому, заголовок, посилання, абзац - це частини DOM цього документа, тому всі вони можуть бути змінені з JavaScript-коду.

// ? Об'єктна модель браузера (Browser Object Model) - незалежний від мови інтерфейс для роботи з вкладкою браузера. Містить набір властивостей і методів, що дозволяють отримати доступ безпосередньо до поточної вкладки і ряду функцій браузера. Містить об'єкт роботи з історією навігації, місцем розташування та багато іншого.

// ? HTML-документ і DOM
// * Згідно з DOM-моделлю, кожен тег утворює окремий елемент-вузол, кожен фрагмент тексту - текстовий елемент. HTML-документ - це ієрархічне дерево, в якому у кожного елемента (крім кореневого) є тільки один батьківський елемент, тобто елемент, всередині якого він розташовується. Це дерево утворюється за рахунок вкладеної структури тегів і текстових елементів.
// * Щоб відобразити HTML-документ, браузер спочатку перетворює його у формат, який він розуміє - DOM. Рушій браузера має спеціальний фрагмент коду - HTML-парсер, який використовується для перетворення HTML в DOM.
// * В HTML вкладеність визначає відносини батько-дитина між елементами. В DOM об'єкти пов'язані у деревоподібній структурі даних, фіксуючи ці відносини.
// * Браузер будує DOM поступово, щойно надходять перші фрагменти коду, він починає парсити HTML, додаючи вузли у деревоподібну структуру.
// * Після того, як DOM-дерево побудовано, у ньому можна знайти елемент за допомогою JavaScript і виконувати з ним певні дії, оскільки кожен елемент має інтерфейс з безліччю властивостей і методів.

// ? DOM-дерево
// * Візуалізуємо дерево HTML-документа, використовуючи сервіс генератора DOM-дерева

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Document title</title>
//   </head>
//   <body>
//     <h1>Page title</h1>
//     <ul>
//       <li><a href="#">Link 1</a></li>
//       <li><a href="#">Link 2</a></li>
//     </ul>
//   </body>
// </html>

// * У цьому дереві виділені два типи вузлів.

/*
    Вузли-елементи (element node) - утворюються тегами, звичайним чином одні елементи вкладені в інші. Структура дерева утворена виключно за рахунок них.
    Текстові вузли (text node) - утворюються текстом всередині елементів. Текстовий вузол містить тільки рядок тексту і не може мати дочірніх елементів, тобто він завжди на найнижчому рівні ієрархії. Пробіли і перенесення рядків - це теж текстові вузли.
*/

// ? Цікаво
// * З цього правила є винятки: пробіли до head ігноруються, а будь-який вміст після body не створює елемент, браузер переносить його в кінець 'body'.

// ! Навігація по DOM
// * DOM надає широкий спектр можливостей для роботи з елементом і його вмістом, але для цього, спочатку потрібно отримати посилання на нього. Доступ до DOM починається з об'єкта document, з нього можна дістатися до будь-яких елементів.

// ? Цікаво
// * document - це частина глобального об'єкта window, який доступний у скрипті, коли він виконується в браузері. Так само як alert, console.log, prompt і багато інших.

// *Елементи DOM-дерева мають ієрархічне відношення один до іншого. Для опису відносин використовуються терміни предок (ancestor), нащадок (descendant), батько (parent), дитина (child) і сусід (sibling).

/*
    Найвищий елемент називається кореневим (root node).
    Кожен елемент, крім кореневого, має тільки одного батьківського.
    У елемента може бути скільки завгодно дітей.
    Сусіди - це елементи зі спільним батьківським елементом.
    Дочірні елементи (діти) - елементи, які знаходяться безпосередньо всередині поточного (перша вкладеність).
    Нащадки - усі елементи, які знаходяться у поточному, разом з їхніми дітьми, дітьми їхніх дітей тощо. Тобто все на зразок дерева.
*/

// ? DOM traversal
// * Для навігації по цій ієрархії елементи мають наступні властивості.

/*
    elem.parentNode - вибере батьківський elem.
    elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
    elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
    elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
    elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
    elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
    elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
    elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
    elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
    elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
    elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).
*/

// ? Цікаво
// * DOM-колекції, як-от childNodes і children - псевдомасиви (NodeList), у них немає більшості методів масиву.

// ! Пошук елементів
// * Отже, ми вже знаємо що DOM-елемент - це об'єкт з властивостями і методами. Саме час навчитися швидко знаходити елемент за довільним CSS-селектором. Група методів elem.querySelector* - це сучасний стандарт для пошуку елементів. Вони дозволяють знайти елемент або групу елементів за CSS-селектором будь-якої складності.

// element.querySelector(selector);

// * Використовується, якщо необхідно знайти тільки один, найчастіше унікальний елемент.

/*
    Повертає перший знайдений елемент всередині element, що відповідає CSS-селектору selector.
    Якщо нічого не знайдено, поверне null.
*/

// element.querySelectorAll(selector);

// * Використовується, якщо необхідно знайти колекцію елементів, тобто отримати масив посилань на елементи з однаковим селектором. Наприклад, всі елементи списку з класом menu-item.

/*
    Повертає псевдомасив всіх елементів всередині element, які відповідають CSS-селектору selector.
    Якщо нічого не знайдено, поверне порожній масив.
*/

// ? Властивості та атрибути
// * Під час побудови DOM-дерева, деякі стандартні HTML-атрибути стають властивостями елементів. Подивимося на декілька властивостей, які часто використовуються.

/*
    value - містить поточний текстовий контент елементів форм.
    checked - зберігає стан чекбокса або радіокнопки.
    name - зберігає значення, вказане в HTML-атрибуті name.
    src - шлях до зображення тегу <img>.
*/

// ? Властивість textContent
// * elem.textContent повертає текстовий контент всередині елемента. Доступний для читання і запису. Неважливо, що буде передано в textContent, дані завжди будуть записані як текст.

// ? Властивість classList
// * У властивості classList зберігається об'єкт з методами для роботи з класами елемента.

/*
    elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
    elem.classList.add(cls) - додає клас cls до списку класів елемента.
    elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
    elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
    elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
*/

// ? Властивість style
// * Використовується для читання та зміни інлайнових стилів. Повертає об'єкт CSSStyleDeclaration, який містить список усіх властивостей, визначених тільки у вбудованих стилях елемента, а не увесь CSS. Під час запису властивості записуються в camelCase, тобто background-color перетворюється на element.style.backgroundColor тощо.

// const button = document.querySelector(".btn");
// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";
// console.log(button.style); // inline styles object

// ? Цікаво
// * На практиці стилізація елементів виконується шляхом додавання CSS-класів. Властивість style використовується для додавання будь-яких динамічних стилів, наприклад, під час анімації.

// ? Атрибути
// * DOM-елементам відповідають HTML-теги, які містять текстові атрибути. Доступ до атрибутів здійснюється за допомогою стандартних методів. Ці методи працюють зі значенням, яке знаходиться в HTML.

/*
    elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
    elem.getAttribute(name) - отримує значення атрибута і повертає його.
    elem.setAttribute(name, value) - встановлює атрибут.
    elem.removeAttribute(name) - видаляє атрибут.
    elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
*/

// ? data-атрибути
// * Дозволяють додати до тегу довільний атрибут і отримати його значення в JavaScript. Цю можливість використовують для того, щоб спростити написання коду, наприклад, зв'язати дані і розмітку за унікальним ідентифікатором, вказати тип дії кнопки тощо.

{/* <button type="button" data-action="close">Close</button>
<button type="button" data-action="save">Save</button> */}

// * Для отримання значення data-атрибута використовується властивість dataset, після якого стоїть ім'я атрибута. Тобто data- відкидається, а інша частина імені записується як ім'я властивості об'єкта.

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"

// ? Створення та видалення елементів
// * DOM API дозволяє не тільки вибирати або змінювати вже існуючі, але й видаляти, а також створювати нові елементи, після чого додавати їх в документ.
// * Створення

// document.createElement(tagName);

// * Створює елемент з ім'ям tagName і повертає посилання на нього як результат свого виконання. tagName - це рядок, що вказує тип елемента, який створюється. Елемент створюється в пам'яті, в DOM його ще немає.

// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>
// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>
// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// * Додавання
// * Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого елемента в DOM-дереві. Припустимо, що додаємо до певного елемента element, для цього існують методи.

/*
    element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
    element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
    element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
    element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
*/

// * У всіх цих методах el - це елементи або рядки, в будь-якому поєднанні і кількості. Рядки додаються як текстові вузли.

// ? Цікаво
// * Якщо елемент для додавання вже знаходиться в DOM, то він видаляється зі свого старого місця і додається у нове. З цього випливає правило - один і той самий елемент не може бути одночасно у двох місцях.
// * Видалення

// elem.remove();

// * Для того, щоб видалити елемент, використовується метод remove(). Він викликається на елементі elem, який необхідно видалити
// * Оптимізація роботи з DOM
// * Сучасні браузери намагаються оптимізувати процес відтворення сторінки без втручання розробника. Проте, зміна DOM-дерева - це дорога операція, тому необхідно намагатися мінімізувати кількість звернень до DOM.
// * Repaint - відбувається, коли зміни торкнулися стилів, що впливають на зовнішній вигляд елемента, але не на геометрію. Наприклад opacity, background-color, visibility і outline. Браузер повторно створює елемент, з урахуванням нового стилю. Також перевіряється видимість інших елементів, один або більше можуть виявитися прихованими під елементом, що змінив зовнішній вигляд.
// * Reflow - відбувається, коли зміни впливають на вміст, структуру документу, положення елементів. Відбувається перерахунок позиціонування і розмірів, що призводить до повторного створення частини або всього документу. Зміна розміру одного батьківського контейнера вплине на всіх його дітей і предків. Має значно більший вплив на продуктивність, ніж repaint.
// * Усі перераховані вище операції блокують браузер. Сторінка не може виконувати жодні інші операції у той час, коли відбувається reflow або repaint. Причинами можуть бути:

/*
    Маніпуляції з DOM (додавання, видалення, зміна, перестановка елементів)
    Зміна вмісту, зокрема тексту в полях форм
    Розрахунок або зміна CSS-властивостей
    Додавання і видалення таблиць стилів
    Маніпуляції з атрибутом class
    Маніпуляції з вікном браузера (зміни розмірів, прокручування)
    Активація псевдокласів (наприклад, ':hover')
*/

// ? Властивість innerHTML
// * Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу. У такого підходу є свої плюси і мінуси.
// * Читання
// * Властивість innerHTML зберігає вміст елемента, включно з тегами, у вигляді рядка. Значення, що повертається, - це завжди валідний HTML-код.
// * Зміна
// * Властивість innerHTML доступна і для читання, і для запису. Якщо записати в неї рядок з HTML-тегами, то браузер під час парсингу рядка перетворить їх у валідні елементи і додасть в DOM-дерево.

// ? Цікаво
// * Якщо у властивість innerHTML записати порожній рядок, то вміст елемента буде очищено. Це простий і швидкий спосіб видалення всього вмісту.
// * За такого підходу, на відміну від document.createElement(), ми не отримуємо посилання на створений DOM-елемент. Це перший крок на шляху до шаблонізації - створення великої кількості однотипної розмітки з різними даними за наперед визначеним шаблоном. Наприклад, як у списку товарів інтернет магазину тощо.
// * Однотипна (шаблонна) розмітка створюється із масиву даних. Прийом полягає у перебиранні цього масиву і складанні одного рядка з HTML-тегами, який потім записуємо в innerHTML елемента.
// * Додавання
// * Зміна elem.innerHTML повністю видалить і повторно створить всі нащадки елемента elem. Якщо елемент спочатку не був порожній, то виникнуть додаткові витрати на серіалізацію вже існуючої розмітки, а це погано.

// ? Цікаво
// * Використовуйте властивість elem.innerHTML для додавання тільки тоді, коли елемент elem - порожній, або якщо потрібно повністю замінити його вміст.
// * Метод insertAdjacentHTML()
// * Сучасний метод для додавання рядка з HTML-тегами перед, після або всередину елемента. Вирішує проблему innerHTML з повторною серіалізацією вмісту елемента під час додавання розмітки до вже існуючої.

// elem.insertAdjacentHTML(position, string);

// * Аргумент position - це рядок, позиція щодо елемента elem. Приймає одне з чотирьох значень.
// * inserAdjacentHTML method

/*
    "beforebegin" - перед elem
    "afterbegin" - всередині elem, перед усіма дітьми
    "beforeend" - всередині elem, після усіх дітей
    "afterend" - після elem
*/

// ? Цікаво
// * "beforebegin" і "afterend" працюють тільки тоді, коли elem вже знаходиться в DOM-дереві.

// ! Підключення скриптів
// * Завантаження і виконання скрипта, зазначеного в тезі <script> без будь-яких атрибутів, блокують обробку HTML-документа і побудову DOM. Це проблема.

{/* <script src="path-to-script.js"></script> */}

// * Коли аналізатор зустрічає такий тег, обробка HTML-документа припиняється і починається завантаження файлу скрипта, зазначеного в атрибуті src. Після завантаження скрипт виконується, і тільки потім відновлюється обробка HTML. Це називається «блокуючий» скрипт.
// * Атрибути defer та async були введені, щоб дати розробникам можливість краще контролювати спосіб завантаження скриптів, і коли саме їх виконувати.

// ? Атрибут defer

{/* <script defer src="path-to-script.js"></script> */}

// * Атрибут defer вказує браузеру завантажувати файл скрипта у фоновому режимі, паралельно обробці HTML-документа і побудові DOM. Скрипт буде виконаний тільки після того, як HTML-документ був оброблений, а DOM побудований. Такі скрипти не блокують побудову DOM-дерева і гарантовано виконуються у тому порядку, в якому вказані в HTML-документі.
// defer attribute

// ? Атрибут async

{/* <script async src="path-to-script.js"></script> */}

// * Завантаження скрипта з атрибутом async не блокує побудову DOM, але він виконується відразу після завантаження. Це означає, що такі скрипти можуть заблокувати побудову DOM, і виконуються у довільному порядку.

// ! Події
// * Подія - це сигнал від браузера про те, що на веб-сторінці щось відбулося. Події використовуються для реакції на дії користувача і виконання коду, пов'язаного з певною подією. Існує багато видів подій: миші, клавіатури, елементів форм, завантаження зображень, буфера обміну, зміни стадії CSS анімації або переходу, зміни розмірів вікна та багато інших.
// * Одна дія може викликати декілька подій. Наприклад, клік викликає спочатку mousedown, а потім mouseup і click. У тих випадках, коли одна дія генерує декілька подій, їхній порядок фіксований. Тобто обробники викликаються у порядку mousedown → mouseup → click.
// * Для того, щоб елемент реагував на дії користувача, до нього необхідно додати слухача (обробника) події. Тобто функцію, яка буде викликана, щойно подія відбулася.

// ? Метод addEventListener()
// * Додає слухача події на елемент.

// element.addEventListener(event, handler, options);

/*
    event - ім'я події, рядок, наприклад "click".
    handler - колбек-функція, яка буде викликана під час настання події.
    options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.
*/

// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

// * Для колбека можна (і бажано) використовувати окрему функцію і передавати на неї посилання. Іменована функція підвищує читабельність коду.

// const button = document.querySelector(".my-button");
// const handleClick = () => {
//   console.log("Button was clicked");
// };

// button.addEventListener("click", handleClick);

// * На одному елементі може бути будь-яка кількість обробників подій, навіть подій одного типу. Колбек-функції будуть викликатися у порядку їх реєстрації в коді.

// ? Метод removeEventListener()
// * Видаляє слухача події з елемента. Аргументи аналогічні методу addEventListener().

// element.removeEventListener(event, handler, options);

// * Для видалення потрібно передати посилання саме на ту колбек-функцію, яка була призначена в addEventListener(). У такому разі, для колбеків використовують окрему функцію і передають її за ім'ям (посиланням).

// ? Ключове слово this
// * Якщо колбеком буде функція, яка використовує this, за замовчуванням контекст всередині неї буде посилатися на DOM-елемент, на якому висить слухач.

// const mango = {
//   username: "Mango",
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };
// const btn = document.querySelector(".js-btn");

// // ✅ Працює
// mango.showUsername();

// // ❌ this буде посилатися на button, якщо використовувати showUsername як callback
// btn.addEventListener("click", mango.showUsername); // не працює

// // ✅ Не забувайте прив'язувати контекст методів об'єкта
// btn.addEventListener("click", mango.showUsername.bind(mango));

// ! Об'єкт події
// * Щоб обробити подію - недостатньо знати про те, що це клік або натискання клавіші, можуть знадобитися деталі. Наприклад, поточне значення текстового поля, елемент, на якому відбулася подія, вбудовані методи та інші.
// * Кожна подія - це об'єкт, який містить інформацію про деталі події та автоматично передається першим аргументом в обробник події. Всі події відбуваються з базового класу Event.

// const handleClick = event => {
//   console.log(event);
// };
// button.addEventListener("click", handleClick);

// * Параметр event - це і є об'єкт події, який автоматично передається першим аргументом під час виклику колбек-функції. Ми можемо називати його як завгодно, але, як правило, його оголошують як e, evt або event.
// * Деякі властивості об'єкта події:

/*
    event.type - тип події.
    event.currentTarget - елемент, на якому виконується обробник події.
*/

// ? Дії браузера за замовчуванням
// * Деякі події викликають дію браузера, вбудовану за замовчуванням як реакція на певний тип події. Наприклад, клік на посиланні ініціює перехід на нову адресу, зазначену в href, а відправлення форми перезавантажує сторінку. Найчастіше ця поведінка небажана і її необхідно скасувати.
// * Для скасування дії браузера за замовчуванням в об'єкта події є стандартний метод preventDefault().

// ? Події клавіатури
// * Існує дві основні події клавіатури: keydown і keyup. На відміну від інших, події клавіатури обробляються на документі, а не на конкретному елементі. Об'єкти подій клавіатури походять від базового класу KeyboardEvent.

// document.addEventListener("keydown", event => {
//   console.log("Keydown: ", event);
// });

// document.addEventListener("keyup", event => {
//   console.log("Keyup: ", event);
// });

// * Натискаючи клавішу, спочатку відбувається keydown, після чого - keyup, коли клавішу відпустили. На практиці переважно обробляють тільки подію keydown, оскільки вона відбувається швидше за keyup, і користувач раніше бачить результат натискання. Події keydown і keyup спрацьовують при натисканні будь-якої клавіші, включно зі службовими (Ctrl, Shift, Alt, Escape тощо).

// ? Цікаво
// * Раніше була ще одна подія клавіатури - keypress. Більшість постів на форумах і блогах все ще можуть її використовувати, але будьте обережні - вона застаріла і підтримка у нових браузерах може припинитися в будь-який момент.

// ? Властивості key і code
// * Властивість key повертає символ, згенерований натисканням клавіші, враховуючи стан клавіш-модифікаторів, наприклад, Shift, а також поточну мову. Властивість code повертає код фізичної клавіші на клавіатурі і не залежить від мови.

// document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });

// * Наведіть фокус у вікно прикладу, клікнувши по ньому мишкою, відстеження подій клавіатури знаходиться на елементі document. Надрукуйте щось на клавіатурі і подивіться результат.

// ? Клавіші - модифікатори
// * Для обробки комбінації клавіш, наприклад Ctrl + s або будь-якої іншої, на об'єкті події є властивості ctrlKey, altKey, shiftkey і metaKey, що зберігають булеве значення, яке сигналізує про те, чи була затиснута клавіша-модифікатор.

// document.addEventListener("keydown", event => {
//   event.preventDefault();
//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//     console.log("«Ctrl + s» or «Command + s» combo");
//   }
// });

// * Деякі комбінації клавіш можуть конфліктувати з поведінкою браузера за замовчуванням. Наприклад, Ctrl + d або Command + d робить закладку. Потрібно намагатися проектувати систему комбінацій сторінки таким чином, щоб вона не перетиналася із вбудованою у браузері. Але, у крайньому разі, поведінку за замовчуванням можна скасувати, викликавши метод event.preventDefault().

// ? Цікаво
// * Не так давно, замість властивостей key і code, використовували властивість keyCode. Більшість постів на форумах і блогах все ще можуть використовувати її, але будьте обережні - вона застаріла, не використовуйте властивість keyCode.

// ! Події елементів форм

// ? Подія submit
// * Відправлення форми відбувається під час кліку по кнопці з атрибутом type="submit" або натискання клавіші Enter, перебуваючи в будь-якому її текстовому полі. Подію submit можна застосувати для валідації (перевірки) форми перед відправленням, оскільки на об'єкті події існує багато корисних властивостей, пов'язаних з елементами форми. Сабміт форми перезавантажує сторінку, тому не забувайте скасовувати дію за замовчуванням методом preventDefault().

// ? Цікаво
// * Властивість elements DOM-елемента форми містить об'єкт з посиланнями на усі її елементи, які мають атрибут name. Тому в прикладі ми отримуємо значення полів, звертаючись до login.value і password.value.

// ? Подія change
// * Відбувається після зміни елемента форми. Для текстових полів або textarea подія відбудеться не на кожному введенні символу, а після втрати фокусу, що не завжди зручно. Наприклад, доки ви набираєте щось у текстовому полі - подія відсутня, але як тільки фокус пропав, відбудеться подія change. Для інших елементів, наприклад, select, чекбоксів і радіо-кнопок, подія change спрацьовує відразу під час вибору значення.

// ? Цікаво
// * Зверніть увагу на корисні властивості при роботі з елементом <select> в прикладі. Розберіться, що зберігається у властивостях value, selectedIndex і options.

// ? Подія input
// * Відбувається тільки на текстових полях і textarea, і створюється щоразу при зміні значення елемента, не чекаючи втрати фокусу. На практиці input - це найголовніша подія для роботи з текстовими полями форми.

// ? Подія focus і blur
// * Елемент отримує фокус під час кліку миші або переходу клавішею Tab. Момент отримання і втрати фокусу - дуже важливий, отримуючи фокус, ми можемо завантажити дані для автозаповнення, почати відстежувати зміни тощо. Під час втрати фокусу - перевірити введені дані.
// * Під час фокусування елемента відбувається подія focus, а коли фокус зникає, наприклад, користувач клікає в іншому місці екрана, відбувається подія blur. Активувати або скасувати фокус можна програмно, викликавши в коді для елемента однойменні методи focus() і blur().
// * Фокус може бути тільки на одному елементі сторінки за одиницю часу, і поточний елемент, на якому знаходиться фокус, доступний як document.activeElement.

// ? Цікаво
// * Багато елементів не можуть отримати фокус. Наприклад, якщо клікнути по <div>, то фокусування на ньому не відбудеться, тому що це не інтерактивний елемент.

// ! Стандарт JSON

// ? JSON (JavaScript Object Notation) — сучасний текстовий формат зберігання й передачі структурованих даних у текстовій формі. Саме в цьому форматі дані будуть приходити і відправлятися на сервер, зберігатися в локальному сховищі тощо.

// ? Звичайний об'єктоподібний синтаксис JSON дуже зручний. Але JSON — це не об'єкт, а його рядкове відображення. Розгляньте приклад JSON файлу.

/*
{
  "name": "Josh",
  "weight": 175,
  "age": 30,
  "eyecolor": "brown",
  "isHappy": true,
  "cars": ["Chevy", "Honda"],
  "favoriteBook": {
    "title": "The Last Kingdom",
    "author": "Bernard Cornwell",
    "rating": 8.38
  }
}
*/

// ? Синтаксис схожий на об'єкт, за винятком того, що:

/*
    Ключі — це завжди рядки, обов'язково в подвійних лапках.
    Значення рядків — також обов'язково в подвійних лапках.
    Числа можуть бути цілими або десятковими, з десятковою крапкою або без неї, включаючи негативні.
    Числа та булеві значення true і false записуються так само, як у JavaScript.
    У JSON немає коми після останньої властивості об'єкта.
    Значення властивостей може бути спеціальним значенням null, але не може бути undefined.
    Функції не можна зберігати у JSON, оскільки JSON передбачений лише для даних, а не для методів обробки даних.
*/

// ! Перетворення у json

// ? Javascript і JSON чудово працюють разом, завдяки методам вбудованого класу JSON. Ці методи перетворюють JavaScript об'єкт у JSON і навпаки.

// ? Метод JSON.stringify(value) приймає значення і перетворює його у JSON. Значенням може бути число, буль, null, масив, об'єкт. 

// ? Рядки — це вже валідний JSON, тому в їх перетворенні немає сенсу.


// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
// };

// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

// ? Результат виклику JSON.stringify — це валідний JSON (рядок), який може бути збережений у вебсховище, базу даних або переданий мережею на сервер.

// ! Перетворення функцій

// ? Не всі JavaScript об'єкти можуть бути перетворені один в один у JSON. Наприклад, якщо в об'єкта є методи, то при перетворенні вони будуть проігноровані та не потраплять у JSON.

// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
//   bark() {
//     console.log("Woof!");
//   },
// };

// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

// ? Також при спробі перетворити функцію у JSON результатом буде undefined.

// const json = JSON.stringify(() => console.log("Well, this is awkward")); 
// console.log(json); // undefined
