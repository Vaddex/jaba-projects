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


