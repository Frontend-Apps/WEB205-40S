// // // 5 -> 2 -> 3
// // // Welcome to JS, Anshik!

// // // string literals

// let name = "Sourav";
// let age = 24;
// let place = "India";
// let school = "Masai";

// // // Sourav is 24 years old. He is studying in Masai school, India
// // console.log(
// //   name +
// //     " " +
// //     "is " +
// //     age +
// //     " " +
// //     "years" +
// //     " " +
// //     "old" +
// //     "." +
// //     "He is studying in" +
// //     " " +
// //     school +
// //     " school" +
// //     ", " +
// //     place
// // );

// // console.log(
// //   `${name} is ${age} years old. He is studying in ${school} school, ${place}`
// // );

// // function sum(a, b, c, d) {
// //   let res = a + b + c + d;
// //   return res;
// // }

// // let x = sum(1, 2, 3, 4,"string",true);
// // console.log(x);

// // //return

// // Default parameters
// // function displayGreeting(message, student = "Rohit") {
// //   console.log(message + ", " + student + "!");
// // }

// // anonymous function
// let displayGreeting = function (message, student) {
//   console.log(message + ", " + student + "!");
// };
// // displayGreeting("Welcome to JS");
// // displayGreeting("Welcome to JS", "Sourav");

// // // anonymous function
// // let add = function (a, b) {
// //   return a + b;
// // };

// // let x = add(2, 3);
// // console.log(x);

// let student_details = ["Sourav", 24, "India", "Masai"];

let numbers = [1, 2, 3, 40, 50, 6, 7, 8];

// console.log(numbers[5]);

//inbuilt functions
//console.log(numbers.length);

let out = 0;
for (let i = 0; i < numbers.length; i++) {
  out += numbers[i];
}

console.log(out);

let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log(largest);

let student_details = {
  name: "Sourav",
  age: 24,
  place: "India",
  school: "Masai",
  unit: 4,
  age: 22,
  greet: function () {
    console.log("Hi welcome to JS");
  },
};

// object method
student_details.greet()

// student_details.percentage = 90;

// //dot notation, bracket notation

// console.log(student_details.name);
// console.log(student_details.age);
// console.log(student_details.place);
// console.log(student_details.unit);
// console.log(student_details.percentage);

// console.log(student_details["name"]);
// console.log(student_details["age"]);
// console.log(student_details["place"]);
// console.log(student_details["unit"]);

// for (let key in student_details) {
//   console.log(key);
//   console.log(student_details[key]);
// }
