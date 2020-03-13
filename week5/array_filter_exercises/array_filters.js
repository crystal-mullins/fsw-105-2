
// higher order methods Math()

function doMath(num1, num2, callback){
    return callback(num1, num2)
}
function sum(num1, num2){
    return num1 + num2
}
        
function subtract(num1, num2){
    return num1 - num2
} 
console.log(doMath(5, 10, sum))

// .map

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]


// const result = arr.map(function(num){
//     return num + 10
// })


// const result = arr.map(num => num + 10)
    

// console.log(result)

// const users = [
//     { name: "joe"},
//     { name: "steve"},
//     { name: "lisa"}

// ]
// const result = users.map(function(user){
//     return user.name
// })
// console.log(result)

// // .filter() for even num

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = arr.filter(function(num){
//     if (num % 2 === 0){
//         return num
//     }
// })
// console.log(result)

// 
// const result = arr.filter(num => num % 2 ===0)
        
//     console.log(result)


// const movies = [
//     {name: "movie1", genre: "horror"},
//     {name: "movie2", genre: "action"},
//     {name: "movie3", genre: "action"},
//     {name: "movie4", genre: "fantasy"}
// ]
// const actionMovies = movies.filter(function(movie){
//     if (movie.genre === "action"){
//         return movie
//     }
// })

// console.log(actionMovies)










// array filters #1 five and greater


function five_and_greater(arr)
{
    let result = arr.filter(function(num)
    {
    if (num >= 5 )
    
       return num;
    }
    )
    return result;

}
console.log(five_and_greater([3,6,8,2]));

// 2) Given an array of numbers, return a new array that only includes the even numbers.

function evens(arr)
{
    let result = arr.filter(function(num)
    {
        if (num % 2 == 0)
        return num;
    }
    )
    return result;
}
console.log(evens([3,6,8,2]));


// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

function five_and_under(arr)
{
    let result = arr.filter(function(str)
    {
    if (str.lenght <= 5)
        return str;
    
    }
    )
    return result;
}
console.log(five_and_under(["dog", "wolf", "by", "family", "eaten", "camping"]));







// Use the built-in .map() method on arrays to solve all of these problems:

// 1) Make an array of numbers that are doubles of the first array

function double_num(arr){
    const result = arr.map(function(num){
    return num + num
    }
    )
    return result;
}
console.log(double_num([2,5,100]));

// 2) Take an array of numbers and make them strings

function to_str(arr)
{
    let result = arr.map(function(num)
    {
       return num.toString();  
    }
    )
    return result;
}
console.log(to_str([2,5,100]));


// 3) Capitalize each of an array of names

function cap(arr){
    let result = arr.map(function(str)
    {
    return str.toUpperCase();
    }
    )
    return result;
}
console.log(cap(["john", "JACOB", "jindGleHimer","schmidt"]));

// 4) Make an array of strings of the names

// function make_array(arr){
//     let result = arr.map(function(str)
//     {
//     return str.split()
//     }
//     )
//     return result;
// }
const my_list = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name:"Eric Jones",
        age: 2
    },
    {
        name:"Paris Hilton",
        age: 5
    },
    {
        name:"Kayne West",
        age: 16
    },
    {
        name:"Bob Ziroll",
        age: 100
    }
    ]

    function getName(arr)
{
    let result = arr.map(function(str)
    {
       return str.name
    }
    )
    

   console.log(result) 
}

    getName(my_list)


    
      




//     Use the built-in .reduce() method on arrays to solve all of these problems:


// 1) Turn an array of numbers into a total of all the numbers

// function total(arr){
//     let result= arr.reduce(function(finalAddition, num)
//     {
//         finalAddition = finalAddition + num;
//         return finalAddition;
//     }
//     )
//     return result;
// }
// console.log("your total is " + total ([1,2,3]));

// // 2) Turn an array of numbers into a long string of all those numbers.

function str_concat(arr){

    let result = arr.reduce(function(num)
    {
    console num result
    return  num;
}, ""
)
    return result;
}
console.log(str_concat([1,2,3]));