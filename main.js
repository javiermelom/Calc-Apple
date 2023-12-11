const number0 = document.getElementById("number0");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");
const number6 = document.getElementById("number6");
const number7 = document.getElementById("number7");
const number8 = document.getElementById("number8");
const number9 = document.getElementById("number9");

const plus = document.getElementById("plus");
const equal = document.getElementById("equal");

const result = document.getElementById("result");

let num0 = 0;
let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;
let num6 = 6;
let num7 = 7;
let num8 = 8;
let num9 = 9;

number1.addEventListener("onclick", function () {
  console.log(num1);
  result.innerHTML += `<div>${num1}</div>`;
});


