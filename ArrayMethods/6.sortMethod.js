//sort arrayMethod
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

