let input = '1234567890TJQKSA';
let checkValue = '23456789TJQKA';
let bigCount = 0;

for(let i=0; i>=0; i++) {
    let counter = 0;
    let repeatCard = 0;
    let ourCards = "";

    for(let n=0; n<5; n++) {
        ourCards += `${input.charAt(Math.floor(Math.random()*input.length))} `;
    }
    ourCards = ourCards.trim();

    for(let j=0; j<ourCards.length; j+=2) {

        if(checkValue.includes(ourCards.charAt(j))){
            counter++;
                             
        } else {
            bigCount = 0;
            console.log("Invalid input!");
            break;
        }

        if (counter === 5) {
            if( ourCards.indexOf(ourCards.charAt(j)) !== ourCards.lastIndexOf(ourCards.charAt(j))) {
                repeatCard++;
            } 

            if(repeatCard>0) {
                bigCount++;
                console.log(ourCards);
                break;
            }
        }
    }

    if(bigCount===4) {
        console.log(`Number of tries: ${i}`);
        break;
    }       
}