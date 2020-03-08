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
