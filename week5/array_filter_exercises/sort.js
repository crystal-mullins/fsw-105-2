
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

var list = ["dog", "wolf", "by", "family", "eaten", "camping"]
console.log(list.sort())
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten", "camping"]));


// // 5) Sort the objects in the array by age
var list2 = [
    { name: "Quite Samuri", age: 22},
    { name: "Arrogant Ambassador", age: 100},
    { name: "Misunderstood Observer", age: 2},
    { name: "Unlucky Swami", age: 77},]

function byAge(arr){
    const result = arr.sort(function(a, b){ console.log(a.age,  b.age)
        return a.age - b.age}
    
    );
return result


}

console.log(byAge(list2))

