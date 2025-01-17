//TODO - Compose & Pipe

/////////////////////////////////////////////////////////////////////////////////////////

const addFive = (num) => {
  return num + 5;
};
const subtractTwo = (num) => {
  return num - 2;
};
const multiplyFour = (num) => {
  return num * 4;
};

const compose = (...fn) => {
  return function (initial) {
    let result = initial;
    for (let i = fn.length - 1; i >= 0; i--) {
      result = fn[i](result);
    }

    return result;
  };
};

const evaluate = compose(addFive, subtractTwo, multiplyFour);

console.log(evaluate(5));
