/*
 1: (25%) Дадени са 3 зара за игра и играч, който ги хвърля последователно,
неограничен брой пъти. Да се напише програма, която извежда на екрана
броя хвърляния нужен на играча, за да хвърли шест пъти подред, три
шестици и да се прекрати изпълнението на програмата, когато това се
случи.
Примерен изход: “Отне 17 опита да хвърля 6 последователни зара с
максимален брой!”
*/



let results = 0;

function rollingDice () {
    return Math.ceil(Math.random()*6);
}

for (let i = 0; i>=0; i++) {
    let diceOne = rollingDice();
    let diceTwo = rollingDice();
    let diceTree = rollingDice();
    let diceFour = rollingDice();
    let diceFive = rollingDice();
    let diceSix= rollingDice();

    if (diceOne + diceTwo + diceTree + diceFour + diceFive + diceSix === 36) {
        results = i;
        break; 
    }
}
    
console.log(`Отне ${results} опита да хвърля 6 последователни зара с максимален брой!`);

for (let i = 0; i>=0; i++) {
    let sixRollingDice = rollingDice()*6;

    if (sixRollingDice === 36) {
        results = i;
        break; 
    }
}
    
console.log(`Отне ${results} опита да хвърля 6 последователни зара с максимален брой!`);
