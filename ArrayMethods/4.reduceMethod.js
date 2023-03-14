//reduce Array method
console.log(`----result from reduce----`);
/* all higher order functions get call back (or arrow function as parameter).
 inside those arrow function the we can give value,index or array as whole.
 always in this order element/value , index or array. 
 but in REDUCE we need a extra parameter not only call back but also 
 accumulator so its like => (callback,accumulatorValue) and we use it like
 starting value for our logic in the callback  */
let numbers = [1, 2, 3, 4, 5];

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
