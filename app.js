const board = document.querySelector(".board");
const turn = document.querySelector(".turn");
const clearBoardButton = document.querySelector(".clearBoardButton");

let gameState = {
  player1: null,
  player2: null,

  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: "x",
};

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `${i}-${j}`;
    board.append(cell);
  }
}
const formName = document.getElementById("name-form");
formName.addEventListener("submit", (e) => {
  e.preventDefault();

  //on submit we want :target value for first input to replace null value in
  //gamestate for player 1 and player 2
  gameState.player1 = e.target[0].value;
  gameState.player2 = e.target[1].value;
  renderScoreboard();
});

board.addEventListener("click", (e) => {
  const row = e.target.id[0];
  const col = e.target.id[2];

  if (gameState.board[row][col] !== null) {
    return;
  }
  gameState.board[row][col] = gameState.currentPlayer;

  console.log("Game State: ", gameState);

  renderBoard();

  declareWinner();

  switchPlayers();
});

function renderBoard() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.getElementById(`${i}-${j}`);
      cell.innerText = gameState.board[i][j];
    }
  }
}

function switchPlayers() {
  if (gameState.currentPlayer === "x") {
    gameState.currentPlayer = "o";
  } else {
    gameState.currentPlayer = "x";
  }
}
function declareWinner() {
  checkRow();
  checkCol();
  checkDiagonals();
}

function checkRow() {
  for (let i = 0; i < gameState.board.length; i++) {
    if (
      gameState.board[i][0] !== null &&
      gameState.board[i][0] === gameState.board[i][1] &&
      gameState.board[i][1] === gameState.board[i][2]
    ) {
      console.log("We have a winnner");
    }
  }
}

function checkCol() {
  for (let j = 0; j < gameState.board.length; j++) {
    if (
      gameState.board[0][j] !== null &&
      gameState.board[0][j] === gameState.board[1][j] &&
      gameState.board[1][j] === gameState.board[2][j]
    ) {
      console.log("We win");
    }
  }
}

function checkDiagonals() {
  if (
    gameState.board[0][0] !== null &&
    gameState.board[0][0] === gameState.board[1][1] &&
    gameState.board[1][1] === gameState.board[2][2]
  ) {
    console.log("Winner winner");
  } else if (
    gameState.board[0][2] !== null &&
    gameState.board[0][2] === gameState.board[1][1] &&
    gameState.board[1][1] === gameState.board[2][0]
  ) {
    console.log("Last win cond");
  }
}

//check for winning condition after every click; "x" or "o"

clearBoardButton.addEventListener("click", resetBoard);

function resetBoard() {
  console.log("Board has been reset");
  gameState = {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    currentPlayer: "x",
  };
  renderBoard();
}
// class ticTacToe = {
//   constructor(){
//     this.board = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
//   ];
// }
//   move (character, x, y) {
//     if (this.board[y][x] === null) {
//       this.board[y][x] = character;
//     }
//     return this.board;

//     },
//     clear() {
//         this.board = [
//             [null, null, null],
//             [null, null, null],
//             [null, null, null],
//           ];
//           return this.board;
//         }
// };

// describe('ticTacToe', () => {
//     // save a stringified copy of your ticTacToe board
//     let boardCopy = JSON.stringify(ticTacToe.board);

//     // before each test, reset the board with its initial values
//     beforeEach(() => {
//       ticTacToe.board = JSON.parse(boardCopy);
//     })
//   //Describe ticTacToe
//     it('is an object', () => {
//       expect(typeof ticTacToe).toEqual('object');
//     });

//     describe('board', () => {
//       it('is a propery of ticTacToe', () => {
//         expect('board' in ticTacToe).toEqual(true);
//       });

//       it('is an array', () => {
//         expect(Array.isArray(ticTacToe.board)).toEqual(true);
//       });

//       it('is has three rows', () => {
//         expect(ticTacToe.board.length).toEqual(3);
//       });

//       it('each row is initially an array of three null values', () => {
//         for (let i = 0; i < 3; i++) {
//           let row = ticTacToe.board[i];
//           expect(row).toEqual([null, null, null]);
//         }
//       });
//     });

//     describe('move', () => {
//       it('is a method of ticTacToe', () => {
//         expect('move' in ticTacToe).toEqual(true);
//       });

//       it('is a function', () => {
//         expect(typeof ticTacToe.move).toEqual('function');
//       });

//       it('returns the board', () => {
//         let returnedValue = ticTacToe.move('x', 0, 0);
//         expect(returnedValue).toEqual(ticTacToe.board);
//       });

//       it('adds the given character to the row and column number', () => {
//         ticTacToe.move('x', 1, 1);
//         expect(ticTacToe.board[1][1]).toEqual('x')
//       });

//       it('does not let a player overwrite a cell that has already been used', () => {
//         ticTacToe.move('x', 1, 1);
//         ticTacToe.move('y', 1, 1);

//         expect(ticTacToe.board[1][1]).toEqual('x')
//       });

//     });

//     describe('clear', () => {
//       it('is a method of ticTacToe', () => {
//         expect('clear' in ticTacToe).toEqual(true);
//       });

//       it('is a function', () => {
//         expect(typeof ticTacToe.clear).toEqual('function');
//       });

//       it('returns the board', () => {
//         let returnedValue = ticTacToe.clear();
//         expect(returnedValue).toEqual(ticTacToe.board);
//       });

//       it('resets the board to its original value', () => {
//         ticTacToe.move('x', 0, 0);
//         ticTacToe.move('x', 1, 1);
//         ticTacToe.move('x', 2, 2);
//         ticTacToe.clear()
//         expect(ticTacToe.board[0][0]).toEqual(null)
//         expect(ticTacToe.board[1][1]).toEqual(null)
//         expect(ticTacToe.board[2][2]).toEqual(null)
//       });

//     });

//   });
