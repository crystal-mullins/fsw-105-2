const readlineSync = require('readline-sync');

//  caculator in javascript #1 add, 2 num with readline-sync
function twoNumbers(firstNumber, secondNumber, sign)
{  let calculate;   let operation; 
    if (sign === "add"){
        operation = "Adding"
        calculate = firstNumber + secondNumber
    } else if (sign === "sub"){
        operation = "Subtracting"
        calculate = firstNumber - secondNumber
    } else if (sign === "div"){
        operation = "Dividing"
        calculate = firstNumber / secondNumber
    } else if( sign === "mul"){
    operation = "Multiplying"
    calculate = firstNumber * secondNumber
    }
return `${operation} ${firstNumber} with ${secondNumber} gives you a result of ${calculate}`
    // return "Adding " + firstNumber  + " with " + secondNumber  + " gives you a result of " + (firstNumber +  secondNumber);
}
var firstNumber = readlineSync.questionInt("Please a number ")
var secondNumber = readlineSync.questionInt("Please another number " );
var  mathOperator = readlineSync.question("Please choose an operator: add, sub, mul, div /");



if (mathOperator == "add")
{
    console.log(twoNumbers(firstNumber , secondNumber, mathOperator))
} else if (mathOperator == "sub")
{
    console.log(twoNumbers(firstNumber , secondNumber, mathOperator))
}
else if (mathOperator == "div")
{
    console.log(twoNumbers(firstNumber , secondNumber, mathOperator))
}
else if (mathOperator == "mul")
{
    console.log(twoNumbers(firstNumber , secondNumber, mathOperator))
}
