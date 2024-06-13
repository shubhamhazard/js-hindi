// Primitive

// 7 types : string, number, boolean , null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34234872648274682689834646864n

// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj={
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);
console.log(typeof anotherId);