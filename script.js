
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

    return {board, getBoard, markBoard, printBoard};
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

/*
Game Controller is responsible for controllying the flow
and state of the game's turns, as well as whether
anybody has won the game
*/
function GameController(
    playerOneName = "Player One",
    PlayerTwoName = "Player Two"
) {

    const board = Gameboard();

    const players = [
        {
            name: playerOneName,
            token: 1
        },
        {
            name: PlayerTwoName,
            token: 2
        }
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
        // if activePlayer is playerOne players[0], change activePlayer to playerTwo players[1]
    }

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn`);
    }

    const playRound = (row, column) => {
        // Mark the cell for the current player
        console.log(`${getActivePlayer().name} marked row ${row}, column ${column}`);

        board.markBoard(getActivePlayer().token, row, column);

        // Evaluate the board if there is a winner.
        for(let i = 0; i < board.getBoard().length; i++){
            // Check every rows
            // If the value of each cells in the row is equal to player's token. The player wins
            if(board.board[i].every((cells) => cells.getValue() === getActivePlayer().token)){
                console.log(`${getActivePlayer().name} wins`);
                // break
            }; 

            // Check every columns
            // Temporary Column Array to collect all cell values
            let columnArray = [];
            for(let j = 0; j < board.getBoard().length; j++){
                columnArray.push(board.board[j][i])  //
            }
            
            // Evaluate if each cell in the column is equal to player's token.
            if(columnArray.every((cells) => cells.getValue() === getActivePlayer().token)) {
                console.log(`${getActivePlayer().name} wins`);
                // break
            }
            
        }

        // Switch player turn
        switchPlayerTurn();
        printNewRound();
    }

    // Initial play game message
    printNewRound();

    // For the console version, only use playRound.
    // Will need getActivePlayer for the UI version.

    return {playRound, getActivePlayer};

}

const game = GameController();
game.playRound(0, 0);   // p1
game.playRound(1, 1);   // p2
game.playRound(1, 0);   // p1
game.playRound(1, 1);   // p2
game.playRound(2, 0);   // p1
game.playRound(0, 0);   // p2