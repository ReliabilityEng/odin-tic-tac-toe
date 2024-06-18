
/*
Gameboard represents the state of the board
Each square holds a Cell
*/


function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    return board;
}

/*
Represents one 'square' and will have the following values:
0: no token is in the square
1: P1's token
2: P2's token
*/

function Cell(){
    let value = 0;

    const addToken = (player) => {
        value = player;
    };

    const getValue = () => value;

    return {addToken, getValue};
    
}

myBoard = Gameboard();


// Visualisation Test v1
function displayBoard(myBoard) {
    // Will be called-out after every movement
    console.log(`${myBoard[0][0].getValue()} ${myBoard[0][1].getValue()} ${myBoard[0][2].getValue()} \n${myBoard[1][1].getValue()} ${myBoard[1][1].getValue()} ${myBoard[1][1].getValue()} \n${myBoard[2][1].getValue()} ${myBoard[2][1].getValue()} ${myBoard[2][1].getValue()} \n `);
}

let gameInProgress = false;

while(gameInProgress) {

    displayBoard(myBoard);

}