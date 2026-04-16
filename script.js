let name="neha"
console.log(name)

let a =7
let b =9
console.log(a+b)

let username="neha"
let age=20
console.log(`my name is ${username} i am ${age} old`);

let a = 10;
let b = 3;

console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 
console.log(a % b); 

let x = 5;
console.log(x++); // 5 (first print, then increase)
console.log(x);   // 6


console.log("5" == 5);
console.log("5" === 5);

let f = 10;

if (f > 0) {
    console.log("positive");
} 
else if (f < 0) {
    console.log("negative");
} 
else {
    console.log("neutral");
}
function add(){
    console.log("ADD two numbers")
}
add()

function greet(name)
{
    console.log(`hello${name}`)
}
greet("neha");
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);