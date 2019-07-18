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

module.exports = {
  generateRandomBoard,
  countMines,
  processBoard,
  COLS,
  ROWS,
  MINES
};
