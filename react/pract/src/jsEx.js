// let firstName = "Tyler";
// let lastName = "McGinnis";
// let displayName = `${firstName} ${lastName}`;

// function getMarried(newLastName) {
//   lastName = newLastName;
// }

// getMarried("Brown");

// console.log("firstName:", firstName);
// console.log("lastName:", lastName);
// console.log("displayName:", displayName);

let leo = {
  type: "Dog",
  age: 0,
  goodBoy: true,
  name: "Leo",
};

let snoop = leo;

snoop.name = "Snoop";

console.log("leo's name:", leo.name);
console.log("snoop's name:", snoop.name);
