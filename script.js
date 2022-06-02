//#region calculator
// The four basic arithmetic operators
const add = (num1,num2) => num1 + num2;
const subtract = (num1,num2) => num1 - num2;
const multiply = (num1,num2) => num1 * num2;
const divide = (numerator,denominator) => {
  if(denominator === 0) {
    alert("cannot divide 0!");
    return "";
  }
  return numerator / denominator
};

// The function to do the the operation with the input numbers
const operate = (operator,num1,num2) => operator(num1,num2);
//#endregion

const inputDisplay = document.querySelector(".input-display");
const keys = document.querySelectorAll(".key");
const historyDisplay = document.querySelector(".history");

//#region history
let history = ["","","","","",""];

function updateHistory(calculation){
  history.pop();
  history.unshift(calculation);
  updateHistoryDisplay();
}

function updateHistoryDisplay(){
  //remove previous element
  historyDisplay.innerHTML = "";

  history.forEach(calculation => {
    const historyElement = document.createElement("p");
    historyElement.textContent = calculation;
    historyDisplay.appendChild(historyElement);
  })
}
//#endregion

//#region calculation UI
let [num , num1 , num2 , operation , isAfterResult] = ["", 0 ,0 , null , false];

const convertOperatorStringToFunction = (operator) => {
  switch(operator){
    case ("+"):
      return add;
    case ("-"):
      return subtract;
    case ("*"):
      return multiply;
    case ("/"):
      return divide;
  }
}

const getDigit = (digit) => {
  if(isAfterResult) inputDisplay.textContent = "";
  inputDisplay.textContent += digit;
  num += digit;
  isAfterResult = false;
}

const getOperator = (operator) => {
  if (operation != null) return;
  if (isAfterResult) num = `${inputDisplay.textContent}`;
  operation = convertOperatorStringToFunction(operator);
  const operationSymbol = () => {
    switch(operation){
      case add:
        return "+";
      case subtract:
        return "-";
      case multiply:
        return "×";
      case divide:
        return "÷";
    }
  }
  inputDisplay.textContent += ` ${operationSymbol()} `;
  num1 = parseInt(num);
  num = "";
  isAfterResult = false;
}

const clear = () => {
  inputDisplay.textContent = "";
  [num,num1,num2,operation,isAfterResult] = ["",0,0,null,false];
}

const getResult = () => {
  if(operation === null || num === "") return;
  let calculation = inputDisplay.textContent;
  num2 = parseInt(num);
  inputDisplay.textContent = operate(operation,num1,num2);
  calculation += `   =   ${inputDisplay.textContent}`;
  updateHistory(calculation);
  [num,num1,num2,operation,isAfterResult] = ["",0,0,null,true];
}

const getInput = (input) => {
  if (input >= 0 && input <= 9) getDigit(input);
  if (["+","-","*","/"].includes(input)) getOperator(input);
  if (input === "Escape") clear();
  if (input === "=" || input === "Enter") getResult();
}

keys.forEach(key => key.addEventListener("click" , () => getInput(key.dataset.key)));
window.addEventListener("keydown",(e) => getInput(e.key));
//#endregion