// array

const myArr = [0, 1, 2, 3, 4, 5, true, "hitesh"]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2=new Array(1,2,3,4)
// console.log(myArr[0]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9)); //it will check if it includes 9 or not
// console.log(myArr.indexOf(9)); //what is the index of 9, if not present it wil throw -1

const newArr = myArr.join()//convert array into string

// console.log(myArr);
// console.log(typeof newArr);

// console.log(myArr);


//slice, splice(this function modifies the original array)
console.log("A", myArr);
const myn1=myArr.slice(1,3)
console.log("C ", myArr);


console.log(myn1);
console.log("B ", myArr);

const myn2= myArr.splice(1,3)
console.log(myn2);
console.log("C ", myArr);
