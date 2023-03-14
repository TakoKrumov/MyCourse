// map array method
//returns new array if its added to variable
console.log(`---- map ----`);
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
