const sumAll = function(...args) {

    for (arg of args) {
        if (!Number.isInteger(arg)
            || arg < 0
        ) {
            return "ERROR"
        }
    }s

    let arraySorted = [...args].sort((a,b) => a - b)
    let newArray = [];
    for (let i = arraySorted[0]; i <= arraySorted[1]; i++) {
        newArray.push(i);
    }
    return newArray.reduce((sum, current) => sum + current);
};

// Do not edit below this line
module.exports = sumAll;
