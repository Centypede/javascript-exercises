const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let i = 0;
    let str = '';
    while (i < num) {
        i++;
        str += string;
    } 
    return str;
};

repeatString();

// Do not edit below this line
module.exports = repeatString;
