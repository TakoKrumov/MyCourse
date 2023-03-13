let parking = [
    [" ", " ", " ", " ", "T"],
    [" ", "T", "T", " ", "F"],
    [" ", "T", "T", " ", " "],
    [" ", "T", "T", " ", " "],
    [" ", "T", "T", " ", " "]
]
 
let moves = 0;
let arrMoves = [];
 
function park(arr, x, y) {
 
    if (x < 0 || y < 0 ||
        x >= arr.length ||
        y >= arr[x].length ||
        arr[x][y] === "T" ||
        arr[x][y] === "H"
    ) {
        return;
    }
    if (arr[x][y] === "F") {
        arrMoves.push([x, y]);
        return arrMoves;
    }
 
    arr[x][y] = "H";
    arrMoves.push([x, y]);
    moves++;
    let left = park(arr, x - 1, y);
    if (left) return left;
    let right = park(arr, x + 1, y);
    if (right) return right;
    let up = park(arr, x, y - 1);
    if (up) return up;
    let down = park(arr, x, y + 1);
    if (down) return down;
    arrMoves.pop();
    moves--;
}
 
console.log(park(parking, 1, 0));
console.log("Moves: ", moves);