
// // // functions # 1
function sum(num1, num2)
{
    return num1 + num2

}

// arguments
var result = sum(10, 5)  
console.log(result)


// functions # 2 find the largest of three numbers 

function largestNumber(num1, num2, num3){
     
    if (num1 > num2 && num3){
        return "value " + num1 + " is the largest"
    }  else if (num2 > num1 && num3){

            return "value " + num2 + " is the largest"
       }   else if (num3 > num1 && num2){
           return "value " + num3 + " is the largest"
       }
}


var num1 = 5
var num2 = 7
var num3 = 4
console.log(largestNumber(5, 7, 4))
     

// accepts 1 number and returns if odd or even

function oddOrEven(i) {

    if ( i % 2 === 0)
    {
        console.log( i + " is even")
    } else if( i % 2 !== 0)
    {
        console.log( i + " is odd")
    }

}

oddOrEven(22)


// functions #4 check to see if  string is 20 char or more


function string(str1){

    if (str1.length <= 20)
    {
        console.log(str1)
        
    }else if(str1.length >= 20)
    {
        console.log(str1.slice(0, str1.length/2))
    
    }
    
    
    
}
string("functions are still trickey")
string("function " + "function ")


