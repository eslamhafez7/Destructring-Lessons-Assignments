/*
    - [Destructring Assignment 2]
    
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
    // Write Your Destructuring Assignment Here
    //Output  My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

*/

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
let [a, b, c, [d, e, [f, g]]] = mySkills;
console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

//DONE