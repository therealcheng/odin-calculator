const numbersGrid = document.querySelectorAll('.numbers-grid')
const numbers = document.querySelectorAll('.numbers')
const dashboard = document.querySelector('.dashboard')
const view = document.querySelector('.view')
const operator = document.querySelector('.operators')
const clear = document.querySelector('.clear')

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
  view.textContent = ''
}


numbers.forEach(number => 
  number.addEventListener("click", () => {

    // show clicked number
    view.textContent += number.textContent
  }))
  clear.addEventListener('click', clearView)

