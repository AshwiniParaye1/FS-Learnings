// //function declaration / definition / statement

// function declare() {
//   return console.log("function declaration");
// }

// /////////////////////////////////////////////////////////////////////////////////////////

// //function expression

// const expression = function () {
//   return console.log(" functionexpression");
// };

// const expression2 = () => {
//   return console.log(" functionexpression");
// };

// /////////////////////////////////////////////////////////////////////////////////////////

// //first class functions

// function square(num) {
//   return num * num;
// }

// function displaySquare(fn) {
//   return console.log("Square is " + fn(2));
// }

// displaySquare(square);

// /////////////////////////////////////////////////////////////////////////////////////////

// // IIFE

// (function cube(num) {
//   console.log(`cube of ${num} is `, num * num * num);
// })(2);

// /////////////////////////////////////////////////////////////////////////////////////////

// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);

/////////////////////////////////////////////////////////////////////////////////////////

//function scope

// The following variables are defined in the global scope
// const num1 = 20;
// const num2 = 3;
// const name = "Ankit";

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // 60

// // A nested function example
// function getScore() {
//   const num1 = 2;
//   const num2 = 3;

//   function add() {
//     return `${name} scored ${num1 + num2}`;
//   }

//   return add();
// }

// console.log(getScore()); // "Ankit scored 5"

/////////////////////////////////////////////////////////////////////////////////////////

//o/p based question on function scope

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

/////////////////////////////////////////////////////////////////////////////////////////

//function hoisting

// funcName();

// function funcName() {
//   console.log("something");

//   console.log(x);

//   var x = 5;
// }

// console.log(a);

// var a = 4;

/////////////////////////////////////////////////////////////////////////////////////////

// o/p based Question on function hoisting

// var x = 21;

// var fun = function () {
//   console.log(x);

//   var x = 20;
// };

// fun();

/////////////////////////////////////////////////////////////////////////////////////////

//params vs arguments

// function square(num) {
//   console.log(num * num);
// }

// square(5); //arguments

/////////////////////////////////////////////////////////////////////////////////////////

//spread vs rest

// function multiply(...nums) {
//   //   console.log(nums);
//   console.log(nums[0] * nums[1]);
// }
// var arr = [2, 4];
// multiply(...arr); //spread

/////////////////////////////////////////////////////////////////////////////////////////

// o/p based

// const fn = (a, x, y, ...numbers) => {
//   console.log(a, x, y, numbers);
// };

// fn(5, 6, 3, 7, 8, 9);

/////////////////////////////////////////////////////////////////////////////////////////

//callback function

// document.addEventListener("click", function () {});

/////////////////////////////////////////////////////////////////////////////////////////

//arrow functions

// const arrowFn = () => {
//   console.log("sdg");
// };

// function sq() {
//   console.log(arguments);
// }

// sq(1, 2, 3, 4);

// const sq2 = () => {
//   console.log(arguments);
// };

// sq2(1, 2, 3, 4);

/////////////////////////////////////////////////////////////////////////////////////////

// this keyword with normal and arrow function

// let user = {
//   username: "Ashwini",
//   rc1: () => {
//     console.log("hello from " + this.username);
//   },
//   rc2() {
//     console.log("hi from " + this.username);
//   }
// };

// user.rc1();
// user.rc2();
