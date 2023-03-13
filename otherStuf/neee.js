let n = 4;
let m = 5;
let arr = [];

// initialization of 2d array with dimentions n x m with empty items
for (let i = 0; i < n; i++) {
    arr.push(new Array(m));
}

/**
 *  We want to go trough the matrix in the following path:
 * 
 *  ┌               ┐
 *  │  1            │
 *  │  2            │
 *  │  3            │
 *  │  4            │
 *  │  5 6 7 8 9 10 │
 *  └               ┘
 *   Then from each starting point (places marked with digits above), 
 *   start going diagonaly up and right
 *   and write the counter value incrementing it afterwards.
 *
 *  
 */



let counter = 1;

for (let i = 0; i < n; i++) {
    let startI = i;
    let startJ = 0;

    // if it is not the last row, go down ⌄ (points 1,2,3,4,5)
    if (startI !== n - 1) {

        // take the starting point and go up and right to 
        // write the counter value
        while (startI >= 0 && startJ < m) {
            arr[startI][startJ] = counter++;
            startI--;
            startJ++;
        }

        // after done reset coordinates back to the starting point
        startI = i;
        startJ = 0;
    } else { // if it is the last row go right -> (points 5,6,7,8,9,10)       

        for (let j = startJ; j < m; j++) {

            // take the starting point and go up and right to 
            // write the counter value
            while (startI >= 0 && startJ < m) {
                arr[startI][startJ] = counter++;
                startI--;
                startJ++;
            }

            // after done reset coordinates back to the starting point
            startI = i;
            startJ = j + 1;
        }
    }
}

console.table(arr)