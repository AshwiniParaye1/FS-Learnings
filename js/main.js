// var n = 4;

// function sq(num) {
//   var ans = num * num;
//   return ans;
// }

// var sq4 = sq(n);
// var sq8 = sq(8);

// console.log(sq4);
// console.log(sq8);

/////////////////////////////////////////////////////////////////////////////

//! Hoisting

// getName();
// console.log(a);

// console.log(getName);

// var a = 8;

// function getName() {
//   console.log("Hello from getName()");
// }

// getName();
// console.log(a);

// console.log(getName);

////////////////////////////////////////////////////////////////////////////////

// var a = 8;

// function getName() {
//   console.log("Hello from getName()");
// }

// getName();
// console.log(a);

////////////////////////////////////////////////////////////////////////////////

// getName();
// console.log(a);
// console.log(getName);

// var a = 8;

// function getName() {
//   console.log("Hello from getName()");
// }

////////////////////////////////////////////////////////////////////////////////

// getName();
// console.log(a);
// console.log(getName);

// var a = 8;

// var getName2 = function () {
//   console.log("func 2");
// };

// var getName = () => {
//   console.log("Hello from getName()");
// };

////////////////////////////////////////////////////////////////////////////////

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }

////////////////////////////////////////////////////////////////////////////////

// var a = 10;

// function b() {
//   var x = 20;
// }

// console.log(window.a);
// console.log(a);
// console.log(this.a);

////////////////////////////////////////////////////////////////////////////////

//!  undefined and not defined

// console.log(a);
// var a = 10;

// console.log(x);

////////////////////////////////////////////////////////////////////////////////

//! scope chain

// console.log(b); //// undefined

// function a() {
//   console.log(b); //// 10
// }

// a(); //// undefined
// var b = 10;
// a();

////////////////////////////////////////////////////////////////////////////////

// var z = 88;

// function a() {
//   var b = 10;

//   c();

//   function c() {
//     console.log("inside c : ", b); //// 10

//     d();

//     function d() {
//       var x = 80;

//       console.log("d() : ", b); //// 10

//       console.log("zzzzzz: ", z);
//     }

//     console.log("x : ", x); //// not defined
//   }

//   console.log("inside a: ", x); //// not defined
// }

// a();

// console.log("global : ", b); //// not defined

////////////////////////////////////////////////////////////////////////////////

// function a() {
//   var b = 10;

//   c();

//   function c() {
//     console.log("inside b: ", b);
//   }
// }

// a();

////////////////////////////////////////////////////////////////////////////////

//! let, var, const | temporal dead zone

// console.log("b: ", b);
// console.log("c: ", c);
// console.log("a: ", a);

// let a = 100;
// var b = 10;
// const c = 50;

////////////////////////////////////////////////////////////////////////////////

// console.log("fgsgs");

// let a = 10;

// // let a = 90;         ///// syntax error

// // var a = 88;         //// syntax error

// var b = 2;

// var b = 22;

// const f;

// f=99

////////////////////////////////////////////////////////////////////////////////

//! block scope

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

////////////////////////////////////////////////////////////////////////////////

//! shadowing

// let a = 20;

// var b = 30;

// const c = 40;

// {
//   let a = 200;
//   console.log("inside block let a: ", a);

//   var b = 300;
//   console.log("inside block var b: ", b);

//   const c = 400;
//   console.log("inside block const c: ", c);
// }

// console.log("outside block let a: ", a);
// console.log("outside block var b: ", b);
// console.log("outside block const c: ", c);

////////////////////////////////////////////////////////////////////////////////

//! illegal shadowing

////////////////////////////////////////////////////////////////////////////////

//! closures

// function z() {
//   var p = 44;

//   function x() {
//     var a = 8;

//     function y() {
//       console.log(a, p);
//     }

//     a = 200;
//     y();
//   }

//   x();
// }

// z();

////////////////////////////////////////////////////////////////////////////////

//! closures and setTimeout

// function x() {
//   var i = 1;

//   setTimeout(function () {
//     console.log("after 3 sec: ", i);
//   }, 3000);

//   console.log("hello from outside setTimeout");
// }

// x();

////////////////////////////////////////////////////////////////////////////////

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }

//   console.log("hello");
// }

// x();

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     function close(y) {
//       setTimeout(() => {
//         console.log(y);
//       }, y * 1000);
//     }
//     close(i);
//   }

//   console.log("hello");
// }

// x();

////////////////////////////////////////////////////////////////////////////////

// function outest() {
//   var c = 300;
//   function outer(b) {
//     // var a = 10;

//     function inner() {
//       console.log(a);
//       console.log(b);
//       console.log(c);
//     }
//     let a = 10;
//     //   inner();
//     return inner;
//   }
//   return outer;
// }

// // console.log("a", a); //gives error a is not defined

// // outer()();

// // var close = outer("hello from param b");
// let a = 100;
// var close = outest()("hello from param b");
// close();

////////////////////////////////////////////////////////////////////////////////

// var count = 0;

// function incrementCounter() {
//   count++;
// }

// incrementCounter();

// console.log(count);

////////////////////////////////////////////////////////////////////////////////

// function counter() {
//   var count = 0;
//   return function incrementCounter() {
//     count++;
//     console.log(count);
//   };
// }

// // console.log(count);

// var counter1 = counter();
// var counter2 = counter();

// counter1();
// counter2();

////////////////////////////////////////////////////////////////////////////////

//! function constructor

// function Counter() {
//   var count = 0;

//   this.incrementCounter = function () {
//     count++;
//     console.log(count);
//   };
//   this.decrementCounter = function () {
//     count--;
//     console.log(count);
//   };
// }

// var counter1 = new Counter();

// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

////////////////////////////////////////////////////////////////////////////////

// function a() {
//   var x = 0;

//   return function b() {
//     console.log(x);
//   };
// }

// a();

////////////////////////////////////////////////////////////////////////////////

//function statement / declaration
// function a() {
//   console.log("a called");
// }
// a();

// //function expression
// var b = function () {
//   console.log("b called");
// };
// b();

//anonymous function
// function (){

// }

//named function expression
// var b = function namedFunc() {
//   console.log(namedFunc);
// };

// b();
// namedFunc();

////////////////////////////////////////////////////////////////////////////////

//parameter and arguments

// var b = function namedFunc(param1) {
//   console.log(param1);
// };

// b("hi from param1");

//first class functions
// var b = function (param1) {
//   return function () {};
// };

// console.log(b());

////////////////////////////////////////////////////////////////////////////////

//! callback functions

// function x(y) {
//   console.log("hello from x");

//   y();
// }

// x(function y() {
//   console.log("hello from y callback");
// });

////////////////////////////////////////////////////////////////////////////////

// setTimeout(function () {
//   console.log("timer");
// }, 3000);

// function x(y) {
//   console.log("hello from x");

//   y();
// }

// x(function y() {
//   console.log("hello from y callback");
// });

////////////////////////////////////////////////////////////////////////////////

//! event listener

// function attachEventListener() {
//   document.getElementById("click").addEventListener("click", function xyz() {
//     this.style = "background-color:red";
//     console.log("hey! bg is red now");
//   });
// }

////////////////////////////////////////////////////////////////////////////////

//! event loop

// console.log("start");

// setTimeout(function cb() {
//   console.log("callback");
// }, 3000);

// console.log("end");

////////////////////////////////////////////////////////////////////////////////

// var a = 10;

// function x() {
//   console.log("x1", a);

//   var a = 20;

//   function y() {
//     var a = 30;

//     console.log("y", a);
//   }

//   y();

//   console.log("x2", a);
// }

// x();

////////////////////////////////////////////////////////////////////////////////

//! higher order functions

// function x() {
//   console.log("callback function");
// }

// function higher(x) {
//   console.log("higher order function");
//   x();
// }

// higher();

////////////////////////////////////////////////////////////////////////////////

// const radius = [3, 2, 2, 1];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const diameter = function (radius) {
//   return 2 * radius;
// };

// const calculate = function (radius, logic) {
//   const output = [];

//   for (i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }

//   return output;
// };

// console.log(calculate(radius, area));
// console.log(calculate(radius, diameter));

// console.log(radius.map(area));

////////////////////////////////////////////////////////////////////////////////
