"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1988,
    "WebDev",
    ["Michael", "Steven", "Bob"],
];
console.log(eph);

// Looping backwards
for (let i = eph.length - 1; i >= 0; i--) {
    console.log(eph[i]);
}

// Loops inside loops
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`=== ▶️ Start Exercise ${exercise} ===`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Rep ${rep} 🏋️`);
    }
    console.log(`=== ⏹️ End of Exercise ${exercise} ===`);
}
