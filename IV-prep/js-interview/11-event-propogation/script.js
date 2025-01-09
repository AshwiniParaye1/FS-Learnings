//TODO event propogation

/////////////////////////////////////////////////////////////////////////////////////////

//? Q1 - what is event propogation

/////////////////////////////////////////////////////////////////////////////////////////

//? Q2 - what is event bubbling

// const div = document.querySelector(".div");
// const form = document.querySelector(".form");
// const btn = document.querySelector(".btn");

// div.addEventListener("click", () => {
//   alert("div");
// });

// form.addEventListener("click", () => {
//   alert("form");
// });

// btn.addEventListener("click", () => {
//   alert("button");
// });

/////////////////////////////////////////////////////////////////////////////////////////

//? Q3 - event.target vs this.target vs event.currentTarget

// const div = document.querySelector(".div");
// const form = document.querySelector(".form");
// const btn = document.querySelector(".btn");

// div.addEventListener("click", func);
// form.addEventListener("click", func);
// btn.addEventListener("click", func);

// function func(event) {
//   alert(
//     "currentTarget = " +
//       event.currentTarget.tagName +
//       ", target = " +
//       event.target.tagName +
//       ", this = " +
//       this.tagName
//   );
// }

/////////////////////////////////////////////////////////////////////////////////////////

//? Q4 - what is event capturing  / trickling

// const div = document.querySelector(".div");
// const form = document.querySelector(".form");
// const btn = document.querySelector(".btn");

// div.addEventListener(
//   "click",
//   () => {
//     alert("div");
//   },
//   {
//     capture: true
//   }
// );

// form.addEventListener(
//   "click",
//   () => {
//     alert("form");
//   },
//   {
//     capture: true
//   }
// );

// btn.addEventListener(
//   "click",
//   () => {
//     alert("button");
//   },
//   {
//     capture: true
//   }
// );

/////////////////////////////////////////////////////////////////////////////////////////

//? Q5 how to stop bubbling or capturing

// const div = document.querySelector(".div");
// const form = document.querySelector(".form");
// const btn = document.querySelector(".btn");

// div.addEventListener("click", () => {
//   alert("div");
// });

// form.addEventListener("click", () => {
//   alert("form");
// });

// btn.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();

//     alert("button");
//   },
//   {
//     capture: true
//   }
// );

/////////////////////////////////////////////////////////////////////////////////////////

//? Q6 - what is event delegation

// document.querySelector(".products").addEventListener("click", function (e) {
//   console.log(e.target.closest("SPAN"));

//   if (e.target.tagName === "SPAN") {
//     window.location.href += e.target.className;
//   }
// });

/////////////////////////////////////////////////////////////////////////////////////////

//? Q7 - what is the o/p -
//? when we click on button- form should execute first then button and then div

// const div = document.querySelector(".div");
// const form = document.querySelector(".form");
// const btn = document.querySelector(".btn");

// div.addEventListener("click", function () {
//   alert("div");
// });

// form.addEventListener(
//   "click",
//   function () {
//     alert("form");
//   },
//   {
//     capture: true
//   }
// );

// btn.addEventListener("click", function () {
//   alert("button");
// });

/////////////////////////////////////////////////////////////////////////////////////////

//? Q8 - what is the o/p -
//? create a modal which closes by clicking on negative space

// const container = document.querySelector(".modalContainer");
// const button = document.querySelector(".modalBtn");

// button.addEventListener("click", function () {
//   toggleModal(true);
// });

// function toggleModal(toggle) {
//   container.style.display = toggle ? "flex" : "none";
// }

// container.addEventListener("click", function (e) {
//   console.log(e.target.className);

//   if (e.target.className === "modalContainer") toggleModal(false);
// });
