//closures
//lexical scope

// var username = "Ashwini Paraye"; //global scope

// function local() {
//   console.log(username);

//   var localVar = "local variable";
// }

// console.log(localVar);

// local();

/////////////////////////////////////////////////////////////////////////////////////////

// function user() {
//   var name = "ashwini";

//   function displayName() {
//     //inner scope
//     alert(name);
//   }

//   displayName();
// }

// user();

/////////////////////////////////////////////////////////////////////////////////////////

//closures

// function outer() {
//   var name = "Mozilla";

//   function displayName() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// outer();

/////////////////////////////////////////////////////////////////////////////////////////

//closures scope chain

// let glob = "global var,";

// function outest() {
//   let a = 3;

//   function outer() {
//     var name = "Mozilla,";

//     function displayName() {
//       // displayName() is the inner function, that forms a closure
//       console.log(name, glob, a); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   outer();
// }

// outest();

/////////////////////////////////////////////////////////////////////////////////////////

//Q- write a function that would allow you to do this

// var addSix = createBase(6);
// addSix(10);      //returns 16
// addSix(21);      //returns 27

// function createBase(num) {
//   return function (innerNum) {
//     console.log(innerNum + num);
//   };
// }

// var addSix = createBase(6);
// addSix(10); //returns 16
// addSix(21); //returns 27

/////////////////////////////////////////////////////////////////////////////////////////

// Q - time optimization

// function find(index) {
//   let a = [];

//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }

//   console.log(a[index]);
// }

// console.time("6");
// find(6);
// console.timeEnd("6");

// console.time("50");
// find(50);
// console.timeEnd("50");

/////////////////////////////////////////////////////////////////////////////////////////

// Q - time optimization of above with closure

// function find() {
//   let a = [];

//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }

//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const closure = find();

// console.time("6");
// closure(6);
// console.timeEnd("6");

// console.time("50");
// closure(50);
// console.timeEnd("50");

/////////////////////////////////////////////////////////////////////////////////////////

// Q - block scope and setTimeout

// function a() {
//   for (var i = 0; i < 3; i++) {
//     function inner(i) {
//       setTimeout(function log() {
//         console.log(i);
//       }, i * 1000);
//     }
//     inner(i);
//   }
// }
// a();

/////////////////////////////////////////////////////////////////////////////////////////

// Q - how would you use a closure to create a private counter

// function counterFunc() {
//   var count = 0;

//   function calculateCounter() {
//     for (let i = 0; i < 5; i++) {
//       console.log(count++);
//     }
//   }

//   return calculateCounter;
// }

// const x = counterFunc();
// x();

/////////////////////////////////////////////////////////////////////////////////////////
