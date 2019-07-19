const db = require("../db");
const {
  generateRandomBoard,
  COLS,
  ROWS,
  reveal,
  revealAllTiles,
  processBoard
} = require("../utils");

const getBoardData = id => {
  return db
    .select("*")
    .from("games")
    .where("id", id)
    .limit(1);
};

const getProcessedBoard = async id => {
  const data = await getBoardData(id);
  if (!data.length) {
    return null;
  }
  return {
    ...data[0],
    board: processBoard(data[0].board)
  };
};

const createBoard = async () => {
  const board = generateRandomBoard();
  const data = {
    isOver: false,
    started: new Date().toISOString(),
    finished: null,
    board: JSON.stringify(board)
  };
  const insertData = await db("games").insert(
    data,
    Object.keys(data).concat(["id"])
  );
  return insertData[0];
};

const revealFromBoard = async (id, i, j) => {
  if (i < 0 || i >= COLS || j < 0 || j >= ROWS) {
    throw new Error("Wrong coordinates");
  }
  const gameData = await getBoardData(id);
  if (!gameData.length) {
    throw new Error("Not found");
  }
  const game = gameData[0];
  const result = reveal(game.board, i, j);
  if (result) {
    game.isOver = true;
    game.finished = new Date().toISOString();
    revealAllTiles(game.board);
  }
  await db("games")
    .where("id", id)
    .update({
      ...game,
      board: JSON.stringify(game.board)
    });
  game.board = processBoard(game.board);
  return game;
};

module.exports = {
  createBoard,
  revealFromBoard,
  getProcessedBoard
};
