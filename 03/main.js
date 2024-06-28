// function findSum(n) {
//     let ans = 0
//     for (let i=0; i<n; i++){
//         ans += i
//     }
//     return ans
// }

// function findSumTillN() {
//     console.log(findSum(100));
// }

// setTimeout(findSumTillN, 1000)
// console.log("hello");

// const { log } = require("console");
// const fs = require("fs")
// fs.readFile("ex.txt", "utf-8", function (err, data) {
//     console.log(data);
// })

// console.log("hello");

// let a=0;
// for(let i=0; i<100000000000; i++){
//     a++
// }

// console.log("hi 2");

// console.log("hi");

// setTimeout(function timeout() {
//   console.log("first set timeout function");
// }, 8000);

// setTimeout(function timeout() {
//   console.log("second set timeout function");
// }, 5000);

// let a = 0;
// for (let i = 0; i < 10; i++) {
//   a = a + 1;
// }

// console.log(a);

// console.log("hi");

// function calculateSum() {
//   let a = 0;
//   for (let i = 0; i < 10; i++) {
//     a = a + 1;
//   }
//   console.log(a);
// }

// calculateSum();

// const fs = require("fs");

// //own asyn function
// function ashwiniReadsFile(cb) {
//   fs.readFile("ex.txt", "utf-8", function (err, data) {
//     cb(data);
//   });
// }

// //callback function to call
// function onDone(data) {
//   console.log(data);
// }

// ashwiniReadsFile(onDone);

//promises
// const fs = require("fs");

// //own async function
// function ashwiniReadsFile(cb) {
//   return new Promise(function (resolve) {
//     console.log("inside promise");
//     fs.readFile("ex.txt", "utf-8", function (err, data) {
//       console.log("before resolve");
//       resolve(data);
//     });
//   });
// }

// //callback function to call
// function onDone(data) {
//   console.log(data);
// }

// // ashwiniReadsFile().then(onDone);
// var a = ashwiniReadsFile();
// console.log("a==", a);
// a.then(onDone);

// var d = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve("foo");
//   }, 1000);
// });

// function callback() {
//   console.log(d);
// }

// console.log(d);
// d.then(callback);

// let p = new Promise(function (resolve) {
//   resolve("hi there");
// });

// p.then(function () {
//   console.log(p);
// });

// function ashwinisAsyncFunction(params) {
//   var d = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve("hi there from promise");
//     }, 2000);
//   });
//   return d;
// }

// async function main() {
//   // no callbacks, no .then syntax
//   // ashwinisAsyncFunction.then(function(value){
//   //     console.log(value);
//   // })
//   let value = await ashwinisAsyncFunction();
//   console.log("hi there after await");
//   console.log(value);
// }

// main();
// console.log("after main");
