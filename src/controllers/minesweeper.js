const {
  createBoard: createBoardService,
  revealFromBoard
} = require("../services/minesweeper");
const { processBoard } = require("../utils");

const createBoard = async (req, res) => {
  const data = await createBoardService();
  const processedBoard = processBoard(data.board);
  return res.status(200).json({
    status: 200,
    error: false,
    data: {
      ...data,
      board: processedBoard
    }
  });
};

const revealCell = async (req, res) => {
  const id = Number(req.params.id) || 0;
  const i = Number(req.params.i);
  const j = Number(req.params.j);
  let data;
  try {
    data = await revealFromBoard(id, i, j);
  } catch (err) {
    const status = err.message === "Not found" ? 404 : 500;
    return res.status(status).json({
      status,
      error: true,
      message: err.message
    });
  }
    console.log(data.board.map(d => d.join(' ')));
  return res.status(200).json({
    status: 200,
    error: false,
    data
  });
};

module.exports = {
  createBoard,
  revealCell
};
