// prelimanary if statments olympics #1
if (5 > 3) {

    console.log("is greater then")
    if ( 5 < 3) {
        console.log("is not greater then")
    }
 }
 
//  if statements #2
 
var cat = "cat"
var dog = "dog"
console.log(cat.length)
    if(cat.length == 3){
    console.log("is the length")
    

    } else {
        console.log("they are the same");
        if (cat.length !== dog.length)
        {
        console.log("they are not the same")
        }
    }

     
// //  // bronze medel: object with values and if statments
 var person = {
     name: "Bobbie",
     age: 13,
 }
     
    if (person.age >= 18){
        console.log("Bobbie is allowed to go to the movie")
    } else {
        console.log("Bobbie is not allowed to go to the movie")
    }
    if (person.name.startsWith('B'))
    {
        console.log("Bobbie is allowed to go to the movie")
    } else{
        console.log("Bobbie is not allowed to go to the movie")
    }
     if (person.age >= 18 && person.name.startsWith('B')) 
     {
        console.log("Bobbie is allowed to go to the movie")
 
   } else  {
 
        console.log("Bobbie is not allowed to go to the movie")
   } 
 
// //    silver medal
 var one = 2
   if (one === "1"){
 
         console.log("strict")
 
 }
    else if (one !== "1"){ 
 
        console.log("They are not equal")
        if  (one == "1"){
            console.log("loose")
        } else {
               console.log("they are not equal")
            }

        }
 
 
//  // ternary syntax
 
//  const int_value = (1 === "1") ? true: false; 
 
//      console.log("not equal at all")

    //  Gold Medal
// 1
    if (typeof"dog" === "string")
 {
     console.log("dog is a string!");
 }
     
// 2
 if (true === true)
 {
     console.log("true is a boolean")
 }
// // # 3 

var animal = "horse";
if(typeof animal === "undefined"){
    console.log("is undefined")
} else{
    console.log("is defined")
}


// // 4 & 5
 if ("s" > 12)
 {
     console.log("it is not greater")

}
if ("sa" > 1)
 {
     console.log("it is not greater")

 }

 if ("w" > 3)
 {
     console.log("it is not greater")

 }

else ("s" === "s")
{
    console.log("they are the same")
}
 
// 6 ternary statement to check for odd/even number

var num = 7;
(num % 2 == 0 ? console.log("even number"): console.log("odd number"));