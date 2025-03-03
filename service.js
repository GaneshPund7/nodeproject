// Destructuring in javascript 
// The destructuring in js is special syntax which unpack the value of array or object
const arr  = [1,2,3,4,56,7]


// let [a,b,...c] = arr;
// console.log (a,b,c );

let obj = {...arr};

console.log(obj);

const fruits = [{
        fruitName: 'kivi',
        weight : 20,
        quantity: 10,
},
{
    fruitName: 'banana',
    weight: 10,
    quantity: 12
}]


let obj2 = {
    name: "Rajesh",
    age: 25,
    performance: "Good",

}
// qn 1
const { x = 10, y } = { y: 20 };
console.log(x, y);
// qn 2
const person = { name: "Alice", address: { city: "Paris", country: "France" } };
const { address: { city: location } } = person;
console.log(location);


//qn 3
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b);


// qn 4

function getInfo({ name, age } = { name: "Bob", age: 30 }) {
    console.log(name, age);
}

getInfo();

// qn 5
const [, second,, fourth] = [10, 20, 30, 40];
console.log(second, fourth);


// qn 6
function getScores() {
    return [85, 90, 95];
}
const [, secondScore] = getScores();
console.log(secondScore);


// qn 7
const obj4 = { name: "John" };
const { age } = obj4;
console.log(age);