const readlineSync = require("readline-sync");

const userName = readlineSync.question(`What is your name?`);

const intro = `Welcome ${userName} this is the Escape room. Follow the directions to escape.`;
console.log(intro);



let alive = true;
let hasKey = false;

while(alive == true)
{
    const menuId = readlineSync.keyIn(`press 1 for option to put hand in hole \n Press 2 to find to the key \n press 3 to open the door \n `, {limit: `$<1-3>`});
    if (menuId == 1)
    {
        console.log(`Oh No!! ${userName} you died!!`);
        alive = false;
    }
    else if(menuId == 2 && hasKey == false)
    {
        console.log(`${userName} great job you have found the key!`);
        hasKey = true;
    }
    else if(menuId == 2 && hasKey == true)
    {
        console.log(`${userName} you have found the key already!`);
        
    }
    else if(menuId == 3 && hasKey == true)
    {
        console.log(`${userName} you have found the key! Now insert the key and you are free!!!`);
        alive = false;
    }
    else if(menuId == 3 && hasKey == false)
    {
        console.log(`${userName} you must first find the key!`);
        
    }
}


