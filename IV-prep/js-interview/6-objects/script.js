//objects - accessing, modifying, deleting

// const user = {
//   name: "Ashwini Paraye",
//   age: 26
// };

// console.log(user.name);

// user.name = "Ashwini";

// delete user.age;

// console.log(user);

/////////////////////////////////////////////////////////////////////////////////////////

// const func = (function (a) {
//   delete a;
//   return a;
// })(5);
// console.log(func);

/////////////////////////////////////////////////////////////////////////////////////////

// const user = {
//   name: "Ashwini",
//   age: 26,
//   "learned something today": true
// };

// console.log(user);
// console.log(user["learned something today"]);

// delete user["learned something today"];

// console.log(user);

/////////////////////////////////////////////////////////////////////////////////////////

// adding dynamic key value pairs to the object

// const property = "firstname";
// const name = "Ashwini Paraye";

// const user = { property: name };
// const user2 = { [property]: name };

// console.log(user);
// console.log(user2);

/////////////////////////////////////////////////////////////////////////////////////////

// looping through object keys and print values

// const user = {
//   name: "Ashwini",
//   age: 26,
//   "learned something today": true
// };

// // for (key in user) {
// //   console.log(key);
// // }

// for (const key in user) {
//   console.log(user[key]);
// }

// const fruits = ["apple", "banana", "cherry"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

/////////////////////////////////////////////////////////////////////////////////////////

// Q1 - what's the o/p

// const obj = {
//   a: "one",
//   b: "two",
//   a: "three"
// };

// console.log(obj);

/////////////////////////////////////////////////////////////////////////////////////////

// Q1 - create a function multiplyByTwo(obj) that multiplies all numeric property values  of nums by 2

// let nums = {
//   a: 100,
//   b: 200,
//   title: "my nums"
// };

// function multiplyByTwo(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyByTwo(nums);

// console.log(nums);

/////////////////////////////////////////////////////////////////////////////////////////

// Q2 - what's the o/p of following

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]); //456

/////////////////////////////////////////////////////////////////////////////////////////

// Q3 - what is JSON.stringify and JSON.parse

// const user = {
//   name: "javascript",
//   age: 30
// };

// const strObj = JSON.stringify(user);

// console.log(strObj);

// console.log(JSON.parse(strObj));

/////////////////////////////////////////////////////////////////////////////////////////

// console.log([..."String"]);

/////////////////////////////////////////////////////////////////////////////////////////

// Q6 -

// const user = { name: "Javascript", age: 30 };
// const admin = { admin: true, ...user };

// console.log(admin);

/////////////////////////////////////////////////////////////////////////////////////////

// Q7 -

// const settings = {
//   username: "ashwini",
//   level: 19,
//   health: 100
// };

// const data = JSON.stringify(settings, ["level", "health"]);

// console.log(data);

/////////////////////////////////////////////////////////////////////////////////////////

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

/////////////////////////////////////////////////////////////////////////////////////////

// Q9 = what is destructuring in objects

// let user = {
//   name: "javascript",
//   age: 30
// };

// const { name } = user;

// const { name: Myname } = user; //renaming
// // console.log(name);
// console.log(Myname);

/////////////////////////////////////////////////////////////////////////////////////////

//nested destructuring

// let user = {
//   name: "javascript",
//   age: 30,
//   fullname: {
//     first: "first",
//     second: "second"
//   }
// };

// const name = "learn js";

// const {
//   fullname: { first }
// } = user;

// console.log(first, name);

/////////////////////////////////////////////////////////////////////////////////////////

// function getItems(fruitList, favouriteFruit, ...args) {
//   return [...fruitList, ...args, favouriteFruit];
// }

// console.log(getItems(["banana", "apple"], "pear", "orange"));

/////////////////////////////////////////////////////////////////////////////////////////

// let c = { greetings: "Hey!" };
// let d;

// d = c;
// c.greetings = "Hello";
// console.log(d.greetings);

/////////////////////////////////////////////////////////////////////////////////////////

// console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });

/////////////////////////////////////////////////////////////////////////////////////////

// let person = { name: "Javascript" };
// const members = [person];

// person = null;

// console.log(person);

// console.log(members);

/////////////////////////////////////////////////////////////////////////////////////////

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);

/////////////////////////////////////////////////////////////////////////////////////////

// function changeAgeAndReference(person) {
//   person.age = 25;
//   person = {
//     name: "John",
//     age: 50
//   };

//   return person;
// }

// const personObj1 = {
//   name: "Alex",
//   age: 40
// };

/////////////////////////////////////////////////////////////////////////////////////////

// shallow copy & deep copy / cloning an object

// how to deep copy / clone an object

// let user = {
//   name: "JavaScript",
//   age: 30
// };

// // const objClone = Object.assign({}, user);

// // const objClone = JSON.parse(JSON.stringify(user));

// const objClone = { ...user };

// objClone.name = "TypeScript";

// console.log("user === ", user);
// console.log("objClone === ", objClone);

/////////////////////////////////////////////////////////////////////////////////////////
