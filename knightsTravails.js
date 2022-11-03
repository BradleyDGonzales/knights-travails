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
class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
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
  const generateMoves = (start) => {
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
    const legalMoves = possibleMoves.filter((move) => (move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7));
    return legalMoves;
  };
  const visited = [];
  const knightMoves = (start, end) => {
    let adjacentList = generateMoves(start);
    const queue = [];
    queue.push([start[0], start[1]]);
    console.log(adjacentList);
    console.log(queue);
    console.log(queue.some((element) => visited.includes(element)));
    while (queue.length !== 0) {
      const found = queue.some((r) => visited.includes(r));
      if (found) {
        queue.shift();
      } else if (!found) {
        visited.push(queue.shift());
      }
      while (adjacentList.length !== 0) {
        queue.push(adjacentList.shift());
      }
      adjacentList = generateMoves(queue[0]);
    }
  };
  return {
    newPiece, knightMoves, generateMoves,
  };
};

const test = Knight();
console.log(makeBoard());
test.newPiece();
console.log(test.knightMoves([0, 0], [2, 1]));
