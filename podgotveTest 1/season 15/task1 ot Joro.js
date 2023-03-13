// създаваме рандом карти 
let getHand = () => {
    let combo = [];


    for (let i = 0; i < 5; i++) {
        let randomCard = Math.ceil(Math.random() * 9);
        let randomPaint = Math.ceil(Math.random() * 4);
        
        switch (randomCard) {
            case 1:
                randomCard = "7";
                break;
            case 2:
                randomCard = "8";
                break;
            case 3:
                randomCard = "9";
                break;
            case 4:
                randomCard = "T";
                break;
            case 5:
                randomCard = "J";
                break;
            case 6:
                randomCard = "Q";
                break;
            case 7:
                randomCard = "K";
                break;
            case 8:
                randomCard = "A";
                break;
            case 9:
                randomCard = "B";
        };
    
        switch (randomPaint) {
            case 1:
                randomPaint = "s";
                break;
            case 2:
                randomPaint = "c";
                break;
            case 3:
                randomPaint = "d";
                break;
            case 4:
                randomPaint = "h";
                break;
        }
    

            combo.push(randomCard+randomPaint);
       
      
    
    }
    combo = combo.join(" ");
    return combo
}
// => връща стринг с 10 символа две по две

// трансформира обратно към букви накрая на програмата
function transormBack (card) {
    switch (card) {
        case 10:
            card = "T";
            break;
        case 11:
            card = "J";
            break;
        case 12:
            card = "Q";
            break;
        case 13:
            card = "K";
            break;
        case 14:
            card = "A";
    }

    return card;
}

function tranformPaint(paint) {
    switch (paint) {
        case 1:
            paint = "s";
            break;
        case 2:
            paint = "c"
            break;
        case 3:
            paint = "d";
            break;
        case 4:
            paint = "h";
            break;

    }

    return paint;
}


// нужни променливи
let cardOne = "";
let cardTWo = "";
let cardThree = "";
let paintOne = "";
let tercaPaint = false;
let tercaStr = false;


//цикъл който вика нови карти на всяка стъпка и проверява за невалидни входни данни, след това проверява за терца и ако има терца спира
while (tercaPaint === false && tercaStr === false) {
    let tercaCount = 0;
    let tercaStrength = 0;
    hand = getHand();
    if (hand.includes("B")) {
        console.log("Invalid input");
        continue;
    } else {
        console.log(hand);
    }
    hand = hand.split(" ")
    for (let i = 0; i < hand.length; i++) {
        hand[i] = [hand[i][0],hand[i][1]]
    }

for (let i = 0; i < hand.length; i++) {
    if (hand[i][1] === "s") {
        hand[i][1] = 1;
    }
    if (hand[i][1] === "c") {
        hand[i][1] = 2;
    }
    if (hand[i][1] === "d") {
        hand[i][1] = 3;
    }
    if (hand[i][1] === "h") {
        hand[i][1] = 4;
    }

    for (let i = 0; i < hand.length; i++) {
        if (hand[i][0] === "T") {
            hand[i][0] = 10;
        }
        if (hand[i][0] === "J") {
            hand[i][0] = 11;
        }
        if (hand[i][0] === "Q") {
            hand[i][0] = 12;
        }
        if (hand[i][0] === "K") {
            hand[i][0] = 13;
        }
        if (hand[i][0] === "A") {
            hand[i][0] = 14;
        }
        if (hand[i][0] === "9") {
            hand[i][0] = 9;
        }
        if (hand[i][0] === "8") {
            hand[i][0] = 8;
        }
        if (hand[i][0] === "7") {
            hand[i][0] = 7;
        }
    }
}
    hand = hand.sort((a,b) => a[1] - b[1])

    for (let i = 0; i < hand.length - 1; i++) {
        if (hand[i][1] === hand[i + 1][1]) {
            tercaCount++
        }
    }

    hand = hand.sort((a,b) => a[0] - b[0])

    for (let i = 1; i < hand.length - 1; i++) {
        if (hand[i][0] + 1 === hand[i + 1][0] && hand[i][1] === hand[i + 1][1] && hand[i][0] !== hand[i + 1][0]) {
            tercaStrength++
            cardOne = hand[i - 1][0];
            cardTWo = hand[i][0];
            cardThree = hand[i + 1][0];
            paintOne = hand[i][1];

        } else {
            tercaStrength = 0;
        }
    }

    cardOne = transormBack(cardOne);
    cardTWo = transormBack(cardTWo);
    cardThree = transormBack(cardThree);
    paintOne = tranformPaint(paintOne);

    if (tercaCount > 2 && tercaStrength > 2) {
        tercaPaint = true;
        tercaStr = true;
    }

    if (tercaPaint && tercaStr) {
        console.log(`terca ${cardOne} ${cardTWo} ${cardThree} ${paintOne}`)
    }

}