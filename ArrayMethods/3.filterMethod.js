// filter array method
//returns new array if its added to variable
console.log(`----result from filter----`);
let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter((item) => item % 2 === 0);
console.log(even);
// this return 2 falls because true returns 1(and when pass the check 
// is not even number and false return 0 and pass the check)

let str = ["1", "2", "0", "4", "0", "6"];
numbers = str.map((item) => parseInt(item));
console.log(numbers);

even = numbers.filter((item) => item % 2 === 0);
console.log(even);

let arrayWithRepeatingNumbers = [
  1, 2, 3, 4, 1, 2, 3, 5, 765, 6, 7, 8, 5, 6, 7, 8, 765,
];

let arrayWithNoRepeatNumbers = arrayWithRepeatingNumbers.filter(
  (value, index, array) => {
    return array.indexOf(value) === index;
    /*.indexOf returns the first occurrence of value in array
    so its different from index witch comes from actual array and when we got
    repeating value we get the first index but index get the actual index
    for this repeating value and so they return result false so we dont get 
    this value returned to our array and we got filtered array with non repeating
    values
  */
  }
);
console.log(arrayWithRepeatingNumbers);
console.log(arrayWithNoRepeatNumbers);