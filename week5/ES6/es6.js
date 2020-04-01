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
const people = [
    {
        name1:"princess peach",
        friendly: false
    
    },
    {
        name1:"luigi",
        friendly: true
    },
    {
        name1:"mario",
        friendly: true
    
    },
    {
        name1:"Browser",
        friendly: false
    }
]
var filterForFriendly = people.filter(obj => obj.hasOwnProperty(`friendly`));
// console.log(arr)

console.log(filterForFriendly)
 


// 4) Re-write the following functions to be arrow functions:
var a = 1;
var b = 2;
const doMathSum = (a, b) => {console.log(a + b)
return a, b;
}
console.log(doMathSum(a, b))




// 5) Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

 printString = (arr) => console.log(`Hi ${first} ${last}, how does it feel to be ${age2}?`);
 
    let first = "Jane";
    let last = "Doe";
    let age2 = "40;"
 printString()



// 6) Use template literals to build the string from #5

printString2 = (arr) => console.log(`Hi ${first2} ${last2}, how does it feel to be ${age3}?`);
 
    let first2 = "Crystal";
    let last2 = "Mullins";
    let age3 = "30;"
 printString2()


// 7) Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    
    },
    {
        type: "cat",
        name: "wiskers"
    },
    {
        type: "pig",
        name: "piglette"
    
    },
    {
        type: "dog",
        name: "sparkey"
    }

]
const filterForDogs = (arr) => { return result = animals.filter(animal => { return animal.type === "dog" ? true : false })};
console.log(filterForDogs(animals))

// let filterForDogs = animals.filter(obj2 => obj2.hasOwnProperty(animals.type === "dog"));
//        animals [
//     {
//         type: "dog",
//         name: "theodore"
    
//     },
//     {
//         type: "cat",
//         name: "wiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
    
//     },
//     {
//         type: "dog",
//         name: "sparkey"
//     }

// ]
// console.log(filterForDogs)
// console.log(filterForDogs)

var filterForFriendly = people.filter(obj => obj.hasOwnProperty(`friendly`));
// console.log(arr)

console.log(filterForFriendly)


// 8) Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

printString3 = (arr) => console.log(`Hi ${name2}! \n Welcome to  ${location}. \n  I hope you enjoy your stay. Please ask the president of ${location} if you need anything`);
 
let name2 = "Janice"
let location = "Hawaii"
    
 printString3()
