// const friends = ["John", "Jane", "Joe", "Jill", "Jim"];

// friends.forEach((friend) => {
//   console.log(`Hello, ${friend}!`);
// });

// const numbers = [1, 2, 3, 4, 5];

// let state = 0;

// numbers.forEach((number) => {
//   state += number;
// });
// console.log(state);

const numbers = [2, 4, 6];
const initialState = 0;

function reducer(state, value) {
  const nextState = state + value;

  console.log(
    `Reducer invoked. state: ${state}, value: ${value}, nextState: ${nextState}`
  );

  return nextState;
}

const total = numbers.reduce(reducer, initialState);

console.log(`total: ${total}`);
