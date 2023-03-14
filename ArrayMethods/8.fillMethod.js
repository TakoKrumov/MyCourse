//fill METHOD
//CHANGE the array that we are using
let numbers = [74, 18, 10, 5, 84, 24,10, 105];
numbers.fill(0);
console.log(numbers);

numbers = [74, 18, 10, 5, 84, 24,10, 105];
// here we say we wanna change index 2,3,4 (or we wanna change from index 2 till before index 5 with 0)
numbers.fill(0 ,2,5);
/* 
  in .fill we can have tree values .fill(firstValue, secondValue, thirdValue);
  where firstValue - is always what value to use for filling our changed array
  secondValue (represent starting index for change) 
    - start of change (we need it if we dont wanna change the whole array).
  thirdValue - (represent ending index for change this index is not included in the 
    change its stop before him!!!) - end of change  
*/

console.log(numbers);

function fillNumbers(n) {
  return Array(n)
          .fill(0)
          .map((_ , index) => index + 1);
};

console.log(numbers = fillNumbers(10));