let firstName = "Tyler";
let lastName = "McGinnis";
let displayName = `${firstName} ${lastName}`;

function getMarried(newLastName) {
  lastName = newLastName;
}

getMarried("Brown");

console.log("firstName:", firstName);
console.log("lastName:", lastName);
console.log("displayName:", displayName);
