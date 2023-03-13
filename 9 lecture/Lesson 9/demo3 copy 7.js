let arr = [1, 2, 3];


//  arr.map(/*<call this action>*/)
// arr.map results in a new array
// with elements as the result from the callback
let result = arr.map((a,b,c) => a+b-c);



console.log(result);




/**
 * 
 * function map(cb) {
 *      
 *      let arr = [];
 *      
 *      for(let =0; i<originalArray.length; i++) {
 *          arr.push(cb());
 *      }
 * 
 *      return arr;
 * 
 * }
 * 
 */

