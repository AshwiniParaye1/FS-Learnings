// promises

/////////////////////////////////////////////////////////////////////////////////////////

// synchronous
// console.log("1");
// console.log("2");
// console.log("3");

// asynchronous
// console.log("start");

// setTimeout(() => {
//   console.log("timeout");
// }, 1000);

// console.log("finish");

/////////////////////////////////////////////////////////////////////////////////////////

// console.log("start");

// function impAction(username) {
//   setTimeout(() => {
//     console.log(`Hey! I am ${username}`);
//   }, 1000);
// }

// const msg = impAction("JavaScript async code");

// console.log(msg);

// console.log("finish");

/////////////////////////////////////////////////////////////////////////////////////////

//callback hell / pyramid of doom

// console.log("start");

// function impAction(username, cb) {
//   setTimeout(() => {
//     cb(`Hey! I am ${username}`);
//   }, 0);
// }

// function likeTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`Like the ${video} video`);
//   }, 1000);
// }
// function shareTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`Share the ${video} video`);
//   }, 500);
// }

// const msg = impAction("JavaScript async code", function (msg) {
//   console.log(msg);
//   likeTheVideo("JavaScript interview questions", (action) => {
//     console.log(action);
//     shareTheVideo("JavaScript interview questions", (action) => {
//       console.log(action);
//     });
//   });
// });

// console.log("finish");

/////////////////////////////////////////////////////////////////////////////////////////

//Promises

// console.log("start");

// const getData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = false;

//     if (result) resolve("'promise resolved");
//     else reject(new Error("promise rejected"));
//   }, 2000);
// });

// getData
//   .then((res) => {
//     console.log("Resolved:", res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// console.log("end");

/////////////////////////////////////////////////////////////////////////////////////////

//promises hell

// console.log("start");

// function impAction(username) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Hey! I am ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Like the ${video} video`);
//     }, 1000);
//   });
// }
// function shareTheVideo(video) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Share the ${video} video`);
//     }, 1000);
//   });
// }

// impAction("JavaScript")
//   .then((res) => {
//     console.log(res);
//     likeTheVideo("JavaScript interview questions").then((res) => {
//       console.log(res);
//       shareTheVideo("JavaScript interview questions").then((res) =>
//         console.log(res)
//       );
//     });
//   })
//   .catch((err) => console.error(err));

// console.log("finish");

/////////////////////////////////////////////////////////////////////////////////////////

//promises chaining

// console.log("start");

// function impAction(username) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Hey! I am ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Like the ${video} video`);
//     }, 1000);
//   });
// }
// function shareTheVideo(video) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Share the ${video} video`);
//     }, 1000);
//   });
// }

// impAction("JavaScript")
//   .then((res) => {
//     console.log(res);
//     return likeTheVideo("JavaScript interview questions");
//   })
//   .then((res) => {
//     console.log(res);
//     return shareTheVideo("JavaScript interview questions");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error(err));

// console.log("finish");

/////////////////////////////////////////////////////////////////////////////////////////

//promises combinator - promise.all / promise.race /

// console.log("start");

// function impAction(username) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Hey! I am ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       rej(`Like the ${video} video`);
//     }, 100);
//   });
// }
// function shareTheVideo(video) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Share the ${video} video`);
//     }, 500);
//   });
// }

// Promise.all([
//   impAction("JavaScript"),
//   likeTheVideo("JavaScript interview questions"),
//   shareTheVideo("JavaScript interview questions")
// ])

// Promise.race([
//   impAction("JavaScript"),
//   likeTheVideo("JavaScript interview questions"),
//   shareTheVideo("JavaScript interview questions")
// ])

// Promise.allSettled([
//   impAction("JavaScript"),
//   likeTheVideo("JavaScript interview questions"),
//   shareTheVideo("JavaScript interview questions")
// ])

// Promise.any([
//   impAction("JavaScript"),
//   likeTheVideo("JavaScript interview questions"),
//   shareTheVideo("JavaScript interview questions")
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error("Error:Promises failed!", err));

// console.log("finish");

/////////////////////////////////////////////////////////////////////////////////////////

// async await

// console.log("start");

// function impAction(username) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Hey! I am ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       rej(`Like the ${video} video`);
//     }, 100);
//   });
// }
// function shareTheVideo(video) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Share the ${video} video`);
//     }, 500);
//   });
// }

// const result = async () => {
//   try {
//     const msg1 = await impAction("JavaScript");
//     const msg2 = await likeTheVideo("JavaScript interview questions");
//     const msg3 = await shareTheVideo("JavaScript interview questions");

//     console.log({ msg1, msg2, msg3 });
//   } catch (error) {
//     console.error("Promise failed: ", error);
//   }
// };

// result();

// console.log("end");
