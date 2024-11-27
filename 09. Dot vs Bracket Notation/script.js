"use strict";

// Object
const eph = {
    firstName: "Ephraim",
    lastName: "S",
    age: 2037 - 1988,
    job: "WebDev",
    friends: ["Michael", "Steven", "Bob"],
};

console.log(eph);

// Accessing object property
// Dot notation
console.log(eph.lastName);
console.log(eph.firstName);

// Bracket Notation
/* Any expression can be used with the bracket notation */
console.log(eph["lastName"]);
const nameKey = "Name";
console.log(eph["first" + nameKey]);
console.log(eph["last" + nameKey]);

// Example
/* const interestedIn = prompt(
    `What do you want to know about Ephraim? Choose between firstName, lastName, age, job, and friends.`
);

if (eph[interestedIn]) {
    console.log(eph[interestedIn]);
} else {
    console.log(
        `Wrong request. Choose between firstName, lastName, age, job, and friends`
    );
} */

// Mutating object property
eph.location = "Syl, BD";
eph["twitter"] = "@ephraims23";
console.log(eph);

// Challenge
/* Ephraim has 3 friends and his best friend is called Michael */
console.log(
    `${eph.firstName} has ${eph.friends.length} friends and his best friend is called ${eph.friends[0]}`
);
