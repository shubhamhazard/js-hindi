function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1+ number2);
// }

function addTwoNumber(number1, number2) {
    // let result = number1+ number2
    // return result
    return number1 + number2
}

const result = addTwoNumber(5, 5)

console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if (username === undefined) {    //(!username), (undefined), these all works as false
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(val1, val2,...num1) {  // ...is called REST operator as well as spread operator , depends on use case
    return num1
}

// console.log(calculateCartPrice(200,300,500,2000));

const user = {
    username: "name",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]


function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));