
/*
Gameboard represents the state of the board
Each square holds a Cell
*/
function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    // Initiating size of the game board
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    // Method to get the entire board to render on UI
    const getBoard = () => board;


    // Mark Cell method
    const markBoard = (player, row, column) => {
        // Need to identify if available slot is available on board
        if(board[row][column].getValue() === 0) {
            board[row][column].addToken(player);
        } else {
            console.log('Invalid Move');
        }
    }

    return {board, getBoard, markBoard};
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

const board = Gameboard();
board.markBoard(2, 1, 1);

const boardView = board.getBoard();

console.log(`${boardView[0][0].getValue()} ${boardView[0][1].getValue()} ${boardView[0][2].getValue()} \n${boardView[1][0].getValue()} ${boardView[1][1].getValue()} ${boardView[1][2].getValue()} \n${boardView[2][0].getValue()} ${boardView[2][1].getValue()} ${boardView[2][2].getValue()}`);

board.markBoard(2, 2, 1);

console.log(`${boardView[0][0].getValue()} ${boardView[0][1].getValue()} ${boardView[0][2].getValue()} \n${boardView[1][0].getValue()} ${boardView[1][1].getValue()} ${boardView[1][2].getValue()} \n${boardView[2][0].getValue()} ${boardView[2][1].getValue()} ${boardView[2][2].getValue()}`);