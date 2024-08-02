"use strict";
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
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const result = isLegal(13);
console.log(result);
///////////////////////////////////////////////
