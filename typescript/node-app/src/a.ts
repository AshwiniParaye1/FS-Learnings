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

// const greet = (firstName: string) => {
//   console.log(`Heyy ${firstName}`);
// };

// greet("Ashwini");

///////////////////////////////////////////////
