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

// =========for=====
// const str = "JavaScript";
// console.log(str);

// for (let i = 0; i < str.length; i = i + 1) {
//   console.log(str[i]);
// }

// =========for=====
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

// =========break and continue=====
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

// ==== min max ====
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

// ====== reverce =====
// const str = "Ми сьогодні будемо перевертати текст";
// // const reversArr = str.split("").reverse().join("");

// // console.log(str);
// // console.log(reversArr);

// const letters = str.split("");
// const newArr = [];

// for (let i = letters.length - 1; i >= 0; i = i - 1) {
//   newArr.push(letters[i]);
// }

// const reverseArr = newArr.join("");

// console.log(str);
// console.log(letters);
// console.log(newArr);
// console.log(reverseArr);

// ==========first letter Uper Case =====

// const str = "ми змінимо кожну першу літеру на велику";
// const words = str.split(" ");

// for (let i = 0; i < words.length; i = i + 1) {
//   if (i > 0) {
//     const word = words[i];
//     const newWord = word[0].toUpperCase() + word.slice(1);
//     words[i] = newWord;
//   }
// }

// const newStr = words.join(" ");

// console.log(str);
// console.log(words);
// console.log(newStr);
// =======polindrom======

// const str0 = "Tenet";
// const str1 = "Леша на полке клопа нашел";
// const str2 = "Искать такси";
// const str3 = "Существуют разновидности";

// const str = str1.toLowerCase().replaceAll(" ", "");
// const letters = str.split("");
// const newStr = [];

// for (let i = letters.length - 1; i >= 0; i = i - 1) {
//   newStr.push(letters[i]);
// }

// for (let i = 0; i < str1.length; i = i + 1) {
//   if (str1[i] === " ") {
//     newStr.splice(i, 0, " ");
//   }
// }

// let reverseStr = newStr.join("");
// const isPolindrome = str1.toLowerCase() === reverseStr;

// console.log(str1);
// console.log(reverseStr);
// console.log("isPolindrome", isPolindrome);

// =======concat=====

// const oldList = ["Eugene", "Olha"];
// const newList = ["Milana"];
// const family = oldList.concat(newList);
// const family2 = [...oldList, "hello", newList];

// console.log(oldList);
// console.log(newList);
// console.log(family);
// console.log(family2);

// ========sort======
// const arr = [3, 2, 1, 4, 0];

// for (let i = 0; i < arr.length; i = i + 1) {
//   for (let j = 0; j < arr.length; j = j + 1) {
//     if (arr[j] > arr[i]) {
//       const x = arr[i];

//       arr[i] = arr[j];
//       arr[j] = x;
//     }
//   }
// }

// console.log(arr);

// =======split=====

// const str = "asdsd sdsdsd";

// const arr = str.split(" ");
// // console.log(arr);

// const a = "Hello";

// console.log(+-a);

// ====== function declaration ======
// function sum(param1, param2) {
//   const result = param1 + param2;

//   return param1 + param2;
// }

// const sum1 = sum(1, 2);
// const sum2 = sum(3, 5);
// const sum3 = sum(sum1, sum2);

// console.log("//====== function declaration ======");
// console.log(sum1);
// console.log(sum2);
// console.log(sum3);

// //==== functionexpression ======
// const sumFn = function (a, b) {
//   return a + b;
// };

// // console.log("//==== functionexpression ======");
// // console.log(sumFn(1, sum2));
// // console.log(sumFn(sum3, sum1));
// // console.log(sumFn(sum3, 9));

// // //==== array function ======
// // const sumFn2 = (a, b) => {
// //   return a + b;
// // };

// // console.log("//==== array function ======");
// // console.log(sumFn2(1, sum2));
// // console.log(sumFn2(sum3, sum1));
// // console.log(sumFn2(sum3, 9));

// //=======polindrom of function======

// const isPolindrom = function (inputStr) {
//   const str = inputStr.toLowerCase().replaceAll(" ", "");
//   const letters = str.split("");
//   const newStr = [];

//   for (let i = letters.length - 1; i >= 0; i = i - 1) {
//     newStr.push(letters[i]);
//   }

//   for (let i = 0; i < inputStr.length; i = i + 1) {
//     if (inputStr[i] === " ") {
//       newStr.splice(i, 0, " ");
//     }
//   }

//   let reverseStr = newStr.join("");
//   return inputStr.toLowerCase() === reverseStr;
// };

// const strings = [
//   "Tenet",
//   "Леша на полке клопа нашел",
//   "Искать такси",
//   "Существуют разновидности",
// ];

// for (const str of strings) {
//   console.log("++++++++++");
//   console.log(str);
//   console.log("isPolindrome", isPolindrom(str));
// }

//======function arguments order =====
// const sayHello = function (name, age) {
//   console.log(`${name} is ${age} years old. Hello ${name}!`);
// };

// sayHello("Milana", 10);
// sayHello("Eugene", 36);
// sayHello("Olha", 18);

//======= arguments ======

// const sum = function () {
//   const numbers = Array.from(arguments);
//   let result = 0;

//   for (const value of arguments) {
//     result += value;
//   }

//   return result;
// };

// console.log(sum(1, 1, 1));
// console.log(sum(1, 23, 4, 5, 3, 2, 2));
// console.log(sum(4, 3, 2));
// console.log(sum());

//======= array function======
// const sum2 = (a = 0, b = 0) => a + b;

// console.log(sum2(1, 1));
// console.log(sum2(1));
// console.log(sum2());

//========== bank account =======

// let amount = 100;

// function cashing(value) {
//   if (amount - value < 0) {
//     return "no money";
//   } else {
//     amount -= value;
//     return amount;
//   }
// }

// console.log(amount);
// console.log(cashing(10));
// console.log(cashing(70));
// console.log(cashing(50));

//========getevennumbers=====

const getEvenNumber = (start = 0, end = 0) => {
  const result = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }

  return result;
};

console.log(getEvenNumber(1, 100));
