// debouncing and throttling

/////////////////////////////////////////////////////////////////////////////////////////

// debounce using lodash

// Q1 - create a button UI and add throttle as follows =>
//    --> show button pressed <X> times every time button is pressed
//    --> increase triggered  <Y> times count after 800ms of throttle

// const btn = document.querySelector(".increment-btn");
// const btnPress = document.querySelector(".increment-pressed");
// const count = document.querySelector(".increment-count");

// var pressedCount = 0;
// var triggeredCount = 0;

// var debounceCount = _.debounce(() => {
//   count.innerHTML = ++triggeredCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debounceCount();
// });

/////////////////////////////////////////////////////////////////////////////////////////

// throttle using lodash

// Q2  - create a button UI and add throttle as follows =>
//    --> show button pressed <X> times every time button is pressed
//    --> increase triggered  <Y> times count after 800ms of throttle

// const btn = document.querySelector(".increment-btn");
// const btnPress = document.querySelector(".increment-pressed");
// const count = document.querySelector(".increment-count");

// var pressedCount = 0;
// var triggeredCount = 0;

// var throttleCount = _.throttle(() => {
//   count.innerHTML = ++triggeredCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   throttleCount();
// });

/////////////////////////////////////////////////////////////////////////////////////////

// Q3  - create Debounce() polyfill implementation

// const btn = document.querySelector(".increment-btn");
// const btnPress = document.querySelector(".increment-pressed");
// const count = document.querySelector(".increment-count");

// var pressedCount = 0;
// var triggeredCount = 0;

// const myDebounce = (cb, waitTime) => {
//   let timer;

//   return function (...args) {
//     if (timer) clearTimeout(timer);

//     timer = setTimeout(() => {
//       cb(...args);
//     }, waitTime);
//   };
// };

// var debounceCount = myDebounce(() => {
//   count.innerHTML = ++triggeredCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debounceCount();
// });

/////////////////////////////////////////////////////////////////////////////////////////

// Q4  - create Throttle() polyfill implementation

const btn = document.querySelector(".increment-btn");
const btnPress = document.querySelector(".increment-pressed");
const count = document.querySelector(".increment-count");

var pressedCount = 0;
var triggeredCount = 0;

const start = new Date().getTime();

const myThrottle = (cb, waitTime) => {
  let last = 0;

  return (...args) => {
    let now = new Date().getTime();

    if (now - last < waitTime) return;

    last = now;

    return cb(...args);
  };
};

var throttledCount = myThrottle(() => {
  count.innerHTML = ++triggeredCount;
}, 1000);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;

  const now = new Date().getTime();
  const seconds = (now - start) / 1000;
  console.log(seconds.toFixed());

  throttledCount();
});
