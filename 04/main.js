// function square(n) {
//   return n * n;
// }
// function cube(n) {
//   return n * n * n;
// }

// function sumOfSomething(a, b, fn) {
//   let square1 = fn(a);
//   let square2 = fn(b);
//   return square1 + square2;
// }

// let ans = sumOfSomething(1, 2, square);
// console.log(ans);

// console.log("hii");

// function onDOne() {
//   console.log("inside onDone");
// }

// setTimeout(onDOne, 5000);

// console.log("last log");

// console.log("hii");

// setTimeout(function () {
//   console.log("inside set timeout");
// }, 5000);

// let a = 0;
// for (let i = 0; i < 10; i++) {
//   a = a + 1;
// }
// console.log("a==", a);

// console.log("last log");

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log(data);

//   data = data + "Hello from Ashwini";
//   fs.writeFile("a.txt", function () {
//     console.log(data);
//   });
// });

// function myOwnSetTimeoutFn(fn, duration) {
//   console.log("hi before set timeout");
//   setTimeout(fn, duration);
// }

// myOwnSetTimeoutFn(function () {
//   console.log("hi from my fn");
// }, 5000);

// setTimeout(function () {
//   console.log("hi from first one");

//   setTimeout(function () {
//     console.log("hi from second one");
//   }, 2000);
// }, 1000);

// const p = new Promise(function (resolve) {
//   setTimeout(resolve, 2000);
// });

// p.then();

// console.log("hi there");

// function somePromisifiedFn(duration) {
//   const p = new Promise(function (resolve) {
//     setTimeout(resolve, duration);
//   });
//   return p;
// }

// //promise chaining
// somePromisifiedFn(1000).then(function () {
//   console.log("first");

//   somePromisifiedFn(2000).then(function () {
//     console.log("second");
//   });
// });

// function sum(a, b) {
//   return new Promise(function (resolve) {
//     resolve(a + b);
//   });
// }

// sum(1, 2).then(function (ans) {
//   console.log(ans);
// });

// console.log("at the top 1");

// function promisifiedTimeout() {
//   console.log("function called 3");
//   return new Promise(function (resolve) {
//     console.log("inside promise 4");
//     setTimeout(function () {
//       console.log("inside set timeout 5");
//       resolve("resolved the promise");
//     }, 5000);
//   });
// }

// console.log("in the middle 2");

// promisifiedTimeout().then(function (value) {
//   console.log("inside .then 6");
//   console.log(value);
// });
