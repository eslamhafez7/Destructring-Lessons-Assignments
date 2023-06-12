/*
    Destructuring [Destructuring Arrays Part 1] L115

    - Destructuring is a feature in JavaScript that allows you to
        extract values from an array and assign them to variables in a single statement. 
*/
let myFriends = ["Mai", "Sara", "Asmaa", "Mohsen"];
let [x, , , k, o = "Assel"] = myFriends;
console.log(x);
console.log(k);
console.log(o);


// 1
let arr = [1, 2, 3, 4];
const  [a, b, c, d] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// 2
let i = 1;
let j = 2;
[j, j] = [i, j];
console.log(j);
console.log(i);

// 3
let names = ["Eslam", "Ahmed", "Aymen"];
let [first, , third] = names;
console.log(first);
console.log(third);

// 4
function getValues() {
    return [2002, 2003, 2004];
}
let [f, s, t] = getValues();
console.log(f);
console.log(s);
console.log(t);

// 5
let user = ["John Doe", "johndoe@example.com", ["JavaScript", "Python", "HTML"]];
let [name, email, [lang1, lang2, lang3 = "CSS"]] = user; 
console.log(name);
console.log(email);
console.log(lang1);
console.log(lang2);
console.log(lang3);
console.log("___________");

// 6
let data = [
    ["Eslam", "Male", 21],
    ["Sara", "Female", 20],
    ["Ahmed", "Male", 24],
]
for( let [name, gender, age] of data) {
    console.log(`Name: ${name}`);
    console.log(`Gender: ${gender}`);
    console.log(`Age: ${age}`);
    console.log("_____________________");
}