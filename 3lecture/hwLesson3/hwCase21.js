let cardOfChoice = 4;
let sum = "";
let typeOfCard = "";
let color = "";
let counter = 0;

for (let i = 2; i <= 14; i++) {
    typeOfCard = i;
    
    if (typeOfCard === 11){
        typeOfCard = "Jack";
    } else if (typeOfCard === 12) {
        typeOfCard = "Queen";
    } else if (typeOfCard === 13) {
        typeOfCard = "King";
    } else if (typeOfCard === 14) {
        typeOfCard = "Ace"; 
    } 

        for (let j = 1; j <=4; j++) {
            color = j;
            counter++;
        
            if(color === 1){
             color = " of Spades";
            } else if (color === 2) {
                color = " of Diamonds";
            } else if (color === 3) {
                color = " of Hearts";
            } else if (color === 4) {
                color = " of Clubs";
            } 
            if (counter >cardOfChoice) {
                sum+= ",";
            }

            if (counter >= cardOfChoice) {
        
                sum += ` ${typeOfCard}${color}`;
            }
        }
}

console.log(sum);





