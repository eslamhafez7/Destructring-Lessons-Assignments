/*
Destructuring [Destructuring Arrays Part 2] L116
*/
let Myfriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];
// console.log(Myfriends[3][2][1])
let [, , , [a, , [, b]]] = Myfriends;
console.log(a);
console.log(b);