
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

    // Print Board (For Console Test only)
    const printBoard = () => {
        const boardWithCellValues = board.map((rows) => rows.map((cells) => cells.getValue()));
        console.log(boardWithCellValues);
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


board.markBoard(2, 2, 1);



board.markBoard(1, 2, 2);



const boardPrint = board.board.map((row) => row.map((cell) => cell.getValue()));
console.log(boardPrint);