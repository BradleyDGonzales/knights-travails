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
      board[i][j] = `[${i},${j}]`;
    }
  }
  return board;
}
const Knight = () => {
  const newPiece = () => {
    board[0][0] = '𐂃';
    console.log(board[0][0]);
    console.log(board);
  };
  const generateMoves = (start) => {
    const possibleMoves = [];
    board[0][0] = '[0, 0]';
    board[start[0]][start[1]] = '𐂃';
    possibleMoves.push([start[0] - 2, start[1] - 1]);
    possibleMoves.push([start[0] - 1, start[1] - 2]);
    possibleMoves.push([start[0] - 2, start[1] + 1]);
    possibleMoves.push([start[0] - 1, start[1] + 2]);
    possibleMoves.push([start[0] + 1, start[1] - 2]);
    possibleMoves.push([start[0] + 2, start[1] - 1]);
    possibleMoves.push([start[0] + 2, start[1] + 1]);
    possibleMoves.push([start[0] + 1, start[1] + 2]);
    const legalMoves = possibleMoves.filter((move) => (move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7));
    return legalMoves;
  };
  const bfs = (start) => {
    const queue = [];
    const visited = new Array().fill(false);
    visited[start] = true;
    const prev = new Array().fill(null);
    queue.push(start);
    while (queue.length !== 0) {
      const current = queue.shift();
      const neighbors = generateMoves(current);
      for (n of neighbors) {
        if (!visited[n]) {
          queue.push(n);
          visited[n] = true;
          prev[n] = current;
        }
      }
    }
    return prev;
  };
  const knightMoves = (start, end) => {
    const prev = bfs(start);
    return getPath(start, end, prev);
  };
  const getPath = (start, end, prev) => {
    const path = [];
    for (let at = end; at !== undefined; at = prev[at]) {
      path.push(at);
    }
    path.reverse();
    if (JSON.stringify(path[0]) === JSON.stringify(start)) {
      console.log(`Finished in ${path.length - 1} moves` );
      return path;
    }
    return [];
  };
  return {
    newPiece, knightMoves, generateMoves, bfs, getPath,
  };
};

const test = Knight();
makeBoard();
test.newPiece();
console.log(test.knightMoves([0, 0], [5, 3]));
