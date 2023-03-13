let array = [

    [11,4,-8,7],
    [17,-7,6,5],
    [99,5,-3,1],
    [32,1,8,1],
];

let result = "";

for (let indexArray = 0; indexArray < array.length; indexArray++) {

    for (let insideIndex = 0; insideIndex < array[indexArray].length; insideIndex++) {

        if(indexArray === insideIndex) {
            result += ` ${array[indexArray][insideIndex]}`;
        }

    }
}
console.log(`Главният диагонал съдържа елементи със стойнос ти:\n${result}.`);