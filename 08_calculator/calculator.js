const add = function(num, num2) {
	return num + num2;
};

const subtract = function(num, num2) {
	return num - num2;
};

const sum = function(arr) {
  let n = 0
  for(num in arr) {
    n += arr[num];
  }
  return n;
};

const multiply = function(arr) {
  let n = 1;
  for(num in arr) {
    n *= arr[num];
  }
  return n;
};

const power = function(num, num2) {
	return num ** num2
};

const factorial = function(num) {
  let i = num;
  let sum = 1;
  while(i > 0) {
    sum *= i
    i--;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
