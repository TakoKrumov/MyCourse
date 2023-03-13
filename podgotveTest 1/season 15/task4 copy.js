let rows = 9;
let columns = 9;
let bombs = 10;
let field = [];

function fieldAndBombs (arr,r,c,counter=0) {
    
    for (let i=0; i<r; i++) {
        arr[i] = new Array(r);

        for (let j=0; j<c; j++) {
            let ruleForMines = Math.floor(Math.random()*c);

            if ((ruleForMines) < 3 && counter<10) {
                arr[i][j] = "*";
                counter++;
            } else {
                arr[i][j] = " ";
            }
        }
    }

    return arr;
}

fieldAndBombs(field,rows,columns);

