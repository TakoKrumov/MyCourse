let numberOfArray = 6;
let arrayLength = 7;
let array = [];
let count = 1;

for (let i = 0; i < numberOfArray; i ++) {
    array[i] = new Array(arrayLength);   
}

for (let i = 0; i < numberOfArray; i++) {
    let newI = i;
    let newJ = 0;

    while (newI>= 0 && newJ < arrayLength) {
        array[newI][newJ] = count++;
        newI--;
        newJ++;        
    }   
}

for (let i = 1; i < numberOfArray; i++) {
    let newI = numberOfArray - 1;
    let newJ =i;

    while (newI>= 0 && newJ < arrayLength) {
        array[newI][newJ] = count++;
        newI--;
        newJ++;        
    }
    
}
array[numberOfArray-1][arrayLength-1]=count;

console.table(array);

// общо взето тука нищо не можах да измисля. Евала за коледния подарък! Общо взето 2 часа съм му отделил 
// да го гледам на де-бъгера. И реших да си поиграя малко да махна if else-a. 
//(Уж работи като сменя стойностите)
// И да никога нямаше да се сета да вложа whale цикли във for-a.И как правиш пълненето диагонално от 1,
// общо взето неможех да повярвам какво гледам.
// И най - важното разбрах, че да ползвам new Array () e далеч по добрия вариант от това, което аз правех
// array[i] = array.slice(i) ^_^ ! Евала за коледния подарък!