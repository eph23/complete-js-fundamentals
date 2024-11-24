"use strict";

// Function declaration
function calcAgeDeclaration(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const ageDeclaration = calcAgeDeclaration(1988);
console.log("Age from function declaration ", ageDeclaration);

// Function Expression
const calcAgeExpression = function (birthYear) {
    return 2037 - birthYear;
};

const ageExpression = calcAgeExpression(1988);
console.log("Age from function expression ", ageExpression);

// Arrow Functions
// Simple form of arrow function
const calcAgeArrow = (birthYear) => 2037 - birthYear;

const ageArrow = calcAgeArrow(1988);
console.log("Age from Arrow function ", ageArrow);

// Arrow function extended
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;

    return `${firstName} retires in  ${retirement} years`;
};

console.log(yearsUntilRetirement(1988, "Ephraim"));
console.log(yearsUntilRetirement(1980, "Bob"));

/* /* The main difference between function declaration, function expression and an arrow function doesn't gets "this" keyword*/
