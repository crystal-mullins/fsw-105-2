// var animal = "tigeregrerer"

// var characterArr = animal.split("g")
// console.log(characterArr)
// slice cuts up a string

// var phoneNumber = "7073827120" 
// var first3 = phoneNumber.slice(0,3)
// var second3 = phoneNumber.slice(3,6)
// var last4 = phoneNumber.slice(6,10)
// var phoneNumWithDashes =  first3 + "-" + second3 + "-" + last4
// console.log(phoneNumWithDashes)
// indexOf = I need to know if the letter "a occures in a string"

// var city = "New york City"
// var indexOfC = city.indexOf("y")
// console.log(indexOfC)

// string methods # 1 capitlize and lowercase.
var name = "john"
var uppercasedJohn = name.toUpperCase()
console.log(uppercasedJohn)

 var lowercasedJohn = name.toLowerCase()
console.log(lowercasedJohn)

//  string Method #2 Math.floor(x) returns value of number rounded down
var age = 43 
var halfage = Math.floor(age/2)
console.log(halfage)

// Srting Method # 3 use slice() and other functions to return the first half of a srting
var greeting = "Hello, how are you?"
var  firstHalf= greeting.slice(0,8)


console.log(firstHalf)


//string methods #4 return a string where the first half is capitalized and the second half is lower cased If the string length is odd, capitalize the shorter of the first half.)
var greeting2 = "Hello, how are you today?"

var  returnFirstHalfcap= greeting2.slice(0,10)

var secondHalf = greeting2.slice(11,21)

var returnFirstHalfCap = firstHalf.toUpperCase()

var returnFirstHalfLow = firstHalf.toLowerCase()

var returnSecondHalfCap = secondHalf.toUpperCase()

var returnSecondHalfLow = secondHalf.toLowerCase()

    if (returnFirstHalfCap % 2 === 0)
{
    return returnFirstHalfCap + returnSecondHalfLow

} else if(returnFirstHalfCap % 2 !== 0)
{
    return returnFirstHalfLow + returnSecondHalfCap

} else if(secondHalfCap % 2 === 0)
{
    return returnSecondHalfCap + returnFirstHalfLow
}else if (secondHalfCap % 2 !== 0){
    return returnSecondHalfLow + returnSecondHalfCap

}

console.log(firstHalf + secondHalf)
