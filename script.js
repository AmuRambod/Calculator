// The four basic arithmetic operators
const add = (num1,num2) => num1 + num2;
const subtract = (num1,num2) => num1 - num2;
const multiply = (num1,num2) => num1 * num2;
const divide = (numerator,denominator) => numerator / denominator;

// The function to do the the operation with the input numbers
const operate = (operator,num1,num2) => operator(num1,num2);
