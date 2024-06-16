const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((num) => {return num+10})
 //again scope open karne ke saath return keyword jaruri hai

const newNums = myNums
                .map((num)=> num*10)
                .map((num) => num+1)
                .filter((num)=> num>=40) //filter me true or false wala game hai but map me  sab kuch print ho sakta hai
                
console.log(newNums);

