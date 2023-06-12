/*
Destructring [Destructuring Object Part 1] L118
*/

const user = {
    theName: "Eslam",
    theAge: 30,
    theTitle: "Developer",
    theCountry: "Egypt",
}

console.log(user.theName);
console.log(user.theAge);
console.log(user.theTitle);
console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({theName, theAge, theTitle, theCountry} = user);
let {theName, theTitle, theCountry} = user;
console.log(theName);
console.log(theTitle);
console.log(theCountry);