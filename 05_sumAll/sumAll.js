const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    let start = num1;
    let end = num2;

    if (num2 < num1) {
        start = num2;
        end = num1;
    }

    let i = start;
    let sum = 0;

    while (i <= end) {
        sum += i;
        i++
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
