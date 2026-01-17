const reverseString = function(word) {
    let reverseWord = "";
    let lengthWord = word.length - 1;
    let wordArray = word.split("");

    for (i = lengthWord; i >= 0; i--) {
        reverseWord += wordArray[i];
    }

    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
