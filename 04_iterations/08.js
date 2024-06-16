const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(accumulator, currentval){
//     console.log(`accumulator: ${accumulator} and currentval: ${currentval}`);
//     return accumulator + currentval
// },0)

// value after comma is accumulator's value


const myTotal = myNums.reduce((acc, curr) => acc+curr, 0) //shortcut

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc+ item.price, 0)

console.log(priceToPay);