let input = '1234567890TJQKSA';

function drawingCards (a,drawNumber = 5) {
    if(typeof a !== "string") {
        return console.log("Wrong input! Must be string!");
    }

    let ourCards = '';

    for(let i=0; i<drawNumber; i++) {
        ourCards += `${a.charAt(Math.floor(Math.random()*a.length))} `
    }

    ourCards = ourCards.trim();
    return ourCards;
}

function cardDuoCheck (a,needItDuos = 4) {
    let checkValue = '23456789TJQKA';
    let bigCount = 0;
    let str = "";

    for(let i=0; i>=0; i++) {
        str = drawingCards(a);
        let counter = 0;
        let repeatCard = 0;

        for(let j=0; j<str.length; j+=2) {

            if(checkValue.includes(str.charAt(j))){
                counter++;
                             
            } else {
                bigCount = 0;
                console.log("Invalid input!");
                break;
            }

        }

        if (counter === 5) {
            for(let k=0; k<str.length; k+=2) {
                if( str.indexOf(str.charAt(k)) !== str.lastIndexOf(str.charAt(k))) {
                    repeatCard++;
                } 

                if(repeatCard>0) {
                    bigCount++;
                    break;
                }
            }
        }

        if(bigCount===needItDuos) {
            return console.log(`Number of tries: ${i}`);
        }
        
    }
}

cardDuoCheck(input);