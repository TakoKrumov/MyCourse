let array = [1,0,1,0,1,0,0,1,0,1,0,0,1,1];

for (let index = 0; index < array.length; index ++) {

    if (array[index] === 0) {
        array.unshift(array[index]);
        array.splice(index + 1,1);
    }

}

console.log(array);

