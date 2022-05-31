# Calculator notes
## 8 Khordad 1401
Project is initialized.
### Basic arithmetic operators and the "operate" function
I added the functions to do the 4 simple arithmetc operations (add,subtract,multiply,divide) and added another function that would take the operand and the input numbers and return the result.<br>
I used *Callback function*s for this:
```js
const add = (num1,num2) => num1 + num2;
const divide = (num1-num2) => num1 - num2;

const operate = (operator,num1,num2) => operator(num1,num2);
```
I know that I use a lot of arrow functions. :sweat_smile:

## 10 Khordad 1401
Designed and coded the primary HTML and CSS.