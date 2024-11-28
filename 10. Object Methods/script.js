"use strict";
const eph = {
    firstName: "Ephraim",
    lastName: "S",
    birthYear: 1988,
    job: "WebDev",
    friends: ["Michael", "Steven", "Bob"],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummery: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${
            this.job
        } and he ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
    },
};

console.log(eph.calcAge());
console.log(eph.age);

// Challenge
/* Ephraim is a 49 years old WebDev and he has a/no drivers license */
console.log(eph.getSummery());
