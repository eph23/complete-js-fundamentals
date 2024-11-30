"use strict";

// While loops
let rep = 1;
while (rep <= 3) {
    console.log(`Lifting weights rep ${rep} 🏋️`);
    rep++;
}

let dice = Math.floor(Math.random() * 6 + 1);
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.floor(Math.random() * 6 + 1);
    if (dice === 6) {
        console.log(`YOU ROLLED A ${dice}!!!`);
    }
}
