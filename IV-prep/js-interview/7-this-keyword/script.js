// this keyword - implicit binding

/////////////////////////////////////////////////////////////////////////////////////////

// this.a = 5;

// console.log(this.a);

/////////////////////////////////////////////////////////////////////////////////////////

// this.a = 5;

// function getParam() {
//   console.log(this.a);
// }

// getParam();

/////////////////////////////////////////////////////////////////////////////////////////

// let user = {
//   name: "JavaScript",
//   age: 30,
//   getDetails() {
//     console.log(this.name); //JavaScript
//     console.log(this);
//   }
// };

// user.getDetails();

/////////////////////////////////////////////////////////////////////////////////////////

// let user = {
//   name: "JavaScript",
//   age: 30,
//   childObj: {
//     newName: "TypeScript",
//     getDetails() {
//       console.log(this.newName, "and", this.name); //TypeScript and undefined
//     }
//   }
// };

// user.childObj.getDetails();

/////////////////////////////////////////////////////////////////////////////////////////

// with arrow function

// let user = {
//   name: "JavaScript",
//   age: 30,
//   getDetails: () => {
//     console.log(this.name); //returns nothing and referes to window obj
//     console.log(this);
//   }
// };

// user.getDetails();

/////////////////////////////////////////////////////////////////////////////////////////

// with arrow function

// let user = {
//   name: "JavaScript",
//   age: 30,
//   getDetails() {
//     const nested = () => {
//       console.log("this === ", this);
//       console.log("this.name === ", this.name);
//     };
//     nested();
//   }
// };

// user.getDetails();

/////////////////////////////////////////////////////////////////////////////////////////

// inside class or a constructor

// class user {
//   constructor(n) {
//     this.name = n;
//   }

//   getName() {
//     console.log(this.name);
//   }
// }

// const User = new user("Ashwini");

// console.log(User);
// User.getName();

/////////////////////////////////////////////////////////////////////////////////////////

// Q1 - what's the o/p

// const user = {
//   firstname: "JavaScript",
//   getName() {
//     const firstname = "TypeScript";
//     return this.firstname;
//   }
// };

// console.log(user.getName());

/////////////////////////////////////////////////////////////////////////////////////////

// Q2 - what is the result of accessing its ref

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// console.log(user.ref);

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     }
//   };
// }

// let user = makeUser();

// console.log(user.ref().name);

/////////////////////////////////////////////////////////////////////////////////////////

// Q3 -

// const user = {
//   name: "JavaScript",
//   logMessage() {
//     console.log(this.name);
//   }
// };

// setTimeout(user.logMessage, 1000);

// const user = {
//   name: "JavaScript",
//   logMessage() {
//     console.log(this.name);
//   }
// };

// setTimeout(function () {
//   user.logMessage();
// }, 1000);

/////////////////////////////////////////////////////////////////////////////////////////

// Q4 -

// const user = {
//   name: "JavaScript",
//   greet() {
//     return `Hello, ${this.name}!`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.name}!`;
//   }
// };

// console.log(user.greet());
// console.log(user.farewell());

/////////////////////////////////////////////////////////////////////////////////////////

// Q5 - create an object calculator

// let calculator = {
//   read() {
//     this.a = +prompt("a = ", 0);
//     this.b = +prompt("b = ", 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   multi() {
//     return this.a * this.b;
//   }
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.multi());

/////////////////////////////////////////////////////////////////////////////////////////

// Q6 -

// var length = 4;

// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   }
// };

// object.method(callback);

/////////////////////////////////////////////////////////////////////////////////////////

// var length = 4;

// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method() {
//     //arguments = [callback, 6, 8]
//     console.log("args === ", arguments);

//     arguments[0]();
//   }
// };

// object.method(callback, 6, 8);

/////////////////////////////////////////////////////////////////////////////////////////

// Q7 - implement calc

// const calc = {
//   total: 0,
//   add(a) {
//     this.total += a;
//     return this;
//   },
//   multiply(a) {
//     this.total *= a;
//     return this;
//   },
//   substract(a) {
//     this.total -= a;
//     return this;
//   }
// };

// const result = calc.add(20).multiply(5).substract(30).add(10);

// console.log(result.total);
