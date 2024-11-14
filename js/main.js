// var n = 4;

// function sq(num) {
//   var ans = num * num;
//   return ans;
// }

// var sq4 = sq(n);
// var sq8 = sq(8);

// console.log(sq4);
// console.log(sq8);

/////////////////////////////////////////////////////////////////////////////

//! Hoisting

// getName();
// console.log(a);

// console.log(getName);

// var a = 8;

// function getName() {
//   console.log("Hello from getName()");
// }

// getName();
// console.log(a);

// console.log(getName);

////////////////////////////////////////////////////////////////////////////////

// var a = 8;

// function getName() {
//   console.log("Hello from getName()");
// }

// getName();
// console.log(a);

////////////////////////////////////////////////////////////////////////////////

// getName();
// console.log(a);
// console.log(getName);

// var a = 8;

// function getName() {
//   console.log("Hello from getName()");
// }

////////////////////////////////////////////////////////////////////////////////

// getName();
// console.log(a);
// console.log(getName);

// var a = 8;

// var getName2 = function () {
//   console.log("func 2");
// };

// var getName = () => {
//   console.log("Hello from getName()");
// };

////////////////////////////////////////////////////////////////////////////////

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }

////////////////////////////////////////////////////////////////////////////////

// var a = 10;

// function b() {
//   var x = 20;
// }

// console.log(window.a);
// console.log(a);
// console.log(this.a);

////////////////////////////////////////////////////////////////////////////////

//!  undefined and not defined

// console.log(a);
// var a = 10;

// console.log(x);

////////////////////////////////////////////////////////////////////////////////

//! scope chain

// console.log(b); //// undefined

// function a() {
//   console.log(b); //// 10
// }

// a(); //// undefined
// var b = 10;
// a();

////////////////////////////////////////////////////////////////////////////////

// var z = 88;

// function a() {
//   var b = 10;

//   c();

//   function c() {
//     console.log("inside c : ", b); //// 10

//     d();

//     function d() {
//       var x = 80;

//       console.log("d() : ", b); //// 10

//       console.log("zzzzzz: ", z);
//     }

//     console.log("x : ", x); //// not defined
//   }

//   console.log("inside a: ", x); //// not defined
// }

// a();

// console.log("global : ", b); //// not defined

////////////////////////////////////////////////////////////////////////////////

// function a() {
//   var b = 10;

//   c();

//   function c() {
//     console.log("inside b: ", b);
//   }
// }

// a();

////////////////////////////////////////////////////////////////////////////////

//! let, var, const | temporal dead zone
