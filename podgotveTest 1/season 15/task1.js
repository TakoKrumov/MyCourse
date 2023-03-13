let input = '23456789TJQKA';
let colors = 'scdhbefg';
let results = "";

function dealCards (a,b) {
    let myHand = '';
    if (typeof a !== "string") {
        return console.log('Wrong input!');
    }

    for (let i=0; i<5; i++) {
        myHand += a.charAt(Math.floor(Math.random()*a.length))+b.charAt(Math.floor(Math.random()*b.length))+" ";                    
    }

    return myHand.trim();
}

function treeCardsAtLeast (a,b,c,color="") {
    let colorCount = 0;
    let possibleTerza = [];

    for (let i=0; i<b.length; i++) {
        colorCount = 0;
        possibleTerza = [];
        
        for (let j=1; j<a.length; j+=3) {
            if(b.charAt(i) === a.charAt(j)) {
                colorCount++;
                possibleTerza.push(a.charAt(j-1));
                color = a.charAt(j);
            }
        }
        
        if (colorCount >= 3) {           
            break;
        }
    }

    let terzaVariation = [];
    let countTerza = 0;

    for (let i=0; i<c.length-2; i++) {
        terzaVariation = [];
        countTerza = 0;
        terzaVariation.push(i);
        terzaVariation.push(i+1);
        terzaVariation.push(i+2);

        for (let j=0; j<possibleTerza.length; j++) {
            if(terzaVariation.includes(possibleTerza[j])) {
                countTerza++;
            }

            if(countTerza===3) {
                return `${possibleTerza} - ${color}`;
            }
        }
    }
}


for (let i=0; i>=0; i++) {
    let myHand = dealCards(input,colors);
    let sizeCheck = '789TJQKA';
    let colorCheck = 'scdh';
    let counter = 0;

    for (let j=0; j<myHand.length; j+=3) {

        if (sizeCheck.includes(myHand.charAt(j)) && colorCheck.includes(myHand.charAt(j+1))) {
            counter++;
           
            if (counter===5) {
                console.log(myHand);
            }
        
        } else {
            console.log("Wrong Input!");
            break;
        }   
    }

    if (counter===5 && !!treeCardsAtLeast(myHand,colorCheck,sizeCheck)) {
        treeCardsAtLeast(myHand,colorCheck,sizeCheck);
        break;
    }

}

