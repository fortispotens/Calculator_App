let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector(".calc-screen");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}
function handleSymbol(symbol) {
  console.log("handleSymbol", symbol);
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
      break;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
