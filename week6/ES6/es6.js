// function sayHello(){
//     console.log("Hello!");
//  }
 
//  var intervalID = setInterval(sayHello, 1000);

// function sayHello(){
//    console.log('hello!');
// }


// function stopSayingHello(){
//    clearInterval(intervalID)
// }


// var intervalID = setInterval(sayHello, 1000);

// setTimeout(stopSayingHello,  6000)
var display = document.getElementById('time-display');

        function getTime(){
            var now = new Date();
            var hour = now.getHours();
            var min = now.getMinutes();
            var sec = now.getSeconds();
            
            display.textContent = `${hour}:${min}:${sec}`
        }

        setInterval(getTime, 1000)
 