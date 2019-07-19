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
      if (iPrime > -1 && iPrime < ROWS && jPrime > -1 && jPrime < COLS) {
        const neighbor = board[iPrime][jPrime];
        if (neighbor.isMine) {
          total++;
        }
      }
    }
  }
  return total;
};

const getCellScreenValue = (board, i, j) => {
  const cell = board[i][j];
  if (cell.isRevealed) {
    if (cell.isMine) {
      return "*";
    } else {
      const count = countMines(board, i, j);
      return String(count);
    }
  } else {
    return cell.hasFlag ? "?" : ".";
  }
};

const processBoard = board => {
  const retVal = [];
  for (let i = 0; i < ROWS; i++) {
    const row = [];
    for (let j = 0; j < COLS; j++) {
      row.push(getCellScreenValue(board, i, j));
    }
    retVal.push(row);
  }
  return retVal;
};

/**
 * Reveal function. Returns true if cell is in mine, false otherwise
 */
const reveal = (board, i, j) => {
  const cell = board[i][j];
  cell.isRevealed = true;
  if (cell.isMine) {
    return true;
  }
  if (countMines(board, i, j) === 0) {
    fillTiles(board, i, j);
  }
  return false;
};

const revealAllTiles = board => {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      reveal(board, i, j);
    }
  }
};

const fillTiles = (board, i, j) => {
  for (let offsetX = -1; offsetX <= 1; offsetX++) {
    for (let offsetY = -1; offsetY <= 1; offsetY++) {
      const iPrime = i + offsetX;
      const jPrime = j + offsetY;
      if (iPrime > -1 && iPrime < COLS && jPrime > -1 && jPrime < ROWS) {
        const neighbor = board[iPrime][jPrime];
        if (!neighbor.isMine && !neighbor.isRevealed) {
          reveal(board, iPrime, jPrime);
        }
      }
    }
  }
};

const isOver = board => {
  let total = 0;
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      const cell = board[i][j];
      if (cell.isRevealed) {
        total++;
        if (cell.isMine) {
          return true;
        }
      }
    }
  }
  return total + MINES === ROWS * COLS;
};

module.exports = {
  generateRandomBoard,
  countMines,
  processBoard,
  reveal,
  revealAllTiles,
  isOver,
  COLS,
  ROWS,
  MINES
}
