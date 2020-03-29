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
    let result = arr.map(function(str,)
    {
    return str.charAt(0).toUpperCase() + ;
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

 // 5) Make an array of strings of the names saying whether or not they can go to The Matrix


    function ofAge(arr){
        const result = arr.map(function(num){
           
            if( num.age>= 18){
                return  num.name + " is allowed to see the Matrix"  
                }
            else if (num.age< 18){

                return num.name + " is not allowed to see the Matrix"  
            }  
        
        })
       return result
    
    }
    console.log(ofAge([
           { name: "Angelina Jolie", age: 80 },
        {name:"Eric Jones", age: 2},
        {name:"Paris Hilton", age: 5},
        {name:"Kayne West", age: 16 },
        { name:"Bob Ziroll", age: 100 }
    ]
       ));
    



       
    // 6) Make an array of the names in h1s, and the ages in h2s


    function list1(arr){
        const result = arr.map(function(num){
            return  `<h1>${num.name}</h1><h2>${num.age}</h2>` 

        })

       return result
        }
        
    
    console.log(list1([
           { name: "Angelina Jolie", age: 80 },
        {name:"Eric Jones", age: 2},
        {name:"Paris Hilton", age: 5},
        {name:"Kayne West", age: 16 },
        { name:"Bob Ziroll", age: 100 }
    ]
       ));
    
      