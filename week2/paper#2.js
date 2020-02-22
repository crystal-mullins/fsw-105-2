var enemies = ["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function who_wins(is_there_kryptonite, enemy_name)
{
    if (! is_there_kryptonite)
    {
        return "Superman beats " + enemy_name + ", of course";
    }

    else{
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemy_name + " could possibly win this one.";
    }
}

for (var i = 0; i < enemies.length; i++)
{
    var is_there_kryptonite;
    if (i % 2 === 0) {
        is_there_kryptonite = true;
    } else  {
        is_there_kryptonite = false;
    }
    console.log(who_wins(is_there_kryptonite,enemies[i]));
}

function how_attracted_is_lois_lane_to_me ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random() * 10) +1);
}

console.log(how_attracted_is_lois_lane_to_me ()) ;

var clark_kent = true;
var superman = false;

while (clark_kent) {

    console.log("I'm just a nerdy columnist");

    var phone_booth_quick_change = Math.random();

    if (phone_booth_quick_change >= 0.5) 
    {
        clark_kent = false;
        superman = true;
        console.log("Now I'm Superman!");
     
     }
     }
//    still trying to "git" the code!