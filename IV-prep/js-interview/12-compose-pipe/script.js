//TODO - Compose & Pipe

/////////////////////////////////////////////////////////////////////////////////////////

// const addFive = (num) => {
//   return num + 5;
// };
// const subtractTwo = (num) => {
//   return num - 2;
// };
// const multiplyFour = (num) => {
//   return num * 4;
// };

// const compose = (...fns) => {
//   //   return function (initial) {
//   //     let result = initial;
//   //     for (let i = fns.length - 1; i >= 0; i--) {
//   //       result = fns[i](result);
//   //     }
//   //     return result;
//   //   };

//   return function (init) {
//     return fns.reduceRight((acc, curr) => {
//       return curr(acc);
//     }, init);
//   };
// };

// const pipe = (...fns) => {
//   //   return function (init) {
//   //     let result = init;
//   //     for (let i = 0; i < fns.length; i++) {
//   //       result = fns[i](result);
//   //     }
//   //     return result;
//   //   };
//   return function (init) {
//     return fns.reduce((acc, curr) => {
//       return curr(acc);
//     }, init);
//   };
// };

// const evaluateCompose = compose(addFive, subtractTwo, multiplyFour);
// const evaluatePipe = pipe(addFive, subtractTwo, multiplyFour);

// console.log(evaluateCompose(5));
// console.log(evaluatePipe(5));
