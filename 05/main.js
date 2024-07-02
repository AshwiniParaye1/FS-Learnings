//! Arrow Functions
// const sum = (a, b) => {
//   return a + b;
// };

// const ans = sum(1, 2);
// console.log(ans);

//! - Map
//given an array, return a new array in which every value is nultiplied by 2

// const input = [1, 2, 3, 4, 5, 6];

// let newArr = [];

// for (let i = 0; i < input.length; i++) {
//   newArr.push(input[i] * 2);
// }
// console.log(newArr);

// const input = [1, 2, 3, 4, 5, 6];

// function transform(i) {
//   return i * 2;
// }

// // const ans = input.map(transform);
// // console.log(ans);

// const ans = input.map(function (i) {
//   return i * 2;
// });

// console.log(ans);

//! - Filter

//return all the even value from array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// function filterFn(n) {
//   if (n % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const ans = arr.filter(filterFn);
// console.log(ans);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let newArr = [];

// const ans = arr.filter(function (n) {
//   if (n % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(ans);

// const namesArr = [
//   "Priya",
//   "Aarti",
//   "Neha",
//   "Arjuna",
//   "Ritu",
//   "Ashwini",
//   "Ashlesha",
//   "Anjali",
//   "Meena",
//   "Divya",
// ];

// const newA = [];

// const ans = namesArr.filter(function (names) {
//   if (names.startsWith("A")) {
//     return newA.push(names);
//   }
// });

// console.log(ans);
