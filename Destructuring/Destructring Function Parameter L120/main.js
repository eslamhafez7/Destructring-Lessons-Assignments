/*
Destructring [Destructring Function Parameter] L120
*/

const user = {
    name: "Eslam",
    age: 21,
    title: "Developre",
    country: "Egypt",
    skills: {
        html: 100,
        css: 90,
    }
};
showDetails(user);
// function showDetails(obj) {
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.title);
//     console.log(obj.country);
// }

function showDetails({name: n, age: g, title: t, country: c, skills: {html: h, css: s}} = user) {
    // console.log(name);
    // console.log(age);
    // console.log(title);
    // console.log(country);
    // console.log(html);
    // console.log(css);
    console.log(n);
    console.log(g);
    console.log(t);
    console.log(c);
    console.log(h);
    console.log(s);
}
