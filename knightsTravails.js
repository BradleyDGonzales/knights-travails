/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
let board = [];
function makeBoard() {
  if (board.length !== 0) {
    board = [];
  }
  for (let i = 0; i < 8; i++) {
    board[i] = [i];
    for (let j = 0; j < 8; j++) {
      board[i][j] = `[${i}, ${j}]`;
    }
  }
  return board;
}

const Knight = () => {
  // const KNIGHT_OFFSETS = [
  //   [1, 2], [1, -2],
  //   [2, 1], [2, -1],
  //   [-1, 2], [-1, -2],
  //   [-2, 1], [-2, -1],
  // ];
  const newPiece = () => {
    board[0][0] = '𐂃';
    console.log(board[0][0]);
    console.log(board);
    // board[pos][0] = '𐂃';
    // console.log(board);
  };
  const knightMoves = (start, end) => {
    const possibleMoves = [];
    board[0][0] = '[0, 0]';
    board[start[0]][start[1]] = '𐂃';
    console.log(board);
    console.log(board[start[0]][start[1]]);
    possibleMoves.push([start[0] - 2, start[1] - 1]);
    possibleMoves.push([start[0] - 1, start[1] - 2]);
    possibleMoves.push([start[0] - 2, start[1] + 1]);
    possibleMoves.push([start[0] - 1, start[1] + 2]);
    possibleMoves.push([start[0] + 1, start[1] - 2]);
    possibleMoves.push([start[0] + 2, start[1] - 1]);
    possibleMoves.push([start[0] + 2, start[1] + 1]);
    possibleMoves.push([start[0] + 1, start[1] + 2]);
    const legalMoves = possibleMoves.filter((move) => (move[0] > 0 && move[0] <= 7 && move[1] > 0 && move[1] <= 7));
    console.log(legalMoves);
  };
  return {
    newPiece, knightMoves,
  };
};

const test = Knight();
console.log(makeBoard());
test.newPiece();
console.log(test.knightMoves([7, 7], [5, 3]));
