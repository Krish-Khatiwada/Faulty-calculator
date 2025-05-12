// let n = Math.random();
// console.log (n)

// let a = prompt("Enter first number");
// let b = prompt("Enter operation");
// let c = prompt("Enter second number");


// const obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**"
// }

// if (n > 0.1) {
//     alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
// }

// else {
//     b = obj[b];
//     alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
// }


// Bussiness name generator

let n = Math.random();
let first, second, third;

if (n < 0.33) {
    first = "Crazy"
}
else if (n >= 0.33 && n < 0.66) {
    first = "Amazing"
}
else {
    first = "Fire"
}

n = Math.random();
if (n < 0.33) {
    second = "Engine"
}
else if (n >= 0.33 && n < 0.66) {
    second = "Foods"
}
else {
    second = "Garments"
}

n = Math.random();
if (n < 0.33) {
    third = "Bros"
}
else if (n >= 0.33 && n < 0.66) {
    third = "Limited"
}
else {
    third = "Hub"
}

console.log(`${first} ${second} ${third}`);