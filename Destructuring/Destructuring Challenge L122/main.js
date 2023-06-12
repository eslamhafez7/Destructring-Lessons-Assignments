/*
Destructring [ Destructuring Challenge] L122
    - the object from the myFriends array is directly 
    destructured without using array destructuring syntax ([]). 
*/



let chosen = 3;
let myFriends = [
    {title: "osama", age: 30, available: true, skills: ["HTML", "CSS"] },
    {title: "ahmed", age: 20, available: false, skills: ["Python", "JS"] },
    {title: "eslam", age: 21, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
    let {title: t, age: a, available: v, skills:[, two]} = myFriends[0];
    console.log(t);
    console.log(a);
    if(v === true) {
        console.log(`Available`)
    }
    console.log(two);
}else if (chosen === 2) {
    let {title: t, age: a, available: v, skills:[, two]} = myFriends[1];
        console.log(t);
        console.log(a);
    if(v === false) {
        console.log(`Not Available`)
    }
    console.log(two);
}else if(chosen === 3) {
    let {title: t, age: a, available: v, skills:[, two]} = myFriends[2];
    console.log(t);
    console.log(a);
if(v === true) {
    console.log(`Available`)
}
console.log(two);
}
//DONE




