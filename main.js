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
let var1 = 0;

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

number1.addEventListener("click", function () {
  console.log(num1);
  result.innerHTML += num1;
});

number2.addEventListener("click", function () {
  console.log(num2);
  result.innerHTML += `<div>${num2}</div>`;
});

number3.addEventListener("click", function () {
  console.log(num3);
  result.innerHTML += `<div>${num3}</div>`;
});

plus.addEventListener("click", function () {
  var1 = parseInt(result.innerHTML);
  console.log(var1);
  result.innerHTML = 0;
  console.log(result.innerHTML);
});
