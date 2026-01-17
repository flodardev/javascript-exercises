const repeatString = function(string, numbers) {
    if (numbers < 0) {
        return "ERROR"
    }

    let strings = "";

    for (let i = 0; i < numbers; i++) {
        strings += string;
    }

    return strings;
};

// Do not edit below this line
module.exports = repeatString;
