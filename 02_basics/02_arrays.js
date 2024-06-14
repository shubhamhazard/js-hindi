const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]


// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes[3][1]);// gives out first element of third element

// const allheroes =marvel_heroes.concat(dc_heroes)
// console.log(allheroes)
/* concat forms a new array while push modifies the existing array */

const all_new_heroes = [...marvel_heroes, ...dc_heroes]//spread method (alternate method of concat)

// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Hitesh"))  // is it an array
console.log(Array.from("Hitesh"))  //form an array from "hitesh"

console.log(Array.from({ name: "Hitesh" }))  //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //form an array form score1, score2,score3


