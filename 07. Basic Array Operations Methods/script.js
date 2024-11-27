"use strict";

// Array
const friends = ["Michael", "Steven", "Bob"];
console.log(friends);

// push method
/* Adds elements at the end of an array */
friends.push("Jay");
console.log(friends);

// unshift method
/* Adds elements at the beginning/start of an array */
friends.unshift("John");
console.log(friends);

// pop method
/* Removes elements from the end of an array */
const popped = friends.pop();
console.log(popped);
console.log(friends);

// shift method
/* Removes elements from the beginning/start of an array */
const shifted = friends.shift();
console.log(shifted);
console.log(friends);

// indexOf method
/* Returns the index of the element in the array. It returns -1 if the element is not found in the array */
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Sara"));

// includes method
/* Returns true if the element is found in the array, otherwise it returns false */
console.log(friends.includes("Bob"));
console.log(friends.includes("Steven"));
console.log(friends.includes("23"));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}
