let n = Math.random();
console.log (n)

let a = prompt("Enter first number");
let b = prompt("Enter operation");
let c = prompt("Enter second number");


const obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (n > 0.1) {
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}

else {
    b = obj[b];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}