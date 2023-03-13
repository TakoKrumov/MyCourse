let array = [

    [true,false,true,false],
    [false,true,false,false],
    [false,false,false,false],
    [true,false,true,false],
];

let result = 0;
let counter = 0;

for (let indexArray = 0; indexArray < array.length - 1; indexArray++) {
    
    for (let insideIndex = 0; insideIndex < array[indexArray].length; insideIndex++) {
        
        let rule = indexArray <= insideIndex;

        if (rule && array[indexArray][insideIndex] === true) {
            counter++;
            result = counter;
        }
    }
}
console.log(`Броят на стойността true над втория диагонал е :${result}.`);