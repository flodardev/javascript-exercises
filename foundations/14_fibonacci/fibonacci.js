const fibonacci = function(index) {
    let indexInt = Number(index);
    let isIndex = false;
    let indexNumber = 1;
    let currentFibonacciNumber = 1;
    let previousFibonacciNumber = 0;

    while (!isIndex) {
        if (indexInt === 0) {
            return previousFibonacciNumber;
        } else if (indexInt < 0) {
            return "OOPS";
        } else {
            if (indexNumber === indexInt) {
                return currentFibonacciNumber;
            }
        }

        let temp = currentFibonacciNumber;
        currentFibonacciNumber += previousFibonacciNumber;
        previousFibonacciNumber = temp;
        ++indexNumber;
    }

};

// Do not edit below this line
module.exports = fibonacci;
