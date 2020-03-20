
// higher order methods Math()

// function doMath(num1, num2, callback){
//     return callback(num1, num2)
// }
// function sum(num1, num2){
//     return num1 + num2
// }
        
// function subtract(num1, num2){
//     return num1 - num2
// } 
// console.log(doMath(5, 10, sum))

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

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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

// // 2) Given an array of numbers, return a new array that only includes the even numbers.

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
    const result = arr.filter(function(str)
    {
        if(str.length <= 5){
        
         
        return str
        }
}
)
    return result   
}
console.log(five_and_under(["dog", "wolf", "by", "family", "eaten", "camping"]));

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

function peopleWhoBelong(arr){ 
    const result = arr.filter(function(str)
    {
        if(str.member){
        
         
        return str
        }

}
)
    return result  

}

console.log(peopleWhoBelong([
    { name: " Angelina Jolie", member: true},
    { name: " Eric Jones", member: false},
    { name: " PAris Hilton", member: true},
    { name: " Kayne West", member: false},
    { name: " Bob Ziroll", member: true}
]));

// 5) Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)
function ofAge(arr){
    const result = arr.filter(function(str)
    {
        if(str.age >= 18){
        
         
        return str.name + "is allowed to go to the movies"
        }

}
)
    return result  


}
var array = [{name: "Angelina Jolie",age: 80},
{name:"Eric Jones",age: 2},
{name:"Paris Hilton",age: 5},
{name:"Kayne West",age: 16},
{name:"Bob Ziroll", age: 100}]

console.log(ofAge(array))





