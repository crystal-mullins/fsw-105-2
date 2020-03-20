// .concat()
// .indexOf()
// .lastIndexOf()
// .match()
// .replace()
// .slice()
// .split()
// .toLowerCase()
// .toUpperCase()
// .substr()
// strunctions exersize
// Implement all of the listed String Methods below using at least 3 unique Functions.

// concat #1
var str1 = "Crystal and ";
var str2 = "John "; 

function love(str1, str2) {
    if (str1.length >= str2.length){
        return str1.concat(str2);
    } else if (str1.length <= str2.length){
        return str2.concat(str1)
    }
}
console.log(love(str1, str2) + "are in love");

//.concat()#2

var num1 = "38 ";
var num2 = "42 ";

function ages(num1, num2){
    if(num1 <= num2){
        
        return num1.concat(num2)
    } else if (num2 <= num1){
        return num2.concat(num1)
    }
    console.log(num1, num2)
}
console.log(ages(num1 + "and " + num2 + " is their age"));

// .concat # 3
var str3 = " Lets be friends "
var str4 = " What do you say ?"

function sentence(str3, str4){
    if (str3.length >= str4.length){
    return str3.concat(str4)

    } else if (str3.length <= str4.length){
            return str4.concat(str3)
    }
    console.log(str3, str4)
}
console.log(sentence(str3, str4));

// indexOf()Implement all of the listed String Methods below using at least 3 unique Functions.
// #1

var str5 = " what did you do last night? "
var str6 = " when will you be free?"

function which(str5, str6){
    if(str5.length >= str6.length){
        return str6.indexOf("free")
    }
    console.log(str5, str6)
}
console.log(which(str5, str6))

// #2

var nums = "1, 2, 3, 4, 5, 6, 7, 8, 9";

function what(nums){
    if (nums.length >= 0){
        return nums.indexOf("5")
    }
    console.log(nums)
}
console.log(what(nums));

// #3


