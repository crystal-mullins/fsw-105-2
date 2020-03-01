// first loop how many computers in list
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp","stapler", "computer", "computer"]

function countItemsOnList(nameOfList, itemToBeSearchd){
    var numberOfItems = 0;
    for (i = 0; i < nameOfList.length; i++)
    {
        if(nameOfList[i] == itemToBeSearchd)
        {
            numberOfItems = numberOfItems + 1;
        }

    }
    console.log("final count: "+ numberOfItems + " computers");
}
countItemsOnList(officeItems, "computer")


// javascript loops #2

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Crystal",
        age: 38,
        gender: "female",
    },{
        name: "Trinity",
        age: 7,
        gender: "female"
    },{
        name: "Adawehi",
        age: 14,
        gender: "female"
},{
        name: "Clarity",
        age: 23,
        gender: "female",
},{
        name: "Cyperus",
        age: 20,
        gender: "male"
}  
]
// #2 function they can or they cannot go to the movies

var age = ''
for (var a = 0; a < peopleWhoWantToSeeMadMaxFuryRoad.length; a++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[a].age < 18){
        console.log("you are not allowed to go to the movies") 

    }  else if (peopleWhoWantToSeeMadMaxFuryRoad[a].age >= 18){
        console.log("you are allowed to go to the movies")
    }
}
// #3 function with name and gender 
var gender = ''
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
        gender = "him"
    } else {
        gender = "her"
    }
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enought to see Mad Max!" + " do not let " + gender + " in!!")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[0].age > 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enought to see Mad Max! " + " let " + gender + " in!!")
    }
}

    // functions # 5 return if a number is odd or even from 0 to 100

var i

for (i = 0; i < 101; i++)
{   
     if(i % 2 === 0){
    console.log("even")
    }
     else if (i % 2 !== 0)
     {
        console.log("odd")
    } 
}