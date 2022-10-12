const numbersGrid = document.querySelectorAll('.numbers-grid');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator');
const dashboard = document.querySelector('.dashboard');
const aboveView = document.querySelector('.above-view');
const view = document.querySelector('.view');
const operator = document.querySelector('.operator');
const clear = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');

let numbersArray = [];
let currentOperator;
let number1;
let number2;
let answer;

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

const clearView = function () {
  view.textContent = '0';
};

const deleteView = function () {
  // if 0, return - guard clause.
  if (view.textContent === '0') return;
  // if array.length is exactly 1, text content is 0
  if (view.textContent.length === 1) view.textContent = '0';
  let viewContent = view.textContent.split('').slice(0, -1).join('');

  view.textContent = viewContent;
};

operators.forEach((op) =>
  op.addEventListener('click', () => {
    aboveView.textContent = view.textContent + '' + op.textContent;
    numbersArray.push(view.textContent);
    clearView();
    console.log(numbersArray);
    // if an operator is clicked (add, subract, divide, minus)
    if (op.textContent === '+') {
      currentOperator = op.textContent;
      number1 = numbersArray[0];
      console.log(currentOperator);
      console.log(number1);
      answer = sum(numbersArray);
      console.log(answer);
    }

    if (op.textContent === '=') {
      view.textContent = answer;
      currentOperator = '';
      console.log(op);
    }
  })
);

numbers.forEach((number) =>
  number.addEventListener('click', () => {
    if (view.textContent === '0') view.textContent = '';
    // show clicked number on view
    view.textContent += number.textContent;

    // if any operator is clicked, show number and operator above view
  })
);
clear.addEventListener('click', () => {
  clearView();
  numbersArray.length = 0;
  console.log(numbersArray);
});
deleteBtn.addEventListener('click', deleteView);
