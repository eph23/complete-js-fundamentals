"use strict";

// Helper Function
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement}years`;
    } else {
        return `${firstName} has already retired`;
    }
};

console.log(yearsUntilRetirement(1988, "Eph"));
console.log(yearsUntilRetirement(1970, "Steven"));
console.log(yearsUntilRetirement(1980, "Bob"));

/* NOTE: A return statement ends the execution of a function, and returns control to the calling function. */
