// sinlgeton
// Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    "name": "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykeys1", // mySym can only be seen as a symbol when it is closed in a square bracket
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Saturday"]
}

// console.log(JsUser.email);  //not a perfect practice to print a object
// console.log(JsUser["email"]); // its a better practice 
// console.log(JsUser["full name"]); // its a better practice 
console.log(JsUser[mySym]); // this syntax is used to print symbol

JsUser.email="hitesh@chatgpt.com"
// Object.freeze(JsUser) //it will freeze further processing of code from here
JsUser.email="hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());