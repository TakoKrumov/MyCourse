let number = 10;
let matrix = [];
 
for(let i = 0; i < number; i++){
    matrix.push(Array(number));
}
let minesPlaced = 0;
 
while(minesPlaced !== 10){
    let x = Math.floor(Math.random()*10);
    let y = Math.floor(Math.random()*10);
 
    if(matrix[x][y] !== "*"){
        matrix[x][y] = "*";
        minesPlaced++;
    }
}
function closeMines(grid){
 
    for(let i = 0;i < grid.length; i++){
 
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === "*"){
                continue;
            }
            let count = 0;
 
            if(i-1 >= 0 && j-1 >=0 && grid[i-1][j-1] === "*" ){count++;}
            if(i-1 >= 0 && grid[i-1][j] === "*"){count++;}
            if(i-1 >= 0 && j+1< grid[i].length && grid[i-1][j+1] === "*"){count++;}
            if(j-1 >= 0 && grid[i][j-1] === "*"){count++;}
            if(j+1 < grid[i].length && grid[i][j+1] === "*"){count++;}
            if(i+1 < grid.length && j-1 >=0 && grid[i+1][j-1] === "*"){count++;}
            if(i+1 < grid.length && grid[i+1][j] === "*"){count++;}
            if(i+1 < grid.length && j+1< grid[i].length && grid[i+1][j+1] === "*"){count++;}
 
            if(count <= 0){
                grid[i][j] = ` `;               
            }else{
                grid[i][j] = `${count}`;
            }
        }
    }
    return grid;
}
console.table(closeMines(matrix));