"use strict";

// const SKY_COLOR = "blue";

// const a = 5;
// const b = 10;
// const x = a + b;

// // console.log("Hello world");
// // console.log("x:", x);

// // // alert("ddffd");

// // function hello() {
// //   console.log("Hello world");
// //   console.log(this);
// // }

// // hello();
// // hello();
// // hello();
// // hello();
// // hello();

// const userName = "Bobby";
// const userAge = 15;
// const userAdult = false;
// const userEye = "blue";

// console.log("User Name:", userName);
// console.log(typeof userName);
// console.log(typeof userAge);
// console.log(typeof userAdult);
// console.log(typeof { x: 121212 });

// // console.log("g:", g);
// // var g = 2;
// // console.log("g:", g);

// // console.log(2 > 3);
// // console.log(4 < 5);

// const goToTheMovie = confirm("Do you want go to the Movie");
// console.log("Answer:", goToTheMovie);

// const pressAge = prompt("Please press your Age:");
// console.log("Answer from User:", pressAge);

// if (pressAge > 18) {
//   console.log("You can buy ticcket");
// } else {
//   console.log("You can go home and go to sleep");
// }

// Гра в числа
// console.log("Hello!");

// const secretNumber = Math.round(Math.random() * 100 + 1);
// // console.log("Таємне число:", secretNumber);
// let userAnswer;

// let userNumber;
// do {
//   userAnswer = prompt("Введіть Ваше число:");
//   userNumber = Number.parseInt(userAnswer);
//   // parseInt - розділити число на ціле і дробне. записує лише ціле число
//   console.log("Ваше число:", userNumber);

//   if (secretNumber === userNumber) {
//     console.log("ВИ ВГАДАЛИ!!!");
//   } else if (secretNumber > userNumber) {
//     console.log("Таємне число більше", userNumber);
//   } else if (secretNumber < userNumber) {
//     console.log("Таємне число меньше", userNumber);
//   } else {
//   }
//   // console.log("Ви вели не число, я не буду так грати(((");
//   // } while (secretNumber !== userNumber && !isNaN(userNumber));
// } while (secretNumber !== userNumber && userAnswer.toUpperCase() !== "EXIT");

// -------- var vs let -----
// for (let i = 0; i < 10; i = i + 1) {
//   console.log(i);
// }

// console.log("Число", i);

// Обєднання строк

// const a = "Hello";
// const b = "world!";
// const c = a + " " + b;

// console.log(c);

//=========for=====
// const str = "JavaScript";
// console.log(str);

// for (let i = 0; i < str.length; i = i + 1) {
//   console.log(str[i]);
// }

//=========for=====
// for (let i = 2; i < 10; i = i + 1) {
//   for (let j = 2; j < 10; j = j + 1) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log("==================");
// }

// //=========break and continue=====
// for (let c = 0; c < 10; c = c + 1) {
//   if (c > 5) {
//     break;
//   }
//   console.log(c);
// }

//=========break and continue=====
// for (let c = 0; c < 10; c = c + 1) {
//   if (c === 5) {
//     continue;
//   }
//   console.log(c);
// }

//===== includes ====
const str =
  "Тут написано якийсь текс, для того щоб перевірити функцію includes";
const result = str.toLowerCase().includes("якИйсь".toLocaleLowerCase);

console.log("Результат:", result);
