/*
4: (25%) Write a method that by given map of a parking lot and the coordinates of the entrance
of the parking lot, finds the smallest amount of steps you need to park your car. You can drive
on squares marked with ' ' (space). A free parking spot is marked with 'F'. Spots that are already
taken are marked with 'T'. You cannot pass through taken parking spots. The method must
return an integer value equal to the smallest amount of moves that are needed to park the car or
-1 if there are no available parking spots that you can reach from the entrance.
*/

let input = [
    ['T',   ,'T','T','F','T'],
    ['T',   ,   ,   ,   ,'T'],
    ['T',   ,'T','T',   ,'T'],
    ['T',   ,'T','T',   ,'T'],
    ['T',   ,   ,   ,   ,'T'],    
    ['T','T','T','T','T','T']
];

let input2 = [
    ['T',   ,'T','T','F','F'],
    ['T',   ,   ,   ,   ,'F'],
    ['T',   ,'T','F',   ,'F'],
    ['T',   ,'T','T',   ,'F'],
    ['T',   ,   ,   ,   ,'F'],    
    ['T','T','T','T','T','T']
];

let input3 = [                  //         0   1   2   3   4   5     colum                   
    ['T',' ','T','T','F','F'],  // row 0 ['T',   ,'T','T','F','F']
    ['T',' ',' ',' ',' ','F'],  //     1 ['T',   ,   ,   ,   ,'F'],
    ['T',' ','T','F',' ','F'],  //     2 ['T',   ,'T','F',   ,'F'],
    ['T',' ','T','T',' ','F'],  //     3 ['T',   ,'T','T',   ,'F'],
    ['F',' ',' ',' ',' ','F'],  //     4 ['F',   ,   ,   ,   ,'F'],
    ['T','T','T','T','T','T']   //     5 ['T','T','T','T','T','T']
];

function deepCopy (arr,copy = []) {
    
    for(let i=0; i<arr.length; i++) {
        copy[i] = new Array(arr.length)
        for(let j=0; j<arr[i].length; j++) {
            copy[i][j] = arr[i][j];
        }
    }

    return copy;
}

function shortParking (field,row,colum,count) {
    count++;
    if (
        row<0 || 
        row>=field.length ||
        colum<0 ||        
        colum>=field[row].length || 
        field[row][colum] === 'T'||
        field[row][colum] === '!' ||
        field[row][colum] === 'M'
    ){
        return;
    } else if (field[row][colum] === 'F') {
        field[row][colum] = 'M';
        return;
    }

    for (let i=0; i<field.length; i++) {
        for(let j=0; j<field[i].length; j++) {
            if (field[i][j] === 'M') {
                console.log(field);
              console.log(count);
                
            }
        }
    }
    
    field[row][colum] = '!';
    
        shortParking(field,row+1,colum,++count); // down
        shortParking(field,row,colum-1,++count); // left
        shortParking(field,row,colum+1,++count); // right
        shortParking(field,row-1,colum,++count); // up
    
    
}

shortParking(deepCopy(input3),0,1,0);
