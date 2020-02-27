// Javascript loops
// number var counts to 100 
    for(var i = 0; i < 100; i++){
    console.log(i)
}
// var counts by 2
    for(var i = 0; i < 10; i += 2){
    console.log(i)
}
// array the long way log..
    var fav_foods = ["pizza", "pasta", "ice cream", "banana"]
    
    console.log(fav_foods[0])
    console.log(fav_foods[1])
    console.log(fav_foods[2])
    console.log(fav_foods[3])
    
    // short way...
    for(i = 0; i < fav_foods.lenght; i++){
        console.log(fav_foods[i])
    }
// how to check an odd or even number
    var numbers = [1, 2, 3, 4, 5, 6]
    for(var i = 0; i < numbers.lenght; i++)
    {
        if(numbers[i] % 2 === 0)
        {
            console.log(numbers[i])
        }
    }
    // writes hi 10 times
    var count = 0
    while (count < 10)
    {
        console.log("hi")
        count++
    }

    // nested loops that partially work!
    var arrayOfArrays = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    for(var i = 0; i < arrayOfArrays.lenght; i++)
        for(var j = 0; j < arrayOfArrays[i].lenght; j++)
    {
        console.log(arrayOfArrays[i][j])
    }
        console.log(arrayOfArrays[2][2])