const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, current) => {
    return total + current;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, current) => {
    return total * current;
  },)
};

const power = function(base, exponent) {
	return base**exponent;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }

  const numbers = [];
  for (let i = a; i > 0; i--) {
    numbers.push(i);
  }
  
  const factorial = numbers.reduce((total, current) => {
   return total * current; 
  })

  return factorial;
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
