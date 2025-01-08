// debouncing and throttling

/////////////////////////////////////////////////////////////////////////////////////////

// Q1 - create a button UI and add debounce as follows =>
//    --> show button pressed <X> times every time button is pressed
//    --> increase triggered  <Y> times count after 800ms of debounce

const btn = document.querySelector(".increment-btn");
const btnPress = document.querySelector(".increment-pressed");
const count = document.querySelector(".increment-count");

var pressedCount = 0;
var triggeredCount = 0;

var debounceCount = _.debounce(() => {
  count.innerHTML = ++triggeredCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debounceCount();
});

/////////////////////////////////////////////////////////////////////////////////////////

// Q2 -
//    -->
//    -->
