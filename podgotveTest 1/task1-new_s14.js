let results = 0;

let diceOne  = () => Math.ceil(Math.random()*6);
let diceTwo  = () => Math.ceil(Math.random()*6);
let diceTree = () => Math.ceil(Math.random()*6);
let diceFour = () => Math.ceil(Math.random()*6);
let diceFive = () => Math.ceil(Math.random()*6);
let diceSix  = () => Math.ceil(Math.random()*6);
    
for (let i = 0; i>=0; i++) {    

    if (diceOne() + diceTwo() + diceTree() + diceFour() + diceFive() + diceSix() === 36) {
        results = i;
        break; 
    }
}
    
console.log(`Отне ${results} опита да хвърля 6 последователни зара с максимален брой!`);

