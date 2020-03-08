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

var  firstHalf= greeting2.slice(0,10)

var secondHalf = greeting2.slice(11,21)

var firstHalfCap = firstHalf.toUpperCase()

// var firstHalfLow = firstHalf.toLowerCase()

// var secondHalfCap = secondHalf.toUpperCase()
var secondHalfLow = secondHalf.toLowerCase()


console.log(firstHalfCap + secondHalfLow)



// var arrOfFoods =["pancake", "eggs", "ice cream", "pizza", "hamburger"]

// arrOfFoods.push("cereal")

// console.log(arrOfFoods)
// arrOfFoods.pop()
// console.log(arrOfFoods)

// arrOfFoods.unshift("cereal")
// console.log(arrOfFoods)



// var colors1 = ["blue", "green"]
// var colors2 = ["purple", "red"]
// var newArr = colors1.concat(colors2)
// console.log(newArr)

// index of 


// var pizzaIndex = arrOfFoods.indexOf("pizza")
//  console.log(pizzaIndex)

// var newArr =arrOfFoods.slice(1,3)
// console.log(newArr)

// var name ="crystal"
// var splitName = name.split("")
// var joindName = splitName.join("-")
// console.log(joindName)


// reverse

// var splitName = name.split("")
// var reversedArr = splitName.reverse()
// var reversedName = reversedArr.join("")
// console.log(reversedName)

// var allAtOnce = name.split("").reverse().join("")

// splice cuts and or removes


var fruit =["banana", "apple", "orange", "watermelon",];

var vegetables =["carrot", "tomato","pepper", "lettuce"]; 

console.log("fruit:", fruit);
console.log("vegetables:", vegetables);

// Array Methods #1 

vegetables.pop()

console.log("vegetables:", vegetables);

//array Methods #2
fruit.shift()
console.log(fruit)
// array methods #3 

var fruitIndex = fruit.indexOf("orange")
console.log(fruitIndex)

// array methods #4

fruit.push("1")
console.log(fruit)

// array methods # 5 
var vegLength = vegetables.length;
console.log(vegLength)
// array methods # 6

vegetables.push("3")
console.log(vegetables)
// array method # 7

var foods = fruit.concat(vegetables)
console.log(foods)

// array method # 8


foods.splice(4, 2)

// var foodsIndex = foods.indexOf("orange", "1")
console.log(foods)

// delete foods.index
// console.log(foodsIndex)
// var result = arrOfFoods.splice(2,2,"bacon")
// console.log(result

// array method # 9

foods.reverse();

// var allAtOnce = foods.split([]).reverse().join([])

// var splitFoods = foods.split("")
console.log(foods)
// var revFoods = splitFoods.reverse()
// // var joinFoods = revFoods.join("")
// // // console.log(reversedName)
// console.log(revFoods)
// console.log(allAtOnce)
// arrays # 10

var string = foods.toString()
console.log(string)
