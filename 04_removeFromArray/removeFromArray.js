const removeFromArray = function(arr1, ...removed) {
    const arr2 = arr1.filter(number => !removed.includes(number));
    return arr2;
}
// Do not edit below this line
module.exports = removeFromArray;