// const animal = "tigeregrerer"

// const characterArr = animal.split("g")
// console.log(characterArr)
// slice cuts up a string

// const phoneNumber = "7073827120" 
// const first3 = phoneNumber.slice(0,3)
// const second3 = phoneNumber.slice(3,6)
// const last4 = phoneNumber.slice(6,10)
// const phoneNumWithDashes =  first3 + "-" + second3 + "-" + last4
// console.log(phoneNumWithDashes)
// indexOf = I need to know if the letter "a occures in a string"

// const city = "New york City"
// const indexOfC = city.indexOf("y")
// console.log(indexOfC)

// string methods # 1 capitlize and lowercase.
const name = "John"
function up_low()
{   
   return name.toUpperCase() + name.toLowerCase()
} 
console.log(up_low(name))



// //  string Method #2 Math.floor(x) returns value of number rounded down

const num = 84 

function halfNum()
{
   return Math.floor(num / 2)
} 
console.log(halfNum(num))





// // Srting Method # 3 use slice() and other functions to return the first half of a srting
const greeting = "Hello, how are you?"
function  firstHalf(str)
{
  return str.slice(0,str.length/2)
   
} 


console.log(firstHalf(greeting))




// //string methods #4 return a string where the first half is capitalized and the second half is lower cased If the string length is odd, capitalize the shorter of the first half.)
const greeting2 = "Hello, how are you today ?"

function cap_lower(str){


let  firstHalf = str.slice(0, str.length/2).toUpperCase()

let  secondHalf = str.slice(str.length/2).toLowerCase()

if(str.length % 2 === 0){
    
       return firstHalf.toLowerCase() + secondHalf.toUpperCase()
    } else {
    return firstHalf.toUpperCase() + secondHalf.toLowerCase()
    }
    

}
console.log(cap_lower(greeting2))
// const firstHalfLow = firstHalf.toLowerCase()

// const secondHalfCap = secondHalf.toUpperCase()


//  Array Methods: All requirements are fully functional and work as expected. I recommend that you resubmit the homework based on the above feedback for a mastery grade.


// const arrOfFoods =["pancake", "eggs", "ice cream", "pizza", "hamburger"]

// arrOfFoods.push("cereal")

// console.log(arrOfFoods)
// arrOfFoods.pop()
// console.log(arrOfFoods)

// arrOfFoods.unshift("cereal")
// console.log(arrOfFoods)



// const colors1 = ["blue", "green"]
// const colors2 = ["purple", "red"]
// const newArr = colors1.concat(colors2)
// console.log(newArr)

// index of 


// const pizzaIndex = arrOfFoods.indexOf("pizza")
//  console.log(pizzaIndex)

// const newArr =arrOfFoods.slice(1,3)
// console.log(newArr)

// const name ="crystal"
// const splitName = name.split("")
// const joindName = splitName.join("-")
// console.log(joindName)


// reverse

// const splitName = name.split("")
// const reversedArr = splitName.reverse()
// const reversedName = reversedArr.join("")
// console.log(reversedName)

// const allAtOnce = name.split("").reverse().join("")

// splice cuts and or removes


// const fruit =["banana", "apple", "orange", "watermelon",];

// const vegetables =["carrot", "tomato","pepper", "lettuce"]; 

// console.log("fruit:", fruit);
// console.log("vegetables:", vegetables);

// // Array Methods #1 

// vegetables.pop()

// console.log("vegetables:", vegetables);

// //array Methods #2
// fruit.shift()
// console.log(fruit)
// // array methods #3 

// const fruitIndex = fruit.indexOf("orange")
// console.log(fruitIndex)

// // array methods #4

// fruit.push("1")
// console.log(fruit)

// // array methods # 5 
// const vegLength = vegetables.length;
// console.log(vegLength)
// // array methods # 6

// vegetables.push("3")
// console.log(vegetables)
// // array method # 7

// const foods = fruit.concat(vegetables)
// console.log(foods)

// // array method # 8


// foods.splice(4, 2)

// // const foodsIndex = foods.indexOf("orange", "1")
// console.log(foods)

// // delete foods.index
// // console.log(foodsIndex)
// // const result = arrOfFoods.splice(2,2,"bacon")
// // console.log(result

// // array method # 9

// foods.reverse();

// // const allAtOnce = foods.split([]).reverse().join([])

// // const splitFoods = foods.split("")
// console.log(foods)
// // const revFoods = splitFoods.reverse()
// // // const joinFoods = revFoods.join("")
// // // // console.log(reversedName)
// // console.log(revFoods)
// // console.log(allAtOnce)
// // arrays # 10

// const string = foods.toString()
// console.log(string)
