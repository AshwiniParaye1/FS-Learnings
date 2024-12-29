//closures
//lexical scope

var username = "Ashwini Paraye"; //global scope

function local() {
  console.log(username);

  var localVar = "local variable";
}

console.log(localVar);

local();
