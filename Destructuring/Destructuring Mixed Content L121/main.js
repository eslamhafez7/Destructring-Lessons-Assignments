/*
Destructring [Destructuring Mixed Content] L121
*/


const user = {
    name: "Eslam",
    age: 21,
    skills: ["html", "css", "javascript"],
    addresses: {
        egypt: "cairo",
        ksa: "Riad",
    },
};

const {name: n, age: a, skills: [one, two, three], addresses:{egypt: e, ksa: k}} = user;

console.log(`Your Name is ${n}`);
console.log(`Your Age is ${a}`);
console.log(`Your Skills is ${one} and ${two} and ${three}`);
console.log(`Your First City is ${e}`);
console.log(`Your Second City is ${k}`);