const readlineSync = require('readline-sync');

//  caculator in javascript #1 add, 2 num with readline-sync
function addTwoNumbers(num1, num2)
{
    return "Adding" + num1 + " with" + num2 + " gives you a result of" + num1 + num2;
}
var firstNumber = readlineSync.questionInt("Please a number")
var secondNumber = readlineSync.questionInt("Please another number");
var  mathOperator = readlineSync.question("Please choose an operator: add, sub, mul, div,");

if (mathOperator == "add")
{

console.log(addTwoNumbers(firstNumber , secondNumber));
} else if (mathOperator == "sub")
{
    console.log(addTwoNumbers(firstNumber , secondNumber));
}
