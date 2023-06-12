/*
Destructuring [Destructuring Arrays Part 3] L117
    - Swap Variables
*/

// Old One 
let book = "Video";
let video = "Book";
// let tash = book;
// book = video;
// video = tash;
// console.log(book);
// console.log(video);
//Destructring
[book, video] = [video, book];
console.log(book);
console.log(video);
