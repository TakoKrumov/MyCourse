// import  sumFromUtilsJS  from './utils.js'; // I am importing the default export of the module

import * as utils from './utils.js';

import { sum as sumAdvanced } from './advancedUtils.js';

console.log(sumAdvanced(5,3,2,5));
// console.log('FROM UTILS: ', sumFromUtilsJS(1,2));

let pesho = new utils.Person('Petur Hackera', 32);

console.log(pesho);