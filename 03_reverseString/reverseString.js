const reverseString = function(str) {
    // My solution
    if (typeof str !== "string") {
        return "ERROR";
    } 
    newStr = "";
    i = 0;
    for (i = 0 + (str.length - 1); i >= 0; i--) {
        newStr += str[i];
        console.log(newStr);
    }
    return newStr;
};

// simpler given solution

//     return str.split("").reverse().join("");
// }

// Do not edit below this line
module.exports = reverseString;
