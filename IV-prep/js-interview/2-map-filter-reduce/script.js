//map, filter, reduce

// const nums = [1, 2, 3, 4];

// const multiply3 = nums.map((num) => {
//   return num * 3;
// });

// console.log(multiply3);

// const moreThan2 = nums.filter((num) => {
//   return num > 2;
// });

// console.log(moreThan2);

// const sum = nums.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);

///////////////////////////////////////////////////////////////////////////////////////

//polyfill for map

// arr.map((curr, i, arr) => {});

// Array.prototype.myMap = function (cb) {
//   let temp = [];

//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }

//   return temp;
// };

// const nums = [1, 2, 3, 4];

// const multiply3 = nums.myMap((num) => {
//   return num * 3;
// });

// console.log(multiply3);

///////////////////////////////////////////////////////////////////////////////////////

//polyfill for filter

// arr.filter((curr, i, arr) => {});

// Array.prototype.myFilter = function (cb) {
//   let temp = [];

//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }

//   return temp;
// };

// const nums = [1, 2, 3, 4];

// const moreThan2 = nums.myFilter((num) => {
//   return num > 2;
// });

// console.log(moreThan2);

///////////////////////////////////////////////////////////////////////////////////////

//polyfill for reduce

// arr.reduce((acc, curr, i, arr) => {}, initialValue);

// Array.prototype.myReduce = function (cb, initialValue) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//   }

//   return accumulator;
// };

// const nums = [1, 2, 3, 4];

// const sum = nums.myReduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);
