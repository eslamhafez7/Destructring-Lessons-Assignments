/*
    [Destructring Assignment 4]
    output {
        - // My Age Is 30 And Iam Not Working
        - // I Live in Egypt
        - // My Hobbies: Reading And Programming
    }
*/

const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

const {age: a, working: w, country: c, hobbies:[one, ,two]} = member;
console.log(`My Age Is ${a} And I'm${w ? "working" : " not working"}`);
console.log(`I Live In ${c}`);
console.log(`My Hobbis: ${one}, ${two}`);
//DONE