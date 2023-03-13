let karti = [7, 8, 9, "T", "J", "Q", "K", "A"];
let suits = ["s","c","h","d"];
let hasTerca = false;
function generateInput(karti, suits, cards) {
    for (let i = 0; i < 5; i++) {
        if (i == 4) {
            cards += karti[Math.floor(Math.random() * karti.length)] + suits[Math.floor(Math.random() * suits.length)]
        } else {
            cards += karti[Math.floor(Math.random() * karti.length)] + suits[Math.floor(Math.random() * suits.length)] + " ";
        }
    }
    return cards;
}
function getCardPower(card){
    switch(card){
        case "7": return 7;
        case "8": return 8;
        case "9": return 9;
        case "T": return 10;
        case "J": return 11;
        case "Q": return 12;
        case "K": return 13;
        case "A": return 14;
    }
}
while (!hasTerca) {
    let handDrawn = generateInput(karti, suits,[]);
    let currentPower;
    let currentSuit;
    let counter;
    let handDrawnSplit = handDrawn.split(" ");
    console.log(handDrawn)
    for (let i = 0; i < handDrawnSplit.length; i++) {
        counter = 1;
        currentSuit = handDrawnSplit[i].charAt(1);
        currentPower = getCardPower(handDrawnSplit[i].charAt(0));
        for (let j = i+1; j < handDrawnSplit.length; j++) {
            if (handDrawnSplit[j].charAt(1) == currentSuit) {
                let a = getCardPower(handDrawnSplit[j].charAt(0));
                if (a == currentPower + 1) {
                    counter++;
                    currentPower = getCardPower(handDrawnSplit[j].charAt(0));
                }
                if (counter==3){
                    hasTerca = true;
                    break;
                }
            }
        }
        if (hasTerca){
            break;
        }
    }
}