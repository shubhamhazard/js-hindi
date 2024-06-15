const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);  // it will throw "undefined"
    }

}

// user.welcomeMessage()
// user.username = "sam"  //context changed
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this); // it will throw "{}"
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2  // implicit funtion, no need to write return keyword

// const addTwo = (num1, num2) => (num1+ num2) //this is better practice than above

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3,4));
