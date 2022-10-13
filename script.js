const numbersGrid = document.querySelectorAll('.numbers-grid');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator');
const dashboard = document.querySelector('.dashboard');
const aboveView = document.querySelector('.above-view');
const view = document.querySelector('.view');
const operator = document.querySelector('.operator');
const clear = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');

let currentOperator; // + - % x
let number1;
let number2;
let number3;
let answer;

// * Functions

const add = function (x, y) {
  return Number(x) + Number(y);
};

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

const deleteView = function () {
  // if 0, return - guard clause.
  if (view.textContent === '0') return;
  // if array.length is exactly 1, text content is 0
  if (view.textContent.length === 1) view.textContent = '0';
  let viewContent = view.textContent.split('').slice(0, -1).join('');

  view.textContent = viewContent;
};

// * Event listeners

operators.forEach((op) =>
  op.addEventListener('click', () => {
    if (op.textContent === '+') {
      if (aboveView.textContent !== '') {
        number1 = view.textContent;
        number2 = aboveView.textContent.slice(0, -1);
        console.log('OP contains', number1, number2);
        view.textContent = add(number1, number2);
      } else {
        currentOperator = '+';
        number1 = view.textContent;
        console.log(number1);
      }
    }

    if (op.textContent === '=') {
      currentOperator = 'currentOperator';
      number3 = aboveView.textContent.slice(0, -1);
      number2 = view.textContent;
      console.log('= CONTAINS', number2, number3);

      aboveView.textContent = ` ${number2} ${currentOperator} ${view.textContent} =`;

      view.textContent = add(number2, number3);
      return;
    }

    if (currentOperator == 'finished') {
      console.log('working');
      view.textContent = '';
      aboveView = '';
      return;
    }

    aboveView.textContent = view.textContent + '' + op.textContent;
    view.textContent = '0';
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
});
deleteBtn.addEventListener('click', deleteView);
