const COLS = 10;
const ROWS = 10;
const MINES = 10;

const getRandomIndex = array => Math.floor(Math.random() * array.length);

const generateOptions = () => {
  const options = [];
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      options.push([i, j]);
    }
  }
  const positions = new Array(MINES);
  for (let i = 0; i < MINES; i++) {
    const index = getRandomIndex(options);
    const newPosition = options.splice(index, 1);
    positions[i] = newPosition[0];
  }
  return positions;
};

const generateRandomBoard = () => {
  const minePositions = generateOptions();
  const finalBoard = [];
  for (let i = 0; i < ROWS; i++) {
    const finalBoardRow = [];
    for (let j = 0; j < COLS; j++) {
      const cell = {
        isMine: minePositions.some(([x, y]) => x === i && y === j),
        isRevealed: false,
        hasFlag: false
      };
      finalBoardRow.push(cell);
    }
    finalBoard.push(finalBoardRow);
  }
  return finalBoard;
};

const countMines = (board, i, j) => {
  if (i >= ROWS || j >= COLS) {
    throw new Error("Count error");
  }
  let total = 0;
  for (let offsetX = -1; offsetX <= 1; offsetX++) {
    for (let offsetY = -1; offsetY <= 1; offsetY++) {
      const iPrime = i + offsetX;
      const jPrime = j + offsetY;
      if (iPrime > -1 && iPrime < COLS && jPrime > -1 && jPrime < ROWS) {
        const neighbor = board[i][j];
        if (neighbor.isMine) {
          total++;
        }
      }
    }
  }
  return total;
};

module.exports = {
  generateRandomBoard,
  countMines,
  COLS,
  ROWS,
  MINES
};
