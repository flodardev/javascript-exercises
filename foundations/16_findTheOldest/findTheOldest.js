const findTheOldest = function(arr) {
    const checkYear = arr.map(item => {
        if (!item["yearOfDeath"]) {
            item["yearOfDeath"] = new Date().getFullYear();
        }
        return item;
    })

    console.log(checkYear);
    const oldest = checkYear.sort((personOne, personTwo) => {
        let personOneAge = personOne.yearOfDeath - personOne.yearOfBirth;
        let personTwoAge = personTwo.yearOfDeath - personTwo.yearOfBirth;
        return personTwoAge - personOneAge;
    })

    // console.log(oldest);
    return oldest[0];

};

// Do not edit below this line
module.exports = findTheOldest;
