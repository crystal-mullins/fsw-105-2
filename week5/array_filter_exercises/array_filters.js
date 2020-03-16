
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
    {console.log(str)
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
    {console.log(str)
        // if(str.age > 18){
        
         
        // return str.name + "is allowed to go to the movies"
        // }

}
)
    return result  


}
var array = [{name: "Angelina Jolie",age: 80},
{name:"Eric Jones",age: 2},
{name:"Paris Hilton",age: 5},
{name:"Kayne West",age: 16},
{name:"Bob Ziroll", age: 100}]

console.log(
    ofAge( array
        ))


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

// // 2) Take an array of numbers and make them strings

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


// // 3) Capitalize each of an array of names

function cap(arr){
    let result = arr.map(function(str)
    {
    return str.toUpperCase();
    }
    )
    return result;
}
console.log(cap(["john", "JACOB", "jindGleHimer","schmidt"]));

// // 4) Make an array of strings of the names

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


    
      

//     // 5) Make an array of strings of the names saying whether or not they can go to The Matrix


    // function ofAge(arr){
    //     const result = arr.map(function(num){
    //         if(num >= 18){
    //             return  num.split()  
    //             }
    //         } else if (num < 18){

    //             return num.split()
    //         }  
        
    //    )
    //    console.log(ofAge(arr) + " can see the Matrix")  
    
    // }
    // console.log(ofAge([
    //        { name: "Angelina Jolie", age: 80 },
    //     {name:"Eric Jones", age: 2},
    //     {name:"Paris Hilton", age: 5},
    //     {name:"Kayne West", age: 16 },
    //     { name:"Bob Ziroll", age: 100 }
    // ]
    //    ));
    
    // }) 
    // }
    // console.log(getNameIfCanGO() + "is allowed to go the Matrix")

       
    // 6) Make an array of the names in h1s, and the ages in h2s



    // const nameObj = my_list.reduce(function(final, watcher){
    //         if(watcher.name){
    //             final.my_new_list++
    //         } else if(ages.age) {
    //             final.ages2++
    //         }
    //         return final
    //     }, { my_new_list: 0, ages2: 0})
    //     console.log(nameObj)
 

// //     Use the built-in .reduce() method on arrays to solve all of these problems:


// // 1) Turn an array of numbers into a total of all the numbers

function total(arr){
    let result= arr.reduce(function(num)
    {   
        arr.toString(num)
        
        return num + num + num;
    }
    )
    return result;
}
console.log("your total is " + total ([1,2,3]));

// // // 2) Turn an array of numbers into a long string of all those numbers.

const nums =[1,2,3]
const result1 = nums.reduce(function(final, current)
    {
        final === nums, nums, nums
     return  final;
}
)
    console.log(result1);

console.log(([1,2,3]));


// // const voteCount = voters.reduce(function(final, voter){
// //     if(!voter.voted){
// //         final++
// //     }
// //     return final
// // }, 0)
// // console.log(voteCount)

// // return an object


// // const voters = [
// //     { name: "steve", voted: false },
// //     { name: "Janet", voted: false },
// //     { name: "rebecca", voted: false },
// //     { name: "harvey", voted: false },
// //     { name: "sam", voted: false },
// //     { name: "phil", voted: true },
// //     { name: "mike", voted: true },
// //     { name: "fred", voted: true },
// //     { name: "beckey", voted: true },
// //     { name: "mark", voted: true },
// //     { name: "joey", voted: true },
// //     { name: "jeff", voted: true }
// // ]
// // function get_voters(arr){
// // const voterObj = voters.reduce(function(final, voter){
// //     if(voter.voted){
// //         final.didVote++
// //     } else {
// //         final.didntVote++
// //     }
// //     return final
// // }, { didVote: 0, didntVote: 0})
// // }
// // console.log(get_voters[voters])


// // 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once 


// function shoppingSpree(arr){
    
//             const result = arr.filter(function(sum1, sum2){
//                 if (sum1 >= sum2) {
//                     return sum1 + sum2
//                 } else if (sum2 <= sum1){
//                 return sum2 + sum1
//                 }
//             }
            
//             )
//             return result;
        
//         }
    
// console.log(shoppingSpree())


// var wishList = [
//     { title: " Telsla Model s", price: 90000},
//     { title: " 4 carat dimond ring", price: 45000},
//     { title: " Fancy hackey sack", price: 5},
//     { title: " Gold figit spinner", price: 2000},
//     { title: " A second Telsla Model s", price: 90000},
    
// ]
// console.log(shoppingSpree(wishlist));


// // function flatten(arr){
// //  let newArr = arr.concat(function(final){
// //       return newArr
// //  })
// //  console.log(newArr)
// // }var arrays = [
// //     ["1","2", "3"],
// //     [true],
// //     [4,5,6]
// // ];
// // console.log(flatten(arrays));

// // 6) Given an array of potential voters, return an object representing the results of the vote
// // Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.



const voters = [
        { name: "steve", age: 30, voted: false },
        { name: "Janet", age: 32, voted: false },
        { name: "rebecca",age: 25, voted: false },
        { name: "harvey", age: 20,voted: false },
        { name: "sam", age: 21,voted: false },
        { name: "phil",age: 55, voted: true },
        { name: "mike", age: 54,voted: true },
        { name: "fred", age: 31,voted: true },
        { name: "beckey", age: 43,voted: true },
        { name: "mark", age: 41,voted: true },
        { name: "joey", age: 30,voted: true },
        { name: "jeff", age: 19,voted: true }
    ];
    function voterResult(arr){
        let voterResults = voters.reduce(
            function(final, voter){
                if (voter.age > 18 && voter.age <= 25 && voter.voted) {
                    final.youngVotes++;
                
                }
                if (voter.age >= 18 && voter.age <= 25){
                    final.youth++;
                }
                if (voter.age >= 26 && voter.age <= 35 && voter.voted){
                    final.midVotes++;
                }
                if (voter.age >= 26 && voter.age <= 35){
                     final.midVotes++;
                }
                if (voter.age >= 36 && voter.age <= 55 && voter.voted){
                    final.oldVotes++;
                }
                if (voter.age >= 36 && voter.age <= 55){
                    final.oldsVotes++;
               }
               return final;
            },
            { youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0 }
                );
                console.log(voterResults);
            }
        
        
    console.log(voters)






// //     Use the built-in .sort() method on arrays to solve all of these problems:
// // 1) Sort an array from smallest number to largest
function leastToGreatest(arr){
    var nums= [1, 3, 5, 2, 90, 20]
const result = arr.sort(function(num1, num2){
    if(num1 => num2)  {
        return num1 - num2
    }else {
    return result
    }
})
console.log(arr)
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

// // 2) Sort an array from largest number to smallest
function greatestToLeast(arr){
    var nums= [1, 3, 5, 2, 90, 20]
const result = arr.sort(function(num1, num2){
    if(num2 <= num1)  {
        return  num2 - num1
    // }else{
    // return result
    }
})
console.log(arr)
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

// // 3) Sort an array from shortest string to longest

function lenghtShort(arr)
{
    const result = arr.sort(function(str1, str2)    {
    if (str1.length >= str2.length)
     {
           return str1 - str2
           
    } else if(str2.length >= str1.length)
    {
        return str2 - str1
    }
    return result
})
console.log(arr)
}

    

console.log(lenghtShort(["dog", "wolf", "by", "family", "eaten", "camping"]));

// // 4) Sort an array alphabetically
function alphabetical(arr)
{
    const result = arr.sort(function(a, b)    {
    if (a < b)
     {
           return a +  b
           
    } else if(b < a)
    {
        return b +  a
    }
    return result
})
console.log(arr)
}

    

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten", "camping"]));


// // 5) Sort the objects in the array by age

// function byAge(arr){

// }

// console.log(byAge([
//     { name: "Quite Samuri", age: 22},
//     { name: "Arrogant Ambassador", age: 100},
//     { name: "Misunderstood Observer", age: 2},
//     { name: "Unlucky Swami", age: 77},
// ]))


// this is far as i could get!!!