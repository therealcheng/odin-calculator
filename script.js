const numbersGrid = document.querySelectorAll('.numbers-grid');
const numbers = document.querySelectorAll('.numbers');
const dashboard = document.querySelector('.dashboard');
const aboveView = document.querySelector('.above-view');
const view = document.querySelector('.view');
const operator = document.querySelector('.operator');
const clear = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');

// Operators DOM
const plusDOM = document.querySelector('.plus');
const subtractDOM = document.querySelector('.subtract');
const divideDOM = document.querySelector('.divide');
const multiplyDOM = document.querySelector('.multiply');

let currentOperator; // + - % x =
let number1;
let number2;
let number3;

// * Calculator Functions

const add = function (x, y) {
  currentOperator = '+';
  return Number(x) + Number(y);
};

const subtract = function (x, y) {
  currentOperator = '-';
  return Number(x) - Number(y);
};

const multiply = function (x, y) {
  currentOperator = 'x';
  return Number(x) * Number(y);
};

const divide = function (x, y) {
  currentOperator = '%';
  return Number(x) / Number(y);
};

// * Views

const clearView = function () {
  aboveView.textContent = '';
  view.textContent = '0';
  currentOperator = 0;
  number1 = null;
  number2 = null;
  answer = null;
  console.clear();
  console.log('cleared');
};

const showNumber = function (number) {
  // console.log(number);
  view.innerHTML += number.target.innerHTML;
};

numbers.forEach((number) => number.addEventListener('click', showNumber));
