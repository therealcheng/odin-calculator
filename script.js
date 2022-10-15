const numbersGrid = document.querySelectorAll('.numbers-grid');
const numbersBtn = document.querySelectorAll('.numbers');
const dashboard = document.querySelector('.dashboard');
const aboveView = document.querySelector('.above-view');
const view = document.querySelector('.view');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');

// Operators DOM
const plusDOM = document.querySelector('.plus');
const subtractDOM = document.querySelector('.subtract');
const divideDOM = document.querySelector('.divide');
const multiplyDOM = document.querySelector('.multiply');
const equals = document.querySelector('.equals');

let currentOperator = ''; // + - % x =
let number1;
let number2;
let number3;

// * Calculator Functions

const add = function (x, y) {
  return Number(x) + Number(y);
};

const subtract = function (x, y) {
  return Number(x) - Number(y);
};

const divide = function (x, y) {
  return Number(x) / Number(y);
};

const multiply = function (x, y) {
  return Number(x) * Number(y);
};

// * Operator Button Functions

const plusBtn = function () {
  if (view.innerHTML === '') return;
  number1 = view.innerHTML;
  currentOperator = '+';
  clearView();

  console.log(
    `Plus button clicked! Number: ${number1}. Current operator is: ${currentOperator}`
  );
};

const minusBtn = function () {
  if (view.innerHTML === '') return;
  number1 = view.innerHTML;
  currentOperator = '-';
  clearView();

  console.log(
    `Minus button clicked! Number: ${number1}. Current operator is: ${currentOperator}`
  );
};

const divideBtn = function () {
  if (view.innerHTML === '') return;
  number1 = view.innerHTML;
  currentOperator = '%';
  clearView();

  console.log(
    `Divide button clicked! Number: ${number1}. Current operator is: ${currentOperator}`
  );
};

const multiplyBtn = function () {
  if (view.innerHTML === '') return;
  number1 = view.innerHTML;
  currentOperator = 'x';
  clearView();

  console.log(
    `Multiply button clicked! Number: ${number1}. Current operator is: ${currentOperator}`
  );
};

const equalsBtn = function () {
  if (currentOperator === '') return;
  number2 = view.innerHTML;
  console.log(
    `Equals button clicked! Number1: ${number1}, Number2: ${number2}. Current operator is: ${currentOperator}`
  );
  if (currentOperator === '+') {
    view.innerHTML = `${add(number1, number2)}`;
  } else if (currentOperator === '-') {
    view.innerHTML = `${subtract(number1, number2)}`;
  } else if (currentOperator === '%') {
    view.innerHTML = `${divide(number1, number2)}`;
  } else if (currentOperator === 'x') {
    view.innerHTML = `${multiply(number1, number2)}`;
  }
};

// * View Functions

const reset = function () {
  clearView();
  number1 = null;
  number2 = null;
  answer = null;
  currentOperator = '';
  console.clear();
  console.log('cleared view content and parameters reset');
};

const deleteNumber = function () {
  const slice = view.innerHTML.slice(0, -1);
  view.innerHTML = slice;
};

const clearView = function () {
  view.innerHTML = '';
};

const showNumber = function (number) {
  // console.log(number);
  view.innerHTML += number.target.innerHTML;
};

// * Event listeners

numbersBtn.forEach((number) => number.addEventListener('click', showNumber));
deleteBtn.addEventListener('click', deleteNumber);
clearBtn.addEventListener('click', reset);
plusDOM.addEventListener('click', plusBtn);
subtractDOM.addEventListener('click', minusBtn);
divideDOM.addEventListener('click', divideBtn);
multiplyDOM.addEventListener('click', multiplyBtn);
equals.addEventListener('click', equalsBtn);
