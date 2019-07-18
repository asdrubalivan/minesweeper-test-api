const { createBoard: createBoardService } = require("../services/minesweeper");
const { processBoard } = require("../utils");

const createBoard = async (req, res) => {
  const board = await createBoardService();
  const processedBoard = processBoard(board);
  return res.json(processedBoard);
};

module.exports = {
  createBoard
};
