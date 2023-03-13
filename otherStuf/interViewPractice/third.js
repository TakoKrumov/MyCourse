const multiply = (a,b=1) => a*b; 

const multiply2 = a => b=> a*b;

console.log(multiply(6));

console.log(multiply2(6)(1));

const mySandwich = a => b => c => `${a},${b},${c}`;

console.log(mySandwich('bacon')('letuce')('pork'));