"use strict";
let y = 5555555555555555555555555555n;
// console.log(y)
let x;
// console.log(typeof x)
let fname = "prerna";
let lname = "prerna";
let compateFullname = fname == lname;
// console.log(compateFullname) 
let price = `price ${10}$`;
// console.log(price)
let longText = "dddddddddddddgggggggggg";
let shortText = longText.split('');
// console.log(shortText)
function isEven(m) {
    return m % 2 === 0;
}
// console.log(isEven(5))
function divide(d) {
    return d % 4 === 0 && d % 7 === 0;
}
// console.log(divide(24))
async function fetchdata() {
    const response = await fetch('https://dummyjson.com/products/1');
    const data = await response.json();
    if (typeof response === 'object') {
        console.log(data.id);
    }
}
fetchdata();