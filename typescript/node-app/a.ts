// const x: number = 1;
// console.log(x);

// let y: number = 1;
// y = "ashwini";
// console.log(y);

// - implicitly declared any
function greet(firstName) {
  console.log(`Heyy ${firstName}`);
}

greet("Ashwini");

// explicitly declared any
function greet1(firstName: any) {
  console.log(`Heyy ${firstName}`);
}

greet1("Ashwini");
