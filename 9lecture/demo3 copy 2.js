let arr = [
    [1, 2], 
    [4, 3], 
    [5, 6], 
    [7, 8],
    
];



arr.forEach(insideArr => {
    insideArr.forEach(nested => {
        console.log(nested+2);
    })
})
console.log(arr)