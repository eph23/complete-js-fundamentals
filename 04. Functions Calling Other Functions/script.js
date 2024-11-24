"use strict";

// Helper Function
/* NOTE: A helper function is a function that assists the main function in performing specific tasks. Helper functions can make programs easier to read, update, and maintain by breaking down complex operations into smaller, more focused functions.
 */
const cutFruitPieces = function (fruit) {
    return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
    // Calling helper functions inside another function
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
    return juice;
};

console.log(fruitProcessor(2, 3));
