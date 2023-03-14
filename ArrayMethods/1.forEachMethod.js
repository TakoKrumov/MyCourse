// forEach array method
//returns result from iterating trough array - elements value or some other logic
// we put in call back that gives some result after iterating trough the array
console.log(`---- forEach ----`);
let letterArray = ["a", "b", "c", "d", "a", "b", "c", "d", "a", "b", "f", "g"];

let count = {};

letterArray.forEach((item) => {
  !count[item]
    ? count[item] = 1
    /* when find a unique value in our array it write it down
    and it gives it value of 1 (first occurrence)
    */
    : count[item]++; 
    /* and here if we find it second time or third
    we increment that value to 2, 3 and so on and on until 
    we have same values they are counted and change it if no it remains 1
    */
});

console.log(count);
