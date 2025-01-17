//TODO - Event Loop

/////////////////////////////////////////////////////////////////////////////////////////

// console.log("1");
// console.log("2");
// console.log("3");

/////////////////////////////////////////////////////////////////////////////////////////

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 2000);

// console.log("3");

/////////////////////////////////////////////////////////////////////////////////////////

// console.log("start");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then(function a(response) {
//     console.log("Fetch completed:", response[0]);
//   })
//   .catch(function c(error) {
//     console.error("Fetch error:", error);
//   });

// console.log("middle");

// Promise.resolve().then(function b() {
//   console.log("Promise resolved");
// });

// console.log("middle 2");

// Promise.reject().catch(function c() {
//   console.log("Promise rejected");
// });

// console.log("end");

/////////////////////////////////////////////////////////////////////////////////////////

//? how event loop handles microtask queue and callback queue

// console.log("start");

// setTimeout(() => {
//   console.log("Inside setTimeout (macro task)");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Inside Promise (micro task)");
// });

// console.log("end");

/////////////////////////////////////////////////////////////////////////////////////////

//? Q1 - what is event loop

/////////////////////////////////////////////////////////////////////////////////////////

//? Q2 - why we need event loop to manage task queue and microtask queue

/////////////////////////////////////////////////////////////////////////////////////////

//? Q3 - o/p based

// blockMainThread();

// console.log("start");

// function blockMainThread() {
//   const start = Date.now();
//   while (Date.now() - start < 3000) {}

//   console.log("running...");
// }

// console.log("end");

/////////////////////////////////////////////////////////////////////////////////////////

//? Q4 - o/p based

// setTimeout(function a() {
//   console.log("a");
// }, 1000);
// setTimeout(function b() {
//   console.log("b");
// }, 500);
// setTimeout(function c() {
//   console.log("c");
// }, 0);

// function d() {
//   console.log("d runs");
// }

// d();

/////////////////////////////////////////////////////////////////////////////////////////

//? Q5 - o/p based

// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// a();

// function b() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// b();

/////////////////////////////////////////////////////////////////////////////////////////

//? Q6 - o/p based

// Promise.resolve()
//   .then(function a() {
//     Promise.resolve().then(
//       setTimeout(function d() {
//         console.log("d runs");
//       }, 0)
//     );
//     Promise.resolve().then(function e() {
//       console.log("e runs");
//     });
//     throw new Error("Error occured!");
//     Promise.resolve().then(function f() {
//       console.log("f runs");
//     });
//   })
//   .catch(function b() {
//     console.log("b runs");
//   })
//   .then(function c() {
//     console.log("c runs");
//   });

/////////////////////////////////////////////////////////////////////////////////////////

//? Q7 - o/p based

// const pause = (millis) => {
//   return new Promise(function p(resolve) {
//     setTimeout(function s() {
//       resolve("resolved");
//     }, millis);
//   });
// };

// const start = Date.now();
// console.log("start");

// pause(1000).then((res) => {
//   const end = Date.now();
//   const sec = (end - start) / 1000;

//   console.log(res, ":", sec);
// });
