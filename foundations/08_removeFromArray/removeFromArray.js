const removeFromArray = function() {
    let argArray = Array.from(arguments);
    let array = argArray[0];
    let remove = argArray.splice(1);
    let result = array.filter(x => !remove.includes(x))
    return result;
}

// Do not edit below this line
module.exports = removeFromArray;
