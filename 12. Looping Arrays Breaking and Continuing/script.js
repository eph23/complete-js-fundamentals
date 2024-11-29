"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1988,
    "WebDev",
    ["Micheal", "Steven", "Bob"],
    true,
];

// Looping array
const types = [];

for (let i = 0; i < eph.length; i++) {
    console.log(eph[i]);
    types.push(typeof eph[i]);
}
console.log(types);

const birthYears = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
    ages.push(2037 - birthYears[i]);
}
console.log(ages);

// Continue and break
console.log("=====Continue=====");
for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] !== "string") {
        continue;
    } else {
        console.log(eph[i], typeof eph[i]);
    }
}

// Continue and break
console.log("=====Break=====");
for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] === "number") {
        break;
    } else {
        console.log(eph[i], typeof eph[i]);
    }
}
