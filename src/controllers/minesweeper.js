const { generateBoard } = require("../services/minesweeper");
const { processBoard } = require("../utils");

const createBoard = async (req, res) => {
  const board = await generateBoard();
  const processedBoard = processBoard();
  return res.json(processedBoard);
};

module.exports = {
  createBoard
};
