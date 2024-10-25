// // // var sweets = ["kova", "gulabjamun", "laddu", "mysorepak", "badshaw"];

// // // // for (let i = 0; i < sweets.length; i++) {
// // // //   console.log(sweets[i],i);
// // // // }

// // // //forEach
// // // let box = [];
// // // sweets.forEach(function (el) {
// // //   box.push(el);
// // // });

// // // console.log(box);

// // // //map
// // // let out = sweets.map(function (el) {
// // //   return el;
// // // });

// // // console.log(out);

// // // let nums = [3, 5, 7, 2, 12, 9];
// // // // return array which is double of all these numbers

// // // let doubled = nums.map(function (el) {
// // //   return el * 2;
// // // });

// // // //console.log(doubled);

// // // // "3-5-7-9"

// // // let hiphen = [];
// // // nums.forEach(function (el) {
// // //   if (el % 2 !== 0) {
// // //     hiphen.push(el);
// // //   }
// // // });

// // //console.log(hiphen.join("-"));

// // // const products = [
// // //   { name: "Laptop", price: 1000 },
// // //   { name: "Phone", price: 500 },
// // //   { name: "Tablet", price: 700 },
// // // ];

// // // let result = products.map((el) => {
// // //   return `${el.name} costs ${el.price}`;
// // // });

// // // console.log(result);

// // /*
// // [ 'Laptop costs $1000','Phone costs $500','Tablet costs $700']
// // */

// // //filter

// // let nums = [3, 5, 7, 2, 12, 9];

// // let res = nums.filter(function (el, i, arr) {
// //   return el % 2 !== 0;
// // });

// // console.log(res);

// // const users = [
// //   { name: "John", age: 25 },
// //   { name: "Jane", age: 30 },
// //   { name: "Mike", age: 20 },
// // ];

// // let adults = users.filter(function (el) {
// //   return el.age >= 25;
// // });

// // console.log(adults);

// // // [
// // //         { name: 'John', age: 25 },
// // //         { name: 'Jane', age: 30 }
// // //]

// // const words = ["apple", "banana", "kiwi", "mango"];
// // //["banana"]
// // let long = words.filter(function (el) {
// //   return el.length > 5;
// // });

// // console.log(long)

// //reduce()

// const nums = [15, 16, 17, 18, 19];
// //forEach, map

// // reduce(function(){},initialValue)

// let reducecb = function (acc, el, i, arr) {
//   //js logic
// };

// let out = nums.reduce(reducecb, 10);

// console.log(out);

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 700 },
// ];

// let total = products.reduce(function (acc, el, i, arr) {
//   return acc + el.price;
// },0);

// console.log(total);

const nums = [15, 16, 17, 18, 19];

//filter

let isOdd = function (el, i, arr) {
  return el % 2 !== 0;
};

let sum = function (acc, el, i, arr) {
  return acc + el;
};

let res = nums.filter(isOdd).reduce(sum, 0);

console.log(res);
//Given an array of numbers find the sum of cubes if the number is divisible by 3

let arr = [1, 2, 3, 4, 5, 6];

let divBy3 = function (el, i, arr) {
  return el % 3 == 0;
};

let cubeSum = function (acc, el, i, arr) {
  return acc + el ** 3;
};

let out = arr.filter(divBy3).reduce(cubeSum, 0);

console.log(out);
