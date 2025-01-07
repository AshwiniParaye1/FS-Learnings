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

/////////////////////////////////////////////////////////////////////////////////////////

// Q1 - guess the o/p

// console.log("start");

// const promise1 = new Promise((res, rej) => {
//   console.log(1);
//   res(2);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

/////////////////////////////////////////////////////////////////////////////////////////

// Q2 - guess the o/p

// console.log("start");

// const promise1 = new Promise((res, rej) => {
//   console.log(1);
//   res(2);
//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

/////////////////////////////////////////////////////////////////////////////////////////

// Q3 - guess the o/p

// console.log("start");

// const promise1 = new Promise((res, rej) => {
//   console.log(1);
//   res(2);
//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

/////////////////////////////////////////////////////////////////////////////////////////

// Q4 - guess the o/p

// console.log("start");

// const fn = () =>
//   new Promise((res, rej) => {
//     console.log(1);
//     res("success");
//   });

// console.log("middle");

// fn().then((res) => {
//   console.log(res);
// });

// console.log("end");

/////////////////////////////////////////////////////////////////////////////////////////

// Q5

// function job() {
//   return new Promise(function (res, rej) {
//     rej();
//   });
// }

// let promise = job();

// promise
//   .then(function () {
//     console.log("success 1");
//   })
//   .then(function () {
//     console.log("success 2");
//   })
//   .then(function () {
//     console.log("success 3");
//   })
//   .catch(function () {
//     console.log("Error 1");
//   })
//   .then(function () {
//     console.log("success 4");
//   });

/////////////////////////////////////////////////////////////////////////////////////////

// Q5

// function job(state) {
//   return new Promise(function (res, rej) {
//     if (state) {
//       res("success");
//     } else {
//       rej("error");
//     }
//   });
// }

// let promise = job(true);

// promise
//   .then(function (data) {
//     console.log(data);

//     return job(false);
//   })
//   .catch(function (error) {
//     console.log(error);

//     return "error caught";
//   })
//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

/////////////////////////////////////////////////////////////////////////////////////////

// Q6 -

// function job(state) {
//   return new Promise(function (res, rej) {
//     if (state) {
//       res("success");
//     } else {
//       rej("error");
//     }
//   });
// }

// let promise = job(true);

// promise
//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })
//   .then(function (data) {
//     if (data !== "victory") {
//       throw "Defeat"; //throwing an error
//     }

//     return job(true);
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);

//     return job(false);
//   })
//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error);

//     return "error caught";
//   })
//   .then(function (data) {
//     console.log(data);

//     return new Error("test error");
//   })
//   .then(function (data) {
//     console.log("success test:", data.message);
//   });

/////////////////////////////////////////////////////////////////////////////////////////

// Q7 - create a promise called firstPromise which will resolve to a text called 'first' and then we have to create another promise called secondPromise which will resolve out firstPromise which we had created earlier

// we have to resolve out secondPromise and output of which will be passed to firstPromise and then print the first promise

// const firstPromise = new Promise((res, rej) => {
//   res("first!");
// });

// const secondPromise = new Promise((res, rej) => {
//   res(firstPromise);
// });

// secondPromise
//   .then((res) => {
//     return res;
//   })
//   .then((res) => {
//     console.log(res);
//   });

/////////////////////////////////////////////////////////////////////////////////////////

// Q8 - rewrite using async await

// async function loadJson(url) {
//   const response = await fetch(url);

//   if (response.status == 200) {
//     const json = await response.json();
//     console.log(json.results[0]);

//     return json;
//   }

//   throw new Error(response.status);

//      return fetch(url).then((res) => {
//       if (res.status == 200) {
//          return res.json();
//        }
//        throw new Error(res.status);
//      });
// }

// loadJson("https://randomuser.me/api/").catch((err) => {
//   console.log("something went wrong!", err);
// });

/////////////////////////////////////////////////////////////////////////////////////////

// Q9 - solve promise recursively

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

// function promRecursively(funcPromises) {
//   if (funcPromises.length === 0) return;

//   const currPromise = funcPromises.shift();

//   currPromise
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

//   promRecursively(funcPromises);
// }

// promRecursively([
//   impAction("JavaScript"),
//   likeTheVideo("JavaScript interview question"),
//   shareTheVideo("JavaScript interview question")
// ]);

/////////////////////////////////////////////////////////////////////////////////////////
