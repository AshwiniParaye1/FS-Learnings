// call, bind and apply - explicit binding

/////////////////////////////////////////////////////////////////////////////////////////

//call
// var obj = { name: "JavaScript" };

// function sayHello(age) {
//   console.log("Hello " + this.name + " is " + age + " years old");
// }

// sayHello.call(obj, 30);

/////////////////////////////////////////////////////////////////////////////////////////

//apply
// var obj = { name: "JavaScript" };

// function sayHello(age, profession) {
//   console.log(
//     "Hello " +
//       this.name +
//       " is " +
//       age +
//       " years old" +
//       " and is a " +
//       profession
//   );
// }

// sayHello.apply(obj, [30, "language"]);

/////////////////////////////////////////////////////////////////////////////////////////

//bind
// var obj = { name: "JavaScript" };

// function sayHello(age, profession) {
//   return (
//     "Hello " +
//     this.name +
//     " is " +
//     age +
//     " years old" +
//     " and is a " +
//     profession
//   );
// }

// const bindFunc = sayHello.bind(obj);

// console.log(bindFunc(30, "language"));
// console.log(bindFunc(60, "magical language"));

/////////////////////////////////////////////////////////////////////////////////////////
