// var c= 300
let a = 300

if (true) {
    let a = 10 // local variable
    const b = 10
    var c = 30 //global varible 
    console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website); //cant be accessible since it is outside the scope
}

// console.log(username); // it is also out of the scope


//+++++++++++interesting+++++++++++++++++

console.log(addone(5))
function addone(num) {
    return num + 1
}


// addTwo(5) //cant be accessible since it is used before declaration
const addTwo = function (num) {
    return num + 2
}

addTwo(5)