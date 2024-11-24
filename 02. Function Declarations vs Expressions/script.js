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

/* The amin difference between function declaration vs function expression is we cant call/invoke/run function expression before defining it */
