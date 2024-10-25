// push -> array.push(item1,item2,....itemN)
// nums.push(100, 20, 30,"abc");
// console.log(nums);

//pop -> array.pop()
// nums.pop(); // [3,5,9]
// console.log(nums);

//shift() -> array.shift()

// nums.shift();
// console.log(nums); //[5,9,10]

//unshift() -> array.unshift(29,49)

// nums.unshift(29, 49);
// console.log(nums);

//concat()
// let ids = [90, 20, 30];
// let res = ids.concat(nums);
// console.log(res);

//indexOf() -> indexOf(elem,startIndex)

// let res = nums.indexOf(5, 4);
// console.log(res);

//includes() -> includes(element,start)

// let res = nums.includes(5, 3);
// console.log(res);

//array.join(seperator)
// let res = nums.join();
// console.log(res);

//array.splice(start,removeCount,newItem,newItem2,.....)
// let months = ["January", "February", "Monday", "Tuesday"];

// let days = months.splice(2, 2, "March", "April");

// console.log(days);
// console.log(months);

// let students = ["Alice", "Bob", "Charlie", "David"];

// // Add a student 'Eve' at position 2 without removing any student
// students.splice(2, 0, "Eve");

// console.log(students);

// // Remove the student at position 1 (Bob)
// students.splice(1,1)
// console.log(students)

// // Replace the student at position 0 (Alice) with 'Frank'
// students.splice(0,1,"Frank")
// console.log(students)

//array.slice(start,end)
// let nums = [3, 5, 9, 10, 60, 50, 5];
// let res = nums.slice(3, -1);
// console.log(res);
// console.log(nums);

// console.log(nums.length);

//let str = "Mahsai school";

//console.log(str.length);
//console.log(str.toLowerCase());
// console.log(str.charAt(0));

// console.log(str.substring(1, 4));

// console.log(str.replace("school", "University"));

// console.log(str.indexOf("school"));

//slice()

//trim

//console.log(str.trim());

// console.log(str.split("h"))

// let str = "10 20 30";
// let input = str.trim().split(" ").map(Number)
// console.log(input);

// let person = {
//   name: "bob",
//   age: 35,
//   greet: function () {
//     console.log("hi bob");
//   },
// };
// person.greet()

let car = {
  name: "Brezza",
  model: "ZXI",
  year: 2023,
};

// Object.keys(objectName)
//console.log(Object.keys(car));
// Object.values(objectName)
//console.log(Object.values(car));

//object.entries()
console.log(Object.entries(car)); // firebase database

// Object.assign()

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4, a: 10 };
//let obj2 = { c: 3, d: 4, a: 10,a:1,b:2 };

let res = Object.assign(obj2, obj1);
console.log(res);

//freeze

let student = {
  name: "Arpit",
  age: 22,
  place: "India",
};

Object.seal(student);
// cannot add, cant delete, can modify
student.name = "Sourav";
student.school = "Masai";
console.log(student);

// seal()
