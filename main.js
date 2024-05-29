function gameBoard() {
    const rows = 3
    const columns = 3
    myGameboard = [];

    for (let i = 0; i < rows; i++) {
        myGameboard[i] = [];
        for (let j = 0; j < columns; j++) {
            myGameboard[i][j] = j
        }
    }
}

const getBoard = () => myGameboard;
gameBoard()

function player(name, mark) {

    this.name = name
    this.mark = mark
    this.displayController = function() {
        console.log("test")
    }
    
}

function addPlayertoGameboard(player) {
    myGameboard.push(player);
}

const playerOne = new player("Karina", "X");
const PlayerTwo = new player("Omar", "O");
addPlayertoGameboard(playerOne)
addPlayertoGameboard(PlayerTwo)

function displayPlayers() {
    console.log("Inside displayPlayers")
    console.log(myGameboard)
}
displayPlayers()

function gameController() {
let winConditions =
[0, 1, 2] 

}

// let activePlayer = player[0];