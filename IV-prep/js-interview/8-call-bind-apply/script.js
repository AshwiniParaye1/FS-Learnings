// call, bind and apply - explicit binding

/////////////////////////////////////////////////////////////////////////////////////////

//call
// var obj = { name: "JavaScript" };

// function sayHello(age) {
//   console.log("Hello " + this.name + " is " + age + " years old");
// }

// sayHello.call(obj, 30);

/////////////////////////////////////////////////////////////////////////////////////////

//apply
// var obj = { name: "JavaScript" };

// function sayHello(age, profession) {
//   console.log(
//     "Hello " +
//       this.name +
//       " is " +
//       age +
//       " years old" +
//       " and is a " +
//       profession
//   );
// }

// sayHello.apply(obj, [30, "language"]);

/////////////////////////////////////////////////////////////////////////////////////////

//bind
// var obj = { name: "JavaScript" };

// function sayHello(age, profession) {
//   return (
//     "Hello " +
//     this.name +
//     " is " +
//     age +
//     " years old" +
//     " and is a " +
//     profession
//   );
// }

// const bindFunc = sayHello.bind(obj);

// console.log(bindFunc(30, "language"));
// console.log(bindFunc(60, "magical language"));

/////////////////////////////////////////////////////////////////////////////////////////

// o/p based questions

// var person = { name: "Ashwini" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 24));
// console.log(sayHi.bind(person, 28));

/////////////////////////////////////////////////////////////////////////////////////////

// const age = 10;

// var person = {
//   name: "Ashwini",
//   age: 20,
//   getAge: function () {
//     return this.age;
//   }
// };

// var person2 = { age: 25 };

// console.log(person.getAge());
// console.log(person.getAge.call(person2));

/////////////////////////////////////////////////////////////////////////////////////////

// var status = "😎";

// setTimeout(() => {
//   const status = "😍";

//   const data = {
//     status: "🥑",
//     getStatus() {
//       return this.status;
//     }
//   };

//   console.log(data.getStatus()); //🥑
//   console.log(data.getStatus.call(this)); //😎
// }, 0);

/////////////////////////////////////////////////////////////////////////////////////////

// call printAnimals such that it prints all animals

// const animals = [
//   {
//     species: "Lion",
//     name: "King"
//   },
//   {
//     species: "Whale",
//     name: "Queen"
//   }
// ];

// function printAnimals(i) {
//   this.print = function () {
//     console.log(`# ${i} ${this.species} : ${this.name}`);
//   };

//   this.print();
// }

// for (let i = 0; i < animals.length; i++) {
//   printAnimals.call(animals[i], i);
// }

/////////////////////////////////////////////////////////////////////////////////////////

// append an array to another array without using concat

// const arr = [1, 2, 3];
// const elements = ["a", "b", "c"];

// arr.push.apply(arr, elements);

// console.log(arr);

// const newArr = arr.concat(elements);

// console.log(arr);
// console.log(newArr);

// for (let i = 0; i < elements.length; i++) {
//   arr.push(elements[i]);
// }

// console.log(arr);

/////////////////////////////////////////////////////////////////////////////////////////

// using apply to enhance built in functions
//find min/max number in an  array

const numbers = [5, 6, 2, 3, 7];

// let max = numbers[0];
// let min = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   } else if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log(max);
// console.log(min);

// console.log(Math.max.apply(null, numbers));
// console.log(Math.min.apply(null, numbers));

/////////////////////////////////////////////////////////////////////////////////////////

//bound function

// function f() {
//   console.log(this);
// }

// let user = {
//   g: f.bind(null)
// };

// user.g();

/////////////////////////////////////////////////////////////////////////////////////////

// bind chaining

// function f() {
//   console.log(this.name);
// }

// f = f.bind({ name: "John" }).bind({ name: "Doe" });

// f();

/////////////////////////////////////////////////////////////////////////////////////////

//fix the line 22 to make code work properly

// function checkPassword(success, failed) {
//   let password = prompt("Password?", "");
//   if (password === "newpass") success();
//   else failed();
// }

// let user = {
//   name: "Ashwini Paraye",

//   loginSuccessfull() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFailed() {
//     console.log(`${this.name} failed to log in`);
//   }
// };

// checkPassword(user.loginSuccessfull.bind(user), user.loginFailed.bind(user));

/////////////////////////////////////////////////////////////////////////////////////////

// partial application for login function

// function checkPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password === "newpass") ok();
//   else fail();
// }

// let user = {
//   name: "Ashwini Paraye",

//   login(result) {
//     console.log(this.name + (result ? " login successful" : " login failed"));
//   }
// };

// checkPassword(user.login.bind(user, true), user.login.bind(user, false));

/////////////////////////////////////////////////////////////////////////////////////////

// explicit binding with arrow function

// const age = 10;

// var person = {
//   name: "Ashwini",
//   age: 20,
//   getAgeArrow: () => console.log("arrow=== ", this.age),
//   getAge: function () {
//     console.log("normal === ", this.age);
//   }
// };

// var person2 = { age: 44 };

// person.getAge.call(person2);
// person.getAgeArrow.call(person2);

/////////////////////////////////////////////////////////////////////////////////////////

// polyfill for call method

let car1 = {
  color: "Red",
  company: "Ferrari"
};

function purchasedCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
}

// purchasedCar.call(car1, "₹", 5000000);

//polyfill
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, "It's not callable");
  }

  context.fn = this;
  context.fn(...args);
};

purchasedCar.myCall(car1, "₹", 5000000);
