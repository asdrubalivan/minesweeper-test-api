const { expect } = require("chai");
const {
  generateRandomBoard,
  processBoard,
  COLS,
  ROWS,
  MINES
} = require("./index");

function* generatorBoard(board) {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      yield board[i][j];
    }
  }
}

describe("utils.js", function() {
  context("generateRandomBoard", function() {
    it("should generate a random board", function() {
      const board = generateRandomBoard();
      let countMines = 0;
      for (const cell of generatorBoard(board)) {
        expect(cell.isRevealed).to.equal(false);
        expect(cell.hasFlag).to.equal(false);
        if (cell.isMine) {
          countMines++;
        }
      }
      expect(countMines).to.equal(MINES);
    });
  });
  context("processBoard", function() {
    it("should process a board", function() {
      const board = [
        [
          { isMine: true, isRevealed: true, hasFlag: false },
          { isMine: false, isRevealed: true, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: true }
        ],
        [
          { isMine: true, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: true, hasFlag: false },
          { isMine: false, isRevealed: true, hasFlag: false },
          { isMine: false, isRevealed: true, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: true, hasFlag: false },
          { isMine: false, isRevealed: true, hasFlag: true }
        ],
        [
          { isMine: true, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: true }
        ],
        [
          { isMine: true, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: true }
        ],
        [
          { isMine: true, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: true }
        ],
        [
          { isMine: true, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: true }
        ],
        [
          { isMine: true, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: true }
        ],
        [
          { isMine: true, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: true }
        ],
        [
          { isMine: true, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: true },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: true }
        ],
        [
          { isMine: true, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: false },
          { isMine: false, isRevealed: false, hasFlag: true }
        ]
      ];
      expect(processBoard(board)).to.deep.equal([
        ["*", "2", ".", ".", ".", ".", ".", ".", ".", "?"],
        [".", "3", "0", "0", ".", ".", ".", ".", "0", "0"],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "?"],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "?"],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "?"],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "?"],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "?"],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "?"],
        [".", ".", ".", ".", "?", ".", ".", ".", ".", "?"],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "?"]
      ]);
    });
  });
});
