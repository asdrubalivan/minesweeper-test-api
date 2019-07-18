const { createBoard: createBoardService } = require("../services/minesweeper");
const { processBoard } = require("../utils");

const createBoard = async (req, res) => {
  const board = await createBoardService();
  const processedBoard = processBoard(board);
    return res.status(200).json({
        status: 200,
        error: false,
        data: processedBoard
    });
};

module.exports = {
  createBoard
};
