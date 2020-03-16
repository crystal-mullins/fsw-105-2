// fat arrow functions/ es6


// function sum(){

// }
// const sum2 = function (){

// }
// const sum2ES6 = word => console.log('ES6 is ${word}!')



// object literals

// const blue = "blue"
// const green = "green"
// const red = "red"

// const colors = { red, green, blue}

// console.log(colors)

// object destructuting

const user = {
    username: "joe123",
    age: 20,
    _id: "skjdhfkdljsgh"
}
const {username, age} = user

console.log(username)




// ES6 # 1

// Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and const
// John is the pet owner, and his name should be stored differently than the other names.
const petOwner = "John"
let name = ["fluffy", "spot"] 
const ages = 101

 function runForLoop(pets){
    const petObjects = []
     for ( i = 0; i < pets.length; i++){
         let pet = { type: pets[i]}
         name;
         if(pets[i]=== "cat"){
             name = "fluffy"
             
         }else{
             name = "spot"
             
         }
         console.log("pet name: ", name)
         pet.name = name
         petObjects.push(pet)
        }
        console.log ("man name: ", petOwner)
        return petObjects
 }

 runForLoop(["cat", "dog"])


// 2) Re-write this .map() using an arrow function:

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables =() => { console.log("carrot" + carrots)}
 console.log(carrots + " carrots") 
 
 
//  3) Re-write this .filter() using an arrow function:

// const people = [
//     {
//         name:"princess peach",
//         friendly: false
    
//     },
//     {
//         name:"luigi",
//         friendly: true
//     },
//     {
//         name:"mario",
//         friendly: true
    
//     },
//     {
//         name:"Browser",
//         friendly: false
//     }
// ]
// const filterForFriendly = people => console.log(" the Charachter is ${people}!")
// console.log(filterForFriendly(people))

// 4) Re-write the following functions to be arrow functions:

// let doMathSum = (a, b) => console.log(a + b)
// return doMathSum()

// let produceProduct = function(a, b){
//     return a * b
// }

// 5) Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:


// 6) Use template literals to build the string from #5



// 7) Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    
    },
    {
        type: "cat",
        name: "wiskers"
    }
    {
        type: "pig",
        name: "piglette"
    
    },
    {
        type: "dog",
        name: "sparkey"
    }

]
function filterForDogs(arr){
    return arr.filter(animal => {
        if (animal.type === "dog"){
            return true
        }else {
            return false
        }
        
    })
}