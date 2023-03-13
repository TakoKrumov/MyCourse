let arr = [1, 2, 3];
let c = element => console.log(element);

//  arr.forEach(/*<call this action>*/)
// arr.forEach((a,b,d) => console.log(a,b,d));
arr.forEach((a,b) => {
 if (a!==b) {
    let n = a;
    a = b;
    b = n;
 }
 console.log(a,b)
});
console.log(arr)
/**
 * 
 * function forEach(cb) {
 *      
 *      for(let =0; i<length; i++) {
 *          cb(arr[i]);
 *      }
 * 
 * }
 * 
 */

