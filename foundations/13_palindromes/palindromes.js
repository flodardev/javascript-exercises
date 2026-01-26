const palindromes = function (string) {
    const onlyChar = string.replace(/[^a-zA-Z0-9]/g, '');

    const lowerCased = onlyChar.toLowerCase();
    const backwards = lowerCased.split("").reverse().join("");
    if (lowerCased.localeCompare(backwards) === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
