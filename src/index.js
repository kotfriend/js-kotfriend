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

// //===== includes ====
// const str =
//   "Тут написано якийсь текс, для того щоб перевірити функцію includes";
// const result = str.toLowerCase().includes("якИйсь".toLocaleLowerCase);

// console.log("Результат:", result);

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const arr = [1, 2, 3, 4];

// arr.push(5);

// // console.log(arr);

// //======split======
// const text = "Ми сьогодні будемо їсти курку та картоплю";
// const arr = text.split(" ");

// console.log(arr);

// //========join=======
// const newArr = arr.join(" | ");
// console.log(newArr);

// //======indexOf=======
// console.log(arr.indexOf("та"));

// //======includes======
// console.log(arr.includes("та"));

// //===========push&pop=======
// const arr = [1, 2, 3, 4];

// console.log(arr);

// arr.push(5);
// console.log(arr);

// const retX = arr.pop();
// console.log(arr);
// console.log(retX);
// const arr = [1, 2, 3, 4, 5, 6];
// let sum1 = 0;
// let sum2 = 0;

// for (let i = 0; i < arr.length; i += 1) {
//   sum1 += arr[i];
// }

// for (const value of arr) {
//   sum2 += value;
// }

// console.log(sum1);
// console.log(sum2);

//==== min max ====
// const arr = [15, 10, 4, 3, 23, 32];
// let max = arr[0];
// let min = arr[0];

// for (const value of arr) {
//   if (value > max) {
//     max = value;
//   }
//   if (value < min) {
//     min = value;
//   }
// }

// console.log(max);
// console.log(min);

//====== reverce =====
const str = "Ми сьогодні будемо перевертати текст";
// const reversArr = str.split("").reverse().join("");

// console.log(str);
// console.log(reversArr);

const letters = str.split("");
const newArr = [];

for (let i = letters.length - 1; i >= 0; i = i - 1) {
  newArr.push(letters[i]);
}

console.log(str);
console.log(letters);
