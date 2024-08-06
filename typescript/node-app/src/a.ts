// const x: number = 1;
// console.log(x);

///////////////////////////////////////////////

// let y: number = 1;
// y = "ashwini";
// console.log(y);

///////////////////////////////////////////////

// - implicitly declared any
// function greet(firstName) {
//   console.log(`Heyy ${firstName}`);
// }

// greet("Ashwini");

///////////////////////////////////////////////

// explicitly declared any
// function greet1(firstName: any) {
//   console.log(`Heyy ${firstName}`);
// }

// greet1("Ashwini");

///////////////////////////////////////////////

//create sum function
// function sum(a: number, b: number): number {
//   return a + b;
// }
// const value = sum(2, 2);
// console.log(value);

///////////////////////////////////////////////

//type inference
// function sum2(a: number, b: number) {
//   return a + b;
// }
// const value2 = sum2(2, 2);
// console.log(value2);

///////////////////////////////////////////////

//write a function to return true if user is 18+
// function isLegal(age: number): boolean {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const result = isLegal(13);
// console.log(result);

///////////////////////////////////////////////

// write a function that takes another function as input and runs it after 2 seconds
// function runAfterOneSecond(fn: () => void) {
//   setTimeout(fn, 1000 * 2);
// }

// runAfterOneSecond(function () {
//   console.log("hi there after 2 seconds");
// });

///////////////////////////////////////////////

// target specification and compatibility check
// const greet = (firstName: string) => {
//   console.log(`Heyy ${firstName}`);
// };

// greet("Ashwini");

///////////////////////////////////////////////

// es-5
// const greet2 = (firstName: string) => {
//   console.log(`Heyy ${firstName}`);
// };

// greet2("Ashwini");

///////////////////////////////////////////////

// removeComments
// const greet = (firstName: string) => {
//   console.log(`Heyy ${firstName}`);
// };

// greet("Ashwini");

///////////////////////////////////////////////

// function runAfterOneSecond(fn: () => void) {
//   setTimeout(fn, 1000 * 2);
// }

// runAfterOneSecond(function () {
//   console.log("hi there after 2 seconds");
//   return 5;
// });

////////////////////////////////////////////////

// create a function isLegal that returns true if user is 18+. it takes user interface as an input
// const user = {
//   firstname: "Ashwini",
//   lastname: "Paraye",
//   email: "XQlPn@example.com",
//   age: 13,
// };

// interface User {
//   firstname: string;
//   lastname: string;
//   email?: string; //? means optional
//   age: number;
// }

// function isLegal(user: User) {
//   if (user.age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// //one way of calling the function with interface
// const result = isLegal(user);
// console.log(result);

// //another way of calling the function with interface
// const result2 = isLegal({
//   firstname: "Ashwini",
//   lastname: "Paraye",
//   email: "XQlPn@example.com",
//   age: 18,
// });
// console.log(result2);

///////////////////////////////////////////////

//implementing interface
// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// class Employee implements Person {
//   name: string;
//   age: number;

//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }

//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   }
// }

// const e = new Employee("Ashwini", 18);
// e.greet("Hi there");

///////////////////////////////////////////////

// Types

// type User = {
//   firstname: string;
//   lastname: string;
//   age: number;
// };

// type GreetArgs = number | string; //union type

// function Greet(id: number | string | boolean) {
//   console.log(`Hello ${id}`);
// }

// Greet("Ashwini");
// Greet(13);

///////////////////////////////////////////////

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type Manager = {
//   name: string;
//   department: string;
// };

// interface Manager2 {
//   name: string;
//   department: string;
//   experience: number;
// }

// type TeamLead = Employee & Manager & Manager2; //intersection type

// const teamLead: TeamLead = {
//   name: "Ashwini",
//   startDate: new Date(),
//   department: "IT",
//   experience: 5,
// };

// console.log(teamLead);

///////////////////////////////////////////////
