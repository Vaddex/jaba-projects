'use strict';
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
// * const book = {
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
function calculateMeanTemperature(forecast) {
    const { } = forecast;
  const todayLow = forecast.today.low;
  const todayHigh = forecast.today.high;
  const tomorrowLow = forecast.tomorrow.low;
  const tomorrowHigh = forecast.tomorrow.high;
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
