let arr = [10,10,-2,-1,1,0,6,8,8];


//  arr.sort(/*<call this action>*/)
// arr.sort results in a new array with all elements that pass the check
let result = arr.sort((a,b) => {
    if(a===b) {
        return 0;
    } else if (a>b) {
        return 1;
    } else {
        return - 1;
    }
});


console.log(result)
console.log(arr);





