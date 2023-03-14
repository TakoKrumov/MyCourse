// forEach array METHOD
//returns result from iterating trough array - elements value or some other logic
// we put in call back that gives some result after iterating trough the array
console.log(`----result from forEach----`);
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

// map array METHOD
//returns new array if its added to variable
console.log(`----result from map----`);
let products = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 1500,
    count: 2,
  },
  {
    name: "phone",
    price: 500,
    count: 10,
  },
];
//                                 here item is and OBJECT!!!
let totalProductsValue = products.map((item) => ({
  /* here we are not 
giving our function obj but an array that have objects for elements!!!!
 */
  name: item.name + "s",
  totalValue: item.price * item.count,
  /* and because map is returning new array with changed value 
  and the change is what is sitting after return 
  here we dont have return because only one object is what we are returning
  so we have new array with 3 new items (objects) with changed 
  key:values */
}));

console.log(totalProductsValue);

let str = ["1", "2", "0", "4", "0", "6"];

let numbers = str.map((item) => !!parseInt(item) === true);
console.log(numbers); 
/* check if number value transfer to boolean is true or false and 
  returns array with true and false values with the same length
*/  

console.log(true / 2, false / 2);
console.log(true % 2, false % 2); // true and falls return also 1-true and 0-false

// filter array METHOD
//returns new array if its added to variable
console.log(`----result from filter----`);
let even = numbers.filter((item) => item % 2 === 0);
console.log(even);
// this return 2 falls because true returns 1(and when pass the check 
// is not even number and false return 0 and pass the check)

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

//reduce Array METHOD
console.log(`----result from reduce----`);
/* all higher order functions get call back (or arrow function as parameter).
 inside those arrow function the we can give value,index or array as whole.
 always in this order element/value , index or array. 
 but in REDUCE we need a extra parameter not only call back but also 
 accumulator so its like => (callback,accumulatorValue) and we use it like
 starting value for our logic in the callback  */
numbers = [1, 2, 3, 4, 5];

let total = numbers.reduce(sum, 0);
function sum(accumulator, value) {
  return accumulator + value; 
} 
/* on each iteration the accumulator becomes what is returned from the function and is 
     increasing its value by what is in the value and so on until we got the actual end;
     we always need our accumulator value because our function need to know where to start
     its allot different if we work with strings and not numbers because we cant use 0 as start of 
     string, object or array.
     compressing array to single value!!! returns a single value!
  */
console.log(total);

let max = numbers.reduce((accumulator, element) => {
  return element > accumulator ? element : accumulator;
}, -Infinity);

console.log(max);

let totalValueProducts = products.reduce((accumulator, element) => {
  return accumulator + element.price * element.count;
}, 0); 
//0 is starting value for accumulator!!!
console.log(totalValueProducts);

totalValueProducts = products.reduce(
  (accumulator, element) => accumulator + element.price * element.count,
  0
); 
/* the same as above but we actually dont need those {} so if
      we dont need the {} we dont need to use return!!!
    */
console.log(totalValueProducts);

//splice METHOD
console.log(`---- splice ----`);
//is a method that CHANGE the ARRAY that we use!!! arrayWeUse.splice()!!! and returns the elements thar are removed from it!!!
let deleted = numbers.splice(2, 3, 'abala',NaN,null);
/* .splice(firstValue, secondValue, anyOtherValue) 
  firstValue - from which index to start 
  secondValue - how many indexes after start to take
  anyOtherValue - anything after first and second value gonna be added to our original array on place
  of the removed elements.
  If there are nothing in .splice() nothing gonna change; 
  if we put only firstValue gonna use it as start for removing and gonna go till the end of the array if there
  is no secondValue (which says how many items to remove)!!
  if there is nothing on anyOtherValue - its gonna only remove element without adding new ones!!!
*/
console.log(deleted);
console.log(numbers);


numbers = [1, 2, 3, 4, 5];
deleted = numbers.splice(2, 0, 'abala',NaN,null);
/* here we dont delete anything because the secondValue that gives how many times to do the removing 
   is 0 so splice becomes like .push/.unshift method but you can pick the exact position you wanna put the new elements!!!
*/
console.log(deleted);/* nothing is deleted !!! .splice (startingIndex, howMuchToRemove(if 0 its not removing anything its just 
  a push method from where to start => startIndex!!!), whatToAdd[0]....whatToAdd[i]);
  */
console.log(numbers);

//sort array METHOD
console.log(`----array sort method----`);
//is a method that CHANGE the ARRAY that we use!!! arrayWeUse.sort()
let names = ['Florin','biam','Liam','Jai','Ivan','alexander'];
console.log(names.sort())
/*
On the upper console long and the next console log we show 
the difference in sorting strings! In first console log sort() is using automatic the 
uni code and don't care "a","b" or "C" its only see numbers from uniCode so we must change 
the logic if we wish to have a sort by starting letter 
*/ 
names.sort((a,b) => {
  return a.charAt(0).toUpperCase().charCodeAt() - b.charAt(0).toUpperCase().charCodeAt();
});
/**
 * with strings is sorting according the uni code of letters
 */
console.log(names);

numbers = [74, 18, 10, 5, 84, 24,10, 105];
console.log(numbers.sort()); 
/* if in .sort() the () are empty the method automatic change values to string and 
sort them trough they are values from uniCode so we need logic if we wanna other outcome
*/
numbers.sort((a,b) => {
  return a - b;
});
console.log(numbers)

products = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 1500,
    count: 2,
  },
  {
    name: "phone",
    price: 500,
    count: 10,
  },
];
products.sort((a,b) => a.price - b.price);
// above and bellow is the same !!!
products.sort((a,b) => {
  return a.price - b.price;
});

console.log(products);

// concat METHOD
console.log(`----array Concat method----`);
//don't change the original array
let firstArray = [1,2,3];
let secondArray = [4,5,6];
let thirdArray = [7,8,9];

let concatArray = firstArray.concat(secondArray,thirdArray);
console.log(concatArray);
concatArray = [firstArray].concat([secondArray],[thirdArray]);
console.log(concatArray);

//concat can be used as push too 
concatArray = firstArray.concat(4,5,6,thirdArray);
console.log(concatArray);


//fill METHOD
console.log(`----array FILL method----`);
//CHANGE the array that we are using
numbers = [74, 18, 10, 5, 84, 24,10, 105];
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

//includes METHOD
console.log(`----array includes method----`);

let fruits = ['apple','mango','orange'];

console.log(fruits.includes('apple'));
console.log(fruits.includes('pineapple'));
//.includes() provide us with true or false depending of what we are searching for!

//join METHOD
console.log(`----array join method----`);

let countries = ['Romania','Bulgaria','Serbia'];

let results = countries.join('-');/* this method need to have what to do when joining
the elements together and returning them as string(by default is joining them with "," 
without spaces between!!) */

console.log(results);

results = countries.join();
console.log(results);

//Reverse METHOD
console.log(`----array Reverse method----`);
//Change the original array!!!
countries.reverse();
console.log(countries);

//if we dont wanna change our array

results = [...countries].reverse();
console.log(countries);
console.log(results);

//every METHOD
console.log(`----array every method----`);
products = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
    productionYear: 2022
  },
  {
    name: "desktop",
    price: 1500,
    count: 2,
    productionYear: 2022
  },
  {
    name: "phone",
    price: 500,
    count: 10,
  },
];

results = products.every(product => product.name !== undefined);
console.log(results);
results = products.every(product => product.productionYear !== undefined);
console.log(results);

//some METHOD
console.log(`----array some method----`);

numbers = [74, 18, 10, 5, 84, 24,10, 105, 1, 2, 3, 6];

results = numbers.some((item) => item > 10);
console.log(results);

let persons = [
  {
    name: 'Florin',
    age: 25
  },
  {
    name: 'Ivan',
    age: 17
  },
  {
    name: 'Jay',
    age: 16
  },
];

results = persons.some((person) => person.age >= 18);
console.log(results);
// until we have single value that gives back true from our .some() the return shall be true!

numbers = [1,2,3,4,3,5,3,6,3];
console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf(3));
console.log(numbers.findIndex(element => element === 3));

str = '123456789';

results = Array.from(str).map(element => parseInt(element));
console.log(results);

numbers = [1,2,3,1,2,3,4,5,6,1,2,3,4];

results = new Set(numbers);
console.log(results);

results = Array.from(new Set(numbers));
console.log(results);


numbers = [1,[2],[[3],[4]],[[[[6]]]]];
//.flat() have only one parameter and it means depth to witch to reach to make a new array with Infinity we are sure it will go to all depths!!!
results = numbers.flat(Infinity);

console.log(results);