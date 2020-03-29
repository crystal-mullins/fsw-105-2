const readlineSync = require("readline-sync");

const userName = readlineSync.question(`Would you like to travel in time? Enter your name to book your trip` + `\n`);

const intro = `Welcome ${userName} to the Time Travel Machine. Follow the directions to travel in time! Watch out it is a dangerous trip!
Please get back safe ${userName}!`
console.log(intro);
const dangers = ['Worm Hole', 'Time Travel Police', 'machine malfunction', 'run into self']
const helpers = ['mad scientst', 'fair madien', 'prince charming', 'self helps self']
var award = []
let lifeForce = 50
const options = ['Time Travel', 'Exit', 'Print']
let pickUp = helpers[Math.floor(Math.random()*helpers.length)];

function timeMachine(){

    const helpers = Math.floor(Math.random()* (4 + 4 - 2 ) + 5)
    const danger = dangers[Math.floor(Math.random()* ((dangers.length)))]
    let dangerForce = 50
    const dangerLevel = Math.floor(Math.random()* (3 - 4 + 4 ) + 2)

    const index = readlineSync.keyInSelect(options, `What would you like to do next${userName}?`)

    if (options[index] == 'Exit')
    {
        return lifeForce = 0;
    }
    else if( options[index] ==  'Print')
    {
        console.log(`${userName} \n` + lifeForce + '\naward:' + pickUp);
        timeMachine()
   
    }
    else if(options[index] === 'Time Travel')
    {
        let key = Math.floor(Math.random()* 10)
      console.log(key)  
     if(key <= 3)
    {
        console.log(`Wow ${userName} you are traveling through time`);
        timeMachine()
    }
    else if(key > 3)
    { 
        console.log(danger + ` got you! Oh No!`)
        
        while(dangerForce > 0 && lifeForce > 0){
            const user = readlineSync.question(`What do you want to do ${userName} enter "r" to race into time or enter "b" to go back in time:`)

            switch (user){
                case 'r': 
                const race = Math.random()
                    if(race < .3){
                        console.log(`Before you got away ` + danger + ` got you with ` + dangerLevel)
                    }else{
                        console.log(`Great job ${userName}!! you got away!`)
                        timeMachine()
                        break
                        
    }
                case 'b':

                        dangerForce -= dangerLevel
                        console.log('You escaped ' + danger + ' with '+ dangerLevel + ' danger level')

                        lifeForce -= dangerLevel
                        console.log('watch out for `' + danger)

                        if(dangerForce <= 0){
                            console.log('you escaped ' + danger + `\n` + dangerLevel + helpers)
                            let money = Math.random()
                            if(money <= .3){
                                award.push(pickUp)
                            }
                            
                            }
                            else if(lifeForce <= 0){
                                console.log(danger + ` got you, now you are trapped in time!`)}
                        }

                    }
                }
            }

        while(lifeForce > 0) {
            reset = function(){
                alive = true;
                lifeForce = 50;
            };
reset()

}

}
timeMachine()