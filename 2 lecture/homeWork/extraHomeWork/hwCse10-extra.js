var n = 5;
var numberOfCardsInDeck = (0 < n && n < 53);
let possibleCards = "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "10" || "Jack" || "Queen" || "King" || "Ace";
let colorOfCards = "Spades" || "Diamonds" || "Hearts" || "Clubs";

if (numberOfCardsInDeck && possibleCards && colorOfCards){
    console.log("Next card is: ")
    if((n === 1 && (colorOfCards = "Spades")) || n === 2 && (colorOfCards = "Diamonds") || n === 3 && (colorOfCards = "Hearts")  || n === 4 && (colorOfCards = "Clubs")){
        console.log("2 of",colorOfCards);
    }else if((n === 5 && (colorOfCards = "Spades")) || n === 6 && (colorOfCards = "Diamonds") || n === 7 && (colorOfCards = "Hearts")  || n === 8 && (colorOfCards = "Clubs")){
        console.log("3 of",colorOfCards); 
    }else if((n === 9 && (colorOfCards = "Spades")) || n === 10 && (colorOfCards = "Diamonds") || n === 11 && (colorOfCards = "Hearts")  || n === 12 && (colorOfCards = "Clubs")){
        console.log("4 of",colorOfCards);  
    }else if((n === 13 && (colorOfCards = "Spades")) || n === 14 && (colorOfCards = "Diamonds") || n === 15 && (colorOfCards = "Hearts")  || n === 16 && (colorOfCards = "Clubs")){
        console.log("5 of",colorOfCards);  
    }else if((n === 17 && (colorOfCards = "Spades")) || n === 18 && (colorOfCards = "Diamonds") || n === 19 && (colorOfCards = "Hearts")  || n === 20 && (colorOfCards = "Clubs")){
        console.log("6 of",colorOfCards);
    }else if((n === 21 && (colorOfCards = "Spades")) || n === 22 && (colorOfCards = "Diamonds") || n === 23 && (colorOfCards = "Hearts")  || n === 24 && (colorOfCards = "Clubs")){
        console.log("7 of",colorOfCards);
    }else if((n === 25 && (colorOfCards = "Spades")) || n === 26 && (colorOfCards = "Diamonds") || n === 27 && (colorOfCards = "Hearts")  || n === 28 && (colorOfCards = "Clubs")){
        console.log("8 of",colorOfCards);
    }else if((n === 29 && (colorOfCards = "Spades")) || n === 30 && (colorOfCards = "Diamonds") || n === 31 && (colorOfCards = "Hearts")  || n === 32 && (colorOfCards = "Clubs")){
        console.log("9 of",colorOfCards);
    }else if((n === 33 && (colorOfCards = "Spades")) || n === 34 && (colorOfCards = "Diamonds") || n === 35 && (colorOfCards = "Hearts")  || n === 36 && (colorOfCards = "Clubs")){
        console.log("10 of",colorOfCards);
    }else if((n === 37 && (colorOfCards = "Spades")) || n === 38 && (colorOfCards = "Diamonds") || n === 39 && (colorOfCards = "Hearts")  || n === 40 && (colorOfCards = "Clubs")){
        console.log("Jack of",colorOfCards);
    }else if((n === 41 && (colorOfCards = "Spades")) || n === 42 && (colorOfCards = "Diamonds") || n === 43 && (colorOfCards = "Hearts")  || n === 44 && (colorOfCards = "Clubs")){
        console.log("Queen of",colorOfCards);
    }else if((n === 45 && (colorOfCards = "Spades")) || n === 46 && (colorOfCards = "Diamonds") || n === 47 && (colorOfCards = "Hearts")  || n === 48 && (colorOfCards = "Clubs")){
        console.log("King of",colorOfCards);
    }else if((n === 49 && (colorOfCards = "Spades")) || n === 50 && (colorOfCards = "Diamonds") || n === 51 && (colorOfCards = "Hearts")  || n === 52 && (colorOfCards = "Clubs")){
        console.log("Ace of",colorOfCards);
    }    
}else{
    console.log("Unknown input!")
}
/*
изобщо не мога да зацепя как да съкратя кода.... 
но поне не са 52 иф-а ^_^
*/
