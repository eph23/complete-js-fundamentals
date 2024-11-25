"use strict";

// Array
const friends = ["Michael", "Steven", "Bob"];
console.log(friends);

// Array Literal
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// Accessing array value
console.log(friends[0]);
console.log(friends[2]);

// Array property
console.log(friends.length);
console.log(friends[friends.length - 1]);

// Mutate array value
friends[2] = "Jay";
console.log(friends);

/* NOTE: Array can hold any type of data/expressions that creates value */
/* NOTE: An expression is a combination of values, variables, and operators, which computes to a value. */

const firstName = "Eph";
const eph = [firstName, "S", 2037 - 1988, "WebDev", friends];
console.log(eph);
console.log(eph.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};
const birthYears = [1990, 1967, 2002, 2010, 2018];

const ages = [
    calcAge(birthYears[0]),
    calcAge(birthYears[1]),
    calcAge(birthYears[birthYears.length - 1]),
];
console.log(ages);
