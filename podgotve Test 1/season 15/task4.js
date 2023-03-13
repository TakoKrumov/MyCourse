function createField(n) {
    let field = [];
    for(let i=0; i< n; i++) {
        let row = [];
        for(let j=0; j< n; j++) {
            row.push("");
        }
        field.push(row);
    }
    return field;
}

function updateBombCount(x,y, field) {
    for(let i = x-1; i< x - 1 +3; i++) {
        for(let j = y-1; j< y - 1 +3; j++) {
            if(i<0 || j<0 || i>= field.length || j>= field.length || 
                             (i===x && j===y) || field[i][j] === "*") {
                continue;
            }
            field[i][j] = field[i][j] ? field[i][j]+=1 : 1;
        }
    }
}

function mineSweeper(field) {
    let bombs = 0;
    while(bombs < 10) {
        let randomX = Math.floor(Math.random()*field.length);
        let randomY = Math.floor(Math.random()*field.length);
        if(field[randomX][randomY] !== "*") {
            field[randomX][randomY] = "*";
            updateBombCount(randomX, randomY,field);
            bombs++;
        }
    }
    return field;
}

console.table(mineSweeper(createField(10)));

