// if 
const isUserLoggedIn=true
const temperature=41

// if (temperature === 40) {
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// <,>,<=,>=,==,!=,=== (strict equal (it also checks the datatypes)),!==(tp check in anti form)

const score=200

if (score > 100){
    const power="fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);//this will not execute due to scope issue

const balance =1000

// if (balance > 500) console.log("test"), console.log("test2");
//implicit scope[mann liya hai ki scope hai](can be written in one line but not a good practice)


// if (balance < 500) {
//     console.log("less than 500");
// } else if(balance<750){
//     console.log("less than 500");
// }else if(balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn=true
const debitCard = true
const loggedInFromEmail=true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromEmail) {
    console.log("User logged in");
}