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

const convertNumber = (numString) => {
  if (numString.includes(".")) return parseFloat(numString);
  return parseInt(numString);
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
  num1 = convertNumber(num);
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
  num2 = convertNumber(num);
  inputDisplay.textContent = operate(operation,num1,num2);
  calculation += `   =   ${inputDisplay.textContent}`;
  updateHistory(calculation);
  [num,num1,num2,operation,isAfterResult] = ["",0,0,null,true];
}

const backspace = () => {
  if(inputDisplay.textContent.endsWith(" ")){
    inputDisplay.textContent = inputDisplay.textContent.slice(0,-3);
    [operation,num,num1] = [null,inputDisplay.textContent,0];
  }else{
    inputDisplay.textContent = inputDisplay.textContent.slice(0,-1);
    num = num.slice(0,-1);
  }
}

const getDecimal = () =>{
  if(isAfterResult)return;
  if(num === "")return;
  if(num.includes(".")) return;
  num += ".";
  inputDisplay.textContent += ".";
}

const getInput = (input) => {
  if (input >= 0 && input <= 9) getDigit(input);
  if (["+","-","*","/"].includes(input)) getOperator(input);
  if (input === "Escape" || input === "Clear") clear();
  if (input === "=" || input === "Enter") getResult();
  if (input === "Backspace") backspace();
  if (input === ".") getDecimal();
}
//#endregion

window.addEventListener("keydown",(e) => getInput(e.key));
keys.forEach(key => key.addEventListener("click" , () => getInput(key.dataset.key)));