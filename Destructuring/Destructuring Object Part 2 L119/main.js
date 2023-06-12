/*
Destructring [Destructuring Objects Part 2] L119
    - Naming The Variabes
    - Add New Property
    - Nestead Object
    - Destructring The Neasted Object Only
*/

let user = {
    theName: "Eslam",
    theAge: 21,
    theTitle: "Developer",
    theCountry: "Egypt",
    theColor: "black",
    skills: {
        html: 70,
        css: 80,
    },
};

const {
    theName: n,
    theAge: g,
    theTitle: t,
    theCountry: con,
    skills: {html: h, css: c,}
} = user;

({theName, theAge, theTitle, theCountry, theColor: co} = user);
console.log(n);
console.log(g);
console.log(t);
console.log(con);
console.log(co);
console.log(`html progress: ${h}`);
console.log(`css progress: ${c}`);
