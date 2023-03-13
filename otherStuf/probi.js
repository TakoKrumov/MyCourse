let masiv =["aaaaaaaaaa"];
let masiv2 =[1,2,3,4,5,6];
let masiv3 =[1,2,3,4,5];
let masiv4 ="aaaaaaaaaa";


function arrayCheck () {
    let input = arguments[0];

    for(let i=0; i<arguments.length; i++) {
        
        if (Array.isArray(input) !== true) {
            return null;
        }
    }
}

// function arrayErase(a) {
//     if (arrayCheck(a) === null) {        
//         return typeof a + " - Input is not array!";
//     }

//     for (let i=a.length; i>=0 ; i--) { 
//         a.pop();
//     }
//     return a;
// }

// console.log(arrayErase(masiv));
// console.log(arrayErase(masiv2));
// console.log(arrayErase(masiv3));
// console.log(arrayErase(masiv4));

function eraseRecursive (ar) {
    if (arrayCheck(ar) === null) {
        return typeof ar + " - Input is not array!";
    }

    if(ar.length === 0) {
        return;
    }

    ar.pop();
    eraseRecursive(ar);
    return ar;
}

console.log(eraseRecursive(masiv));
console.log(eraseRecursive(masiv2));
console.log(eraseRecursive(masiv3));
console.log(eraseRecursive(masiv4));


