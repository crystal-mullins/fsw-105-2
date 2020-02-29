// first loop

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler","computer", "computer"]
function countItemsOnList(nameOfList, itemsToBeSearched){
            var numberOfItems = 0;
            for (i = 0; i < nameOfList.length; i++)
            {
                if(nameOfList[i] == itemsToBeSearched)
                {
                    numberOfItems = numberOfItems + 1;
                }
                
            }
            console.log("final count:"  + numberOfItems);
}

countItemsOnList(officeItems, "computer");

// javascript loops #2

// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//         name: "Crystal",
//         age: 38,
//         gender: "female",
//     },{
//         name: "Trinity",
//         age: 7,
//         gender: "female"
//     },{
//         name: "Adawehi",
//         age: 14,
//         gender: "female"
// },{
//         name: "Clarity",
//         age: 23,
//         gender: "female",
// },{
//         name: "Cyperus",
//         age: 20,
//         gender: "male"
// }  
// ]

// function getIdAge(age)
//     for (i = 0; i < 18; i ++){

//     if (i <= 18){
//         console.log("you are not allowed to go to the movies")
//     }
//     else {
//         console.log("you are not allowed to go to the movies")
//     }
// }
    



// console.log(peopleWhoWantToSeeMadMaxFuryRoad["age"])

    
// console.log(peopleWhoWantToSeeMAdMaxFuryRoad.name)
// console.log(peopleWhoWantToSeeMAdMaxFuryRoad.age)


// console.log("Crystal is allowed to go to the movies")
// console.log("Clarity is allowed to go to the movies")
// console.log("Adawehi is not allowed to go to the movies")
// console.log("Cyperus is allowed to go to the movies")
// console.log("Trinity is not allowed to go to the movies");

var counter = 1
function countTo101(counter, declareOddEven){

for (i = 0; i > 101; i ++){
    if(i % 2 == 0){
    console.log("even" + i)
    }
     else {
        console.log("odd" + i)
    }

}
}

// (i % 2 == 0 ? console.log("even number"): console.log("odd number"));
