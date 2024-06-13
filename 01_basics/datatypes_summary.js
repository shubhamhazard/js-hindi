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

// console.log(typeof myFunction);
// console.log(typeof anotherId);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), Heap (Non-Primitive)

let myYoutubename= "hiteshchoudharydotcom"

let anothername= myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);
// It will just update the value in which it is told to 

let userOne={
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
// it will also update value in the userOne also , that is , heap

userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);