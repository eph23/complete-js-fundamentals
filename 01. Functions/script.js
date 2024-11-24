"use strict";

// Function Declarations
/* NOTE: Functions are reusable block of codes that perform a specific task.*/

function logger() {
    console.log("My name is Ephraim");
}

// Calling/running/invoking function
/* NOTE: Javascript functions are only executed when you explicitly call them (or implicitly in callbacks and whatnot). When a function doesn't explicitly return a value, the default return value is undefined. */
logger();

// Function with parameters
/* NOTE: Parameters are not actual values, parameters are placeholders to be replaced with actual values or arguments. */

function fruitProcessor(apples, oranges) {
    //     console.log(apples, oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

// Calling function with arguments
/* NOTE: Arguments are the actual value that we pass when we call a function. A function can accept one or more arguments and sometimes none.*/

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
