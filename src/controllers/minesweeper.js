const {
  createBoard: createBoardService,
  revealFromBoard,
  getProcessedBoard
} = require("../services/minesweeper");
const { processBoard } = require("../utils");

const getBoard = async (req, res) => {
  const id = Number(req.params.id) || 0;
  const boardData = await getProcessedBoard(id);
  if (boardData === null) {
    return res.status(404).json({
      status: 404,
      error: true,
      message: "Not found"
    });
  }
  return res.status(200).json({
    status: 200,
    error: false,
    data: boardData
  });
};

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
  return res.status(200).json({
    status: 200,
    error: false,
    data
  });
};

module.exports = {
  createBoard,
  revealCell,
  getBoard
};
