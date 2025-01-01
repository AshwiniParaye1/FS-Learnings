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

//currying
//example f(a,b) into f(a)(b)

// function a(a, b) {
//   console.log(a, b);
// }

// a(2, 2);

// function a(a) {
//   return function b(b) {
//     console.log(a, b);
//   };
// }

// a(2)(3);

/////////////////////////////////////////////////////////////////////////////////////////

// Q1 - implement sum(2)(6)(1)

// function sum(num1) {
//   return function (num2) {
//     return function (num3) {
//       console.log(num1 + num2 + num3);
//     };
//   };
// }

// sum(2)(6)(1);

/////////////////////////////////////////////////////////////////////////////////////////

//Q2 - evaluate ('sum')(4)(2) => 6
// evaluate ('multiply')(4)(2) => 8
// evaluate ('divide')(4)(2) => 2
// evaluate ('substract')(4)(2) => 2

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") {
//         return a + b;
//       } else if (operation === "multiply") {
//         return a * b;
//       } else if (operation === "divide") {
//         return a / b;
//       } else if (operation === "substract") {
//         return a - b;
//       }
//     };
//   };
// }

// console.log(evaluate("sum")(2)(2));

// const mul = evaluate("multiply");
// console.log(mul(2)(8));
// console.log(mul(4)(5));

/////////////////////////////////////////////////////////////////////////////////////////

// Q3 = Infinite currying =>  sum(1)(2)(3)....(n)

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }

// console.log(add(1)(2)(2)(3));

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }

// console.log(add(2)(2)(2)());

/////////////////////////////////////////////////////////////////////////////////////////

// Q4 - currying vs partial application

// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// const x = sum(2);
// console.log(x(2, 4));
// console.log(x(20, 4));

// console.log(sum(2)(4, 4));

/////////////////////////////////////////////////////////////////////////////////////////

// Q5 - real world example- manipulating dom

// function updateElementText(id) {
//   return function (content) {
//     document.querySelector("#" + id).textContent = content;
//   };
// }

// const updateQuote = updateElementText("quote");

// updateQuote("Keep Going, Keep Growing");

/////////////////////////////////////////////////////////////////////////////////////////

// Q6 - curry() implementation

// converts f(a,b,c) => f(a)(b)(c)

// function curry(func) {
//   return function curriedFunc(...args) {
//     if (args.length >= func.length) {
//       return func(...args);
//     } else {
//       return function (...next) {
//         return curriedFunc(...args, ...next);
//       };
//     }
//   };
// }

// const sum = (a, b, c, d) => a + b + c + d;

// const totalSum = curry(sum);

// console.log(totalSum(1)(2)(3)(4));

/////////////////////////////////////////////////////////////////////////////////////////
