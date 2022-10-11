const numbersGrid = document.querySelectorAll('.numbers-grid')
const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operator')
const dashboard = document.querySelector('.dashboard')
const aboveView = document.querySelector('.above-view')
const view = document.querySelector('.view')
const operator = document.querySelector('.operator')
const clear = document.querySelector('.clear')

let number = [];

const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
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
  view.textContent = '0'
}

operators.forEach(op => op.addEventListener("click", () => {
  aboveView.textContent = view.textContent + '' + op.textContent;
  // clearView();
}))


numbers.forEach(number => 
  number.addEventListener("click", () => {

    // show clicked number on view
    view.textContent += number.textContent

    // if any operator is clicked, show number and operator above view
  }))
  clear.addEventListener('click', clearView)
  

