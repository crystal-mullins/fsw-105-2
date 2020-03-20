//Use the built-in .reduce() method on arrays to solve all of these problems:
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


function shoppingSpree(arr){
    
            const result = arr.reduce(function(final,obj){
                
                console.log(final)
                final +=  obj.price
               return final
            }
            ,0
            )
            return result;
        
        }
    


var wishList = [
    { title: " Telsla Model s", price: 90000},
    { title: " 4 carat dimond ring", price: 45000},
    { title: " Fancy hackey sack", price: 5},
    { title: " Gold figit spinner", price: 2000},
    { title: " A second Telsla Model s", price: 90000},
    
]
console.log(shoppingSpree(wishList));



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

