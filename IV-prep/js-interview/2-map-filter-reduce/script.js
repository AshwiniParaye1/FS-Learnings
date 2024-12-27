//map, filter, reduce

// const nums = [1, 2, 3, 4];

// const multiply3 = nums.map((num) => {
//   return num * 3;
// });

// console.log(multiply3);

// const moreThan2 = nums.filter((num) => {
//   return num > 2;
// });

// console.log(moreThan2);

// const sum = nums.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);

///////////////////////////////////////////////////////////////////////////////////////

//polyfill for map

// arr.map((curr, i, arr) => {});

// Array.prototype.myMap = function (cb) {
//   let temp = [];

//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }

//   return temp;
// };

// const nums = [1, 2, 3, 4];

// const multiply3 = nums.myMap((num) => {
//   return num * 3;
// });

// console.log(multiply3);

///////////////////////////////////////////////////////////////////////////////////////

//polyfill for filter

// arr.filter((curr, i, arr) => {});

// Array.prototype.myFilter = function (cb) {
//   let temp = [];

//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }

//   return temp;
// };

// const nums = [1, 2, 3, 4];

// const moreThan2 = nums.myFilter((num) => {
//   return num > 2;
// });

// console.log(moreThan2);

///////////////////////////////////////////////////////////////////////////////////////

//polyfill for reduce

// arr.reduce((acc, curr, i, arr) => {}, initialValue);

// Array.prototype.myReduce = function (cb, initialValue) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//   }

//   return accumulator;
// };

// const nums = [1, 2, 3, 4];

// const sum = nums.myReduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);

///////////////////////////////////////////////////////////////////////////////////////

// o/p based questions

// let students = [
//   { name: "Aryan", rollNumber: 63, marks: 25 },
//   { name: "Harsh", rollNumber: 71, marks: 62 },
//   { name: "Meera", rollNumber: 83, marks: 93 },
//   { name: "Sneha", rollNumber: 2, marks: 84 },
//   { name: "Aditi", rollNumber: 94, marks: 72 }
// ];

// Q1 - return only names of students in capital

// let names = [];

// for (let i = 0; i < students.length; i++) {
//   names.push(students[i].name.toUpperCase());
// }

// const names = students.map((stud) => stud.name.toUpperCase());

// console.log(names);

///////////////////////////////////////////////////////////////////////////////////////

// Q2 = return only details of those who scored more than 60 marks

// let students = [
//   { name: "Aryan", rollNumber: 63, marks: 25 },
//   { name: "Harsh", rollNumber: 71, marks: 62 },
//   { name: "Meera", rollNumber: 83, marks: 93 },
//   { name: "Sneha", rollNumber: 2, marks: 84 },
//   { name: "Aditi", rollNumber: 94, marks: 32 }
// ];

// let details = [];

// for (let i = 0; i < students.length; i++) {
//   if (students[i].marks > 60) {
//     details.push(students[i]);
//   }
// }

// const details = students.filter((stud) => stud.marks > 60);

// console.log(details);

///////////////////////////////////////////////////////////////////////////////////////

// Q3 = marks more than 60 and roleNumber greater than 15

// let students = [
//   { name: "Aryan", rollNumber: 63, marks: 25 },
//   { name: "Harsh", rollNumber: 71, marks: 62 },
//   { name: "Meera", rollNumber: 15, marks: 93 },
//   { name: "Sneha", rollNumber: 2, marks: 84 },
//   { name: "Aditi", rollNumber: 94, marks: 32 }
// ];

// const details = students.filter(
//   (stud) => stud.marks > 60 && stud.rollNumber > 15
// );

// console.log(details);

///////////////////////////////////////////////////////////////////////////////////////

// Q3 = sum of marks of all students

// let students = [
//   { name: "Aryan", rollNumber: 63, marks: 25 },
//   { name: "Harsh", rollNumber: 71, marks: 62 },
//   { name: "Meera", rollNumber: 15, marks: 93 },
//   { name: "Sneha", rollNumber: 2, marks: 84 },
//   { name: "Aditi", rollNumber: 94, marks: 32 }
// ];

// const sum = students.reduce((acc, curr) => acc + curr.marks, 0);

// console.log(sum);

///////////////////////////////////////////////////////////////////////////////////////

// Q3 = return only names of students who scored more than 60

// let students = [
//   { name: "Aryan", rollNumber: 63, marks: 25 },
//   { name: "Harsh", rollNumber: 71, marks: 62 },
//   { name: "Meera", rollNumber: 15, marks: 93 },
//   { name: "Sneha", rollNumber: 2, marks: 84 },
//   { name: "Aditi", rollNumber: 94, marks: 32 }
// ];

// const names = students
//   .filter((stud) => stud.marks > 60)
//   .map((stude) => stude.name);

// console.log(names);

///////////////////////////////////////////////////////////////////////////////////////

// Q3 = return total marks for students with marks grater than 60 after 20 marks have been added to those who scored less than 60

// let students = [
//   { name: "Aryan", rollNumber: 63, marks: 25 },
//   { name: "Harsh", rollNumber: 71, marks: 62 },
//   { name: "Meera", rollNumber: 15, marks: 93 },
//   { name: "Sneha", rollNumber: 2, marks: 84 },
//   { name: "Aditi", rollNumber: 94, marks: 32 }
// ];

// const totalMarks = students
//   .map((stud) => {
//     if (stud.marks < 60) {
//       stud.marks += 20;
//     }

//     return stud;
//   })
//   .filter((stud) => stud.marks > 60)
//   .reduce((acc, curr) => acc + curr.marks, 0);

// console.log(totalMarks);
