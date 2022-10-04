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

// const getEvenNumber = (start = 0, end = 0) => {
//   const result = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 !== 0) {
//       result.push(i);
//     }
//   }

//   return result;
// };

// console.log(getEvenNumber(1, 100));

//========= objects =======

// const users = [
//   {
//     email: "user1@gmail.com",
//     password: "12345",
//     name: "Eugene",
//     phone: "444-555-3333",
//   },
//   {
//     email: "user2@gmail.com",
//     password: "qwerty",
//     name: "Milana",
//     phone: "222-111-4444",
//   },
//   {
//     email: "user3@gmail.com",
//     password: "qwerty",
//     name: "Olha",
//     phone: "222-111-4444",
//   },
// ];

// function sayHell(user) {
//   console.log(`Hello, ${user.name}`);
// }

// const email = prompt("Please enter your email");
// const password = prompt("Please enter your password");

// for (let user of users) {
//   if (user.email === email && user.password === password) {
//     sayHell(user);
//     console.log("You entered to your account");
//   }
// }

//======== object car =======
// const car = {
//   isOn: false,
//   speed: 0,
//   maxSpeed: 200,

//   startEngine() {
//     this.isOn = true;
//   },
//   stopEngine() {
//     this.isOn = false;
//   },
//   setSpeed(value) {
//     if (!this.isOn) return;
//     if (value > this.maxSpeed) {
//       this.speed = this.maxSpeed;
//     } else {
//       this.speed = value;
//     }
//   },
// };
// console.log(car);

// car.startEngine();
// console.log(car);

// car.setSpeed(1500);
// console.log(car);

// car.speed = 500;
// console.log(car);

//=========== Acsess to object =====
// const obj2 = {};

// const obj = {
//   web: 1,
//   ddd: 1,
//   odd: 1,
// };

// obj.new = 1;
// obj[obj2] = 1;

// console.log(object["web"]);
// console.log(Object.keys(obj));

// // ===== hard: keys and value ====
// const keys = Object.keys(obj);
// console.log(keys);

// let sum = 0;
// for (const key of keys) {
//   console.log(obj[key]);
//   sum += obj[key];
// }

// console.log("sum:", sum);

// ======= ease: only value =====
// const values = Object.values(obj);
// let sum = 0;
// for (const value of values) {
//   sum += value;
// }

// console.log(sum);

// ======= mixed=======
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// ======= object - deleting keys ====

// console.log(obj);
// delete obj.ddd;

// console.log(obj);

//========reference======
// const obj1 = {
//   name: "Bobby",
// };
// console.log(obj1);

// const obj2 = { ...obj1 };
// console.log(obj2);

// obj1.name = "Piter";
// console.log(obj2);
// console.log(obj1);

// const email = "user@gmail.com";
// const password = "11111";

// const user = {
//   email,
//   password,
// };

// console.log(user);

//========for... in=====

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// for (const key in hotel) {
//   console.log("Key:", key);
// }

//========spread=====
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));

// //======copy=====
// const arr1 = [1, 1, 3];
// const arr2 = [...arr1];

// arr1.push(2);

// console.log(arr1);
// console.log(arr2);

//========rest======
// function sum(a, b, ...rest) {
//   console.log(a + b);
//   console.log("rest:", rest);
// }

// sum(1, 2, 1, 2, 3);

// //======example=====
// const card = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     this.items.push({
//       ...product,
//       count: 1,
//     });
//   },
//   remove(productName) {
//     const newItems = [];

//     for (const item of this.items) {
//       if (item.name !== productName) {
//         newItems.push(item);
//       }
//     }
//     this.items = newItems;
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let sum = 0;
//     for (const item of this.items) {
//       sum += item.price;
//     }
//     return sum;
//   },
//   increaseQuantity(productName) {
//     const newItems = [];

//     for (const item of this.items) {
//       newItems.push(
//         item.name === productName
//           ? {
//               ...item,
//               count: item.count + 1,
//             }
//           : item
//       );
//     }
//     this.items = newItems;
//   },
//   decreaseQuantity(productName) {
//     const newItems = [];

//     for (const item of this.items) {
//       newItems.push(
//         item.name === productName
//           ? {
//               ...item,
//               count: item.count - 1 < 1 ? 1 : item.count - 1,
//             }
//           : item
//       );
//     }
//     this.items = newItems;
//   },
// };

// // console.log(card);

// console.table(card.getItems());
// card.add({ name: "Apple", price: 50 });
// card.add({ name: "Lemon", price: 60 });
// card.add({ name: "Orange", price: 60 });
// card.add({ name: "Bearberry", price: 120 });
// // console.log(card);

// console.table(card.getItems());
// card.remove("Apple");
// console.table(card.getItems());

// console.log("Total Price:", card.countTotalPrice());

// card.increaseQuantity("Bearberry");
// card.increaseQuantity("Bearberry");
// card.increaseQuantity("Bearberry");
// card.increaseQuantity("Bearberry");
// card.increaseQuantity("Lemon");
// console.table(card.getItems());

// card.decreaseQuantity("Lemon");
// card.decreaseQuantity("Lemon");
// card.decreaseQuantity("Lemon");
// console.table(card.getItems());

// card.clear();
// console.table(card.getItems());

// ======== дереструктирізація=====

// function getHotelNameAndCapacity(house) {
//   const { name = "No name hotel", freeSpaces: capacity, stars } = house;
//   return capacity
//     ? `${name} has ${stars} stars and has ${capacity} free rooms`
//     : `${name} has ${stars} stars and has no free rooms`;
// }

// const getHotelNameAndCapacity = ({
//   name = "No name hotel",
//   freeSpaces: capacity,
//   stars,
// }) => {
//   capacity
//     ? `${name} has ${stars} stars and has ${capacity} free rooms`
//     : `${name} has ${stars} stars and has no free rooms`;
// };

// const hotel1 = {
//   name: "Resort Hotel",
//   stars: 5,
// };

// const hotel2 = {
//   name: "Viva Hotel",
//   stars: 3,
//   freeSpaces: 50,
// };

// const hotel3 = {
//   stars: 5,
//   freeSpaces: 200,
// };

// console.log(getHotelNameAndCapacity(hotel1));
// console.log(getHotelNameAndCapacity(hotel2));
// console.log(getHotelNameAndCapacity(hotel3));

//========деструктурізація масиву=====
// const arr = ["Boddy", "Piter", "John"];

// const [firstPersone, secondPerson, thirdthPerson] = arr;

// console.log(firstPersone);
// console.log(secondPerson);
// console.log(thirdthPerson);

//====== array react exeple=====
// let userName = "";
// const setUserName = (name) => {
//   userName = name;
// };

// console.log(userName);
// setUserName("Bobby");
// console.log(userName);
// setUserName("John");
// console.log(userName);

// const useState = [userName, setUserName];
// const [value, seteValue] = useState;
// console.log(value);
// console.log(seteValue);

// //===== array swap====
// let a = 5;
// let b = 10;

// console.log("=======");
// console.log("a:", a);
// console.log("b:", b);

// const temp = a;
// (a = b), (b = temp);

// console.log("=======");
// console.log("a:", a);
// console.log("b:", b);

// [a, b] = [b, a];
// console.log("=======");
// console.log("a:", a);
// console.log("b:", b);

// //======= object====
// const obj = {
//   name: "Bobby",
// };

// console.log(obj.name);
// console.log(obj.age);

// obj.age = 15;
// console.log(obj.age);

// console.log(obj);

//======example 1====

// const p1 = "Racecar";
// const p2 = "taBle";
// const p3 = "My gym";
// const p4 = "Около миши молоко";

// function isPolindrom(str) {
//   const text = str.toLowerCase().replaceAll(" ", "");
//   // const arr = text.split("");
//   // const reversedArray = arr.reverse();
//   // const reversedText = reversedArray.join("");
//   const reversedText = text.split("").reverse().join("");

//   return reversedText === text;
// }

// console.log(p1);
// console.log(isPolindrom(p1));
// console.log("=========");
// console.log(p2);
// console.log(isPolindrom(p2));
// console.log("=========");
// console.log(p3);
// console.log(isPolindrom(p3));
// console.log("=========");
// console.log(p4);
// console.log(isPolindrom(p4));

//======example 2====
// function fizzBazz(number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzBazz");
//       continue;
//     }
//     if (i % 3 === 0) {
//       console.log("fizz");
//       continue;
//     }
//     if (i % 5 === 0) {
//       console.log("bazz");
//       continue;
//     }
//     console.log(i);
//   }
// }

// fizzBazz(15);

//======example 3 Anagram====
// const w1 = "finder";
// const w2 = "Friend";

// function getLetters(word) {
//   const result = {};

//   for (let i = 0; i < word.length; i = i + 1) {
//     const letter = word[i];
//     result[letter] = result[letter] ? result[letter] + 1 : 1;
//   }

//   // const arr = word.split("");
//   return result;
// }
// function isAnagram(str1, str2) {
//   const letters1 = getLetters(str1);
//   const letters2 = getLetters(str2);

//   const item1 = Object.entries(letters1);
//   const item2 = Object.entries(letters2);

//   const haveSameLength = item1.length === item2.length;
//   let containAllWords = true;

//   for (let i = 0; i < item1; i = i + 1) {
//     const [key, value] = item1[i];
//     const secondValue = letters2[key];

//     if (value !== secondValue) {
//       containAllWords = false;
//       break;
//     }
//   }

//   return haveSameLength && containAllWords;
// }
// console.log(isAnagram(w1, w2));

//======example 4 Anagram====
// const w1 = "finder";
// const w2 = "friend";

// function isAnagram(str1, str2) {
//   const sortedW1 = str1.split("").sort().join("");
//   const sortedW2 = str2.split("").sort().join("");

//   return sortedW1 === sortedW2;
// }

// console.log("========");
// console.log(isAnagram(w1, w2));

//======set timeout=====

// const sayHello = () => console.log("Hello");

// console.log("start");
// setTimeout(sayHello, 2000);

// console.log("end");

// function fn1(callback) {
//   callback();
//   console.log("Hello from FN1");
// }
// function fn2() {
//   console.log("Hello from FN2");
// }

// fn1(fn2);

//=======map=====
// const names = ["baby", "richard", "john"];
// const numbers1 = [100, 200, 300];
// const numbers2 = [100, 200, 300];

// function map(arr, callback) {
//   const result = [];
//   for (const value of arr) {
//     result.push(callback(value));
//   }
//   return result;
// }

// function namesToList(name) {
//   return `<li>${name}</li>`;
// }

// function numbersToList(number) {
//   return `<li>${number / 100}$</li>`;
// }

// console.log(map(names, namesToList));
// console.log(map(numbers1, numbersToList));
// console.log(map(numbers2, (number) => number * 2));

//=====filter====
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function filter(arr, callback) {
//   const result = [];

//   for (const value of arr) {
//     if (callback(value)) {
//       result.push(value);
//     }
//   }

//   return result;
// }

// console.log(filter(arr1, (value) => value < 5));
// console.log(filter(arr2, (value) => value > 5));
// console.log(filter(arr3, (value) => value % 2 === 0));
// console.log(filter(arr4, (value) => value % 2 !== 0));

//=======find======
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function find(arr, callback) {
//   for (const value of arr) {
//     if (callback(value)) {
//       return value;
//     }
//   }
// }

// console.log(find(arr1, (arr) => arr > 7));
// console.log(find(arr1, (arr) => arr % 2 === 0));

//======reduce===
// const arr1 = [1, 1, 1, 1, 1, 1, 4, 4];

// function reduce(arr, callback, initialValue) {
//   let result = initialValue || arr[0];

//   for (let value of arr) {
//     result = callback(result, value);
//   }
//   return result;
// }

// function sum(a, b) {
//   return a + b;
// }

// console.log(reduce(arr1, sum, 0));
// console.log(reduce(arr1, (acc, value) => acc * value, 1));

// //=======closure======
// function count(x = 1) {
//   return function () {
//     x += 1;
//     console.log(x);
//   };
// }

// console.log("======== count 1 =======");
// const count1 = count(10);
// count1();
// count1();
// count1();
// count1();
// count1();

// console.log("======== count 2 =======");
// const count2 = count();
// count2();

//=======this======
// const person1 = {
//   name: "Bobby",
//   age: 15,
// };

// const person2 = {
//   name: "Piter",
//   age: 20,
// };

// function sayHello() {
//   console.log(this);
// }

// sayHello.call(person1);
// sayHello.apply(person2);

//======bind 1========
// const person1 = {
//   name: "Bobby",
//   age: 15,
//   sayHello() {
//     console.log(this);
//   },
// };

// const fn1 = person1.sayHello.bind(person1);
// fn1();

// setTimeout(person1.sayHello.bind(person1), 2000);

//======bind 2========
// const person1 = {
//   name: "Bobby",
//   age: 15,
// };

// const person2 = {
//   name: "Piter",
//   age: 20,
// };

// function sayHello() {
//   console.log(this);
// }

// setTimeout(sayHello.bind(person1), 2000);
// setTimeout(sayHello.bind(person2), 4000);

// ======= strike function =======
// const person1 = {
//   name: "Bobby",
//   age: 15,

//   sayBye() {
//     console.log(this);

//     const inter = () => {
//       console.log("inertFn:", this);
//     };

//     inter();
//   },
// };

// person1.sayBye();
