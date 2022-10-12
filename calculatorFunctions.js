const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += Number(array[i]);
  }
  return sum;
};

const multiply = function (array) {
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    sum *= array[i];
  }
  return sum;
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  let sum = 1;
  for (let i = 0; i < x; i++) {
    if (i !== 0) sum *= i + 1;
  }
  return sum;
};
