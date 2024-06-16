//Immediately Invoked Function Expressions (IIFE)


//named iife
(function chai(){      //this is called invoked function
    console.log(`DB CONNECTED`);
})(); //because of pollution due to global scope
// ";" to end and start the other invoked function

// ()()


// unnamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


// **********Run in browser -> source (and check the call stack(just like PIP concept))*************
// function one() {
//     console.log("one")
//     two()
// }
// function two() {
//     console.log("two")
//     three()
// }
// function three() {
//     console.log("three")
// }

// one()
// two()
// three()
