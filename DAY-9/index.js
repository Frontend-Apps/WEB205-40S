// // // // let a;

// // // // console.log(a);

// // // // a = 10;

// // // // console.log(a);
// // // // // Techincally let variables are hoisted, they are not initialized untill
// // // // // //code reaches the line where the let keyword is declared

// // // // // if (true) {
// // // // //   let b = 100;
// // // // // }

// // // // //console.log(b);

// // // // while (true) {
// // // //   let x = 10;
// // // //   console.log(x); // 10
// // // // }

// // // // console.log(x); //not defined

// // // // // block scope -> let
// // // // {

// // // // }

// // // // let z = 10
// // // // let z = 100
// // // // console.log(z)

// // // let a;
// // // a = 100;

// // // var b;
// // // b = 100;

// // // // const c = 1000;
// // // // c = 50;
// // // // console.log(c);

// // // const details = { name: "John", age: 30, place: "India" };
// // // details.name = "Doe";
// // // details.age = 20;
// // // console.log(details.name);

// // // details = { name: "Masai" };

// // // function greet(student) {
// // //   console.log("Hi welcome to JS", student);
// // //   console.log("Bye");
// // // }

// // // greet("Balaji");

// // // console.log("-----start of arrow function-------");
// // // var greet = (student) => {
// // //   console.log("Hi welcome to JS", student);
// // //   console.log("bye");
// // // };

// // // greet("Balaji");

// // //[[],[]]
// // let numbs = [
// //   [10, 20],
// //   [30, 40],
// // // ];

// // // let [[a0, a1], [b0, b1]] = numbs;

// // // console.log(a0, a1);
// // // // console.log(b0, b1);

// // var person = {
// //   name: "Manoj",
// //   age: 25,
// //   details: {
// //     place: "India",
// //   },
// // };

// // var {
// //   name,
// //   age,
// //   details: { place },
// // } = person;
// // console.log(name, age, place);

// // const user = {
// //   id: 339,
// //   name: "Fred",
// //   age: 42,
// //   education: {
// //     degree: "Masters",
// //   },
// // };
// // const {
// //   id,
// //   name,
// //   age,
// //   education: { degree },
// // } = user;
// // console.log(degree); //prints: Masters

// const phone = {
//   id: 101,
//   specs: {
//     os: "Android",
//     hardware: {
//       ram: "4GB",
// //       storage: "64GB",
// //     },
// //   },
// // };

// // let {
// //   specs: {
// //     os,
// //     hardware: { ram, storage },
// //   },
// // } = phone;

// // console.log(os, ram);

// // var person = {
// //   name: "Manoj",
// //   age: 25,
// // };

// // let { name: person_name, age: person_age } = person;
// // console.log(person_name, person_age);

// // rest operator -> array

// function sum(name, ...nums) {
//   console.log(nums);
//   let out = 0;
//   for (let i in nums) {
//     out += nums[i];
//   }
//   console.log(out);
// }

// sum("Masai school", 1, 2, 3, 4, 5, 65, 6, 6);

// function calculateCost(...items) {
//   let total = 0;
//   console.log(items);
//   for (let i = 0; i < items.length; i++) {
//     if (typeof items[i] === "number") {
//       total += items[i];
//     }
//   }
//   console.log(total);
// }

// calculateCost(100, 200, "Shipping", 50, "Tax", 30);

// function personDetails(name,phone,...x){
//         console.log(emails)
// }

// personDetails(
//   "Jot",
//   "908989898",
//   "jot@gmail.com",
//   "jot123@gmail.com",
//   "jot@yahoo.com"
// );

// let numbers = [1, 20, 30];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);

// console.log(...numbers);

// let fruits = ["Apple", "Banana", "Cherry"];

// let moreFruits = ["Kiwi", ...fruits, "DragonFruit"];
// console.log(moreFruits);

function add(a, b, c) {
  console.log(a + b + c);
}

let numbs = [1, 2, 3];
add(...numbs);

// let arr1 = [1, 2, 3, 90, 100];
// let arr2 = [...arr1];
// console.log(arr2);

// //merging arrays
// let fruits = ["Apple", "Banana"];
// let moreFruits = ["Cherry", "Dragonfruit"];

// let res = [...fruits, ...moreFruits];


let obj1 = { a: 1, b: 2 };
let obj2 = { c: 4, d: 5 };

let res = { ...obj1, ...obj2 };
console.log(res);
